import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name too long")
    .regex(/^[a-zA-Z\s'-]+$/, "Full name contains invalid characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email too long")
    .toLowerCase(),
  phone: z
    .string()
    .min(7, "Phone number too short")
    .max(20, "Phone number too long")
    .regex(/^[\d\s\+\-\(\)]+$/, "Invalid phone number format"),
  service: z
    .string()
    .min(1, "Please select a service")
    .max(100, "Invalid service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message too long (max 2000 characters)"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
