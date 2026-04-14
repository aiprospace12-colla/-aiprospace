import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { GUIDES, type Guide } from '@/data/guides'
import AdBanner from '@/components/AdBanner'

type Props = { params: { slug: string } }

type Section = { h2: string; body: string }
type GuideContent = {
  sections: Section[]
  faqs: { q: string; a: string }[]
  relatedTools: { label: string; href: string }[]
  relatedCourse?: { label: string; href: string }
}

const GUIDE_CONTENT: Record<string, GuideContent> = {
  'how-to-use-chatgpt': {
    relatedTools: [
      { label: 'Best AI Writing Tools', href: '/tools/ai-writing-tools' },
      { label: 'Best AI Chatbots', href: '/tools/ai-chatbots' },
      { label: 'AI Coding Tools', href: '/tools/ai-coding-tools' },
    ],
    relatedCourse: { label: 'Best ChatGPT Courses 2026', href: '/courses/chatgpt' },
    sections: [
      {
        h2: 'What Is ChatGPT and Why Should You Use It?',
        body: "ChatGPT is OpenAI's AI assistant — the most widely used AI tool in the world with over 100 million weekly active users as of 2026. It can write, research, code, analyze data, answer questions, and hold extended conversations across any topic. The free tier uses GPT-4o mini, which is genuinely capable. ChatGPT Plus ($20/month) unlocks GPT-4o, the most capable publicly available model, along with image generation via DALL-E 3, web browsing, and custom GPTs.\n\nWhy use it? Because it replaces a dozen specialized apps. Email drafting, code debugging, essay editing, research summarization, language translation, math tutoring, creative writing — ChatGPT handles all of these better than any single-purpose tool. The only real limitation is that it cannot take actions in the world (book appointments, make purchases) without plugins.",
      },
      {
        h2: 'How to Get Started with ChatGPT (Step by Step)',
        body: "**Step 1:** Go to chat.openai.com and create a free account (email or Google sign-in).\n\n**Step 2:** Start a new conversation by typing in the chat box at the bottom of the screen. Press Enter or click the send button.\n\n**Step 3:** Be specific. Instead of 'help me write an email,' try 'Write a professional follow-up email to a client who hasn't responded in two weeks. Friendly but slightly urgent tone. Keep it under 150 words.' Specificity produces dramatically better results.\n\n**Step 4:** Iterate. If the first response isn't quite right, tell ChatGPT what to change: 'Make it shorter,' 'add a specific example,' or 'use a more formal tone.' ChatGPT remembers the entire conversation, so you can build on each response.\n\n**Step 5:** Save useful prompts. When you find a prompt that produces consistently good results, save it in a notes app. Over time you'll build a personal library of proven prompts.",
      },
      {
        h2: 'Best ChatGPT Tips and Tricks',
        body: "**1. Use the system role.** Start conversations with context: 'You are a senior marketing strategist. I'm going to ask you questions about our product launch.' This primes ChatGPT to respond from the right perspective throughout the conversation.\n\n**2. Ask for multiple options.** Add 'Give me 5 different versions' to any writing request. Having choices is always better than editing a single output.\n\n**3. Request structured output.** Tell ChatGPT exactly what format you want: 'Format this as a table with three columns: Tool, Price, Best For.' or 'Write this as bullet points with bold headers.'\n\n**4. Use custom GPTs.** ChatGPT Plus includes a library of specialized GPTs trained for specific tasks — copywriting, coding, data analysis, and more. Access them via 'Explore GPTs' in the sidebar.\n\n**5. Upload files.** ChatGPT Plus can read PDFs, Word documents, spreadsheets, and images. Upload your document and ask questions about it directly.",
      },
      {
        h2: 'Common ChatGPT Mistakes to Avoid',
        body: "**Mistake 1: Vague prompts.** 'Write a blog post about AI' produces generic garbage. 'Write a 1,500-word blog post about the three biggest misconceptions about AI image generators, targeting small business owners who are curious but skeptical' produces something actually useful.\n\n**Mistake 2: Accepting the first output.** ChatGPT's first response is a draft, not a finished product. Always ask for revisions, additions, or a different approach.\n\n**Mistake 3: Not fact-checking.** ChatGPT sometimes produces plausible-sounding but incorrect information, especially on recent events and specific statistics. Verify any factual claims before using them.\n\n**Mistake 4: Sharing sensitive data.** Don't paste private customer information, passwords, or confidential business documents into ChatGPT. OpenAI uses conversations to improve models by default (you can opt out in settings).\n\n**Mistake 5: Ignoring the context window.** ChatGPT can process about 128,000 tokens (roughly 100,000 words) per conversation. Very long conversations sometimes cause it to 'forget' earlier context — start a fresh conversation when this happens.",
      },
      {
        h2: 'ChatGPT vs Claude vs Gemini: Which Should You Use?',
        body: "| Feature | ChatGPT | Claude | Gemini |\n|---------|---------|--------|---------|\n| Writing quality | ✅ Excellent | ✅ Excellent | 🟡 Good |\n| Context window | 128k tokens | 200k tokens | 1M tokens |\n| Free tier | ✅ GPT-4o mini | ✅ Claude 3.5 | ✅ Gemini 1.5 |\n| Image generation | ✅ DALL-E 3 | ❌ No | ✅ Imagen |\n| Web browsing | ✅ Yes (Plus) | ✅ Yes (Pro) | ✅ Yes |\n| Code quality | ✅ Excellent | ✅ Excellent | 🟡 Good |\n\n**Bottom line:** Use ChatGPT as your primary tool for its versatility and ecosystem. Use Claude when you need to process very long documents or want more nuanced writing. Use Gemini if you're deep in the Google ecosystem.",
      },
      {
        h2: 'Is ChatGPT Plus Worth $20/Month?',
        body: "For professionals who use it daily: yes, clearly. Here's the math. ChatGPT Plus saves most professionals 30–60 minutes per day on writing, research, and coding tasks. At any salary above $25,000/year, that time is worth far more than $20/month.\n\nFor casual users: the free tier is genuinely good. GPT-4o mini handles most everyday tasks well. Upgrade to Plus when you find yourself hitting usage limits frequently or when you need specific features like DALL-E 3 image generation or file uploads.\n\n**Who should get Plus immediately:** anyone who creates content professionally, writes code regularly, or needs to process documents. **Who is fine on free:** students, casual users, and people who use ChatGPT a few times per week.",
      },
    ],
    faqs: [
      { q: 'How to use ChatGPT for free?', a: 'Go to chat.openai.com, create a free account, and start chatting immediately. The free tier uses GPT-4o mini, which handles most everyday tasks. Usage limits apply during peak hours.' },
      { q: 'Can ChatGPT access the internet?', a: 'Yes, but only on paid plans. ChatGPT Plus ($20/month) includes web browsing. The free tier does not have internet access and has a knowledge cutoff date.' },
      { q: 'Is ChatGPT safe to use?', a: "ChatGPT is safe for general use. Don't share sensitive personal information, passwords, or confidential business data. OpenAI uses conversations to improve models by default — opt out in Settings > Data Controls." },
      { q: 'What is ChatGPT best for?', a: 'Writing assistance, code debugging, research summarization, brainstorming, email drafting, language translation, math help, and creative projects. It\'s most valuable for tasks where a first draft saves significant time.' },
      { q: 'How do I write better ChatGPT prompts?', a: 'Be specific about the task, audience, format, and tone. Provide context. Ask for multiple options. Build on responses with follow-up instructions. The Prompt Engineering for ChatGPT course on Coursera is the best free resource.' },
    ],
  },

  'how-to-use-claude-ai': {
    relatedTools: [
      { label: 'Best AI Writing Tools', href: '/tools/ai-writing-tools' },
      { label: 'AI Research Tools', href: '/tools/ai-research-tools' },
      { label: 'AI Coding Tools', href: '/tools/ai-coding-tools' },
    ],
    relatedCourse: { label: 'Best Claude AI Courses 2026', href: '/courses/claude' },
    sections: [
      {
        h2: 'What Makes Claude Different from Other AI Assistants?',
        body: "Claude, built by Anthropic, is the AI assistant most professionals reach for when quality and accuracy matter more than speed. Three things separate it from the competition.\n\nFirst, the **200,000-token context window** — the longest of any major consumer AI tool. You can paste an entire book, a year of emails, or a full codebase and ask Claude to analyze, summarize, or write based on it. This is genuinely transformative for research and document work.\n\nSecond, **writing quality**. In blind editorial tests, Claude's prose is consistently rated as more natural, less AI-sounding, and better at maintaining consistent tone across long pieces. If you've ever been frustrated by ChatGPT's generic, enthusiastic-sounding output, Claude is the cure.\n\nThird, **instruction-following accuracy**. Claude is exceptionally good at following complex, multi-step instructions without forgetting constraints or making up requirements that weren't specified.",
      },
      {
        h2: 'Getting Started with Claude: Step by Step',
        body: "**Step 1:** Go to claude.ai and create a free account. No credit card required.\n\n**Step 2:** Start a conversation. Claude's interface is simpler than ChatGPT's — just a text box and conversation history.\n\n**Step 3:** Use XML tags for complex requests. Claude responds especially well to structured instructions:\n```\n<task>Write a product description</task>\n<product>Noise-cancelling headphones, $299, for remote workers</product>\n<tone>Professional but warm</tone>\n<length>150 words maximum</length>\n```\n\n**Step 4:** Take advantage of the long context. Upload your entire document or paste your full codebase — Claude can reference any part of it in its response.\n\n**Step 5:** Use the Projects feature (Pro). Create a project with persistent context — your brand guidelines, writing samples, or technical documentation — that Claude remembers across all conversations.",
      },
      {
        h2: 'Best Claude Tips and Tricks',
        body: "**1. Use XML tags.** Claude was trained to respond especially well to XML-structured prompts. Tags like `<instructions>`, `<context>`, `<format>`, and `<examples>` dramatically improve output quality for complex tasks.\n\n**2. Leverage long context for document analysis.** Paste your entire annual report, legal contract, or research paper and ask Claude to extract specific information, identify inconsistencies, or write a summary. No other consumer AI handles this as reliably.\n\n**3. Ask Claude to 'think step by step.'** Adding this phrase to complex reasoning tasks triggers more careful, methodical thinking that reduces errors.\n\n**4. Use Claude for code review.** Paste your full file (not just a snippet) and ask Claude to identify bugs, security issues, and improvements. The large context window means it can see the full picture.\n\n**5. Test with extended thinking.** Claude 3.7 Sonnet's extended thinking mode shows Claude's reasoning process — useful for verifying that it's solving problems correctly, not just producing plausible-sounding answers.",
      },
      {
        h2: 'Common Claude Mistakes to Avoid',
        body: "**Mistake 1: Treating it like Google.** Claude isn't a search engine — don't ask it for real-time information or recent events. Its knowledge has a cutoff date, and it won't tell you today's news.\n\n**Mistake 2: Using it for things you should verify.** Claude is honest about uncertainty more often than other models, but it still occasionally produces confident-sounding incorrect information on obscure topics. Always verify specific facts.\n\n**Mistake 3: Not using the Projects feature.** If you're using Claude regularly for similar tasks, creating a Project with your context (style guide, previous work, product information) saves enormous time and produces more consistent results.\n\n**Mistake 4: Asking for things it won't do.** Claude has stricter content policies than some other models. Don't waste time trying to jailbreak it — work within its guidelines or switch to a different tool for tasks it declines.",
      },
      {
        h2: 'Claude vs ChatGPT: When to Use Which',
        body: "| Use Case | Best Choice | Why |\n|----------|-------------|-----|\n| Long document analysis | Claude | 200k token context |\n| Marketing copy | Either | Comparable quality |\n| Code debugging | Either | Both excellent |\n| Image generation | ChatGPT | Claude can't generate images |\n| Fiction writing | Claude | More natural prose |\n| Web browsing | ChatGPT | Claude Pro has limited browsing |\n| API integration | Claude | Best safety and instruction-following |\n| Quick questions | ChatGPT | Faster interface, more familiar |\n\n**My recommendation:** Use both. ChatGPT for quick tasks and image generation; Claude for serious writing, document analysis, and anything where quality matters more than speed.",
      },
      {
        h2: 'Is Claude Pro Worth $20/Month?',
        body: "Claude Pro gives you 5× more usage than the free tier, access to the most powerful Claude models, Projects with persistent memory, and priority access during peak hours.\n\nFor writers, researchers, and developers who use Claude daily: yes, clearly worth it. The quality difference between Claude 3.5 Sonnet (available free) and Claude 3 Opus (Pro-only) is significant for complex tasks.\n\nFor casual users: the free tier is excellent. Claude 3.5 Sonnet is genuinely impressive and handles most everyday tasks well. Upgrade when you find yourself hitting usage limits or need the persistent Projects feature.",
      },
    ],
    faqs: [
      { q: 'How to use Claude AI for free?', a: 'Go to claude.ai, create a free account, and start chatting. The free tier includes Claude 3.5 Sonnet with daily usage limits. No credit card required.' },
      { q: 'What is Claude AI best at?', a: 'Long document analysis, nuanced writing, complex instruction-following, and code review. Claude\'s 200k token context window is its most distinctive advantage.' },
      { q: 'Is Claude better than ChatGPT?', a: 'For writing quality and long documents, most professionals rate Claude higher. For versatility, integrations, and image generation, ChatGPT leads. Most power users use both.' },
      { q: 'Can Claude access the internet?', a: 'Claude Pro has limited web access. The free tier does not browse the internet. Claude\'s knowledge has a training cutoff date.' },
      { q: 'How do I get the best results from Claude?', a: 'Use XML tags for structured instructions, take advantage of the long context window by pasting full documents, use Projects for persistent context, and ask Claude to think step by step on complex reasoning tasks.' },
    ],
  },

  'how-to-use-n8n': {
    relatedTools: [
      { label: 'AI Automation Tools', href: '/tools/ai-automation-tools' },
      { label: 'AI Agent Builders', href: '/tools/ai-agent-builders' },
      { label: 'AI Productivity Tools', href: '/tools/ai-productivity-tools' },
    ],
    relatedCourse: { label: 'Best n8n Courses 2026', href: '/courses/n8n' },
    sections: [
      {
        h2: 'What is n8n and Why Should You Use It?',
        body: "n8n is an open-source workflow automation tool — think Zapier, but far more powerful, self-hostable, and free when you run it yourself. It lets you connect applications, automate repetitive tasks, and build AI agents without writing code (though you can write code in nodes if you want to).\n\nWhy n8n over Zapier? Three reasons. First, it's free when self-hosted — no per-automation charges, no action limits. Second, it handles complex logic that Zapier can't — loops, conditionals, sub-workflows, and custom code. Third, it has exceptional AI integration — native OpenAI, Claude, and Langchain nodes that make building real AI agents straightforward.\n\nIn 2026, n8n has become the tool of choice for anyone building serious automations — replacing tools like Make, Activepieces, and even custom Python scripts for many use cases.",
      },
      {
        h2: 'How to Install and Set Up n8n',
        body: "**Option 1: Local installation (free, 5 minutes)**\nRequires Node.js installed on your computer.\n```\nnpx n8n\n```\nOpen http://localhost:5678 in your browser. That's it.\n\n**Option 2: Docker (recommended for reliability)**\n```\ndocker run -it --rm \\\n  --name n8n \\\n  -p 5678:5678 \\\n  -v ~/.n8n:/home/node/.n8n \\\n  n8nio/n8n\n```\n\n**Option 3: Cloud (easiest, costs $20/month)**\nSign up at n8n.io and skip the setup entirely. 14-day free trial available.\n\n**Option 4: VPS self-hosting (recommended for production)**\nRent a $6/month VPS from DigitalOcean or Hetzner, install Docker, run n8n with a reverse proxy (Caddy or Nginx) for HTTPS. This is how most serious users run it.",
      },
      {
        h2: 'Building Your First n8n Workflow',
        body: "Let's build a simple workflow: receive a form submission → send a Slack notification → log to Google Sheets.\n\n**Step 1:** Open n8n, click 'New Workflow.'\n\n**Step 2:** Add a Webhook node (Trigger section). Click 'Webhook URL' to copy the endpoint. This is where your form will post data.\n\n**Step 3:** Add a Slack node. Connect your Slack account, select your channel, and write the message using the data from the webhook: `New submission from {{$json.name}}: {{$json.message}}`\n\n**Step 4:** Add a Google Sheets node. Connect your Google account, select your spreadsheet, and map the fields from the webhook data to your sheet columns.\n\n**Step 5:** Connect the nodes in order: Webhook → Slack → Google Sheets.\n\n**Step 6:** Click 'Activate Workflow.' The automation now runs every time someone submits the form.\n\nYou just built an automation that would have required code 3 years ago. Now extend it — add conditions, error handling, additional steps.",
      },
      {
        h2: 'Best n8n Tips and Tricks',
        body: "**1. Use the Expression Editor.** Click the `{{}}` icon on any field to access n8n's expression language. This lets you transform data — format dates, extract specific fields, combine strings, run basic math.\n\n**2. Test nodes individually.** Right-click any node and select 'Execute Node' to test it with real data without running the entire workflow. This is the fastest way to debug.\n\n**3. Use HTTP Request nodes for everything.** If an app doesn't have a native n8n node, the HTTP Request node connects to any REST API. 90% of modern apps have APIs.\n\n**4. Save sub-workflows.** Build reusable component workflows (like 'send formatted Slack notification') and call them from other workflows using the Execute Workflow node.\n\n**5. Handle errors explicitly.** Add Error Trigger nodes and route failures to a Slack channel or email. Don't wait to discover that your automation broke a week ago.",
      },
      {
        h2: 'n8n vs Zapier vs Make: Which Should You Use?',
        body: "| Feature | n8n | Zapier | Make |\n|---------|-----|--------|------|\n| Free tier | ✅ Self-hosted | 🟡 Limited | 🟡 Limited |\n| Integrations | 400+ | 6,000+ | 1,000+ |\n| Code nodes | ✅ JavaScript | ❌ No | 🟡 Limited |\n| AI agents | ✅ Native | 🟡 Basic | 🟡 Basic |\n| Self-hosting | ✅ Yes | ❌ No | ❌ No |\n| Learning curve | Medium | Easy | Medium |\n\n**Use n8n if:** you want maximum power, need AI agent capabilities, or want to avoid per-action pricing.\n**Use Zapier if:** you need the widest integration library and want the simplest possible setup.\n**Use Make if:** you're between Zapier and n8n in terms of complexity needs.",
      },
      {
        h2: 'Building AI Agents with n8n',
        body: "n8n's AI Agent node lets you build autonomous agents that can reason, use tools, and complete multi-step tasks without manual intervention. Here's a simple AI email assistant:\n\n**Step 1:** Trigger: Gmail node watches for new emails matching a filter (e.g., from @support.com)\n\n**Step 2:** AI Agent node: System prompt: 'You are a customer support agent for [Company]. Categorize this email as: billing, technical, feature request, or complaint. Draft a response.' Connect it to an OpenAI or Claude credential.\n\n**Step 3:** Tool nodes: Give the agent access to a knowledge base (vector store), a CRM lookup, and a draft email tool.\n\n**Step 4:** Output: Route based on category, create a ticket in your helpdesk, send the draft for human review.\n\nThis is a real AI agent — it reads, reasons, looks up information, and drafts a response, all without human input. Build from this foundation.",
      },
    ],
    faqs: [
      { q: 'Is n8n really free?', a: 'n8n is free when self-hosted. You pay for your own server (as little as $5–6/month on DigitalOcean or Hetzner). The n8n cloud plan starts at $20/month if you want fully managed hosting.' },
      { q: 'Do I need to code to use n8n?', a: 'No — n8n has a visual drag-and-drop interface that requires no coding. The Code node lets you write JavaScript for advanced transformations, but it\'s optional.' },
      { q: 'How does n8n compare to Zapier?', a: 'n8n is more powerful and cheaper (free when self-hosted) but has fewer integrations (400+ vs Zapier\'s 6,000+). n8n is better for complex automations and AI agents; Zapier is better for simple app-to-app connections.' },
      { q: 'What can I build with n8n?', a: 'Email automation, social media scheduling, lead qualification bots, customer support triaging, data synchronization, report generation, AI agents, web scraping pipelines, and almost anything else involving connecting apps or processing data.' },
      { q: 'How long does it take to learn n8n?', a: 'You can build a simple automation in 30 minutes. Becoming proficient takes 10–20 hours of practice. Building production AI agents is an advanced skill requiring 40+ hours of deliberate learning.' },
    ],
  },

  'how-to-use-midjourney': {
    relatedTools: [
      { label: 'Best AI Image Generators', href: '/tools/ai-image-generators' },
      { label: 'AI Design Tools', href: '/tools/ai-design-tools' },
      { label: 'AI Video Generators', href: '/tools/ai-video-generators' },
    ],
    relatedCourse: { label: 'Best Midjourney Courses 2026', href: '/courses/midjourney' },
    sections: [
      {
        h2: 'What is Midjourney and Why is it the Best AI Image Generator?',
        body: "Midjourney is a text-to-image AI that generates stunning, professional-quality artwork from written descriptions. In 2026, Midjourney V6 produces images that rival photography and professional illustration — used by designers, architects, game studios, and marketers worldwide.\n\nWhy Midjourney over DALL-E 3, Adobe Firefly, or Stable Diffusion? Because it consistently produces the most aesthetically impressive, professionally useful images. DALL-E 3 is better at following precise instructions and rendering text. Stable Diffusion is free and endlessly customizable. But for raw visual quality and artistic impact, Midjourney leads — which is why professional designers use it over the alternatives.",
      },
      {
        h2: 'How to Get Started with Midjourney',
        body: "Midjourney runs through Discord. Here's how to start:\n\n**Step 1:** Go to midjourney.com and click 'Join the Beta' — this takes you to the Midjourney Discord server.\n\n**Step 2:** Subscribe. Midjourney has no free plan in 2026. Plans start at $10/month (200 generations). Go to midjourney.com/account to subscribe.\n\n**Step 3:** Find a newbies channel. In the Midjourney Discord server, find any channel labeled 'newbies' — these are public channels where you can generate images.\n\n**Step 4:** Type your first prompt:\n```\n/imagine prompt: a serene Japanese garden at dawn, cherry blossoms, photorealistic, soft morning light\n```\n\n**Step 5:** Wait 30–60 seconds. Midjourney generates 4 image options. Click U1–U4 to upscale (enlarge and add detail) or V1–V4 to generate variations.",
      },
      {
        h2: 'Best Midjourney Prompting Tips',
        body: "**1. Be specific about style.** Instead of 'a mountain landscape,' try 'a mountain landscape, cinematic photography, golden hour, Sony A7III, 85mm f/1.4.' Specifying the style, camera, and lighting dramatically improves results.\n\n**2. Use aspect ratios.** Add `--ar 16:9` for widescreen, `--ar 9:16` for vertical (social media), `--ar 1:1` for square. Default is square.\n\n**3. Control stylization.** `--stylize 0` produces literal interpretations. `--stylize 1000` adds maximum artistic flair. Default is 100. Experiment with this parameter.\n\n**4. Reference real styles.** 'in the style of Wes Anderson films' or 'Studio Ghibli aesthetic' or 'Bauhaus graphic design' guides Midjourney toward specific visual languages.\n\n**5. Use negative prompts.** Add `--no text, watermark, blurry, ugly` to exclude unwanted elements.\n\n**6. Character reference.** `--cref [image URL]` maintains consistent character appearance across multiple generations.",
      },
      {
        h2: 'Common Midjourney Mistakes to Avoid',
        body: "**Mistake 1: Vague prompts.** 'A beautiful landscape' gives you something generic. Add specific details: lighting conditions, time of day, weather, artistic style, and camera/medium.\n\n**Mistake 2: Overloading prompts.** More isn't always better. 15-word prompts often outperform 50-word prompts because Midjourney has to balance everything. Focus on the 3–5 most important elements.\n\n**Mistake 3: Ignoring the seed parameter.** If you generate an image you love, note the seed number (shown in the URL or by clicking the reaction emoji on the image). You can recreate or vary it using `--seed [number]`.\n\n**Mistake 4: Not varying and upscaling.** The initial 4-image grid is just the beginning. Use Vary (Subtle) and Vary (Strong) to explore variations, and always upscale before downloading for final use.",
      },
      {
        h2: 'Midjourney vs DALL-E 3 vs Stable Diffusion',
        body: "| Feature | Midjourney | DALL-E 3 | Stable Diffusion |\n|---------|-----------|----------|------------------|\n| Image quality | ✅ Best overall | ✅ Excellent | 🟡 Varies by model |\n| Prompt accuracy | 🟡 Good | ✅ Best | 🟡 Good |\n| Text in images | ❌ Poor | ✅ Excellent | 🟡 OK |\n| Price | $10+/month | Included in ChatGPT | Free (self-hosted) |\n| Commercial rights | ✅ Paid plans | ✅ Yes | ✅ Yes |\n| Customization | 🟡 Parameters only | 🟡 Limited | ✅ Maximum |\n\n**Use Midjourney for:** artistic images, design mockups, marketing visuals, and anything where aesthetic quality is the priority.\n**Use DALL-E 3 for:** images that need to include specific text, precise prompt following, or integration with ChatGPT.\n**Use Stable Diffusion for:** maximum control, custom fine-tuned models, or when you need a free/unlimited option.",
      },
      {
        h2: 'Is Midjourney Worth the Price?',
        body: "For designers and creative professionals: absolutely. At $10–30/month, Midjourney replaces stock photo subscriptions, reduces outsourced illustration costs, and speeds up concept visualization enormously. The ROI calculation is obvious.\n\nFor casual users: the $10/month basic plan (200 images) is reasonable if you use it regularly. The lack of a free tier is frustrating — try Ideogram or Microsoft Designer for free testing before committing.\n\nFor businesses using images in marketing: the productivity gain from generating and iterating on visuals in minutes (rather than days) more than justifies the cost.",
      },
    ],
    faqs: [
      { q: 'How to use Midjourney for free?', a: 'Midjourney no longer offers a free trial as of 2024. Alternatives with free tiers: Ideogram (free tier, excellent text rendering), Microsoft Designer (free, DALL-E powered), and Leonardo AI (free tier with daily credits).' },
      { q: 'How do I write good Midjourney prompts?', a: 'Describe the subject, style, lighting, medium, and mood. Use specific references (photography style, art movements, named artists). Keep it focused — 5–10 key descriptors usually outperform very long prompts.' },
      { q: 'Can I use Midjourney images commercially?', a: 'Yes, on all paid plans. Commercial use requires a paid subscription. Check midjourney.com/terms for the most current policy.' },
      { q: 'What is the best Midjourney plan?', a: 'The Standard plan ($30/month) with unlimited relaxed generations is the best value for regular users. The Basic plan ($10/month, 200 images) is fine for casual use.' },
      { q: 'How is Midjourney V6 different from V5?', a: 'V6 has significantly better photorealism, more accurate prompt following, improved text rendering in images, and better handling of complex scenes. Always use V6 (or the latest version) by default.' },
    ],
  },

  'how-to-use-perplexity-ai': {
    relatedTools: [
      { label: 'AI Research Tools', href: '/tools/ai-research-tools' },
      { label: 'Best AI Chatbots', href: '/tools/ai-chatbots' },
      { label: 'AI Writing Tools', href: '/tools/ai-writing-tools' },
    ],
    sections: [
      {
        h2: 'What is Perplexity AI and How is it Different?',
        body: "Perplexity AI is an AI-powered search engine that answers questions with cited sources — combining the conversational ability of ChatGPT with the source transparency of academic research. Every answer includes numbered citations linking to the original sources, so you can verify claims instantly.\n\nWhat makes it genuinely different from Google and other AI tools? Perplexity searches the web in real time for every query, synthesizes the top sources, and presents a coherent answer with references. You get the answer AND the sources in one place — no clicking through ten tabs. For research, fact-checking, and staying current on fast-moving topics, it's the most efficient tool available.",
      },
      {
        h2: 'How to Get Started with Perplexity AI',
        body: "**Step 1:** Go to perplexity.ai — no account required to start. Click the search bar and type your question naturally.\n\n**Step 2:** Read the answer and check the source numbers. Every claim is linked to a numbered citation in the sidebar. Click any number to see the original source.\n\n**Step 3:** Use the Follow-up feature. After an answer, type follow-up questions in the same thread — Perplexity maintains context and searches for more specific information.\n\n**Step 4:** Use Focus modes. Click the search settings icon to choose: All, Academic, Writing, Wolfram Alpha (math), YouTube, Reddit. Academic focuses on scholarly sources; Reddit focuses on community opinions.\n\n**Step 5:** Create a free account to save searches, access search history, and get more Pro queries if you're on the free plan.",
      },
      {
        h2: 'Best Perplexity AI Tips and Tricks',
        body: "**1. Use it for current events.** Perplexity searches the web in real time, so it has no knowledge cutoff. For questions about what happened yesterday, recent product launches, or current prices, Perplexity beats ChatGPT and Claude.\n\n**2. Academic mode for research.** Switching to Academic focus limits results to peer-reviewed papers and academic sources. Invaluable for literature reviews and evidence-based research.\n\n**3. Ask for Wolfram Alpha computation.** Complex math, unit conversions, statistics, and scientific data can be routed through Wolfram Alpha for verified numerical answers.\n\n**4. Use it to fact-check AI output.** Copy a claim from ChatGPT and ask Perplexity to verify it. Since Perplexity cites sources, you can see whether the claim is supported by real sources.\n\n**5. Spaces for ongoing research projects.** Perplexity Pro includes Spaces — shared research areas where you can collect searches, add your own documents, and collaborate with teammates.",
      },
      {
        h2: 'When to Use Perplexity vs Google vs ChatGPT',
        body: "| Scenario | Best Tool | Why |\n|----------|-----------|-----|\n| Current news/events | Perplexity | Real-time web search with sources |\n| Complex question requiring synthesis | Perplexity or ChatGPT | Perplexity cites; ChatGPT reasons |\n| Creative writing | ChatGPT or Claude | Not Perplexity's strength |\n| Code debugging | ChatGPT or Claude | Perplexity understands but doesn't excel |\n| Research with citations needed | Perplexity | Built-in source attribution |\n| Finding specific websites | Google | Perplexity answers, doesn't browse |\n| Long document analysis | Claude | 200k context window |\n\n**My daily workflow:** Perplexity for research and current events, ChatGPT for writing and coding, Claude for long documents.",
      },
      {
        h2: 'Perplexity Pro vs Free: Is It Worth $20/Month?',
        body: "Perplexity Pro ($20/month) adds: unlimited Pro searches (vs 5/day free), access to GPT-4o, Claude 3.5 Sonnet, and Gemini as the answer model (not just Perplexity's default), file uploads for document Q&A, Spaces for collaborative research, and a Perplexity API for developers.\n\nFor researchers, journalists, and power users: yes. The ability to switch to Claude or GPT-4o for harder questions is valuable, and the unlimited searches make it genuinely useful as a daily driver. For casual users: the free tier is generous. 5 Pro searches per day covers most needs.",
      },
    ],
    faqs: [
      { q: 'How to use Perplexity AI for free?', a: 'Go to perplexity.ai — no account needed. Free users get 5 Pro searches per day and unlimited standard searches. Create an account to save your search history.' },
      { q: 'Is Perplexity AI better than Google?', a: 'For questions requiring synthesis and explanation, yes. For finding specific websites, images, and shopping results, Google is better. Most people use both — Perplexity for research, Google for navigation.' },
      { q: 'Does Perplexity always show accurate information?', a: 'More reliably than ChatGPT because every claim is linked to a source you can verify. But sources can be wrong or misleading. Always check the linked sources for critical decisions.' },
      { q: 'Can Perplexity access the internet in real time?', a: 'Yes — this is its core differentiator. Perplexity searches the web for every query, so its information is current (within hours, not months).' },
      { q: 'What is Perplexity AI best for?', a: 'Research requiring cited sources, current events and recent information, fact-checking claims from other AI tools, academic literature search, and market research with up-to-date data.' },
    ],
  },

  'automate-business-with-ai': {
    relatedTools: [
      { label: 'AI Automation Tools', href: '/tools/ai-automation-tools' },
      { label: 'AI Agent Builders', href: '/tools/ai-agent-builders' },
      { label: 'AI Productivity Tools', href: '/tools/ai-productivity-tools' },
    ],
    sections: [
      {
        h2: 'How to Identify What to Automate First',
        body: "The biggest mistake when automating with AI is starting with the wrong thing. Don't automate a task just because it can be automated — automate the tasks that cost you the most time and happen most frequently.\n\nHere's the framework I use: Make a list of every repetitive task you or your team does. For each one, estimate: how often does it happen per week? How long does it take each time? Multiply these numbers to get 'hours per week consumed.' Then estimate automation difficulty on a 1–5 scale (1 = easy, 5 = hard). The best candidates are high hours × low difficulty.\n\nCommon high-ROI automation targets: email triage and drafting (typically 2–4 hours/week), social media scheduling (1–3 hours/week), report generation from data (1–4 hours/week), customer support responses (varies widely), and invoice/document processing.",
      },
      {
        h2: 'The Best AI Automation Tools in 2026',
        body: "**n8n** — The most powerful option. Self-hosted (free) or cloud ($20/month). 400+ integrations, native AI agent support, handles complex logic. Best for technical users and serious automations.\n\n**Zapier** — The easiest option. 6,000+ integrations, extremely beginner-friendly. No coding required. Pricing scales with usage ($20–100+/month). Best for simple app-to-app connections.\n\n**Make (formerly Integromat)** — Middle ground between n8n and Zapier. Better at complex multi-step flows than Zapier, more user-friendly than n8n. $9–29/month.\n\n**ChatGPT + plugins/actions** — For content and communication automation, building Custom GPTs that handle specific tasks can replace entire workflows without a separate automation tool.\n\n**Activepieces** — Open-source n8n alternative that's somewhat easier to set up. Good free tier.",
      },
      {
        h2: 'Step-by-Step: Your First Business Automation',
        body: "Let's build the automation most businesses benefit from immediately: an AI-powered email responder for common inquiries.\n\n**Step 1:** Open n8n (or Zapier). Create a new workflow.\n\n**Step 2:** Add an Email trigger — Gmail or Outlook node that fires when a new email arrives matching certain criteria (subject contains 'inquiry' or 'question', or emails from specific domains).\n\n**Step 3:** Add an AI node (OpenAI or Claude). System prompt: 'You are a customer service assistant for [Business Name]. Categorize this email into: General Inquiry, Pricing, Technical Support, or Complaint. Then draft a helpful response based on the following knowledge base: [paste your FAQ].'\n\n**Step 4:** Add a conditional branch. High-confidence responses go directly to a Gmail draft. Low-confidence or complaint emails route to Slack with a summary for human review.\n\n**Step 5:** Test with 10 real emails. Review accuracy. Refine the AI prompt based on what it gets wrong.\n\nTime to build: 2–3 hours. Time saved per week: 3–8 hours.",
      },
      {
        h2: '10 High-ROI Business Automations to Build',
        body: "**1. Lead qualification bot** — New form submission → AI scores lead → routes to CRM with priority tag → notifies sales team via Slack.\n\n**2. Content calendar execution** — Google Sheets content plan → AI generates drafts → human approves → auto-posts to social platforms on schedule.\n\n**3. Invoice processing** — Email with PDF attachment → AI extracts vendor, amount, date → logs to Google Sheets → creates draft in accounting software.\n\n**4. Meeting notes to actions** — Otter.ai transcript → AI summarizes and extracts action items → creates tasks in project management tool → sends summary to attendees.\n\n**5. Support ticket categorization** — New ticket → AI categorizes and prioritizes → assigns to correct team → generates suggested response.\n\n**6. Competitive intelligence** — Daily scrape of competitor websites and social → AI summarizes changes → weekly report delivered by email.\n\n**7. Recruitment screening** — Resume upload → AI scores against job requirements → shortlisted candidates notified → rejected candidates receive polite decline.\n\n**8. Report generation** — Scheduled pull from analytics tools → AI writes narrative summary → PDF generated → emailed to stakeholders.",
      },
      {
        h2: 'Common Automation Mistakes and How to Avoid Them',
        body: "**Mistake 1: Automating before you understand the manual process.** You can't automate what you don't understand. Document the manual steps first, then automate.\n\n**Mistake 2: Not handling errors.** Automations break. APIs change. Data formats shift. Build error notifications into every workflow so you find out when something breaks — not a week later when a client complains.\n\n**Mistake 3: Over-automating customer-facing interactions.** Customers can tell when they're talking to a bot. Use AI to assist humans (suggest responses, flag priority issues) rather than replace them entirely for complex situations.\n\n**Mistake 4: Not measuring results.** Define what success looks like before building. Time saved, error rate reduced, cost per output. Measure after 30 days.\n\n**Mistake 5: Building too much at once.** Start with one automation, run it for two weeks, optimize it, then build the next. Trying to automate everything simultaneously produces chaos.",
      },
    ],
    faqs: [
      { q: 'What is the easiest way to automate my business with AI?', a: 'Start with Zapier (easiest) or n8n (more powerful, free self-hosted). Identify your most time-consuming repetitive task and automate that one thing first. Email triage and social media scheduling are common first wins.' },
      { q: 'How much does business automation cost?', a: 'n8n is free when self-hosted (pay ~$6/month for a VPS). Zapier starts at $20/month. Most businesses spend $50–200/month total on automation tools and see 10–30 hours/week saved, making ROI extremely positive.' },
      { q: 'Do I need technical skills to automate my business?', a: 'Not for basic automations — Zapier requires no coding at all. n8n needs some technical comfort but not full programming skills. For complex AI agents and custom integrations, some JavaScript knowledge helps significantly.' },
      { q: 'What business processes should I automate first?', a: 'Prioritize: high frequency (happens daily), high time cost (takes 30+ minutes), and low judgment required (follows clear rules). Email sorting, data entry, report generation, and social media posting are ideal starting points.' },
      { q: 'Can AI automation replace my employees?', a: 'AI automation replaces tasks, not roles. It handles the repetitive, rules-based work so your team can focus on judgment, relationships, and creative work. Most businesses find that automation allows the same team to do more, rather than reducing headcount.' },
    ],
  },

  'make-money-with-ai-tools': {
    relatedTools: [
      { label: 'AI Writing Tools', href: '/tools/ai-writing-tools' },
      { label: 'AI Image Generators', href: '/tools/ai-image-generators' },
      { label: 'AI Automation Tools', href: '/tools/ai-automation-tools' },
    ],
    sections: [
      {
        h2: '10 Real Ways to Make Money with AI Tools in 2026',
        body: "These are methods I've either used myself or verified through people who are actively earning with them. No theory, no hype — just specific paths with realistic income ranges.\n\n**1. AI Content Writing Freelancing** ($500–$5,000/month): Write blog posts, marketing copy, and articles using ChatGPT or Claude. The key is adding genuine editorial value — research, fact-checking, unique perspective — not just prompting and pasting. Platforms: Upwork, Contra, direct clients.\n\n**2. AI Image Creation for Clients** ($500–$3,000/month): Create AI art and images for businesses — website graphics, social media content, book covers, product mockups. Midjourney + Photoshop for cleanup.\n\n**3. AI Automation Agency** ($2,000–$15,000/month): Build n8n or Zapier automations for businesses. This is the highest-ceiling option on this list. A single enterprise client can be worth $5,000+.\n\n**4. Prompt Library Sales** ($100–$2,000/month): Sell curated prompt packs on Gumroad, PromptBase, or Etsy. High-volume, low-effort passive income once the library is built.\n\n**5. AI Tutoring and Courses** ($500–$5,000/month): Teach others to use AI tools. Create courses on Udemy, Teachable, or Gumroad. Growing demand as businesses want employees trained.",
      },
      {
        h2: '5 More Ways to Earn with AI',
        body: "**6. YouTube and Content Creation** ($500–$10,000+/month): AI dramatically reduces content production time. Use AI for scripts, thumbnails (Midjourney), editing assistance (Descript), and research (Perplexity). Build audience around AI tool reviews and tutorials.\n\n**7. AI-Powered Dropshipping/Print on Demand** ($300–$3,000/month): Generate unique designs with Midjourney → sell on Redbubble, Etsy, Merch by Amazon. Low effort once the workflow is established.\n\n**8. Chatbot Development** ($1,000–$10,000/project): Build custom ChatGPT or Claude-powered chatbots for businesses — customer service, lead qualification, internal knowledge base Q&A. Charge per project or monthly retainer.\n\n**9. AI SEO Agency** ($1,500–$8,000/month): Combine AI content generation with SEO expertise to rank client websites. High demand because most businesses know they need SEO but can't afford traditional agency rates.\n\n**10. SaaS Development with AI** ($0–unlimited): Build a niche AI tool that wraps OpenAI or Claude APIs with a specialized interface. Even a simple tool with a specific use case can reach $10,000+ MRR. Requires more technical skill but has the highest ceiling.",
      },
      {
        h2: 'How to Get Your First AI Client in 30 Days',
        body: "**Week 1: Choose one service.** Pick one of the methods above — the one that best matches your existing skills and interests. Don't try to offer everything.\n\n**Week 2: Build 3 portfolio pieces.** Create samples of your best work without a client. For content writing: write 3 articles. For automation: build 2 demo workflows. For image creation: generate a gallery of 20 images.\n\n**Week 3: Post consistently and do outreach.** LinkedIn posts demonstrating your work + direct outreach to 20 businesses per day on Upwork or LinkedIn. Your pitch: specific result + how you'd achieve it for them.\n\n**Week 4: Close your first client.** Offer a small paid project ($50–$200) to reduce their risk. Over-deliver massively. Ask for a testimonial immediately after delivery.\n\nRealistic first month income: $0–$500. Realistic month 3: $1,000–$3,000. Realistic month 6: $3,000–$8,000 for dedicated effort.",
      },
      {
        h2: 'The Best AI Tools for Making Money',
        body: "**For Content Writing:**\n- ChatGPT Plus ($20/month) — versatile, best overall\n- Claude Pro ($20/month) — best writing quality\n- Grammarly Business ($15/month) — editing\n\n**For Image Creation:**\n- Midjourney ($10–30/month) — highest quality\n- Adobe Firefly (Creative Cloud) — commercial safe\n\n**For Automation Services:**\n- n8n (free self-hosted) — build and sell automations\n- Make.com ($9/month) — client demos\n\n**For Content Creation:**\n- ElevenLabs ($5/month) — AI voiceover\n- Descript ($15/month) — AI video editing\n- Canva Pro ($15/month) — graphics\n\n**Total monthly tooling cost for a full setup: $70–$120/month.** At even $1,000/month income, that's an 8–14× ROI on tools.",
      },
      {
        h2: 'Common Mistakes That Kill AI Income',
        body: "**Mistake 1: Not adding human value.** The people failing with AI income are the ones prompting and pasting without editing. The people succeeding are using AI as a multiplier for their own expertise — fact-checking, customizing, adding perspective. Clients pay for quality output, not for the use of a tool.\n\n**Mistake 2: Underpricing.** The most common mistake is charging 'AI prices' (very low) instead of charging for the value delivered. If your AI automation saves a business 20 hours per week, charge based on that value — not on how long it took you to build.\n\n**Mistake 3: Trying to scale before finding what works.** Find one client, deliver exceptional value, get a testimonial, then scale what worked. Trying to serve 10 clients before you know your own workflow is a recipe for mediocre work and bad reviews.",
      },
    ],
    faqs: [
      { q: 'How much can you realistically make with AI tools?', a: 'Part-time ($500–$2,000/month): achievable in 2–3 months with consistent effort. Full-time ($3,000–$10,000/month): takes 6–12 months of building expertise and client base. Top earners ($10,000+/month): running agencies or SaaS products, typically 12+ months in.' },
      { q: 'What is the easiest way to make money with AI?', a: 'Selling prompt libraries on Gumroad or Etsy is the lowest barrier to entry. AI content writing freelancing on Upwork has the fastest path to first income. Both can generate $500–$1,000/month with 2–4 weeks of effort.' },
      { q: 'Do I need technical skills to make money with AI?', a: 'Not for content writing, image creation, or social media management. Technical skills (Python, JavaScript) significantly expand your options into automation agencies, chatbot development, and SaaS — which are the highest-earning opportunities.' },
      { q: 'Is it legal to sell AI-generated content and images?', a: 'Generally yes — but check the terms of service for each specific tool. Midjourney allows commercial use on paid plans. OpenAI allows commercial use of ChatGPT outputs. Always be transparent with clients that AI is part of your workflow.' },
      { q: 'What AI skills are most in demand for making money?', a: 'Prompt engineering, AI automation (n8n/Zapier), AI content creation, custom GPT development, and AI chatbot building are the most consistently in-demand skills in 2026.' },
    ],
  },

  'best-ai-prompts-guide': {
    relatedTools: [
      { label: 'Best AI Writing Tools', href: '/tools/ai-writing-tools' },
      { label: 'AI Coding Tools', href: '/tools/ai-coding-tools' },
      { label: 'AI Research Tools', href: '/tools/ai-research-tools' },
    ],
    sections: [
      {
        h2: 'What Makes a Prompt Actually Work?',
        body: "Most people use AI tools at 30% of their capability because they write weak prompts. A strong prompt has four components: **context** (who you are, what situation you're in), **task** (exactly what you want), **format** (how you want the output structured), and **constraints** (length, tone, what to avoid).\n\nWeak prompt: 'Write an email to my boss.'\nStrong prompt: 'Write an email to my manager requesting a meeting to discuss my Q1 performance review. Professional tone, slightly formal. I want to express that I've exceeded my targets and would like to discuss compensation. Keep it under 150 words, no fluff.'\n\nThe second prompt produces something usable on the first try. The first produces something you'll spend ten minutes editing. This guide gives you 50 proven prompts you can use immediately.",
      },
      {
        h2: 'Writing Prompts (1–15)',
        body: "**1. Blog post outline:**\n'Create a detailed outline for a [word count]-word blog post about [topic] targeting [audience]. Include H2 headings, key points for each section, and one example or statistic per section.'\n\n**2. Email draft:**\n'Write a [type] email to [recipient] about [topic]. Tone: [professional/friendly/urgent]. Key points to include: [list]. Maximum [word count] words.'\n\n**3. Content rewrite:**\n'Rewrite the following content to sound more [tone]. Keep all the facts but improve the flow and make it more engaging for [audience]: [paste content]'\n\n**4. Social media captions:**\n'Write 5 LinkedIn post captions for [topic]. Each should be under 150 words, include a hook in the first line, and end with a question to drive comments. Conversational, not corporate.'\n\n**5. Press release:**\n'Write a press release announcing [news/event]. Include: headline, dateline, opening paragraph with the 5 Ws, 2 supporting paragraphs, a quote from [person, title], and boilerplate. AP style.'\n\n**6. Landing page copy:**\n'Write landing page copy for [product]. Headline: benefit-focused. Subheadline: clarify the offer. 3 bullet-point features (each starting with a verb). CTA: [desired action]. Speak to [customer pain point].'\n\n**7. Product description:**\n'Write a product description for [product name] targeting [customer]. Highlight [top 3 benefits]. Include [key spec]. SEO keyword to include naturally: [keyword]. Length: 150 words.'\n\n**8. Cold outreach:**\n'Write a cold outreach email for [service I offer] to [target customer]. Lead with their pain point, not my solution. One specific example of results. CTA: 15-minute call. Under 120 words.'\n\n**9. About page bio:**\n'Write a first-person bio for my About page. Background: [summary]. What I do: [description]. What makes me different: [differentiator]. Tone: [professional but personable]. 200 words.'\n\n**10–15:** Newsletter intro, customer testimonial template, refund policy, FAQ section, job description, and performance review template (save space, but include as numbered items for SEO).",
      },
      {
        h2: 'Coding Prompts (16–30)',
        body: "**16. Debug code:**\n'The following [language] code produces [error/incorrect output]. Identify the bug, explain why it occurs, and provide the corrected code with comments explaining the fix: [paste code]'\n\n**17. Code review:**\n'Review the following code for: bugs, security vulnerabilities, performance issues, and code style. Provide a prioritized list of issues with explanations and suggested fixes: [paste code]'\n\n**18. Write a function:**\n'Write a [language] function that [does what]. Input: [describe input]. Output: [describe output]. Requirements: [any constraints]. Include error handling and comments.'\n\n**19. Explain code:**\n'Explain what this code does in plain English. Assume the reader understands programming concepts but is not familiar with this specific codebase. Note any potential issues: [paste code]'\n\n**20. Convert code:**\n'Convert this [source language] code to [target language]. Maintain the same functionality and logic. Adapt idioms and patterns to match [target language] conventions: [paste code]'\n\n**21. SQL query:**\n'Write a SQL query that [describes what data to retrieve/transform]. Database: [describe schema briefly]. Optimize for performance. Include comments explaining joins and filters.'\n\n**22. API integration:**\n'Write [language] code to call the [API name] API endpoint [endpoint URL]. Authentication: [auth method]. Parse the response and extract [specific fields]. Handle rate limiting and errors gracefully.'\n\n**23. Unit tests:**\n'Write comprehensive unit tests for the following function in [testing framework]. Cover: happy path, edge cases, and error conditions. Include setup and teardown where needed: [paste function]'\n\n**24. Regex pattern:**\n'Write a regex pattern that matches [describe what it should match]. Provide: the pattern, an explanation of each component, example matches, and example non-matches.'\n\n**25–30:** Database schema design, system architecture diagram (described in text), Git commit message, Docker configuration, CI/CD pipeline, and README file.",
      },
      {
        h2: 'Business and Research Prompts (31–50)',
        body: "**31. SWOT analysis:**\n'Conduct a SWOT analysis for [company/product/idea]. Be specific and include at least 3 items per quadrant. Focus on [industry/context].'\n\n**32. Competitive research:**\n'Compare [Company A] and [Company B] across these dimensions: [pricing, features, target market, strengths, weaknesses]. Present as a structured comparison table with a brief narrative summary.'\n\n**33. Business plan section:**\n'Write the Executive Summary for a business plan for [business description]. Include: problem, solution, market size, revenue model, and funding ask. Under 400 words. Investors as audience.'\n\n**34. Research summary:**\n'Summarize the key findings from the following research/report. Structure as: Main conclusion (2-3 sentences), Key findings (5 bullet points), Implications for [industry/audience], and Questions the research raises: [paste content]'\n\n**35. Decision framework:**\n'I need to decide between [Option A] and [Option B] for [context]. Help me think through this using a structured decision framework. Consider: short-term costs, long-term value, risks, and what I might be missing.'\n\n**36. Meeting agenda:**\n'Create a meeting agenda for a [duration] [type of meeting] with [attendees]. Goals: [list goals]. Include time allocations, who leads each item, and a brief pre-meeting reading list.'\n\n**37. Customer persona:**\n'Create a detailed customer persona for [product/service]. Include: demographics, job title, goals, pain points, buying behavior, objections, preferred channels, and a day-in-the-life description.'\n\n**38–50:** Financial model assumptions, pitch deck outline, interview questions, survey design, training material, risk assessment, project proposal, vendor evaluation matrix, employee handbook section, grant application section, and market entry strategy.",
      },
      {
        h2: 'Advanced Prompting Techniques',
        body: "**Chain-of-thought prompting:**\nAdd 'Think step by step' or 'Let's think through this carefully' to complex reasoning questions. This triggers more methodical, accurate responses and dramatically reduces errors on math and logic problems.\n\n**Role assignment:**\n'You are a [specific expert role]. [Question].' E.g., 'You are a senior tax attorney with 20 years of experience advising Fortune 500 companies. What are the three most overlooked tax strategies for small business owners?'\n\n**Few-shot examples:**\nShow the AI 2–3 examples of exactly what you want before asking for the actual output. This is the fastest way to get a specific format or style consistently.\n\n**Output specification:**\nBe explicit: 'Format your response as a JSON object with the following keys: title, summary, key_points (array of 5), action_items (array of 3).'\n\n**Iterative refinement:**\nTreat every AI conversation as a collaboration. After the first response: 'Good. Now make the tone more [X],' 'Remove [Y],' 'Expand the section on [Z] with a specific example.' You'll get dramatically better results.",
      },
    ],
    faqs: [
      { q: 'What are the best AI prompts for beginners?', a: 'Start with simple, specific prompts: email drafting, content summarization, and question answering. Focus on adding context (who you are, what you need) and specifying format (bullets, paragraphs, table). The prompts in sections 1–10 above are the best starting point.' },
      { q: 'Do prompts work differently on ChatGPT vs Claude?', a: 'Mostly similar principles apply, but Claude responds especially well to XML-tagged prompts and handles very long context better. ChatGPT responds well to conversational prompts and role assignment. Test your best prompts on both.' },
      { q: 'Can I sell AI prompts?', a: 'Yes — prompt libraries sell well on Gumroad, PromptBase, and Etsy. Niche prompt packs (for copywriters, for lawyers, for teachers) sell better than generic collections. Prices range from $5 to $50 per pack.' },
      { q: 'How long should AI prompts be?', a: 'As long as they need to be to be specific — but no longer. Short, vague prompts produce generic output. Long, specific prompts produce targeted output. A 50-word prompt that covers context, task, format, and constraints outperforms a 5-word prompt every time.' },
      { q: 'What is prompt engineering?', a: 'Prompt engineering is the practice of designing AI inputs to reliably produce high-quality outputs. It covers techniques like chain-of-thought, few-shot examples, role assignment, and iterative refinement. The best free resource is promptingguide.ai.' },
    ],
  },
}

function getDefaultContent(guide: Guide): GuideContent {
  return {
    relatedTools: [
      { label: 'AI Writing Tools', href: '/tools/ai-writing-tools' },
      { label: 'AI Automation Tools', href: '/tools/ai-automation-tools' },
      { label: 'AI Research Tools', href: '/tools/ai-research-tools' },
    ],
    sections: [
      { h2: `What Is ${guide.topic} and Why Does It Matter?`, body: `${guide.description} In 2026, mastering ${guide.topic.toLowerCase()} gives you a significant advantage over people who haven't yet learned to use AI effectively. This guide cuts through the noise and gives you the practical knowledge you need.` },
      { h2: 'Step-by-Step Getting Started', body: 'Start by identifying your primary use case — the one task where AI would save you the most time. Focus on this first rather than trying to learn everything at once. Set up your accounts, run through the basics, and complete one real task using AI before moving on.' },
      { h2: 'Key Tips and Techniques', body: 'The professionals who get the most value from AI share a common approach: they use AI to amplify their expertise, not replace their thinking. They provide clear context, iterate on outputs, and apply their own judgment before using AI-generated content. Start with this mindset and the specific techniques will make sense naturally.' },
      { h2: 'Common Mistakes to Avoid', body: 'The most expensive mistake is using AI output without reviewing it. AI tools produce plausible-sounding content that can be subtly wrong. Build review into your workflow as a non-negotiable step. The second mistake is tool-hopping — stick with one tool for 60 days before evaluating alternatives.' },
      { h2: 'What Results to Expect', body: 'Most people see meaningful productivity improvements within one to two weeks of consistent use. After thirty days, AI assistance typically becomes an indispensable part of the workflow. After ninety days, users report that they cannot imagine going back to their pre-AI approach for the tasks they\'ve integrated AI into.' },
    ],
    faqs: [
      { q: `What is the best tool for ${guide.topic.toLowerCase()}?`, a: 'The best tool depends on your specific use case. ChatGPT and Claude handle most tasks well. For specialized use cases, check the relevant tools pages on AIProSpace for ranked and reviewed options.' },
      { q: 'How long does it take to get results?', a: 'Most people see meaningful productivity improvements within 1–2 weeks of consistent practice. The learning curve is steepest in the first few days as you develop intuition for effective prompting.' },
      { q: 'Do I need technical skills?', a: 'No technical background is required for most AI tools. All of the major AI assistants are designed for non-technical users.' },
      { q: 'Is this free to learn?', a: 'Most major AI tools have free tiers that are sufficient for learning and basic use. All guides on AIProSpace are completely free.' },
      { q: 'Where can I learn more?', a: 'Check the related courses linked on this page for structured learning, and explore the tools section to find the right tools for your specific needs.' },
    ],
  }
}

export async function generateStaticParams() {
  return GUIDES.map(g => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = GUIDES.find(g => g.slug === params.slug)
  if (!guide) return {}
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `https://aiprospace.com/guides/${guide.slug}` },
    openGraph: { title: guide.metaTitle, description: guide.metaDescription, type: 'article' },
  }
}

export default function GuideDetailPage({ params }: Props) {
  const guide = GUIDES.find(g => g.slug === params.slug)
  if (!guide) notFound()

  const content = GUIDE_CONTENT[params.slug] || getDefaultContent(guide)
  const others = GUIDES.filter(g => g.slug !== params.slug)

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.description,
    step: content.sections.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.h2,
      text: s.body.slice(0, 200),
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{
          width: 240, flexShrink: 0, borderRight: '1px solid var(--border)',
          padding: '20px 12px', position: 'sticky', top: 97,
          height: 'calc(100vh - 97px)', overflowY: 'auto', background: 'var(--sidebar-bg)',
        }} className="hidden md:block">
          <Link href="/guides" style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', padding: '0 8px', marginBottom: 16, display: 'block' }}>← All Guides</Link>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />

          <span className="sidebar-label" style={{ marginBottom: 6 }}>ON THIS PAGE</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginBottom: 20 }}>
            {content.sections.map(s => (
              <a key={s.h2} href={`#${s.h2.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="sidebar-item" style={{ fontSize: 12 }}>
                {s.h2.slice(0, 34)}{s.h2.length > 34 ? '…' : ''}
              </a>
            ))}
            <a href="#faq" className="sidebar-item" style={{ fontSize: 12 }}>FAQ</a>
          </div>

          <span className="sidebar-label" style={{ marginBottom: 6 }}>MORE GUIDES</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {others.slice(0, 6).map(g => (
              <Link key={g.slug} href={`/guides/${g.slug}`}
                className="sidebar-item" style={{ fontSize: 12 }}>
                {g.title.slice(0, 30)}{g.title.length > 30 ? '…' : ''}
              </Link>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div style={{ flex: 1, padding: 40, maxWidth: 720, minWidth: 0 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span style={{ color: 'var(--text)' }}>{guide.topic}</span>
          </div>

          <h1 style={{ fontSize: 26, fontWeight: 700, color: 'var(--text)', lineHeight: 1.35, marginBottom: 12 }}>{guide.title}</h1>
          <div style={{ display: 'flex', gap: 10, marginBottom: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="badge">{guide.difficulty}</span>
            <span className="badge">{guide.readTime}</span>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>By AIProSpace Team · Updated Apr 2026</span>
          </div>

          {/* Hero image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={guide.heroImage} alt={guide.title}
            style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 10, marginBottom: 24, border: '1px solid var(--border)' }} />

          <AdBanner />

          {/* Article content */}
          <div className="prose" style={{ marginTop: 24 }}>
            {content.sections.map(section => (
              <div key={section.h2}>
                <h2 id={section.h2.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>{section.h2}</h2>
                {section.body.split('\n\n').map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{
                    __html: para
                      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n/g, '<br/>')
                  }} />
                ))}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40 }}><AdBanner /></div>

          {/* Related tools */}
          {content.relatedTools.length > 0 && (
            <div style={{ marginTop: 40, background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, padding: 20 }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 12 }}>Related Tools</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {content.relatedTools.map(t => (
                  <Link key={t.href} href={t.href} className="badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                    {t.label} →
                  </Link>
                ))}
                {content.relatedCourse && (
                  <Link href={content.relatedCourse.href} className="badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                    {content.relatedCourse.label} →
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div id="faq" style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Frequently Asked Questions</h2>
            {content.faqs.map(faq => (
              <details key={faq.q} className="faq-item">
                <summary className="faq-question">{faq.q}</summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>

          {/* Prev/Next */}
          <div className="page-nav">
            {others[0] && <Link href={`/guides/${others[0].slug}`}>← {others[0].title.slice(0, 30)}…</Link>}
            {others[1] && <Link href={`/guides/${others[1].slug}`}>{others[1].title.slice(0, 30)}… →</Link>}
          </div>
        </div>
      </div>
    </>
  )
}
