export type Resource = {
  id: string
  title: string
  description: string
  type: 'Cheat Sheet' | 'eBook' | 'Template' | 'Prompt Library' | 'Checklist'
  url: string
}

export const RESOURCES: Resource[] = [
  {
    id: 'ai-tools-cheat-sheet',
    title: 'AI Tools Cheat Sheet 2026',
    description: 'Complete quick-reference guide to 50+ best AI tools, organized by category with pricing and use cases.',
    type: 'Cheat Sheet',
    url: '#',
  },
  {
    id: 'n8n-templates-pack',
    title: 'n8n Automation Templates Pack',
    description: '10 ready-to-import n8n workflow templates for common automation tasks — social media, email, content, and more.',
    type: 'Template',
    url: '#',
  },
  {
    id: '100-ai-prompts',
    title: '100 Best AI Prompts Library',
    description: 'The ultimate prompt collection for writing, coding, marketing, research, and business — tested and proven.',
    type: 'Prompt Library',
    url: '#',
  },
  {
    id: 'beginners-guide-to-ai',
    title: "Beginner's Complete Guide to AI (PDF)",
    description: 'Start using AI tools today. A simple, jargon-free guide explaining everything you need to know to get started.',
    type: 'eBook',
    url: '#',
  },
  {
    id: 'ai-seo-checklist',
    title: 'AI SEO Checklist 2026',
    description: 'Step-by-step SEO checklist for AI-generated content — keyword research, optimization, schema, and publishing.',
    type: 'Checklist',
    url: '#',
  },
  {
    id: 'make-money-ai-toolkit',
    title: 'Make Money with AI Toolkit',
    description: 'Tools, templates, and strategies for generating income with AI — freelancing, digital products, and agencies.',
    type: 'eBook',
    url: '#',
  },
]

export const RESOURCE_TYPES = ['All', 'eBook', 'Cheat Sheet', 'Template', 'Prompt Library', 'Checklist']
