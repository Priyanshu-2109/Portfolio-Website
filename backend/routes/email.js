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
      html: `<p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p>${message}</p>`,
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
