import nodemailer from "nodemailer";

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
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error("Email credentials missing in environment variables.");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const mailOptions = {
    from: `"Momentum Digital" <${user}>`,
    to: user,
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

  await transporter.sendMail(mailOptions);
}

export default async function handler(req: any, res: any) {
  // Add CORS headers for Vercel
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, service, message, _honeypot, _t } = req.body;

  // 1. Honeypot check (Bots fill all fields)
  if (_honeypot) {
    console.warn("🛡️ Bot detected via honeypot.");
    return res.status(200).json({ success: true, message: "Lead captured successfully" }); // Return success to fool the bot
  }

  // 2. Simple rate limit/speed check (Bots submit instantly)
  const submissionTime = parseInt(_t || "0", 10);
  const now = Date.now();
  if (!submissionTime || now - submissionTime < 2000) {
    console.warn("🛡️ Bot detected via speed check.");
    return res.status(400).json({ error: "Suspicious activity detected. Please try again." });
  }

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    await sendLeadNotification({ name, email, service, message });
    return res.status(201).json({ success: true, message: "Lead captured successfully" });
  } catch (error: any) {
    console.error("❌ API Error:", error.message);
    return res.status(500).json({ error: error.message || "Failed to send email" });
  }
}
