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

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user
    // For now, we'll just log it
    console.log("Contact form submission:", sanitizedData);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

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
