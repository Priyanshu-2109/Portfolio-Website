import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// priyanshu chaniyara

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    console.log("Incoming Email Request:", req.body);

    // Email Transporter (gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465, // Secure SMTP Port
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // Verify Transporter Connection
    await transporter.verify();
    console.log("SMTP Server is Ready!");

    // Email Details
      // const mailOptions = {
      //   from: `"${name}" <${email}>`, // Sender's email
      //   to: process.env.RECEIVER_EMAIL, // Your Gmail to receive emails
      //   subject: 'Poftfolio Website:' + subject,
      //   text: `From: ${email}\n\n${message}`,
      //   html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
      // };

      const mailOptions = {
        from: `"${name}" <${email}>`, // Sender's email
        to: process.env.RECEIVER_EMAIL, // Your Gmail to receive emails
        subject: `📩 Portfolio Inquiry: ${subject}`,
        text: `You have received a new message from your portfolio website.
      
      Sender Name: ${name}
      Sender Email: ${email}
      
      Subject: ${subject}
      
      Message:
      ${message}`,
      
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: white;">📩 New Portfolio Inquiry</h2>
            <p><strong>Sender Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 1px solid #ddd;">
            <p style="margin-top: 10px;"><strong>Message:</strong></p>
            <p style="background: #f4f4f4; padding: 10px; border-left: 4px solid #007bff;">${message}</p>
            <br>
            <p style="font-size: 12px; color: #888;">This email was sent from your portfolio contact form.</p>
          </div>
        `,
      };
      

    // Send Email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent Successfully!", info.messageId);

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email.", error: error.message });
  }
});

export default router;
