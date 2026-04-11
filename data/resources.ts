export type Resource = {
  id: number
  title: string
  description: string
  format: string
  pages: string
  downloadUrl: string
}

export const RESOURCES: Resource[] = [
  {
    id: 1,
    title: 'AI Tools Cheat Sheet 2026',
    description: 'One-page reference of the best AI tools by category — bookmark and use daily.',
    format: 'PDF',
    pages: '1 page',
    downloadUrl: '#',
  },
  {
    id: 2,
    title: 'n8n Automation Templates',
    description: '15 ready-to-import n8n workflows for social media, email, and business automation.',
    format: 'JSON + PDF',
    pages: '15 workflows',
    downloadUrl: '#',
  },
  {
    id: 3,
    title: '100 Best AI Prompts Library',
    description: 'Curated collection of the most effective prompts for ChatGPT, Claude, and Midjourney.',
    format: 'PDF + Notion',
    pages: '24 pages',
    downloadUrl: '#',
  },
  {
    id: 4,
    title: "Beginner's Guide to AI Tools",
    description: 'Start here — the complete non-technical introduction to using AI in your daily life.',
    format: 'PDF',
    pages: '32 pages',
    downloadUrl: '#',
  },
]
