'use client'

import { useState, useMemo } from 'react'
import ToolCard, { type Tool } from '@/components/ToolCard'

const TOOLS: Tool[] = [
  {
    id: 1,
    name: 'Jasper AI',
    description:
      'The #1 AI writing assistant for bloggers and marketers. Generate SEO-optimized blog posts, ads, emails and social content 10x faster. Includes 50+ templates and Brand Voice training.',
    category: 'Writing',
    price: 'Paid',
    rating: 5,
    affiliateUrl: 'https://jasper.ai',
    editorsPick: true,
    tags: ['writing', 'content', 'SEO', 'blog'],
  },
  {
    id: 2,
    name: 'Midjourney',
    description:
      'The most powerful AI image generator available. Create stunning, photorealistic images, illustrations, and artwork from text prompts. Used by professionals worldwide.',
    category: 'Image',
    price: 'Paid',
    rating: 5,
    affiliateUrl: 'https://midjourney.com',
    editorsPick: true,
    tags: ['image', 'art', 'design', 'creative'],
  },
  {
    id: 3,
    name: 'n8n',
    description:
      'Open-source workflow automation platform. Connect 400+ apps, build complex automations visually, and run on your own server. The most powerful free automation tool available.',
    category: 'Automation',
    price: 'Free',
    rating: 5,
    affiliateUrl: 'https://n8n.io',
    editorsPick: true,
    tags: ['automation', 'workflows', 'integration', 'no-code'],
  },
  {
    id: 4,
    name: 'Surfer SEO',
    description:
      'Data-driven SEO content optimization tool. Analyzes top-ranking pages and gives you an exact blueprint to rank. Includes content editor, keyword research, and SERP analyzer.',
    category: 'SEO',
    price: 'Paid',
    rating: 4,
    affiliateUrl: 'https://surferseo.com',
    tags: ['SEO', 'content', 'ranking', 'keywords'],
  },
  {
    id: 5,
    name: 'ChatGPT',
    description:
      "OpenAI's flagship AI assistant. Write, code, analyze, research, and automate tasks with the most advanced language model. GPT-4o available on free plan.",
    category: 'Writing',
    price: 'Freemium',
    rating: 5,
    affiliateUrl: 'https://chat.openai.com',
    tags: ['writing', 'coding', 'research', 'assistant'],
  },
  {
    id: 6,
    name: 'ElevenLabs',
    description:
      'Ultra-realistic AI voice generation. Create natural-sounding voiceovers, clone your voice, and generate audio in 29 languages. Perfect for content creators and podcasters.',
    category: 'Productivity',
    price: 'Freemium',
    rating: 5,
    affiliateUrl: 'https://elevenlabs.io',
    tags: ['voice', 'audio', 'TTS', 'content'],
  },
  {
    id: 7,
    name: 'Make (Integromat)',
    description:
      'Visual automation platform to connect any app without code. Build complex multi-step automations with powerful logic, filters, and 1,500+ integrations.',
    category: 'Automation',
    price: 'Freemium',
    rating: 4,
    affiliateUrl: 'https://make.com',
    tags: ['automation', 'integration', 'no-code', 'workflows'],
  },
  {
    id: 8,
    name: 'Runway ML',
    description: 'AI video generation and editing platform. Create professional videos from text, edit with AI tools, and generate visual effects. Used by Hollywood filmmakers.',
    category: 'Video',
    price: 'Freemium',
    rating: 4,
    affiliateUrl: 'https://runwayml.com',
    tags: ['video', 'editing', 'generation', 'creative'],
  },
  {
    id: 9,
    name: 'Claude AI',
    description: "Anthropic's powerful AI assistant — exceptional at writing, analysis, coding and reasoning. Handles 200k token context, making it perfect for long documents and complex tasks.",
    category: 'Writing',
    price: 'Freemium',
    rating: 5,
    affiliateUrl: 'https://claude.ai',
    editorsPick: true,
    tags: ['writing', 'coding', 'analysis', 'assistant'],
  },
  {
    id: 10,
    name: 'Leonardo AI',
    description: 'Professional AI image generation with fine-tuned models for product photography, concept art, and marketing visuals. Free tier includes 150 images/day.',
    category: 'Image',
    price: 'Freemium',
    rating: 4,
    affiliateUrl: 'https://leonardo.ai',
    tags: ['image', 'art', 'design', 'marketing'],
  },
  {
    id: 11,
    name: 'Zapier',
    description: 'The most beginner-friendly automation tool. Connect 6,000+ apps with zero code. Perfect for automating repetitive business tasks without technical knowledge.',
    category: 'Automation',
    price: 'Freemium',
    rating: 4,
    affiliateUrl: 'https://zapier.com',
    tags: ['automation', 'integration', 'no-code', 'beginner'],
  },
  {
    id: 12,
    name: 'Perplexity AI',
    description: 'AI-powered search engine that cites real sources. Research any topic in seconds with verified, up-to-date information. Replaces hours of manual Googling.',
    category: 'Productivity',
    price: 'Freemium',
    rating: 5,
    affiliateUrl: 'https://perplexity.ai',
    tags: ['research', 'search', 'news', 'assistant'],
  },
  {
    id: 13,
    name: 'Copy.ai',
    description: 'AI copywriting tool built specifically for marketing teams. Generates high-converting ad copy, email sequences, product descriptions and social media content at scale.',
    category: 'Writing',
    price: 'Freemium',
    rating: 4,
    affiliateUrl: 'https://copy.ai',
    tags: ['copywriting', 'marketing', 'ads', 'email'],
  },
  {
    id: 14,
    name: 'HeyGen',
    description: 'Create professional AI avatar videos in minutes. Clone yourself as a virtual presenter, translate videos into 40+ languages, and produce studio-quality content without a camera.',
    category: 'Video',
    price: 'Freemium',
    rating: 5,
    affiliateUrl: 'https://heygen.com',
    editorsPick: true,
    tags: ['video', 'avatar', 'translation', 'presenter'],
  },
  {
    id: 15,
    name: 'Notion AI',
    description: 'AI built into your workspace. Write, summarize, translate, and brainstorm directly inside Notion. The best AI upgrade for teams already using Notion.',
    category: 'Productivity',
    price: 'Paid',
    rating: 4,
    affiliateUrl: 'https://notion.so',
    tags: ['productivity', 'writing', 'notes', 'team'],
  },
  {
    id: 16,
    name: 'Cursor',
    description: 'The AI-first code editor. Write, edit and debug code 10x faster with an AI that understands your entire codebase. Built on VS Code — zero learning curve.',
    category: 'Coding',
    price: 'Freemium',
    rating: 5,
    affiliateUrl: 'https://cursor.sh',
    editorsPick: true,
    tags: ['coding', 'developer', 'IDE', 'programming'],
  },
  {
    id: 17,
    name: 'Mailmodo',
    description: 'AI-powered email marketing platform. Create interactive AMP emails, automate campaigns, and boost open rates with AI-generated subject lines and content.',
    category: 'Email',
    price: 'Freemium',
    rating: 4,
    affiliateUrl: 'https://mailmodo.com',
    tags: ['email', 'marketing', 'automation', 'campaigns'],
  },
  {
    id: 18,
    name: 'Frase',
    description: 'AI SEO tool that researches, outlines and writes content designed to rank. Analyzes top 20 Google results and tells you exactly what to write to outrank them.',
    category: 'SEO',
    price: 'Paid',
    rating: 4,
    affiliateUrl: 'https://frase.io',
    tags: ['SEO', 'content', 'research', 'ranking'],
  },
]

const CATEGORIES = ['All', 'Writing', 'Image', 'Video', 'Automation', 'SEO', 'Email', 'Coding', 'Productivity']
const PRICES = ['All', 'Free', 'Paid', 'Freemium']

export default function ToolsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')

  const filtered = useMemo(() => {
    return TOOLS.filter((t) => {
      const matchSearch =
        !search ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
      const matchCat = category === 'All' || t.category === category
      const matchPrice = price === 'All' || t.price === price
      return matchSearch && matchCat && matchPrice
    })
  }, [search, category, price])

  return (
    <div className="pt-20 min-h-screen" style={{ background: '#06060f' }}>
      {/* Hero */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 100%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: 'rgba(0,212,255,0.1)',
              border: '1px solid rgba(0,212,255,0.25)',
              color: '#00d4ff',
            }}
          >
            🤖 AI Tools Directory
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            The Best AI Tools of 2025
          </h1>
          <p className="text-text-muted text-xl leading-relaxed">
            Tested, ranked, and reviewed by our team. Find the perfect AI tool for your needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Filters */}
        <div
          className="p-5 md:p-6 rounded-2xl mb-10 flex flex-col sm:flex-row gap-4"
          style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Search */}
          <div className="flex-1 relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              placeholder="Search AI tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-dark pl-10"
            />
          </div>

          {/* Category select */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-dark cursor-pointer sm:w-44"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c} style={{ background: '#0d0d1a' }}>
                {c === 'All' ? 'All Categories' : c}
              </option>
            ))}
          </select>

          {/* Price select */}
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input-dark cursor-pointer sm:w-36"
          >
            {PRICES.map((p) => (
              <option key={p} value={p} style={{ background: '#0d0d1a' }}>
                {p === 'All' ? 'All Prices' : p}
              </option>
            ))}
          </select>
        </div>

        {/* Stats bar */}
        <div className="flex items-center gap-4 mb-8 text-sm text-text-muted">
          <span>
            Showing <span className="text-text-primary font-semibold">{filtered.length}</span> tools
          </span>
          {(search || category !== 'All' || price !== 'All') && (
            <button
              onClick={() => { setSearch(''); setCategory('All'); setPrice('All') }}
              className="text-purple-light hover:text-purple-DEFAULT transition-colors text-xs"
            >
              × Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((tool, i) => (
              <ToolCard key={tool.id} tool={tool} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-text-muted text-lg">No tools found matching your criteria.</p>
            <button
              onClick={() => { setSearch(''); setCategory('All'); setPrice('All') }}
              className="mt-4 text-purple-light hover:underline text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className="mt-16 p-8 rounded-2xl text-center"
          style={{
            background: 'rgba(13,13,26,0.8)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <h3
            className="text-2xl font-bold text-text-primary mb-2"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Want all tool recommendations in one place?
          </h3>
          <p className="text-text-muted mb-6">
            Get our free AI Automation Playbook with our top 10 tool picks and workflows.
          </p>
          <a href="/resources" className="btn-primary inline-flex">
            Download Free Playbook →
          </a>
        </div>
      </div>
    </div>
  )
}
