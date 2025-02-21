"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const email = formData.get("email");

  console.log("Sending email to:", email);

  // Validate email
  if (!email || !email.includes("@")) {
    return { success: false, error: "Invalid email address." };
  }

  try {
    const data = await resend.emails.send({
      from: "arifurrahman.xyz", // Replace with your verified domain or email
      to: email,
      subject: `Hello from ${email}`,
      html: "This is a test email sent from Resend via Next.js",
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
