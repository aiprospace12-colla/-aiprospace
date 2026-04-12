import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

const PDF_CONTENT: Record<string, { title: string; pages: { heading: string; body: string }[] }> = {
  'ai-tools-cheat-sheet': {
    title: 'AI Tools Cheat Sheet 2026 — AIProSpace',
    pages: [
      {
        heading: 'AI Writing Tools',
        body: 'ChatGPT (openai.com) — Best overall AI writing assistant. Freemium.\nClaude (claude.ai) — Best for long documents and nuanced writing. Freemium.\nJasper (jasper.ai) — Best for marketing copy with templates. Paid.\nCopy.ai (copy.ai) — Fast marketing copy generation. Freemium.\nGrammarly (grammarly.com) — Grammar and style checking. Freemium.',
      },
      {
        heading: 'AI Image Generators',
        body: 'Midjourney (midjourney.com) — Best quality AI art. Paid.\nDALL-E 3 (openai.com) — Best prompt accuracy, in ChatGPT. Freemium.\nLeonardo AI (leonardo.ai) — Best for game assets. Freemium.\nAdobe Firefly (firefly.adobe.com) — Commercial safe images. Freemium.\nStable Diffusion (stability.ai) — Open source, free when self-hosted.',
      },
      {
        heading: 'AI Video Generators',
        body: 'Runway (runwayml.com) — Best cinematic quality. Freemium.\nSora (openai.com) — Best realistic long videos. Paid.\nHeyGen (heygen.com) — Best AI avatar videos. Freemium.\nPika (pika.art) — Best for short social clips. Freemium.',
      },
      {
        heading: 'AI Automation Tools',
        body: 'n8n (n8n.io) — Best open-source automation. Free/Paid.\nZapier (zapier.com) — Most integrations (7000+). Freemium.\nMake (make.com) — Visual workflow builder. Freemium.\nActivepieces (activepieces.com) — Open-source Zapier alternative. Free.',
      },
    ],
  },
  '100-ai-prompts': {
    title: '100 Best AI Prompts Library — AIProSpace',
    pages: [
      {
        heading: 'Writing Prompts (1–25)',
        body: '1. Write a [article type] about [topic] for [audience]. Include [key points].\n2. Rewrite the following text to sound more [tone]: [paste text]\n3. Create an outline for a [word count] article about [topic].\n4. Write a compelling introduction for an article about [topic].\n5. Summarize the following content in [number] bullet points: [paste text]\n6. Write a [email type] email for [purpose].\n7. Create 10 blog post title ideas about [topic].\n8. Write a product description for [product] targeting [customer].\n9. Generate 5 call-to-action variants for [purpose].\n10. Edit this paragraph for clarity and conciseness: [paste text]',
      },
      {
        heading: 'Coding Prompts (26–50)',
        body: '26. Write a [language] function that [does what].\n27. Debug this code and explain the error: [paste code]\n28. Refactor this code to be more readable: [paste code]\n29. Write unit tests for the following function: [paste code]\n30. Explain what this code does in plain English: [paste code]\n31. Convert this [language] code to [language]: [paste code]\n32. Write a SQL query that [does what].\n33. Create a REST API endpoint for [purpose] in [language].\n34. Write a regex pattern that matches [pattern description].\n35. Optimize this code for performance: [paste code]',
      },
      {
        heading: 'Business Prompts (51–75)',
        body: '51. Write a business plan executive summary for [business idea].\n52. Create a SWOT analysis for [company/idea].\n53. Write a job description for [role] at a [company type].\n54. Create interview questions for a [role] position.\n55. Write a performance review for [scenario].\n56. Create a project proposal for [project].\n57. Write a client email proposing [service/project].\n58. Create a meeting agenda for [meeting type].\n59. Write a press release about [announcement].\n60. Create a competitive analysis framework for [industry].',
      },
      {
        heading: 'Research & Analysis Prompts (76–100)',
        body: '76. Summarize the key arguments for and against [topic].\n77. Explain [complex concept] as if I am [audience].\n78. What are the top 5 trends in [industry] for 2026?\n79. Compare [option A] vs [option B] in a table format.\n80. What questions should I ask before [decision]?\n81. Identify potential risks in [plan/strategy].\n82. What are the ethical implications of [technology/decision]?\n83. Explain the history and evolution of [topic].\n84. What would an expert in [field] say about [topic]?\n85. Create a pros and cons list for [decision].',
      },
    ],
  },
  'beginners-guide-to-ai': {
    title: "Beginner's Complete Guide to AI — AIProSpace",
    pages: [
      {
        heading: 'What is Artificial Intelligence?',
        body: 'Artificial intelligence (AI) refers to computer systems that can perform tasks that typically require human intelligence. This includes things like understanding language, recognizing images, making decisions, and generating creative content.\n\nModern AI is powered by machine learning — systems that learn from large amounts of data rather than being explicitly programmed. The recent revolution in AI was triggered by deep learning, a technique that uses layered neural networks to recognize complex patterns.\n\nToday\'s AI tools — like ChatGPT, Midjourney, and Claude — are built on foundation models trained on enormous datasets. They can engage in conversation, write code, create images, and perform analysis at a level previously impossible for automated systems.',
      },
      {
        heading: 'The 5 Best AI Tools for Beginners',
        body: '1. ChatGPT (chat.openai.com) — Start here. Free tier available. Can write, answer questions, code, analyze, and more. The most versatile starting point.\n\n2. Claude (claude.ai) — Excellent for writing, analysis, and understanding long documents. Often better than ChatGPT for nuanced tasks.\n\n3. Midjourney (midjourney.com) — For creating AI images. Type a description, get a stunning image. Paid but industry-leading quality.\n\n4. Grammarly (grammarly.com) — AI writing assistant that works in your browser. Catches errors and improves your writing automatically.\n\n5. Otter.ai (otter.ai) — Transcribes meetings and conversations automatically. Saves significant time for anyone with regular meetings.',
      },
      {
        heading: 'How to Write Better AI Prompts',
        body: 'The quality of AI output depends heavily on the quality of your input (called a "prompt"). Here are the key principles:\n\nBe specific: Instead of "write about AI," say "write a 500-word beginner\'s explanation of how ChatGPT works, for someone with no technical background."\n\nGive context: Tell the AI who you are, who the audience is, and what you need it for. "I\'m a marketing manager writing for small business owners..."\n\nSpecify format: "Write this as bullet points," "format as a table," or "write in the style of a friendly email."\n\nIterate: AI works best as a conversation. If the first result isn\'t quite right, tell it what to change. "Make this shorter," "make it more formal," "add an example."',
      },
      {
        heading: 'AI Safety and Responsible Use',
        body: 'As you start using AI tools, keep these principles in mind:\n\nVerify important information: AI systems can "hallucinate" — generate convincing but incorrect facts. Always verify important claims from an authoritative source.\n\nProtect private information: Don\'t share sensitive personal, medical, financial, or proprietary business information with AI systems unless you\'ve reviewed their privacy policy.\n\nDisclose AI use where required: Many professions, educational institutions, and employers have policies about AI use. Know your context.\n\nThink critically: AI generates plausible-sounding content, not necessarily correct content. Apply your own judgment and expertise to AI outputs.',
      },
    ],
  },
  'ai-seo-checklist': {
    title: 'AI SEO Checklist 2026 — AIProSpace',
    pages: [
      {
        heading: 'Pre-Writing Checklist',
        body: '☐ Identify primary keyword with search intent analysis\n☐ Research 5–10 secondary/LSI keywords\n☐ Analyze top 3 competing articles for structure and depth\n☐ Define target audience and their pain points\n☐ Set target word count based on competing content\n☐ Create detailed outline with H2 and H3 headings\n☐ Check if the topic warrants FAQ schema\n☐ Identify internal linking opportunities',
      },
      {
        heading: 'AI Content Generation Checklist',
        body: '☐ Use a detailed prompt that includes keyword, audience, and format\n☐ Request E-E-A-T signals: expertise, experience, authority, trust\n☐ Ask for specific examples and statistics (verify all facts)\n☐ Generate multiple variations of title and meta description\n☐ Request FAQ section targeting question-type searches\n☐ Generate schema markup code (FAQPage, Article, or HowTo)\n☐ Create table of contents structure for long articles',
      },
      {
        heading: 'Content Optimization Checklist',
        body: '☐ Primary keyword in: title, H1, first 100 words, meta description\n☐ Secondary keywords distributed naturally through headings and body\n☐ All factual claims verified against primary sources\n☐ Unique insights or data added that AI cannot generate\n☐ Word count meets or exceeds top-ranking competitor\n☐ Reading level appropriate for target audience\n☐ Internal links to 3–5 relevant pages on your site\n☐ External links to authoritative sources (when helpful)',
      },
      {
        heading: 'Technical & Publishing Checklist',
        body: '☐ Title tag under 60 characters, includes primary keyword\n☐ Meta description 150–160 characters, compelling and keyword-rich\n☐ URL is short, readable, includes primary keyword\n☐ All images have descriptive alt text\n☐ Schema markup implemented and tested\n☐ Canonical tag set correctly\n☐ Open Graph tags configured for social sharing\n☐ Page speed under 3 seconds on mobile\n☐ Content reviewed by human editor before publishing',
      },
    ],
  },
  'make-money-ai-toolkit': {
    title: 'Make Money with AI Toolkit — AIProSpace',
    pages: [
      {
        heading: '10 Ways to Make Money with AI in 2026',
        body: '1. AI Content Writing Freelancing — Write blog posts, marketing copy, and articles using AI. Charge $50–$500 per article on Upwork, Fiverr, or direct clients.\n\n2. AI Image Creation — Sell AI art on Etsy, Redbubble, or stock sites. Use Midjourney or DALL-E 3. Top sellers earn $1,000–$5,000/month.\n\n3. AI Video Production — Create YouTube content, social media videos, or corporate training using HeyGen, Runway, and ElevenLabs.\n\n4. AI Automation Services — Build n8n or Zapier automations for businesses. Charge $500–$5,000 per workflow.\n\n5. Prompt Engineering — Sell prompt libraries on Gumroad or PromptBase. Earn $10–$50 per prompt pack.',
      },
      {
        heading: 'AI Freelancing: Getting Started',
        body: 'Step 1: Choose your service. Pick one of the 10 income streams above. Specialize rather than offering everything.\n\nStep 2: Build your portfolio. Create 3–5 samples of your best work. For writing, publish them. For images, post to social media.\n\nStep 3: Create your profile. Set up on Upwork, Fiverr, or your own website. Be specific about what you offer and who you help.\n\nStep 4: Price competitively. Start slightly below market rate to build reviews. Raise prices every 3–5 projects.\n\nStep 5: Deliver quality. AI speeds up your work — use the time saved to add unique value that clients cannot get from AI alone.',
      },
      {
        heading: 'Best AI Tools for Making Money',
        body: 'For Writing: ChatGPT ($20/month), Claude Pro ($20/month), Jasper ($49/month)\nFor Images: Midjourney ($10/month), Adobe Firefly (included in Creative Cloud)\nFor Video: HeyGen ($29/month), Runway ($15/month), ElevenLabs ($5/month)\nFor Automation: n8n (free self-hosted), Zapier ($20/month), Make ($9/month)\nFor Design: Canva Pro ($15/month), Adobe Express (free tier)\n\nStart with ChatGPT and one other tool. Total investment: $20–$50/month. Potential earnings: $500–$5,000+/month.',
      },
      {
        heading: 'Income Projection & Milestones',
        body: 'Month 1: Learn one AI tool deeply. Complete your first 3 paid projects. Target: $200–$500\n\nMonth 2–3: Streamline your process. Build repeat client relationships. Target: $500–$1,500/month\n\nMonth 4–6: Specialize and raise prices. Build case studies. Target: $1,500–$3,000/month\n\nMonth 7–12: Scale with systems. Consider hiring or subcontracting. Target: $3,000–$8,000/month\n\nYear 2+: Build a productized service or digital product business. Target: $8,000–$20,000+/month\n\nRealistic expectations: Most people starting from zero reach $1,000/month within 3 months with consistent effort.',
      },
    ],
  },
  'n8n-templates-pack': {
    title: 'n8n Automation Templates Pack — AIProSpace',
    pages: [
      {
        heading: 'Template 1: AI Blog Post Writer',
        body: 'Trigger: Manual or scheduled\nSteps:\n1. HTTP Request node → fetch trending topics from RSS feed\n2. OpenAI node → generate article outline from topic\n3. OpenAI node → write full article from outline\n4. WordPress node → create draft post\n5. Slack node → notify team of new draft\n\nUse case: Automate first-draft content creation.\nTime saved: 2–3 hours per article.',
      },
      {
        heading: 'Template 2: Lead Qualification Bot',
        body: 'Trigger: Typeform or Webflow form submission\nSteps:\n1. Typeform trigger → receive new lead data\n2. OpenAI node → score lead based on responses (1–10)\n3. IF node → route high-score leads differently\n4. High score: HubSpot → create contact + assign to sales\n5. Low score: Mailchimp → add to nurture sequence\n6. Slack → notify sales team of high-score leads\n\nUse case: Qualify and route inbound leads automatically.',
      },
      {
        heading: 'Template 3: Social Media Scheduler',
        body: 'Trigger: Google Sheets row added\nSteps:\n1. Google Sheets trigger → detect new row\n2. OpenAI node → optimize copy for each platform\n3. Image resizer function → format image for each platform\n4. Twitter/X node → schedule tweet\n5. LinkedIn node → schedule LinkedIn post\n6. Instagram node → schedule Instagram post\n7. Google Sheets → mark row as "Scheduled"\n\nUse case: Schedule one piece of content to all platforms simultaneously.',
      },
      {
        heading: 'Template 4: Customer Support Triage',
        body: 'Trigger: New email in Gmail/support inbox\nSteps:\n1. Gmail trigger → new support email received\n2. OpenAI node → categorize: billing, technical, feature request, complaint\n3. OpenAI node → generate suggested response\n4. IF node → urgent flag if keywords match\n5. HubSpot → create support ticket with category and suggested reply\n6. Slack → notify relevant team channel\n7. Gmail → send acknowledgment to customer\n\nUse case: Automatically triage and prioritize customer support emails.',
      },
    ],
  },
}

async function generatePdf(fileKey: string): Promise<Uint8Array | null> {
  const content = PDF_CONTENT[fileKey]
  if (!content) return null

  const doc = await PDFDocument.create()
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const boldFont = await doc.embedFont(StandardFonts.HelveticaBold)

  const pageWidth = 595
  const pageHeight = 842
  const margin = 50
  const contentWidth = pageWidth - margin * 2

  function addPage(heading: string, body: string, isFirst: boolean) {
    const page = doc.addPage([pageWidth, pageHeight])

    // Header bar
    page.drawRectangle({ x: 0, y: pageHeight - 50, width: pageWidth, height: 50, color: rgb(0.06, 0.06, 0.06) })
    page.drawText('AIProSpace', { x: margin, y: pageHeight - 32, font: boldFont, size: 14, color: rgb(1, 1, 1) })
    page.drawText('aiprospace.com', { x: pageWidth - margin - 90, y: pageHeight - 32, font, size: 11, color: rgb(0.6, 0.6, 0.6) })

    if (isFirst) {
      // Title page section
      page.drawText(content.title, { x: margin, y: pageHeight - 100, font: boldFont, size: 18, color: rgb(0.06, 0.06, 0.06), maxWidth: contentWidth })
      page.drawText('Free Resource — No Email Required', { x: margin, y: pageHeight - 130, font, size: 12, color: rgb(0.45, 0.45, 0.45) })
      page.drawLine({ start: { x: margin, y: pageHeight - 148 }, end: { x: pageWidth - margin, y: pageHeight - 148 }, thickness: 1, color: rgb(0.85, 0.85, 0.85) })
    }

    const startY = isFirst ? pageHeight - 180 : pageHeight - 80
    page.drawText(heading, { x: margin, y: startY, font: boldFont, size: 14, color: rgb(0.06, 0.06, 0.06), maxWidth: contentWidth })

    // Body text
    const lines = body.split('\n')
    let y = startY - 28
    for (const line of lines) {
      if (y < margin + 40) break
      page.drawText(line, { x: margin, y, font, size: 11, color: rgb(0.2, 0.2, 0.2), maxWidth: contentWidth, lineHeight: 16 })
      y -= 18
    }

    // Footer
    page.drawLine({ start: { x: margin, y: 40 }, end: { x: pageWidth - margin, y: 40 }, thickness: 0.5, color: rgb(0.85, 0.85, 0.85) })
    page.drawText('© 2026 AIProSpace — aiprospace.com', { x: margin, y: 24, font, size: 9, color: rgb(0.6, 0.6, 0.6) })
  }

  content.pages.forEach((p, i) => addPage(p.heading, p.body, i === 0))

  return await doc.save()
}

export async function GET(_request: NextRequest, { params }: { params: { file: string } }) {
  const fileKey = params.file.replace(/^book-summary-/, '')

  // For book summaries, generate a simple summary PDF
  const isBookSummary = params.file.startsWith('book-summary-')
  let pdfBytes: Uint8Array | null = null

  if (isBookSummary) {
    const doc = await PDFDocument.create()
    const font = await doc.embedFont(StandardFonts.Helvetica)
    const boldFont = await doc.embedFont(StandardFonts.HelveticaBold)
    const page = doc.addPage([595, 842])
    const bookSlug = fileKey
    const bookTitle = bookSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

    page.drawRectangle({ x: 0, y: 792, width: 595, height: 50, color: rgb(0.06, 0.06, 0.06) })
    page.drawText('AIProSpace', { x: 50, y: 810, font: boldFont, size: 14, color: rgb(1, 1, 1) })
    page.drawText('aiprospace.com', { x: 455, y: 810, font, size: 11, color: rgb(0.6, 0.6, 0.6) })

    page.drawText(`Book Summary: ${bookTitle}`, { x: 50, y: 730, font: boldFont, size: 20, color: rgb(0.06, 0.06, 0.06), maxWidth: 495 })
    page.drawText('A quick summary prepared by AIProSpace', { x: 50, y: 700, font, size: 12, color: rgb(0.45, 0.45, 0.45) })
    page.drawLine({ start: { x: 50, y: 682 }, end: { x: 545, y: 682 }, thickness: 1, color: rgb(0.85, 0.85, 0.85) })

    const summaryText = `This is a brief summary of "${bookTitle}". For the full reading experience, purchase the book on Amazon using the link on our books page at aiprospace.com/books.\n\nKey themes covered in this book include artificial intelligence, machine learning, the future of technology, and the impact of AI on society and business.\n\nWe recommend reading this book in full — the summary cannot capture the depth of argument, evidence, and nuance that makes the original valuable.\n\nVisit aiprospace.com/books for our complete ranked and reviewed list of the 26 best AI books in 2026.`

    const lines = summaryText.split('\n')
    let y = 655
    for (const line of lines) {
      page.drawText(line || ' ', { x: 50, y, font, size: 12, color: rgb(0.2, 0.2, 0.2), maxWidth: 495, lineHeight: 18 })
      y -= 22
    }

    page.drawLine({ start: { x: 50, y: 40 }, end: { x: 545, y: 40 }, thickness: 0.5, color: rgb(0.85, 0.85, 0.85) })
    page.drawText('© 2026 AIProSpace — aiprospace.com', { x: 50, y: 24, font, size: 9, color: rgb(0.6, 0.6, 0.6) })

    pdfBytes = await doc.save()
  } else {
    pdfBytes = await generatePdf(fileKey)
  }

  if (!pdfBytes) {
    return new NextResponse('Not found', { status: 404 })
  }

  const filename = `aiprospace-${params.file}.pdf`
  return new NextResponse(Buffer.from(pdfBytes), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
