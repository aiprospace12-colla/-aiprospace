import { NextRequest, NextResponse } from 'next/server'
import { addSubscriber } from '@/lib/supabase'
import { sendWelcomeEmail } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const result = await addSubscriber(email.toLowerCase().trim(), source || 'website')

    if (!result.success) {
      return NextResponse.json(result, { status: result.error === 'already_subscribed' ? 409 : 500 })
    }

    // Send welcome + admin notification (non-blocking)
    sendWelcomeEmail(email, source || 'website').catch(console.error)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
