type Props = {
  slot?: string
  height?: number
  label?: string
}

export default function AdBanner({ height = 90, label = 'Advertisement' }: Props) {
  return (
    <div className="ad-banner my-6" style={{ height }}>
      <span>{label}</span>
    </div>
  )
}
