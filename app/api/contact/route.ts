import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validation";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 5 requests per minute per IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    const limit = rateLimit(`contact:${ip}`, 5, 60 * 1000);
    if (!limit.success) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before trying again." },
        { status: 429, headers: { "Retry-After": Math.ceil(limit.resetIn / 1000).toString() } }
      );
    }

    // Parse body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // Validate with Zod
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 422 }
      );
    }

    const { fullName, email, phone, service, message } = result.data;

    // Send email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Link Up Comfort Affairs <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "linkupcomfortaffairs@gmail.com",
      replyTo: email,
      subject: `New Consultation Request: ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background:#f4f4f4;font-family:'Outfit',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#080B05;border-radius:4px;overflow:hidden;">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background:linear-gradient(135deg,#0F130A,#1A2210);padding:32px 40px;border-bottom:1px solid rgba(201,168,76,0.2);">
                        <p style="margin:0;color:#C9A84C;font-size:11px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:8px;">Link Up Comfort Affairs</p>
                        <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:800;">New Consultation Request</h1>
                      </td>
                    </tr>

                    <!-- Alert bar -->
                    <tr>
                      <td style="background:#C9A84C;padding:12px 40px;">
                        <p style="margin:0;color:#080B05;font-size:12px;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;">
                          Service Requested: ${service}
                        </p>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding:36px 40px;">
                        
                        <!-- Client details -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                          <tr>
                            <td style="padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,0.06);">
                              <p style="margin:0 0 4px 0;color:rgba(240,244,238,0.4);font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;">Full Name</p>
                              <p style="margin:0;color:#ffffff;font-size:16px;font-weight:600;">${fullName}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:20px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                              <p style="margin:0 0 4px 0;color:rgba(240,244,238,0.4);font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;">Email Address</p>
                              <a href="mailto:${email}" style="color:#C9A84C;font-size:15px;text-decoration:none;">${email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:20px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                              <p style="margin:0 0 4px 0;color:rgba(240,244,238,0.4);font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;">Phone Number</p>
                              <a href="tel:${phone}" style="color:#C9A84C;font-size:15px;text-decoration:none;">${phone}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:20px 0;">
                              <p style="margin:0 0 4px 0;color:rgba(240,244,238,0.4);font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;">Message</p>
                              <p style="margin:0;color:rgba(240,244,238,0.8);font-size:15px;line-height:1.7;">${message.replace(/\n/g, "<br/>")}</p>
                            </td>
                          </tr>
                        </table>

                        <!-- CTA -->
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <td>
                              <a href="mailto:${email}?subject=Re: Your Consultation Request - Link Up Comfort Affairs"
                                style="display:inline-block;background:#C9A84C;color:#080B05;padding:14px 28px;font-size:11px;font-weight:900;letter-spacing:0.18em;text-transform:uppercase;text-decoration:none;border-radius:2px;">
                                Reply to ${fullName}
                              </a>
                            </td>
                          </tr>
                        </table>

                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding:24px 40px;border-top:1px solid rgba(201,168,76,0.1);background:#0A0E05;">
                        <p style="margin:0;color:rgba(240,244,238,0.25);font-size:11px;line-height:1.6;">
                          This email was sent from the contact form on your website.<br/>
                          © ${new Date().getFullYear()} Link Up Comfort Affairs. All rights reserved.
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    // Also send confirmation email to the client
    await resend.emails.send({
      from: "Link Up Comfort Affairs <onboarding@resend.dev>",
      to: email,
      subject: "We received your request — Link Up Comfort Affairs",
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#080B05;border-radius:4px;overflow:hidden;">
                    <tr>
                      <td style="background:linear-gradient(135deg,#0F130A,#1A2210);padding:32px 40px;border-bottom:1px solid rgba(201,168,76,0.2);">
                        <p style="margin:0;color:#C9A84C;font-size:11px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:8px;">Link Up Comfort Affairs</p>
                        <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:800;">Thank You, ${fullName}!</h1>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:36px 40px;">
                        <p style="color:rgba(240,244,238,0.7);font-size:15px;line-height:1.8;margin:0 0 20px 0;">
                          We have received your consultation request for <strong style="color:#C9A84C;">${service}</strong>. Our team will review your details and get back to you within <strong style="color:#ffffff;">24 hours</strong>.
                        </p>
                        <p style="color:rgba(240,244,238,0.7);font-size:15px;line-height:1.8;margin:0 0 32px 0;">
                          In the meantime, feel free to reach us directly:
                        </p>
                        <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                          <tr>
                            <td style="padding:8px 0;">
                              <p style="margin:0;color:rgba(240,244,238,0.5);font-size:13px;">📞 <a href="tel:+2348139941504" style="color:#C9A84C;text-decoration:none;">+234 813 994 1504</a></p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:8px 0;">
                              <p style="margin:0;color:rgba(240,244,238,0.5);font-size:13px;">📧 <a href="mailto:linkupcomfortaffairs@gmail.com" style="color:#C9A84C;text-decoration:none;">linkupcomfortaffairs@gmail.com</a></p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:8px 0;">
                              <p style="margin:0;color:rgba(240,244,238,0.5);font-size:13px;">💬 <a href="https://wa.me/2348139941504" style="color:#C9A84C;text-decoration:none;">Chat on WhatsApp</a></p>
                            </td>
                          </tr>
                        </table>
                        <a href="https://link-up-comfort-affairs.vercel.app"
                          style="display:inline-block;background:#C9A84C;color:#080B05;padding:14px 28px;font-size:11px;font-weight:900;letter-spacing:0.18em;text-transform:uppercase;text-decoration:none;border-radius:2px;">
                          Visit Our Website
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:24px 40px;border-top:1px solid rgba(201,168,76,0.1);background:#0A0E05;">
                        <p style="margin:0;color:rgba(240,244,238,0.25);font-size:11px;line-height:1.6;">
                          Managing Excellence. Delivering Comfort.<br/>
                          © ${new Date().getFullYear()} Link Up Comfort Affairs. All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Your consultation request has been received. Our team will contact you within 24 hours." },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or call us directly." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
