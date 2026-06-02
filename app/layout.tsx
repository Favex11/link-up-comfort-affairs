import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Link Up Comfort Affairs | Managing Excellence. Delivering Comfort.",
    template: "%s | Link Up Comfort Affairs",
  },
  description:
    "Lagos's premier property and facility management company. Expert letting, lease management, property sales, generator servicing, water treatment, security, cleaning, and more. Serving Ikoyi, Victoria Island, Lekki & beyond.",
  keywords: [
    "property management Lagos",
    "facility management Nigeria",
    "property letting Ikoyi",
    "lease management Lagos",
    "generator servicing Lagos",
    "water treatment Lagos",
    "cleaning services Lagos",
    "estate management Nigeria",
    "property sales Lekki",
  ],
  authors: [{ name: "Link Up Comfort Affairs" }],
  creator: "Link Up Comfort Affairs",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://linkupcomfortaffairs.com",
    siteName: "Link Up Comfort Affairs",
    title: "Link Up Comfort Affairs | Managing Excellence. Delivering Comfort.",
    description:
      "Professional property management, facility maintenance, leasing, and technical support services with excellence, reliability and long-term value.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Link Up Comfort Affairs",
    description: "Lagos's premier property and facility management company.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0D1008] text-white antialiased w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
