export type Guide = {
  slug: string
  title: string
  description: string
  topic: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  readTime: string
  metaTitle: string
  metaDescription: string
}

export const GUIDES: Guide[] = [
  {
    slug: 'getting-started-with-ai-tools',
    title: 'Getting Started with AI Tools in 2026',
    description: 'A complete beginner\'s introduction to AI tools — what they are, how to use them, and where to start.',
    topic: 'Getting Started',
    difficulty: 'Beginner',
    readTime: '10 min read',
    metaTitle: 'Getting Started with AI Tools in 2026 — Beginner\'s Guide',
    metaDescription: 'New to AI tools? This beginner\'s guide explains what AI tools are, how to use them, and which ones to start with in 2026.',
  },
  {
    slug: 'automate-your-business-with-n8n',
    title: 'How to Automate Your Business with n8n',
    description: 'Step-by-step guide to building your first automation workflows with n8n, from installation to advanced AI agents.',
    topic: 'Automation',
    difficulty: 'Intermediate',
    readTime: '20 min read',
    metaTitle: 'How to Automate Your Business with n8n — Complete Guide',
    metaDescription: 'Learn to automate your business with n8n. From installation to AI agent workflows — step by step tutorial for 2026.',
  },
  {
    slug: 'ai-content-creation-guide',
    title: 'Complete Guide to AI Content Creation',
    description: 'How to use AI tools to create blog posts, social media content, emails, and more — with real examples and prompts.',
    topic: 'Content Creation',
    difficulty: 'Beginner',
    readTime: '15 min read',
    metaTitle: 'AI Content Creation Guide 2026 — Write Faster with AI',
    metaDescription: 'How to use AI for content creation in 2026. Real prompts, workflows, and tools to create better content faster.',
  },
  {
    slug: 'ai-for-seo-guide',
    title: 'How to Use AI for SEO in 2026',
    description: 'Proven strategies to use AI tools for keyword research, content optimization, and ranking on Google.',
    topic: 'SEO with AI',
    difficulty: 'Intermediate',
    readTime: '12 min read',
    metaTitle: 'AI for SEO Guide 2026 — Rank Higher with AI Tools',
    metaDescription: 'How to use AI for SEO in 2026. From keyword research to content optimization — proven strategies that get results.',
  },
  {
    slug: 'make-money-with-ai-guide',
    title: 'Make Money with AI Tools — Complete Guide',
    description: 'Real, proven ways to earn income using AI — freelancing, digital products, agencies, and passive income streams.',
    topic: 'Make Money',
    difficulty: 'Beginner',
    readTime: '18 min read',
    metaTitle: 'Make Money with AI Tools in 2026 — Complete Guide',
    metaDescription: 'Proven ways to make money with AI tools in 2026. Freelancing, digital products, agencies, and passive income explained.',
  },
  {
    slug: 'chatgpt-advanced-prompting',
    title: 'ChatGPT Advanced Prompting Guide',
    description: 'Master advanced prompting techniques — chain of thought, few-shot examples, role play, and system prompts.',
    topic: 'Tool Tutorials',
    difficulty: 'Advanced',
    readTime: '25 min read',
    metaTitle: 'ChatGPT Advanced Prompting Guide — Get 10x Better Results',
    metaDescription: 'Master ChatGPT with advanced prompting techniques. Chain-of-thought, few-shot, role prompting, and system prompts explained.',
  },
  {
    slug: 'build-ai-workflows-with-n8n',
    title: 'How to Build AI Workflows with n8n',
    description: 'Advanced n8n guide covering AI agents, OpenAI integration, vector databases, and production automation.',
    topic: 'Automation',
    difficulty: 'Advanced',
    readTime: '30 min read',
    metaTitle: 'Build AI Workflows with n8n — Advanced Automation Guide',
    metaDescription: 'Advanced n8n guide: build AI agents, integrate OpenAI, use vector databases, and create production-ready automation workflows.',
  },
  {
    slug: 'ai-tools-for-content-creators',
    title: 'AI Tools for Content Creators — Full Toolkit',
    description: 'The complete toolkit for YouTubers, podcasters, and social media creators to use AI at every step of the process.',
    topic: 'Content Creation',
    difficulty: 'Beginner',
    readTime: '12 min read',
    metaTitle: 'AI Tools for Content Creators 2026 — Full Toolkit',
    metaDescription: 'The complete AI toolkit for content creators in 2026. Best tools for YouTube, podcasts, TikTok, and social media.',
  },
]

export const GUIDE_TOPICS = [
  { label: 'Getting Started',   slug: 'getting-started'     },
  { label: 'Automation',        slug: 'automation'          },
  { label: 'Content Creation',  slug: 'content-creation'    },
  { label: 'SEO with AI',       slug: 'seo-with-ai'         },
  { label: 'Make Money',        slug: 'make-money-with-ai'  },
  { label: 'Tool Tutorials',    slug: 'tool-tutorials'      },
]
