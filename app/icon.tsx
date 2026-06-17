import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#DC2626',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: 'sans-serif',
            letterSpacing: '-0.5px',
          }}
        >
          SB
        </span>
      </div>
    ),
    { ...size }
  )
}
