import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Helper: Sanitize HTML to prevent XSS in emails
function escapeHtml(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendLeadNotification(lead: {
  name: string;
  email: string;
  service?: string;
  message?: string;
}) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.warn("⚠️ Email credentials missing, skipping notification.");
    return;
  }

  const recipient = process.env.GMAIL_USER || process.env.SECOND_EMAIL;

  const mailOptions = {
    from: `"Momentum Digital" <${process.env.GMAIL_USER}>`,
    to: recipient,
    subject: `🚀 New Lead: ${escapeHtml(lead.name)}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0F172A, #6D28D9); padding: 32px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Lead Captured</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Momentum Digital</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0F172A; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">${escapeHtml(lead.name)}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0F172A;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${escapeHtml(lead.email)}" style="color: #6D28D9;">${escapeHtml(lead.email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0F172A;">Service</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">${escapeHtml(lead.service || "Not specified")}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #0F172A; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #334155; white-space: pre-wrap;">${escapeHtml(lead.message || "No message provided")}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${escapeHtml(lead.email)}" style="display: inline-block; padding: 12px 32px; background: #0F172A; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">Reply to ${escapeHtml(lead.name)}</a>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 Email notification sent for lead: ${lead.name}`);
  } catch (error) {
    console.error("❌ Failed to send email notification:", error);
  }
}

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || "3000", 10);

  app.use(express.json());

  // POST /api/leads — receive form submission and send email
  app.post("/api/leads", async (req, res) => {
    const { name, email, service, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    console.log(`New lead received: ${name} (${email})`);

    // Fire-and-forget email
    sendLeadNotification({ name, email, service, message }).catch((err) => {
      console.error("Background email task failed:", err);
    });

    res.status(201).json({ success: true, message: "Lead captured successfully" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    try {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
        configFile: path.resolve(__dirname, "vite.config.ts"),
      });
      app.use(vite.middlewares);
    } catch (e) {
      console.error("Failed to start Vite dev server:", e);
    }
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}

startServer();