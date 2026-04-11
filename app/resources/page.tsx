import type { Metadata } from 'next'
import { FileText, Download } from 'lucide-react'
import { RESOURCES } from '@/data/resources'

export const metadata: Metadata = {
  title: 'Free Resources',
  description: 'Free AI cheat sheets, prompt libraries, templates, and guides to download.',
}

export default function ResourcesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-tx mb-2">Free Resources</h1>
      <p className="text-sm text-muted mb-8">Cheat sheets, templates and guides — free to download, no email required.</p>

      <div className="flex flex-col gap-3">
        {RESOURCES.map(resource => (
          <div
            key={resource.id}
            className="card flex items-start gap-4 p-4"
            style={{ cursor: 'default' }}
          >
            <div className="w-9 h-9 rounded-lg bg-hover border border-border flex items-center justify-center flex-shrink-0">
              <FileText size={15} className="text-muted" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-tx">{resource.title}</p>
              <p className="text-xs text-muted mt-0.5 leading-snug">{resource.description}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="badge">{resource.format}</span>
                <span className="text-xs text-muted">{resource.pages}</span>
              </div>
            </div>
            <a
              href={resource.downloadUrl}
              className="btn flex-shrink-0 gap-1.5"
              download
            >
              <Download size={12} />
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
