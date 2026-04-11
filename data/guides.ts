import { BookOpen, Zap, FileText, Search, DollarSign, Wrench } from 'lucide-react'

export type Guide = {
  slug: string
  title: string
  description: string
  topic: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  readTime: string
}

export const GUIDES: Guide[] = [
  {
    slug: 'getting-started-with-ai-tools',
    title: 'Getting Started with AI Tools in 2026',
    description: 'A complete introduction to AI tools for absolute beginners. No technical knowledge required.',
    topic: 'Getting Started',
    difficulty: 'Beginner',
    readTime: '8 min',
  },
  {
    slug: 'how-to-use-chatgpt-effectively',
    title: 'How to Use ChatGPT Effectively',
    description: 'Master prompting techniques to get dramatically better results from ChatGPT every time.',
    topic: 'Getting Started',
    difficulty: 'Beginner',
    readTime: '10 min',
  },
  {
    slug: 'build-n8n-automation-workflow',
    title: 'Build Your First n8n Automation Workflow',
    description: 'Step-by-step guide to creating a real automation with n8n — no code required.',
    topic: 'Automation',
    difficulty: 'Intermediate',
    readTime: '15 min',
  },
  {
    slug: 'automate-social-media-ai',
    title: 'Automate Social Media Content with AI',
    description: 'Complete workflow to generate, schedule and publish social media content on autopilot.',
    topic: 'Automation',
    difficulty: 'Intermediate',
    readTime: '12 min',
  },
  {
    slug: 'ai-blog-content-strategy',
    title: 'Build an AI-Powered Content Strategy',
    description: 'How to use AI to research, plan, write and optimize content at scale.',
    topic: 'Content Creation',
    difficulty: 'Intermediate',
    readTime: '14 min',
  },
  {
    slug: 'write-blog-posts-chatgpt',
    title: 'Write Blog Posts 5x Faster with ChatGPT',
    description: 'The exact process to go from keyword to published post in under 30 minutes.',
    topic: 'Content Creation',
    difficulty: 'Beginner',
    readTime: '9 min',
  },
  {
    slug: 'ai-seo-guide',
    title: 'How to Use AI for SEO in 2026',
    description: 'Use AI tools to do keyword research, optimize content, and build topical authority faster.',
    topic: 'SEO with AI',
    difficulty: 'Intermediate',
    readTime: '16 min',
  },
  {
    slug: 'rank-google-ai-content',
    title: 'How to Rank AI-Generated Content on Google',
    description: 'The truth about ranking AI content — what works, what gets penalized, and how to stay safe.',
    topic: 'SEO with AI',
    difficulty: 'Advanced',
    readTime: '18 min',
  },
  {
    slug: 'make-money-ai-freelancing',
    title: 'Make Money Freelancing with AI Tools',
    description: 'How to offer AI-powered services and charge premium rates — with zero coding skills.',
    topic: 'Make Money',
    difficulty: 'Beginner',
    readTime: '11 min',
  },
  {
    slug: 'ai-affiliate-site-guide',
    title: 'Build an AI Tools Affiliate Site in 30 Days',
    description: 'Complete playbook for building a profitable affiliate site reviewing AI tools.',
    topic: 'Make Money',
    difficulty: 'Intermediate',
    readTime: '20 min',
  },
  {
    slug: 'midjourney-beginners-guide',
    title: 'Midjourney for Beginners — Complete Guide',
    description: 'Everything you need to know to start creating stunning AI images with Midjourney.',
    topic: 'Tool Tutorials',
    difficulty: 'Beginner',
    readTime: '12 min',
  },
  {
    slug: 'n8n-advanced-workflows',
    title: 'Advanced n8n Workflows for Power Users',
    description: 'Build complex multi-step automations with conditionals, loops, and error handling.',
    topic: 'Tool Tutorials',
    difficulty: 'Advanced',
    readTime: '22 min',
  },
]

export const GUIDE_TOPICS = [
  'All',
  'Getting Started',
  'Automation',
  'Content Creation',
  'SEO with AI',
  'Make Money',
  'Tool Tutorials',
]
