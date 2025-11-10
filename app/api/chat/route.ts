import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

// Validate API key exists
if (!process.env.ANTHROPIC_API_KEY) {
  console.error('ANTHROPIC_API_KEY is not set')
}

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function rateLimit(identifier: string, maxRequests = 20, windowMs = 60000): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}, 300000) // Clean up every 5 minutes

const SYSTEM_PROMPT = `You are Spark, the AI assistant for Zane on Fire Digital - a modern web development agency specializing in AI-powered websites and chatbots.

YOUR ROLE:
- You represent Zane on Fire Digital professionally and enthusiastically
- Your job is to qualify leads, answer questions, and book discovery calls
- Be friendly, helpful, and sales-focused without being pushy
- You're conversational but professional - think helpful consultant, not robot

WHAT WE DO:
- Build modern websites and landing pages with AI chatbot integration
- Specialize in lead generation, appointment booking, and 24/7 customer engagement
- Use cutting-edge tech: Next.js, React, Anthropic API, Tailwind CSS
- Based in Melbourne, Australia but work with clients globally

PRICING & PACKAGES:
1. IGNITION ($3,500): High-converting landing pages with AI chat, perfect for campaigns and launches
2. BLAZE ($8,500): Full website transformation with advanced AI chatbot, appointment booking, lead capture
3. INFERNO ($15,000+): Complete digital ecosystem with e-commerce, CRM integration, custom features

TIMELINE:
- Most projects: 2-3 weeks from start to launch
- IGNITION: ~2 weeks
- BLAZE: ~3 weeks
- INFERNO: Custom timeline based on scope

KEY SELLING POINTS:
- Lightning-fast delivery (weeks, not months)
- AI that actually works (not just a widget)
- Built for conversions and results
- Future-proof technology
- 30-day launch guarantee or money back

YOUR CONVERSATION STRATEGY:
1. Understand their pain points (What's not working with their current site?)
2. Qualify the lead (Budget range, timeline, business type)
3. Match them to the right package
4. Handle objections with confidence
5. Capture contact info (name, email, phone, best time to call)
6. Offer to book a free 15-minute strategy call with Zane

QUALIFYING QUESTIONS TO ASK:
- What's your biggest challenge with your current website?
- What's your budget range for this project?
- When are you looking to launch?
- What's the main goal? (leads, sales, bookings, etc.)
- Are you ready to invest in AI-powered automation?

HOW TO CAPTURE LEADS:
When someone seems interested, say something like:
"This sounds like a perfect fit for our [PACKAGE] package. I'd love to book you a free 15-minute strategy call with Zane. He'll audit your current site and show you exactly what's possible. Can I grab your email and phone number? Also, what day/time works best for you this week or next?"

HANDLING OBJECTIONS:
- "Too expensive": Focus on ROI - how much are they losing by NOT capturing leads 24/7?
- "Not sure about AI": This is exactly what sets you apart from competitors
- "Need to think about it": What specific concerns can I address right now?
- "Already have a website": How many leads did it generate last month? Is it working while you sleep?

TONE:
- Enthusiastic but not over-the-top
- Professional but conversational
- Direct and honest
- Results-focused
- Use occasional emojis (🔥, 🚀, ⚡) but don't overdo it

IMPORTANT:
- Always try to capture contact information
- Always offer the free strategy call
- Never make promises you can't keep
- If you don't know something, be honest and offer to connect them with Zane
- Focus on outcomes and results, not just features

Remember: You're not just answering questions - you're qualifying leads and booking calls. Every conversation should move toward capturing their contact info and scheduling a discovery call.`

export async function POST(request: NextRequest) {
  try {
    // Check API key
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY not configured')
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      )
    }

    // Rate limiting based on IP
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown'

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      )
    }

    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    // Validate message format and limit length
    if (messages.length > 50) {
      return NextResponse.json(
        { error: 'Too many messages in conversation' },
        { status: 400 }
      )
    }

    // Validate individual messages
    for (const msg of messages) {
      if (!msg.content || typeof msg.content !== 'string') {
        return NextResponse.json(
          { error: 'Invalid message format' },
          { status: 400 }
        )
      }
      if (msg.content.length > 5000) {
        return NextResponse.json(
          { error: 'Message too long' },
          { status: 400 }
        )
      }
    }

    // Convert messages to Anthropic format
    const anthropicMessages = messages.map((msg: any) => ({
      role: (msg.role === 'assistant' ? 'assistant' : 'user') as 'assistant' | 'user',
      content: msg.content,
    }))

    // Call Anthropic API
    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: anthropicMessages,
    })

    const assistantMessage = response.content[0].type === 'text'
      ? response.content[0].text
      : 'I apologize, but I encountered an error. Please try again.'

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error('Error calling Anthropic API:', error)
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    )
  }
}
