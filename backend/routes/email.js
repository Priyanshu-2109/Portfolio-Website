import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    console.log("Incoming Email Request:", req.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL_USER,  // Ensure this is set in .env
        pass: process.env.EMAIL_PASS,  // Ensure this is set in .env
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL, 
      subject: `📩 Portfolio Inquiry: ${subject}`,
      text: `Sender: ${name} (${email})\n\n${message}`,
      html: `<div style="font-family: Arial, sans-serif; color: #333; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9;">
      <h2 style="color: #4A90E2; margin-bottom: 10px;">📩 New Portfolio Inquiry</h2>
      <p><strong>👤 Sender:</strong> ${name} (<a href="mailto:${email}" style="color: #007bff;">${email}</a>)</p>
      <p><strong>📌 Subject:</strong> <span style="color: #4A90E2;">${subject}</span></p>
      <hr style="border: 1px solid #ddd; margin: 10px 0;">
      <p style="font-size: 14px; color: #555;"><strong>💬 Message:</strong></p>
      <blockquote style="border-left: 4px solid #007bff; padding: 10px; background: #f1f1f1; font-style: italic;">${message}</blockquote>
      <p style="font-size: 12px; color: #888; text-align: center;">📅 Sent via Portfolio Contact Form</p>
    </div>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email Sent Successfully!", info.messageId);
    res.json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error("❌ Email Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email.", error: error.message });
  }
});

export default router;
