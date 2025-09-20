"use server"

import { z } from "zod"
import { logger } from "@/lib/logger"
import { sendEmail } from "@/lib/email"

// Define the form schema for validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = contactFormSchema.safeParse(data)

    if (!validatedData.success) {
      logger.error("Contact form validation failed", {
        errors: validatedData.error.flatten().fieldErrors,
      })
      return {
        success: false,
        message: "Please check your information and try again.",
        errors: validatedData.error.flatten().fieldErrors,
      }
    }

    // Log the contact form submission
    logger.info("Contact form submitted", {
      name: validatedData.data.name,
      email: validatedData.data.email,
    })

    // Send email notification
    await sendEmail({
      to: process.env.ADMIN_EMAIL || "info@gbawebasketball.com",
      subject: `New Contact Form Submission from ${validatedData.data.name}`,
      text: `
        Name: ${validatedData.data.name}
        Email: ${validatedData.data.email}
        Phone: ${validatedData.data.phone || "Not provided"}
        
        Message:
        ${validatedData.data.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.data.name}</p>
        <p><strong>Email:</strong> ${validatedData.data.email}</p>
        <p><strong>Phone:</strong> ${validatedData.data.phone || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${validatedData.data.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // Send confirmation email to the user
    await sendEmail({
      to: validatedData.data.email,
      subject: "Thank you for contacting Gbawe Basketball Academy",
      text: `
        Dear ${validatedData.data.name},
        
        Thank you for reaching out to Gbawe Basketball Academy. We have received your message and will get back to you as soon as possible.
        
        Best regards,
        The Gbawe Basketball Academy Team
      `,
      html: `
        <h2>Thank you for contacting Gbawe Basketball Academy</h2>
        <p>Dear ${validatedData.data.name},</p>
        <p>Thank you for reaching out to Gbawe Basketball Academy. We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>The Gbawe Basketball Academy Team</p>
      `,
    })

    return {
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon!",
    }
  } catch (error) {
    logger.error("Contact form submission failed", { error })
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
