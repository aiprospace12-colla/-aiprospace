// AdSense ad unit — invisible until publisher ID is configured
// Positions correctly in layout and activates automatically when approved
export default function AdBanner({ className = '' }: { className?: string }) {
  return <div className={`ad-unit ${className}`} aria-hidden="true" />
}
