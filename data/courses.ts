export type Course = {
  id: string
  title: string
  description: string
  topic: string
  skill: string
  rating: number
  duration: string
  lessons: number
  price: 'Free' | 'Paid'
  url: string
}

export const COURSES: Course[] = [
  {
    id: 'ai-automation-101',
    title: 'AI Automation with n8n — Zero to Hero',
    description: 'Build powerful automation workflows using n8n, AI agents, and APIs. No code required.',
    topic: 'Automation',
    skill: 'Beginner',
    rating: 5,
    duration: '4h 30m',
    lessons: 28,
    price: 'Free',
    url: '#',
  },
  {
    id: 'chatgpt-mastery',
    title: 'ChatGPT Mastery: Prompts That Actually Work',
    description: 'Learn advanced prompting techniques to get 10x better results from ChatGPT and Claude.',
    topic: 'Prompting',
    skill: 'Beginner',
    rating: 5,
    duration: '2h 15m',
    lessons: 18,
    price: 'Free',
    url: '#',
  },
  {
    id: 'ai-content-machine',
    title: 'Build an AI Content Machine',
    description: 'Create a fully automated content pipeline using AI tools, from research to publishing.',
    topic: 'Content Creation',
    skill: 'Intermediate',
    rating: 4,
    duration: '3h 45m',
    lessons: 22,
    price: 'Free',
    url: '#',
  },
  {
    id: 'make-money-ai',
    title: 'Make Money with AI in 2026',
    description: 'Proven strategies to generate income using AI tools — freelancing, products, and agencies.',
    topic: 'Make Money',
    skill: 'Beginner',
    rating: 4,
    duration: '5h 00m',
    lessons: 35,
    price: 'Free',
    url: '#',
  },
  {
    id: 'ai-seo-system',
    title: 'AI-Powered SEO: Rank Faster with AI',
    description: 'Use AI to research keywords, generate optimized content, and build topical authority.',
    topic: 'SEO',
    skill: 'Intermediate',
    rating: 5,
    duration: '3h 20m',
    lessons: 24,
    price: 'Free',
    url: '#',
  },
]
