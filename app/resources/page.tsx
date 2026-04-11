import type { Metadata } from 'next'
import { Grid, Book, FileText, Layout, Hash, FileDown } from 'lucide-react'
import { RESOURCES } from '@/data/resources'

export const metadata: Metadata = {
  title: 'Free Resources',
  description: 'Free AI cheat sheets, ebooks, templates, and prompt libraries. No email required.',
}

const SIDEBAR = [
  { icon: Grid,     label: 'All Resources'   },
  { icon: Book,     label: 'eBooks'          },
  { icon: FileText, label: 'Cheat Sheets'    },
  { icon: Layout,   label: 'Templates'       },
  { icon: Hash,     label: 'Prompt Libraries'},
]

export default function ResourcesPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 flex-shrink-0 border-r border-border px-3 py-5 sticky top-[97px] self-start h-[calc(100vh-97px)] overflow-y-auto">
        <p className="text-base font-bold text-tx px-3 mb-3">Resources</p>
        <div className="divider mb-4" />
        <span className="sidebar-label mb-2">BY TYPE</span>
        <div className="flex flex-col gap-0.5">
          {SIDEBAR.map(({ icon: Icon, label }) => (
            <button key={label} className="sidebar-item">
              <Icon size={16} />{label}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 px-8 py-8 max-w-3xl">
        <h1 className="text-2xl font-bold text-tx mb-1">Resources</h1>
        <p className="text-sm text-muted mb-8">Free downloads — no email required</p>

        <div>
          {RESOURCES.map((resource, i) => (
            <div
              key={resource.id}
              className={`flex items-start gap-4 py-5 ${i < RESOURCES.length - 1 ? 'border-b border-border' : ''}`}
            >
              <FileDown size={20} className="text-muted flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold text-tx">{resource.title}</p>
                <p className="text-[13px] text-muted mt-0.5 leading-snug">{resource.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="badge">{resource.format}</span>
                  <span className="text-[11px] text-muted">{resource.pages}</span>
                </div>
              </div>
              <a
                href={resource.downloadUrl}
                download
                className="btn flex-shrink-0 text-[13px] whitespace-nowrap"
              >
                Download Free →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
