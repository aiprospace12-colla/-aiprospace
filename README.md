# AIProSpace — AI Tools & Automation Blog

The #1 resource for AI tool reviews, automation guides, and strategies to earn more with AI.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** with custom design system
- **MDX** blog posts (via `next-mdx-remote`)
- **Supabase** (email subscriber storage)
- **Resend** (transactional emails)
- **Framer Motion** (animations)
- **TypeScript**

## Getting Started

### 1. Clone and Install

```bash
cd aiprospace
npm install
```

### 2. Configure Environment Variables

Copy `.env.local` and fill in your credentials:

```bash
cp .env.local .env.local
```

| Variable | Where to get it |
|----------|----------------|
| `NEXT_PUBLIC_SUPABASE_URL` | [supabase.com](https://supabase.com) → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Project Settings → API |
| `RESEND_API_KEY` | [resend.com](https://resend.com) → API Keys |
| `NEXT_PUBLIC_GA_ID` | Google Analytics → Admin → Data Streams |
| `NEXT_PUBLIC_CLARITY_ID` | [clarity.microsoft.com](https://clarity.microsoft.com) |
| `NEXT_PUBLIC_ADSENSE_ID` | Google AdSense → Account → Account info |

### 3. Set Up Supabase

Run this SQL in your Supabase SQL editor:

```sql
create table subscribers (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  source text default 'website',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table subscribers enable row level security;

-- Allow inserts from anon users (for form submissions)
create policy "Allow anon inserts" on subscribers
  for insert with check (true);
```

### 4. Configure Resend

1. Add your domain to Resend
2. Verify DNS records
3. Update the `from` address in `lib/resend.ts` if needed

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 6. Build for Production

```bash
npm run build
```

This also generates the sitemap via `next-sitemap`.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` config is already included.

## Project Structure

```
aiprospace/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, scripts, Navbar, Footer)
│   ├── page.tsx            # Homepage
│   ├── blog/               # Blog listing + single post
│   ├── tools/              # AI tools directory
│   ├── resources/          # eBooks & downloads
│   ├── about/              # About page
│   ├── contact/            # Contact form
│   └── api/                # API routes (subscribe, contact)
├── components/             # Reusable components
├── content/blog/           # MDX blog posts
├── lib/                    # Supabase, Resend, MDX utilities
└── styles/globals.css      # Design system + animations
```

## Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
excerpt: "Brief description for SEO and cards"
date: "2025-02-01"
category: "AI Tools"   # AI Tools | Automation | Make Money | News
tags: ["tag1", "tag2"]
thumbnail: "/images/blog/your-image.jpg"
author: "AIProSpace Team"
authorTitle: "AI Expert"
keyword: "target keyword"
featured: false
---

Your content here...
```

The slug is automatically derived from the filename.

## Design System

| Token | Value |
|-------|-------|
| Background | `#06060f` |
| Surface | `#0d0d1a` |
| Purple | `#7b5ea7` |
| Cyan | `#00d4ff` |
| Text Primary | `#f0f0ff` |
| Text Muted | `#8888aa` |

Fonts: **Syne** (headings, 800) + **DM Sans** (body, 300-500)

## Affiliate Disclosure

This site contains affiliate links. When you purchase through links on this site, we may earn a commission at no extra cost to you. We only recommend products we've tested and believe in.

## License

MIT
