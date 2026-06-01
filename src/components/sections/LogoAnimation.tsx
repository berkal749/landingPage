import type React from 'react'

type LogoAnimationProps = {
  className?: string
  style?: React.CSSProperties
}

export function LogoAnimation({ className = '', style }: LogoAnimationProps) {
  return (
    <section className={`logo-stage ${className}`.trim()} style={style} aria-label="Ana Agency logo animation">
      <div className="logo-wrap">
        <svg
          className="logo-mark"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          role="img"
          aria-labelledby="ana-logo-title ana-logo-desc"
        >
          <title id="ana-logo-title">Ana Agency logo animation</title>
          <desc id="ana-logo-desc">
            A rounded square logo with four animated corners and a diagonal connector.
          </desc>

          <rect
            className="logo-frame"
            x="10"
            y="10"
            width="80"
            height="80"
            rx="12"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="2"
          />

          <path className="logo-line logo-line-1" d="M 30 30 L 70 30" />
          <path className="logo-line logo-line-2" d="M 70 30 L 70 70" />
          <path className="logo-line logo-line-3" d="M 70 70 L 30 70" />
          <path className="logo-line logo-line-4" d="M 30 70 L 30 30" />
          <path className="logo-line logo-line-diagonal" d="M 30 30 L 70 70" />

          <circle className="logo-dot logo-dot-1" cx="30" cy="30" r="4" />
          <circle className="logo-dot logo-dot-2" cx="70" cy="30" r="4" />
          <circle className="logo-dot logo-dot-3" cx="70" cy="70" r="4" />
          <circle className="logo-dot logo-dot-4" cx="30" cy="70" r="4" />
        </svg>
      </div>
    </section>
  )
}

export default LogoAnimation