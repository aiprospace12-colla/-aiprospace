import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const ADMIN_EMAIL = 'aiprospace12@gmail.com'
const FROM = 'AIProSpace <hello@aiprospace.com>'

export async function sendWelcomeEmail(email: string, source?: string, downloadUrl?: string, filename?: string) {
  try {
    const downloadBlock = downloadUrl ? `
          <p style="font-size:16px;line-height:1.6;color:#444;margin-bottom:24px;">
            Your free resource is ready — click below to download it directly:
          </p>
          <a href="${downloadUrl}"
            style="display:inline-block;background:#000;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;margin-bottom:16px;">
            Download ${filename || 'Your PDF'} →
          </a>
          <p style="font-size:13px;color:#888;margin-bottom:24px;">
            You can also find all free resources at
            <a href="https://aiprospace.com/resources" style="color:#555;">aiprospace.com/resources</a>
          </p>` : `
          <p style="font-size:16px;line-height:1.6;color:#444;margin-bottom:24px;">
            Your free resource is ready to download. Click the button below to access it:
          </p>
          <a href="https://aiprospace.com/resources"
            style="display:inline-block;background:#000;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;margin-bottom:24px;">
            Access Your Free Resource →
          </a>`

    // 1. Welcome email to subscriber
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: 'Your free resource from AIProSpace 🚀',
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;padding:40px 20px;background:#fff;">
          <h1 style="font-size:24px;font-weight:700;margin-bottom:16px;color:#111;">
            Welcome to AIProSpace! 🎉
          </h1>
          <p style="font-size:16px;line-height:1.6;color:#444;margin-bottom:16px;">
            Thank you for joining AIProSpace — your free AI tools and resources hub.
          </p>
          ${downloadBlock}
          <p style="font-size:14px;color:#888;margin-top:32px;line-height:1.6;">
            You'll also receive our weekly newsletter with the best AI tools, guides and news.<br/>
            <a href="https://aiprospace.com/unsubscribe" style="color:#888;">Unsubscribe anytime</a>
          </p>
          <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
          <p style="font-size:12px;color:#aaa;">
            AIProSpace — aiprospace.com<br/>
            The #1 Free AI Tools &amp; Resources Hub
          </p>
        </div>
      `,
    })

    // 2. Notification to admin
    await resend.emails.send({
      from: FROM,
      to: ADMIN_EMAIL,
      subject: `🎉 New subscriber: ${email}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;padding:20px;">
          <h2>New Subscriber! 🎉</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Source:</strong> ${source || 'website'}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          <p>
            <a href="https://supabase.com/dashboard/project/cjxywqddesdscrdzdmug/editor">
              View all subscribers in Supabase →
            </a>
          </p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('sendWelcomeEmail error:', error)
    return { success: false, error }
  }
}

export async function sendContactEmail(name: string, email: string, message: string) {
  try {
    // 1. Notify admin with contact details
    await resend.emails.send({
      from: FROM,
      to: ADMIN_EMAIL,
      reply_to: email,
      subject: `📬 New contact from ${name}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;padding:20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background:#f5f5f5;padding:16px;border-radius:8px;white-space:pre-wrap;color:#333;">
            ${message}
          </div>
          <p style="color:#888;font-size:12px;margin-top:24px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    })

    // 2. Confirmation to sender
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: 'We received your message — AIProSpace',
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;padding:40px 20px;background:#fff;">
          <h2 style="font-size:22px;font-weight:700;margin-bottom:12px;">Thanks for reaching out, ${name}! 👋</h2>
          <p style="font-size:16px;line-height:1.6;color:#444;margin-bottom:16px;">
            We received your message and will reply within 24 hours.
          </p>
          <p style="font-size:15px;color:#444;margin-bottom:8px;">Here's what you sent us:</p>
          <div style="background:#f5f5f5;padding:16px;border-radius:8px;color:#444;white-space:pre-wrap;font-size:14px;">
            ${message}
          </div>
          <p style="color:#aaa;font-size:12px;margin-top:32px;">AIProSpace — aiprospace.com</p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('sendContactEmail error:', error)
    return { success: false, error }
  }
}
