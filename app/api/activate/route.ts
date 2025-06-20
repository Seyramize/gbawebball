import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();

  // Configure your SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g. "smtp.gmail.com"
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // your email address
      pass: process.env.SMTP_PASS, // your email password or app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Gbawe Basketball Academy" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, // destination email
      subject: "New Hunter Activation Submission",
      html: `
        <h2>New Hunter Activation</h2>
        <ul>
          <li><b>Full Name:</b> ${data.fullName}</li>
          <li><b>Email/Phone:</b> ${data.emailOrPhone}</li>
          <li><b>Age:</b> ${data.age}</li>
          <li><b>Category:</b> ${data.category}</li>
          <li><b>Hunter Pack Code:</b> ${data.hunterPackCode}</li>
        </ul>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}