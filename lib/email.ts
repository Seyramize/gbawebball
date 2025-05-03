import nodemailer from "nodemailer"
import { logger } from "./logger"

// Configure email transport
// In production, use your actual SMTP credentials
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.example.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "user@example.com",
    pass: process.env.SMTP_PASSWORD || "password",
  },
})

// Email templates
const emailTemplates = {
  orderConfirmation: (order: any) => ({
    subject: `Order Confirmation - #${order.id}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #78350f; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Gbawe Basketball Academy</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e5e5; border-top: none;">
          <h2>Thank you for your order!</h2>
          <p>Hello ${order.customer.name},</p>
          <p>Your order has been confirmed and is being processed.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Order Summary</h3>
            <p><strong>Order ID:</strong> ${order.id}</p>
            <p><strong>Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
            <p><strong>Product:</strong> ${order.product.name} (${order.product.option})</p>
            <p><strong>Quantity:</strong> ${order.product.quantity}</p>
            <p><strong>Total:</strong> $${(order.product.price * order.product.quantity).toFixed(2)}</p>
          </div>
          
          <p>You can track your order status <a href="${process.env.NEXT_PUBLIC_APP_URL}/orders/track?reference=${order.paymentReference}">here</a>.</p>
          
          <p>If you have any questions, please contact our support team.</p>
          
          <p>Thank you for shopping with us!</p>
          <p>Gbawe Basketball Academy Team</p>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          <p>&copy; ${new Date().getFullYear()} Gbawe Basketball Academy. All rights reserved.</p>
        </div>
      </div>
    `,
  }),

  orderStatusUpdate: (order: any) => ({
    subject: `Order Status Update - #${order.id}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #78350f; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Gbawe Basketball Academy</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e5e5; border-top: none;">
          <h2>Your Order Status Has Been Updated</h2>
          <p>Hello ${order.customer.name},</p>
          <p>Your order status has been updated to: <strong>${order.status.toUpperCase()}</strong></p>
          
          <div style="background-color: #f9f9f9; padding: 15px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Order Details</h3>
            <p><strong>Order ID:</strong> ${order.id}</p>
            <p><strong>Product:</strong> ${order.product.name}</p>
            <p><strong>Status:</strong> ${order.status}</p>
          </div>
          
          <p>You can track your order status <a href="${process.env.NEXT_PUBLIC_APP_URL}/orders/track?reference=${order.paymentReference}">here</a>.</p>
          
          <p>If you have any questions, please contact our support team.</p>
          
          <p>Thank you for shopping with us!</p>
          <p>Gbawe Basketball Academy Team</p>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          <p>&copy; ${new Date().getFullYear()} Gbawe Basketball Academy. All rights reserved.</p>
        </div>
      </div>
    `,
  }),

  lowStockAlert: (product: any) => ({
    subject: `Low Stock Alert - ${product.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #78350f; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Gbawe Basketball Academy</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e5e5; border-top: none;">
          <h2>Low Stock Alert</h2>
          <p>This is an automated notification to inform you that the following product is running low on stock:</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Product Details</h3>
            <p><strong>Product:</strong> ${product.name}</p>
            <p><strong>Current Stock:</strong> ${product.stock}</p>
            <p><strong>Threshold:</strong> ${product.lowStockThreshold}</p>
          </div>
          
          <p>Please consider restocking this item soon to avoid stockouts.</p>
          
          <p>Gbawe Basketball Academy Team</p>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          <p>&copy; ${new Date().getFullYear()} Gbawe Basketball Academy. All rights reserved.</p>
        </div>
      </div>
    `,
  }),
}

// Send email function
export async function sendEmail(to: string, template: keyof typeof emailTemplates, data: any) {
  try {
    const { subject, html } = emailTemplates[template](data)

    const mailOptions = {
      from: process.env.EMAIL_FROM || "noreply@gbaweacademy.com",
      to,
      subject,
      html,
    }

    const info = await transporter.sendMail(mailOptions)
    logger.info("Email sent successfully", { messageId: info.messageId, template, to })
    return { success: true, messageId: info.messageId }
  } catch (error) {
    logger.error("Failed to send email", { error, template, to })
    return { success: false, error }
  }
}

// Function to send order confirmation email
export async function sendOrderConfirmationEmail(order: any) {
  return sendEmail(order.customer.email, "orderConfirmation", order)
}

// Function to send order status update email
export async function sendOrderStatusUpdateEmail(order: any) {
  return sendEmail(order.customer.email, "orderStatusUpdate", order)
}

// Function to send low stock alert to admin
export async function sendLowStockAlert(product: any) {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@gbaweacademy.com"
  return sendEmail(adminEmail, "lowStockAlert", product)
}
