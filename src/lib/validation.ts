import { z } from "zod";

export const phoneRegex = /^(?:\+91|91)?[6789]\d{9}$/;

export const enquiryFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(80, { message: "Name must not exceed 80 characters." }),
  phone: z
    .string()
    .transform((val) => val.replace(/[\s-]/g, ""))
    .refine((val) => phoneRegex.test(val), {
      message: "Please enter a valid 10-digit Indian mobile number (e.g., 9876543210).",
    }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." })
    .optional()
    .or(z.literal("")),
  projectOrServiceOfInterest: z.string().optional(),
  preferredConfiguration: z.string().optional(),
  preferredLocality: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().max(1000, { message: "Message cannot exceed 1000 characters." }).optional(),
  enquiryType: z.enum([
    "site_visit",
    "brochure_download",
    "general_enquiry",
    "advisory_call",
    "career",
  ]),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must consent to be contacted regarding your property enquiry." }),
  }),
  // Honeypot field for bot spam prevention
  websiteField_hp: z.string().max(0, { message: "Bot detected" }).optional(),
});

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;
