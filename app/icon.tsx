import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 22,
            height: 10,
            borderRadius: '50%',
            border: '1.5px solid white',
            position: 'absolute',
          }}
        />
        <div
          style={{
            width: 22,
            height: 10,
            borderRadius: '50%',
            border: '1.5px solid white',
            position: 'absolute',
            transform: 'rotate(60deg)',
          }}
        />
        <div
          style={{
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: 'white',
            position: 'absolute',
            top: 9,
            right: 5,
          }}
        />
      </div>
    ),
    { ...size }
  )
}
