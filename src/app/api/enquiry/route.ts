import { NextRequest, NextResponse } from "next/server";
import { enquiryFormSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate using Zod schema
    const validationResult = enquiryFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please correct the fields and try again.",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Check honeypot field (anti-spam)
    if (data.websiteField_hp && data.websiteField_hp.length > 0) {
      // Silently ignore bots
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // In a live environment with CRM credentials, forward to webhook / email service
    // e.g. await sendCrmLead(data);
    console.log("New Verified Property Enquiry:", {
      timestamp: new Date().toISOString(),
      name: data.name,
      phone: data.phone,
      email: data.email || "N/A",
      project: data.projectOrServiceOfInterest || "General Enquiry",
      locality: data.preferredLocality || "Not specified",
      budget: data.budgetRange || "Not specified",
      type: data.enquiryType,
      message: data.message || "No message provided",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your enquiry has been received. A senior advisor from our Kharadi office will contact you within 2 hours.",
        leadId: `LEAD-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API /api/enquiry error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your request. Please call us directly at +91 73981 74444.",
      },
      { status: 500 }
    );
  }
}
