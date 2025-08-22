import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to yourself
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Thank you for your message",
      text: `Hello ${name},\n\nThank you for reaching out! We have received your message and will get back to you soon.\n\nBest regards,\nSamir Pandey`,
    });

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ message: "Error sending emails" }, { status: 500 });
  }
}
