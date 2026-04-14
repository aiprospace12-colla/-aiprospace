export type Guide = {
  slug: string
  title: string
  description: string
  topic: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  readTime: string
  metaTitle: string
  metaDescription: string
  heroImage: string
}

export const GUIDES: Guide[] = [
  {
    slug: 'how-to-use-claude-ai',
    title: 'How to Use Claude AI: Complete Guide 2026',
    description: 'Everything you need to get the most out of Claude — from basic conversations to advanced document analysis and API usage.',
    topic: 'Tool Tutorials',
    difficulty: 'Beginner',
    readTime: '15 min read',
    metaTitle: 'How to Use Claude AI: Complete Guide 2026',
    metaDescription: 'Learn how to use Claude AI in 2026. Step-by-step guide covering prompting, long documents, API access, and advanced techniques. Free and Pro tips included.',
    heroImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'how-to-use-chatgpt',
    title: 'How to Use ChatGPT: Complete Beginner Guide 2026',
    description: 'The definitive beginner guide to ChatGPT — from your first conversation to advanced prompting, custom GPTs, and business applications.',
    topic: 'Tool Tutorials',
    difficulty: 'Beginner',
    readTime: '18 min read',
    metaTitle: 'How to Use ChatGPT: Complete Beginner Guide 2026',
    metaDescription: 'How to use ChatGPT in 2026 — complete beginner guide. Prompting techniques, custom GPTs, plugins, and real use cases that save hours every week.',
    heroImage: 'https://images.unsplash.com/photo-1655720031554-a929595ffad7?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'how-to-use-n8n',
    title: 'How to Use n8n: Complete Tutorial 2026',
    description: 'Step-by-step n8n tutorial from zero to production — install it, build your first workflow, and automate complex multi-step tasks with AI.',
    topic: 'Automation',
    difficulty: 'Intermediate',
    readTime: '25 min read',
    metaTitle: 'How to Use n8n: Complete Tutorial for Beginners 2026',
    metaDescription: 'Complete n8n tutorial for beginners in 2026. Learn to install n8n, build automation workflows, integrate AI, and create production-ready automations step by step.',
    heroImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'how-to-use-midjourney',
    title: 'How to Use Midjourney: Step-by-Step Guide 2026',
    description: 'A practical guide to generating stunning AI images with Midjourney — from your first prompt to professional-quality outputs.',
    topic: 'Tool Tutorials',
    difficulty: 'Beginner',
    readTime: '12 min read',
    metaTitle: 'How to Use Midjourney: Step-by-Step Guide 2026',
    metaDescription: 'How to use Midjourney in 2026 — step-by-step guide for beginners. Prompting techniques, parameters, styles, and tips to generate professional AI images.',
    heroImage: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'how-to-use-perplexity-ai',
    title: 'How to Use Perplexity AI: Full Guide 2026',
    description: 'A complete guide to Perplexity AI — the AI search engine that cites its sources. How to use it for research, fact-checking, and deep dives.',
    topic: 'Tool Tutorials',
    difficulty: 'Beginner',
    readTime: '10 min read',
    metaTitle: 'How to Use Perplexity AI: Full Guide 2026',
    metaDescription: 'How to use Perplexity AI in 2026. Complete guide to AI-powered research, citing sources, Pro features, and when to use it instead of Google.',
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'automate-business-with-ai',
    title: 'How to Automate Your Business with AI in 2026',
    description: 'A practical guide to identifying, building, and scaling AI automations that actually save time and money in real businesses.',
    topic: 'Automation',
    difficulty: 'Intermediate',
    readTime: '20 min read',
    metaTitle: 'How to Automate Your Business with AI in 2026',
    metaDescription: 'Automate your business with AI in 2026. Practical guide to identifying automation opportunities, the best tools, and step-by-step workflows that save 10+ hours a week.',
    heroImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'make-money-with-ai-tools',
    title: 'How to Make Money with AI Tools in 2026',
    description: 'Real, tested ways to earn income using AI tools — freelancing, digital products, content creation, and building AI-powered services.',
    topic: 'Make Money',
    difficulty: 'Beginner',
    readTime: '22 min read',
    metaTitle: 'How to Make Money with AI Tools in 2026',
    metaDescription: 'Make money with AI tools in 2026. 10 real methods including freelancing, digital products, and agencies — with income ranges and step-by-step instructions.',
    heroImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80&auto=format&fit=crop',
  },
  {
    slug: 'best-ai-prompts-guide',
    title: 'Best AI Prompts Guide: 50 Prompts That Work in 2026',
    description: 'Fifty proven AI prompts for writing, coding, marketing, research, and creativity — with real output examples and customization tips.',
    topic: 'Tool Tutorials',
    difficulty: 'Beginner',
    readTime: '20 min read',
    metaTitle: 'Best AI Prompts 2026: 50 Prompts That Actually Work',
    metaDescription: 'Best AI prompts in 2026 — 50 proven prompts for writing, coding, marketing, and research. Real output examples and customization tips for ChatGPT, Claude, and more.',
    heroImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop',
  },
]

export const GUIDE_TOPICS = [
  { label: 'All Guides',        slug: '' },
  { label: 'Tool Tutorials',    slug: 'tool-tutorials' },
  { label: 'Automation',        slug: 'automation' },
  { label: 'Make Money',        slug: 'make-money' },
]
