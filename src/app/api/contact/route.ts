import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  const emailUser = process.env.GMAIL_USER;
  const emailPass = process.env.GMAIL_APP_PASSWORD;

  if (!emailUser || !emailPass) {
    return NextResponse.json(
      { ok: false, error: "Email service not configured." },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const subjectInput = (body.subject || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const subject = subjectInput || `Portfolio message from ${name}`;
  const to = process.env.CONTACT_TO_EMAIL || emailUser;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const textBody = `You received a new message from your portfolio site.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
  const htmlBody = `<p>You received a new message from your portfolio site.</p><p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`;

  try {
    await transporter.sendMail({
      to,
      from: emailUser,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed." },
    { status: 405 }
  );
}
