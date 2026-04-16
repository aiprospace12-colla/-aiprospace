export type Resource = {
  id: string
  title: string
  description: string
  type: 'Cheat Sheet' | 'eBook' | 'Template' | 'Prompt Library' | 'Checklist' | 'Masterclass'
  filename: string
}

export const RESOURCES: Resource[] = [
  {
    id: 'ai-tools-cheat-sheet',
    title: 'AI Tools Cheat Sheet 2026',
    description: 'Complete quick-reference guide to 50+ best AI tools, organized by category with pricing and use cases.',
    type: 'Cheat Sheet',
    filename: 'aiprospace-complete-ai-tools-guide-2026.pdf',
  },
  {
    id: '100-ai-prompts',
    title: '100 Best AI Prompts Library',
    description: 'The ultimate prompt collection for writing, coding, marketing, research, and business — tested and proven.',
    type: 'Prompt Library',
    filename: 'aiprospace-100-ai-prompts-that-work.pdf',
  },
  {
    id: 'n8n-templates-pack',
    title: 'n8n Automation Templates Pack',
    description: '10 ready-to-import n8n workflow templates for common automation tasks — social media, email, content, and more.',
    type: 'Template',
    filename: 'aiprospace-n8n-automation-starter-pack.pdf',
  },
  {
    id: 'ai-seo-checklist',
    title: 'AI SEO Checklist 2026',
    description: 'Step-by-step SEO checklist for AI-generated content — keyword research, optimization, schema, and publishing.',
    type: 'Checklist',
    filename: 'aiprospace-ai-seo-checklist-2026.pdf',
  },
  {
    id: 'make-money-ai-toolkit',
    title: 'Make Money with AI Toolkit',
    description: 'Tools, templates, and strategies for generating income with AI — freelancing, digital products, and agencies.',
    type: 'eBook',
    filename: 'aiprospace-make-money-with-ai-guide.pdf',
  },
  {
    id: 'prompt-engineering-masterclass',
    title: 'AI Prompt Engineering Masterclass',
    description: 'Master the art of prompting — frameworks, templates, and advanced techniques for ChatGPT, Claude, and more.',
    type: 'Masterclass',
    filename: 'aiprospace-prompt-engineering-masterclass.pdf',
  },
]

export const RESOURCE_TYPES = ['All', 'eBook', 'Cheat Sheet', 'Template', 'Prompt Library', 'Checklist', 'Masterclass']
