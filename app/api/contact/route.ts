import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email' },
        { status: 400 }
      )
    }

    const result = await sendContactEmail(
      String(name).slice(0, 100),
      String(email).slice(0, 200),
      String(message).slice(0, 2000)
    )

    if (!result.success) {
      return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
