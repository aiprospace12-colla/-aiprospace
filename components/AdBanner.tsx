type Props = { height?: number; className?: string }

export default function AdBanner({ height = 90, className = '' }: Props) {
  return (
    <div className={`ad-banner ${className}`} style={{ height }}>
      <span>Advertisement</span>
    </div>
  )
}
