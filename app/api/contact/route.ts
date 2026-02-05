import { NextRequest, NextResponse } from "next/server";
import type { ContactFormData } from "@/types";

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

function detectSpam(message: string): boolean {
  const spamPatterns = [
    /(?:viagra|cialis|casino|poker|lottery|winner|prize|free money)/i,
    /(?:click here|buy now|limited time|act now|urgent)/i,
    /(?:http[s]?:\/\/){2,}/i, // Multiple URLs
    /(?:[a-zA-Z0-9._%+-]+@){3,}/i, // Multiple emails
  ];

  return spamPatterns.some((pattern) => pattern.test(message));
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

async function sendToTelegram(
  data: ContactFormData,
  ip: string
): Promise<boolean> {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    // Support both channel username (e.g., @mychannel) and channel ID (e.g., -1001234567890)
    const chatId = process.env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHANNEL_ID;

    if (!botToken || !chatId) {
      console.error(
        "Telegram bot token or chat ID/channel not configured. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID (or TELEGRAM_CHANNEL_ID) environment variables."
      );
      return false;
    }

    // Format the message using HTML for easier escaping
    const message = `🔔 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${escapeHtml(data.name)}
📧 <b>Email:</b> ${escapeHtml(data.email)}
${data.company ? `🏢 <b>Company:</b> ${escapeHtml(data.company)}` : ""}
${data.phone ? `📞 <b>Phone:</b> ${escapeHtml(data.phone)}` : ""}
🌐 <b>IP Address:</b> ${ip}

💬 <b>Message:</b>
${escapeHtml(data.message)}

<i>Time: ${new Date().toLocaleString()}</i>`;

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API error:", errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return false;
  }
}

function escapeHtml(text: string): string {
  // Escape special characters for Telegram HTML parse mode
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData: ContactFormData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      company: body.company ? sanitizeInput(body.company) : undefined,
      phone: body.phone ? sanitizeInput(body.phone) : undefined,
      message: sanitizeInput(body.message),
    };

    // Validate email format
    if (!validateEmail(sanitizedData.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Spam detection
    const fullMessage = `${sanitizedData.name} ${sanitizedData.email} ${sanitizedData.message}`;
    if (detectSpam(fullMessage)) {
      return NextResponse.json(
        { error: "Message appears to be spam." },
        { status: 400 }
      );
    }

    // Validate message length
    if (sanitizedData.message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    if (sanitizedData.message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long. Maximum 5000 characters." },
        { status: 400 }
      );
    }

    // Send notification to Telegram bot
    const telegramSent = await sendToTelegram(sanitizedData, ip);

    if (!telegramSent) {
      console.error("Failed to send message to Telegram, but continuing...");
      // Still return success to user, but log the error
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
