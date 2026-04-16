import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'relative', width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: 110,
              height: 50,
              borderRadius: '50%',
              border: '6px solid white',
              position: 'absolute',
            }}
          />
          <div
            style={{
              width: 110,
              height: 50,
              borderRadius: '50%',
              border: '6px solid white',
              position: 'absolute',
              transform: 'rotate(60deg)',
            }}
          />
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: 'white',
              position: 'absolute',
              top: 14,
              right: 8,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
