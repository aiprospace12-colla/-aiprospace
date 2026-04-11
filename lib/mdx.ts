import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export type PostFrontmatter = {
  title: string
  excerpt: string
  date: string
  category: string
  tags: string[]
  thumbnail: string
  author: string
  authorTitle?: string
  keyword?: string
  featured?: boolean
}

export type Post = {
  slug: string
  frontmatter: PostFrontmatter
  readingTime: string
  content: string
}

export type PostMeta = Omit<Post, 'content'>

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(BLOG_DIR, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      readingTime: stats.text,
    }
  })

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    readingTime: stats.text,
    content,
  }
}

export function getPostsByCategory(category: string): PostMeta[] {
  const all = getAllPosts()
  if (category === 'all') return all
  return all.filter(
    (p) => p.frontmatter.category.toLowerCase() === category.toLowerCase()
  )
}

export const CATEGORIES = ['All', 'AI Tools', 'Automation', 'Make Money', 'News']

export const CATEGORY_COLORS: Record<string, string> = {
  'AI Tools': 'bg-purple-DEFAULT/20 text-purple-light border-purple-DEFAULT/30',
  Automation: 'bg-cyan-DEFAULT/10 text-cyan-DEFAULT border-cyan-DEFAULT/30',
  'Make Money': 'bg-green-500/10 text-green-400 border-green-500/30',
  News: 'bg-red-accent/10 text-red-accent border-red-accent/30',
  Default: 'bg-white/5 text-text-muted border-white/10',
}
