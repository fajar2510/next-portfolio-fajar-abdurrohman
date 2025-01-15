import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import moment from "moment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const IKIT = process.env.NEXT_PUBLIC_IK_URL_ENDPOINT;
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
      subject: "CV Download Notification",
      html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #000; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">CV Download Notification</h2>
                <h3 style="color: #000;">Monitoring pengguna dengan email <strong>${
                  email || "anonymous"
                }</strong> telah mengunduh file.</h3>
                <div style="display: flex; align-items: center; margin: 1px;">
                    <p style="color: #000;">Seseorang telah mengunduh CV kamu yang berada di Web Portofolio <a href="https://www.fajarnextdev.my.id" style="color: #1a73e8; text-decoration: none;">www.fajarnextdev.my.id</a></p>
                    <img src="${IKIT}pngwing.png" alt="Email me" style="max-width: 20%; height: auto; border-radius: 10px; margin-right: 20px;">
                </div>
                <p style="border-left: 4px solid #1a73e8; padding-left: 10px; color: #000; margin: 20px 0;">
                     ${message}
                </p>
                <p style="color: #000; margin-top: 20px;">
                  Email ini dikirim pada: ${moment().locale("id").format("dddd, D MMMM YYYY, HH:mm:ss")}
                </p>
            </div>
        `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
