export type Course = {
  rank: number
  title: string
  provider: string
  url: string
  rating: string
  reviews: string
  duration: string
  price: 'Free' | 'Paid'
  description: string
}

export type CourseCategory = {
  slug: string
  label: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  courses: Course[]
  faqs: { q: string; a: string }[]
}

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    slug: 'chatgpt',
    label: 'ChatGPT',
    metaTitle: '7 Best ChatGPT Courses in 2026 (Free & Paid) | AIProSpace',
    metaDescription: 'Find the best ChatGPT courses for beginners and advanced users. Free and paid options compared — ranked by rating and value.',
    h1: '7 Best ChatGPT Courses in 2026',
    intro: 'ChatGPT has transformed how we work. These courses will take you from basic prompting to advanced workflows, automation, and business use cases.',
    courses: [
      { rank: 1, title: 'Complete ChatGPT Masterclass 2026', provider: 'Udemy', url: 'https://udemy.com', rating: '4.8', reviews: '2,341', duration: '12 hrs', price: 'Paid', description: 'The most comprehensive ChatGPT course available. Covers everything from basic prompting to building AI-powered businesses. Regularly updated for 2026 models.' },
      { rank: 2, title: 'ChatGPT Prompt Engineering for Developers', provider: 'DeepLearning.AI', url: 'https://deeplearning.ai', rating: '4.9', reviews: '5,120', duration: '2 hrs', price: 'Free', description: 'Built by OpenAI and Andrew Ng. Learn the principles of effective prompting, including system messages, few-shot examples, and iterative refinement. Essential for developers.' },
      { rank: 3, title: 'AI for Everyone', provider: 'Coursera', url: 'https://coursera.org', rating: '4.8', reviews: '11,000', duration: '6 hrs', price: 'Free', description: 'Andrew Ng\'s non-technical introduction to AI for business professionals. Explains what AI can and cannot do, and how to lead AI projects in your organization.' },
      { rank: 4, title: 'ChatGPT Complete Guide: 50+ Use Cases', provider: 'Udemy', url: 'https://udemy.com', rating: '4.7', reviews: '8,400', duration: '9 hrs', price: 'Paid', description: 'Practical ChatGPT across 50+ real-world use cases — writing, coding, marketing, SEO, business, and automation. Best for learners who prefer applied examples.' },
      { rank: 5, title: 'Prompt Engineering Guide', provider: 'promptingguide.ai', url: 'https://promptingguide.ai', rating: '4.8', reviews: 'Community', duration: 'Self-paced', price: 'Free', description: 'Open-source, community-maintained guide covering all prompting techniques. Chain-of-thought, zero-shot, few-shot, ReAct, and more — with examples for every technique.' },
      { rank: 6, title: 'ChatGPT for Business: Save 10+ Hours/Week', provider: 'LinkedIn Learning', url: 'https://linkedin.com/learning', rating: '4.6', reviews: '3,200', duration: '4 hrs', price: 'Paid', description: 'Practical ChatGPT for business professionals. Email writing, meeting summaries, reports, data analysis, and presentation creation. Focused on workplace ROI.' },
      { rank: 7, title: 'Introduction to ChatGPT', provider: 'Khan Academy', url: 'https://khanacademy.org', rating: '4.7', reviews: 'Community', duration: '1 hr', price: 'Free', description: 'Free, beginner-friendly introduction to ChatGPT. Covers the basics of conversational AI, how to get started, and responsible use. Perfect for complete beginners.' },
    ],
    faqs: [
      { q: 'What is the best ChatGPT course for beginners?', a: 'AI for Everyone by Andrew Ng on Coursera is the best free beginner course — it covers AI concepts in plain language. For hands-on ChatGPT skills, the Introduction to ChatGPT on Khan Academy is completely free and very accessible.' },
      { q: 'Which ChatGPT courses are free?', a: 'ChatGPT Prompt Engineering for Developers (DeepLearning.AI), AI for Everyone (Coursera audit), Prompt Engineering Guide (promptingguide.ai), and Introduction to ChatGPT (Khan Academy) are all completely free.' },
      { q: 'How long does it take to learn ChatGPT?', a: 'You can learn the basics in 1-2 hours and be productive immediately. Mastering advanced techniques and business applications takes 10-20 hours of focused practice. The best approach is learning a technique, then immediately applying it to your real work.' },
      { q: 'Do I need coding skills for ChatGPT courses?', a: 'No — most ChatGPT courses require zero coding knowledge. Only the DeepLearning.AI Prompt Engineering for Developers course is aimed at developers. All other courses are designed for general users and business professionals.' },
      { q: 'What will I be able to do after a ChatGPT course?', a: 'You\'ll write better prompts and get significantly better results, use ChatGPT for writing, research, coding help, and data analysis, automate repetitive tasks, build ChatGPT into your workflows, and potentially use it to generate income through freelancing or content creation.' },
    ],
  },
  {
    slug: 'claude',
    label: 'Claude',
    metaTitle: '5 Best Claude AI Courses in 2026 (Free & Paid) | AIProSpace',
    metaDescription: 'Best courses to learn Claude AI. Free and paid options for beginners and developers — ranked by quality and value.',
    h1: '5 Best Claude AI Courses in 2026',
    intro: 'Claude by Anthropic is one of the most capable AI assistants available. These courses teach you to use it effectively for writing, analysis, coding, and business tasks.',
    courses: [
      { rank: 1, title: 'Anthropic\'s Claude API & Prompt Engineering', provider: 'Anthropic', url: 'https://anthropic.com', rating: '4.9', reviews: 'Official', duration: 'Self-paced', price: 'Free', description: 'Official documentation and guides from Anthropic covering the Claude API, prompt formats, and best practices for building with Claude.' },
      { rank: 2, title: 'Generative AI with Claude & LangChain', provider: 'Udemy', url: 'https://udemy.com', rating: '4.7', reviews: '1,200', duration: '8 hrs', price: 'Paid', description: 'Learn to build AI applications using Claude and LangChain. Covers RAG, agents, memory, and production deployment.' },
      { rank: 3, title: 'Claude for Business Writing & Productivity', provider: 'LinkedIn Learning', url: 'https://linkedin.com/learning', rating: '4.6', reviews: '800', duration: '3 hrs', price: 'Paid', description: 'Practical guide to using Claude for professional writing, email, reports, research, and business analysis.' },
      { rank: 4, title: 'Build AI Apps with Anthropic Claude', provider: 'freeCodeCamp', url: 'https://freecodecamp.org', rating: '4.8', reviews: 'Community', duration: '5 hrs', price: 'Free', description: 'Free YouTube course building real applications with the Claude API. Covers authentication, prompt engineering, and full-stack integration.' },
      { rank: 5, title: 'Mastering Claude: Advanced Techniques', provider: 'Udemy', url: 'https://udemy.com', rating: '4.7', reviews: '650', duration: '6 hrs', price: 'Paid', description: 'Advanced Claude techniques including extended context, multi-document analysis, code generation, and building complex workflows.' },
    ],
    faqs: [
      { q: 'What is Claude AI?', a: 'Claude is Anthropic\'s AI assistant. It\'s known for high-quality writing, following complex instructions, handling long documents, and being safe and honest. Available at claude.ai with free and paid tiers.' },
      { q: 'Is Claude better than ChatGPT?', a: 'Claude and ChatGPT excel in different areas. Claude is often rated higher for writing quality, nuanced understanding, and handling long documents. ChatGPT has more integrations and features. Many professionals use both.' },
      { q: 'Are there free Claude courses?', a: 'Yes — Anthropic\'s official documentation is free and comprehensive. freeCodeCamp\'s YouTube course is free. Coursera sometimes offers Claude-related courses for free audit.' },
      { q: 'Do I need to pay to use Claude?', a: 'Claude has a generous free tier at claude.ai. The Pro plan ($20/month) gives access to more powerful models and higher usage limits. The API has pay-per-token pricing.' },
      { q: 'What can I build with Claude?', a: 'You can build customer support bots, document analysis tools, content generators, code review assistants, research tools, and much more using the Claude API. Claude\'s 200k token context window is particularly useful for processing long documents.' },
    ],
  },
  {
    slug: 'midjourney',
    label: 'Midjourney',
    metaTitle: '5 Best Midjourney Courses in 2026 (Free & Paid) | AIProSpace',
    metaDescription: 'Best Midjourney courses for beginners and professionals. Learn AI image generation from scratch — free and paid options.',
    h1: '5 Best Midjourney Courses in 2026',
    intro: 'Midjourney is the leading AI image generator used by designers and creators worldwide. These courses take you from first image to professional-quality AI art.',
    courses: [
      { rank: 1, title: 'Midjourney Masterclass: Zero to Expert', provider: 'Udemy', url: 'https://udemy.com', rating: '4.8', reviews: '4,500', duration: '10 hrs', price: 'Paid', description: 'The most comprehensive Midjourney course. Covers all parameters, prompt techniques, style guides, and commercial applications.' },
      { rank: 2, title: 'Midjourney for Beginners', provider: 'YouTube/freeCodeCamp', url: 'https://youtube.com', rating: '4.7', reviews: 'Community', duration: '3 hrs', price: 'Free', description: 'Free YouTube tutorial covering the basics of Midjourney — account setup, first generations, and fundamental prompting techniques.' },
      { rank: 3, title: 'AI Art & Design with Midjourney', provider: 'Skillshare', url: 'https://skillshare.com', rating: '4.6', reviews: '2,100', duration: '5 hrs', price: 'Paid', description: 'Design-focused Midjourney course teaching composition, style matching, brand consistency, and commercial design workflows.' },
      { rank: 4, title: 'Advanced Midjourney Techniques', provider: 'Udemy', url: 'https://udemy.com', rating: '4.7', reviews: '1,800', duration: '7 hrs', price: 'Paid', description: 'Advanced prompting, inpainting, outpainting, style references, and building a consistent visual brand with Midjourney.' },
      { rank: 5, title: 'Make Money with AI Art', provider: 'Udemy', url: 'https://udemy.com', rating: '4.5', reviews: '3,200', duration: '6 hrs', price: 'Paid', description: 'How to monetize AI art — print-on-demand, stock images, NFTs, client work, and building an AI art business.' },
    ],
    faqs: [
      { q: 'Do I need art skills to use Midjourney?', a: 'No — Midjourney is designed for anyone. You describe what you want in text and it generates the image. Basic knowledge of art terms like "composition," "lighting," and "style" helps improve results, but even complete beginners produce impressive images.' },
      { q: 'How much does Midjourney cost?', a: 'Midjourney starts at $10/month for 200 image generations. The Standard plan at $30/month offers unlimited relaxed generations. There is no free plan, but a free trial was available historically.' },
      { q: 'Can I use Midjourney images commercially?', a: 'Yes, on paid plans. All paid Midjourney plans include commercial usage rights. Free trial images are not for commercial use. Always check the current terms of service at midjourney.com.' },
      { q: 'What is the best free Midjourney course?', a: 'YouTube has excellent free Midjourney content. Search for "Midjourney tutorial 2026" to find the most updated free tutorials. Midjourney\'s own documentation on their website is also free and well-maintained.' },
      { q: 'How long does it take to learn Midjourney?', a: 'You can generate your first impressive image within 30 minutes. Becoming proficient at consistent, professional results takes 5-10 hours of practice. Advanced techniques like style references and inpainting take more time to master.' },
    ],
  },
  {
    slug: 'n8n',
    label: 'n8n',
    metaTitle: '5 Best n8n Courses in 2026 (Free & Paid) | AIProSpace',
    metaDescription: 'Best n8n courses for beginners and advanced users. Learn workflow automation and AI agents with n8n — free and paid options.',
    h1: '5 Best n8n Courses in 2026',
    intro: 'n8n is the most powerful open-source automation tool. These courses teach you to build workflows, AI agents, and complex automations that save hours every week.',
    courses: [
      { rank: 1, title: 'n8n Zero to Hero: Complete Automation Guide', provider: 'Udemy', url: 'https://udemy.com', rating: '4.9', reviews: '3,200', duration: '15 hrs', price: 'Paid', description: 'The definitive n8n course. From installation to advanced AI agents. Covers 50+ nodes, error handling, webhooks, and production deployment.' },
      { rank: 2, title: 'n8n Official Documentation & Tutorials', provider: 'n8n.io', url: 'https://docs.n8n.io', rating: '4.8', reviews: 'Official', duration: 'Self-paced', price: 'Free', description: 'Official n8n documentation with interactive tutorials, workflow templates, and community examples. The best free starting point.' },
      { rank: 3, title: 'Build AI Agents with n8n', provider: 'YouTube', url: 'https://youtube.com', rating: '4.8', reviews: 'Community', duration: '5 hrs', price: 'Free', description: 'Free YouTube series on building AI agents with n8n — connecting OpenAI, memory, tools, and web scraping into autonomous workflows.' },
      { rank: 4, title: 'n8n for Business Automation', provider: 'LinkedIn Learning', url: 'https://linkedin.com/learning', rating: '4.6', reviews: '1,100', duration: '6 hrs', price: 'Paid', description: 'Business-focused n8n course covering CRM automation, email workflows, reporting, and team collaboration automation.' },
      { rank: 5, title: 'Advanced n8n: APIs, Webhooks & Custom Nodes', provider: 'Udemy', url: 'https://udemy.com', rating: '4.7', reviews: '900', duration: '8 hrs', price: 'Paid', description: 'Advanced n8n techniques for developers — custom nodes, complex logic, error handling, and building production-grade automation systems.' },
    ],
    faqs: [
      { q: 'Is n8n free?', a: 'n8n is free when self-hosted on your own server. Cloud hosting starts at $20/month. Most people start with self-hosting on a $5/month VPS, which makes it essentially free to use with no execution limits.' },
      { q: 'Do I need coding skills to use n8n?', a: 'No — n8n has a visual drag-and-drop interface that requires no coding. However, knowing basic JavaScript opens up advanced capabilities like custom code nodes and complex data transformations.' },
      { q: 'What can I automate with n8n?', a: 'Almost anything: sending emails based on triggers, posting to social media on a schedule, scraping data from websites, generating AI content, syncing data between CRMs, creating invoices, monitoring systems, and building AI agents.' },
      { q: 'What is the difference between n8n and Zapier?', a: 'n8n is more powerful, supports complex logic and code, is free when self-hosted, and has excellent AI agent support. Zapier is simpler, more beginner-friendly, and has 6,000+ integrations vs n8n\'s 400+. n8n is better for technical users; Zapier for business users.' },
      { q: 'How do I get started with n8n for free?', a: 'Install n8n locally with "npx n8n" (requires Node.js) or use Docker. Or sign up for a free 14-day cloud trial at n8n.io. The official documentation and YouTube community provide extensive free learning resources.' },
    ],
  },
  {
    slug: 'prompt-engineering',
    label: 'Prompt Engineering',
    metaTitle: '6 Best Prompt Engineering Courses in 2026 | AIProSpace',
    metaDescription: 'Best prompt engineering courses to master AI prompting. Free and paid options for beginners and developers — ranked.',
    h1: '6 Best Prompt Engineering Courses in 2026',
    intro: 'Prompt engineering is the skill of communicating effectively with AI. These courses teach you the techniques that separate good AI outputs from great ones.',
    courses: [
      { rank: 1, title: 'ChatGPT Prompt Engineering for Developers', provider: 'DeepLearning.AI', url: 'https://deeplearning.ai', rating: '4.9', reviews: '5,120', duration: '2 hrs', price: 'Free', description: 'The gold standard prompt engineering course by OpenAI and Andrew Ng. Covers all key techniques with Python code examples.' },
      { rank: 2, title: 'Prompt Engineering Guide', provider: 'DAIR.AI', url: 'https://promptingguide.ai', rating: '4.8', reviews: 'Community', duration: 'Self-paced', price: 'Free', description: 'Comprehensive open-source guide covering every prompting technique — zero-shot, few-shot, CoT, ReAct, and more.' },
      { rank: 3, title: 'Advanced Prompt Engineering Masterclass', provider: 'Udemy', url: 'https://udemy.com', rating: '4.7', reviews: '2,400', duration: '8 hrs', price: 'Paid', description: 'Deep dive into advanced prompting for business, coding, and automation use cases. Includes real-world workflow templates.' },
      { rank: 4, title: 'Prompt Engineering Specialization', provider: 'Coursera', url: 'https://coursera.org', rating: '4.7', reviews: '3,800', duration: '12 hrs', price: 'Paid', description: '4-course specialization covering prompt design, evaluation, and deployment for production AI applications.' },
      { rank: 5, title: 'The Art of Prompt Engineering', provider: 'LinkedIn Learning', url: 'https://linkedin.com/learning', rating: '4.6', reviews: '1,600', duration: '4 hrs', price: 'Paid', description: 'Business-focused prompt engineering for professionals. Templates for emails, reports, research, and decision-making.' },
      { rank: 6, title: 'Anthropic Prompt Engineering Tutorial', provider: 'Anthropic', url: 'https://docs.anthropic.com', rating: '4.8', reviews: 'Official', duration: 'Self-paced', price: 'Free', description: 'Official Anthropic guide to prompting Claude. Covers the unique aspects of Claude prompting including XML tags and system prompts.' },
    ],
    faqs: [
      { q: 'What is prompt engineering?', a: 'Prompt engineering is the practice of designing and optimizing the text inputs you give to AI models to get better outputs. It involves techniques like providing clear context, using examples, specifying format, and structuring requests in ways the model responds to best.' },
      { q: 'Is prompt engineering a real career?', a: 'Yes — many companies hire prompt engineers at salaries of $100,000-$300,000/year. Roles include designing prompts for products, evaluating AI outputs, building prompt libraries, and optimizing AI workflows. The field is evolving as models improve.' },
      { q: 'Do I need coding skills for prompt engineering?', a: 'Not necessarily. Many prompt engineering roles are non-technical. However, knowing Python helps if you want to work with LLM APIs. The DeepLearning.AI course uses Python but the concepts apply to any interface.' },
      { q: 'What are the most important prompting techniques?', a: 'The most impactful techniques are: chain-of-thought (ask AI to think step-by-step), few-shot examples (show examples of what you want), role assignment (tell AI to act as an expert), output format specification (ask for JSON, bullets, etc.), and iterative refinement (build on previous outputs).' },
      { q: 'Will prompt engineering become obsolete?', a: 'As models become better at understanding intent, some basic prompt engineering may become less necessary. However, for complex tasks, structured workflows, and production systems, the ability to communicate precisely with AI models will remain valuable for the foreseeable future.' },
    ],
  },
  {
    slug: 'ai-for-business',
    label: 'AI for Business',
    metaTitle: '5 Best AI for Business Courses in 2026 | AIProSpace',
    metaDescription: 'Best AI for business courses. Learn to apply AI to your business — strategy, operations, marketing, and customer service.',
    h1: '5 Best AI for Business Courses in 2026',
    intro: 'AI is transforming every aspect of business. These courses teach leaders, managers, and entrepreneurs how to leverage AI strategically and practically.',
    courses: [
      { rank: 1, title: 'AI for Everyone', provider: 'Coursera (DeepLearning.AI)', url: 'https://coursera.org', rating: '4.8', reviews: '11,000', duration: '6 hrs', price: 'Free', description: 'Andrew Ng\'s essential course for business leaders. Explains what AI can and cannot do, and how to build AI strategy for your organization.' },
      { rank: 2, title: 'AI in Business Strategy', provider: 'MIT Sloan', url: 'https://executive.mit.edu', rating: '4.8', reviews: '2,100', duration: '6 weeks', price: 'Paid', description: 'MIT\'s executive education program on AI strategy for senior leaders. Covers competitive advantage, implementation, and change management.' },
      { rank: 3, title: 'Generative AI for Business Leaders', provider: 'LinkedIn Learning', url: 'https://linkedin.com/learning', rating: '4.6', reviews: '4,500', duration: '5 hrs', price: 'Paid', description: 'Practical AI for managers and executives. How to identify AI opportunities, manage AI projects, and lead organizational change.' },
      { rank: 4, title: 'AI-Powered Marketing Masterclass', provider: 'Udemy', url: 'https://udemy.com', rating: '4.7', reviews: '6,200', duration: '10 hrs', price: 'Paid', description: 'Apply AI across all marketing channels — content creation, SEO, email, advertising, social media, and customer analytics.' },
      { rank: 5, title: 'AI Tools for Entrepreneurs', provider: 'Udemy', url: 'https://udemy.com', rating: '4.7', reviews: '3,400', duration: '8 hrs', price: 'Paid', description: 'How to use AI to launch and grow a business faster. From ideation and branding to customer acquisition and operations automation.' },
    ],
    faqs: [
      { q: 'How can AI benefit my business?', a: 'AI can automate repetitive tasks, personalize customer experiences, analyze data for insights, generate marketing content, improve customer support response times, and help make better business decisions. Most businesses see 20-40% efficiency gains in areas where AI is implemented.' },
      { q: 'Do I need to be technical to take AI business courses?', a: 'No — the courses listed here are specifically designed for business professionals without technical backgrounds. AI for Everyone and similar courses focus on strategy and application, not coding or mathematics.' },
      { q: 'What AI tools are most important for business?', a: 'For most businesses: ChatGPT or Claude (writing and analysis), HubSpot (CRM and marketing), Notion AI (documentation), Otter.ai (meeting notes), and Zapier or n8n (automation). Start with the tools that address your biggest time drains.' },
      { q: 'How long does it take to implement AI in a business?', a: 'You can start getting value from AI tools in your first week — just start using ChatGPT or Claude for daily tasks. Building systematic AI processes takes 1-3 months. A full AI transformation of operations typically takes 6-18 months depending on business size and complexity.' },
      { q: 'What is the ROI of investing in AI for business?', a: 'ROI varies by use case. Marketing content creation can reduce costs 50-80%. Customer support automation can handle 30-60% of queries automatically. Sales automation can increase prospecting efficiency 3-5x. Most businesses find AI investments pay back within 3-6 months.' },
    ],
  },
]

export const COURSE_TOOLS = [
  { label: 'ChatGPT',           slug: 'chatgpt'           },
  { label: 'Claude',            slug: 'claude'            },
  { label: 'Midjourney',        slug: 'midjourney'        },
  { label: 'n8n',               slug: 'n8n'               },
  { label: 'Prompt Engineering',slug: 'prompt-engineering'},
  { label: 'AI for Business',   slug: 'ai-for-business'   },
]
