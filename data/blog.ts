export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  description: string
}

export const POSTS: BlogPost[] = [
  {
    slug: 'best-ai-writing-tools-2026',
    title: '10 Best AI Writing Tools in 2026 (Free & Paid)',
    excerpt: 'We tested 30+ AI writing tools so you don\'t have to. Here are the best options for bloggers, marketers, and creators.',
    category: 'AI Tools',
    date: 'Apr 10, 2026',
    readTime: '8 min read',
    description: 'We tested 30+ AI writing tools and ranked the top 10. ChatGPT, Jasper, Claude, and Copy.ai compared — find the best AI writing tool for your needs.',
  },
  {
    slug: 'automate-social-media-n8n',
    title: 'How to Automate Social Media with n8n (Step by Step)',
    excerpt: 'Build a fully automated social media pipeline using n8n — from content generation to scheduling and posting.',
    category: 'Automation',
    date: 'Apr 8, 2026',
    readTime: '12 min read',
    description: 'Step-by-step guide to automating your social media with n8n. Learn to generate AI content, schedule posts, and publish automatically across platforms.',
  },
  {
    slug: 'chatgpt-vs-claude-vs-gemini-2026',
    title: 'ChatGPT vs Claude vs Gemini 2026 — The Definitive Comparison',
    excerpt: 'We ran 50+ tests across writing, coding, and reasoning. Here\'s which AI chatbot wins in each category.',
    category: 'Comparisons',
    date: 'Apr 6, 2026',
    readTime: '10 min read',
    description: 'ChatGPT vs Claude vs Gemini 2026 comparison. 50+ tests across writing, coding, reasoning, and creativity. Find out which AI chatbot is best for your use case.',
  },
  {
    slug: 'beginners-guide-ai-tools-2026',
    title: "Complete Beginner's Guide to AI Tools in 2026",
    excerpt: 'Never used AI tools before? Start here. Everything you need to know explained in plain language.',
    category: 'Beginners',
    date: 'Apr 4, 2026',
    readTime: '15 min read',
    description: "Complete beginner's guide to AI tools in 2026. Learn what AI tools are, how to use them, and which ones to start with — no technical knowledge required.",
  },
  {
    slug: 'make-money-ai-tools-2026',
    title: 'How to Make Money with AI Tools in 2026 (15 Proven Methods)',
    excerpt: '15 real ways to earn income using AI tools in 2026 — from freelancing to products to agencies.',
    category: 'Make Money',
    date: 'Apr 2, 2026',
    readTime: '14 min read',
    description: '15 proven ways to make money with AI tools in 2026. From AI freelancing to digital products to starting an AI agency — methods that actually work.',
  },
  {
    slug: 'perplexity-ai-review-2026',
    title: 'Perplexity AI Review 2026 — Is It Worth the Hype?',
    excerpt: 'A deep dive into Perplexity AI after using it daily for 3 months. Is it better than Google for research?',
    category: 'Reviews',
    date: 'Mar 30, 2026',
    readTime: '7 min read',
    description: 'Perplexity AI review 2026. After 3 months of daily use, is it worth switching from Google? We test accuracy, speed, and the Pro plan.',
  },
  {
    slug: 'how-to-use-n8n-guide',
    title: 'How to Use n8n: Complete Beginner to Advanced Guide',
    excerpt: 'Learn n8n from scratch — install it, build your first workflow, and automate complex multi-step tasks.',
    category: 'Tutorials',
    date: 'Mar 28, 2026',
    readTime: '20 min read',
    description: 'Complete n8n tutorial from beginner to advanced. Learn to install n8n, build workflows, use AI nodes, and create production automations.',
  },
  {
    slug: 'midjourney-vs-leonardo-ai',
    title: 'Midjourney vs Leonardo AI 2026 — Which is Better?',
    excerpt: 'Head-to-head comparison of the two most popular AI image generators. We generated 100+ images to find the winner.',
    category: 'Comparisons',
    date: 'Mar 26, 2026',
    readTime: '9 min read',
    description: 'Midjourney vs Leonardo AI 2026 comparison. We generated 100+ images across quality, style, and speed. Find out which AI image generator is right for you.',
  },
  {
    slug: 'best-free-ai-tools-2026',
    title: 'Best Free AI Tools 2026 — 20 Tools That Cost Nothing',
    excerpt: 'The best completely free AI tools you can use right now — no credit card, no trial, no catch.',
    category: 'AI Tools',
    date: 'Mar 24, 2026',
    readTime: '11 min read',
    description: '20 best free AI tools in 2026. Completely free tools for writing, image generation, coding, research, and more — no credit card required.',
  },
  {
    slug: 'cursor-ai-review-2026',
    title: 'Cursor AI Review 2026 — The Best Code Editor I\'ve Used',
    excerpt: 'After switching from VS Code to Cursor, I cut my coding time in half. Here\'s an honest review after 6 months.',
    category: 'Reviews',
    date: 'Mar 22, 2026',
    readTime: '8 min read',
    description: 'Cursor AI code editor review 2026. After 6 months of daily use, is Cursor worth switching from VS Code? We cover features, pricing, and real performance.',
  },
]

export const BLOG_CATEGORIES = [
  { label: 'All Posts',         slug: '' },
  { label: 'AI Tools Reviews',  slug: 'reviews' },
  { label: 'Automation Guides', slug: 'automation' },
  { label: 'Make Money with AI',slug: 'make-money' },
  { label: 'AI News',           slug: 'news' },
  { label: 'Beginner Guides',   slug: 'beginners' },
  { label: 'Comparisons',       slug: 'comparisons' },
  { label: 'Tutorials',         slug: 'tutorials' },
]
