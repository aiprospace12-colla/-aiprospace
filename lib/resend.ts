import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(email: string) {
  const { data, error } = await resend.emails.send({
    from: 'AIProSpace <hello@aiprospace.com>',
    to: email,
    subject: 'Your AI Automation Playbook is here 🚀',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your AI Automation Playbook</title>
      </head>
      <body style="margin:0;padding:0;background:#06060f;font-family:'DM Sans',Arial,sans-serif;color:#f0f0ff;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;padding:40px 20px;">
          <tr>
            <td>
              <!-- Header -->
              <div style="text-align:center;margin-bottom:40px;">
                <h1 style="font-size:28px;font-weight:800;margin:0;">
                  <span style="color:#00d4ff;">AI</span><span style="color:#f0f0ff;">ProSpace</span>
                </h1>
              </div>

              <!-- Main card -->
              <div style="background:#0d0d1a;border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:40px;margin-bottom:24px;">
                <h2 style="font-size:24px;font-weight:700;margin:0 0 16px;color:#f0f0ff;">
                  Your Playbook is Ready! 🎉
                </h2>
                <p style="color:#8888aa;line-height:1.8;margin:0 0 24px;">
                  Welcome to AIProSpace! You've just unlocked <strong style="color:#f0f0ff;">The AI Automation Playbook 2025</strong> — your guide to 10 powerful AI tools and automation workflows to make money online.
                </p>

                <a href="https://aiprospace.com/resources"
                   style="display:inline-block;background:linear-gradient(135deg,#7b5ea7,#5a4080);color:#fff;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:600;margin-bottom:24px;">
                  Download Your Playbook →
                </a>

                <hr style="border:none;border-top:1px solid rgba(255,255,255,0.07);margin:24px 0;" />

                <h3 style="font-size:16px;font-weight:600;margin:0 0 12px;color:#f0f0ff;">What's inside:</h3>
                <ul style="color:#8888aa;line-height:2;padding-left:20px;margin:0 0 24px;">
                  <li>10 AI tools that make real money in 2025</li>
                  <li>Step-by-step automation workflows</li>
                  <li>Real income strategies you can start today</li>
                  <li>Best free vs paid AI tools breakdown</li>
                  <li>Bonus: 5 automation templates included</li>
                </ul>

                <p style="color:#8888aa;line-height:1.8;margin:0;">
                  Every week, you'll receive our latest AI tool reviews, automation guides, and money-making strategies directly to your inbox.
                </p>
              </div>

              <!-- Footer -->
              <div style="text-align:center;color:#8888aa;font-size:12px;line-height:1.8;">
                <p style="margin:0 0 8px;">© 2025 AIProSpace. All rights reserved.</p>
                <p style="margin:0;">
                  <a href="https://aiprospace.com/unsubscribe" style="color:#7b5ea7;text-decoration:none;">Unsubscribe</a> ·
                  <a href="https://aiprospace.com/privacy" style="color:#7b5ea7;text-decoration:none;">Privacy Policy</a>
                </p>
              </div>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  })

  if (error) {
    return { success: false, error }
  }

  return { success: true, data }
}

export async function sendContactEmail(name: string, email: string, message: string) {
  const { data, error } = await resend.emails.send({
    from: 'AIProSpace Contact <hello@aiprospace.com>',
    to: 'hello@aiprospace.com',
    reply_to: email,
    subject: `New Contact Form Message from ${name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#f5f5f5;padding:16px;border-radius:8px;">${message}</p>
      </div>
    `,
  })

  if (error) {
    return { success: false, error }
  }

  return { success: true, data }
}
