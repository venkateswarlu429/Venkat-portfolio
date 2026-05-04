'use client'

type Kind = 'mesh' | 'shield' | 'cluster' | 'flow' | 'lock' | 'pipeline'

export default function ProjectVisual({ kind }: { kind: Kind }) {
  switch (kind) {
    case 'mesh':     return <Mesh />
    case 'shield':   return <Shield />
    case 'cluster':  return <Cluster />
    case 'flow':     return <Flow />
    case 'lock':     return <Lock />
    case 'pipeline': return <Pipeline />
  }
}

const accent = 'hsl(var(--accent))'
const accent2 = 'hsl(var(--accent-2))'
const dim = 'hsl(var(--border-strong))'
const fg = 'hsl(var(--fg-muted))'

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 240 180" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.6" />
          <stop offset="100%" stopColor={accent2} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {children}
    </svg>
  )
}

function Mesh() {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    x: 30 + (i % 4) * 60,
    y: 50 + Math.floor(i / 4) * 40,
  }))
  return (
    <Frame>
      {nodes.map((a, i) =>
        nodes.slice(i + 1).map((b, j) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d > 80) return null
          return (
            <line key={`${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={dim} strokeOpacity="0.5" />
          )
        })
      )}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="4" fill={i === 5 ? accent : accent2}>
            <animate attributeName="opacity" values="1;0.4;1" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
          </circle>
          {i === 5 && <circle cx={n.x} cy={n.y} r="10" fill="none" stroke={accent} strokeOpacity="0.4">
            <animate attributeName="r" values="6;14;6" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" />
          </circle>}
        </g>
      ))}
    </Frame>
  )
}

function Shield() {
  return (
    <Frame>
      <g transform="translate(120 92)">
        {[60, 50, 40, 30].map((s, i) => (
          <path
            key={s}
            d={`M0,-${s} L${s * 0.85},-${s * 0.4} L${s * 0.85},${s * 0.4} L0,${s} L-${s * 0.85},${s * 0.4} L-${s * 0.85},-${s * 0.4} Z`}
            fill="none"
            stroke={i === 0 ? accent : dim}
            strokeOpacity={i === 0 ? 0.9 : 0.35}
            strokeWidth={i === 0 ? 1.4 : 1}
            strokeDasharray={i === 0 ? '0' : '2 4'}
          >
            {i === 0 && (
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite" />
            )}
          </path>
        ))}
        <text textAnchor="middle" y="4" fontSize="11" fontFamily="ui-monospace" fill={accent} letterSpacing="3">SOX</text>
      </g>
      <g fontFamily="ui-monospace" fontSize="8" fill={fg} letterSpacing="2">
        <text x="20" y="30">PIM</text>
        <text x="200" y="30" textAnchor="end">CA</text>
        <text x="20" y="160">AAD</text>
        <text x="200" y="160" textAnchor="end">POLICY</text>
      </g>
    </Frame>
  )
}

function Cluster() {
  const pods = Array.from({ length: 18 }, (_, i) => ({
    x: 30 + (i % 6) * 32,
    y: 40 + Math.floor(i / 6) * 32,
    blocked: i === 9 || i === 14,
  }))
  return (
    <Frame>
      <rect x="20" y="30" width="200" height="120" fill="none" stroke={dim} strokeDasharray="3 4" />
      <text x="20" y="22" fontFamily="ui-monospace" fontSize="8" fill={fg} letterSpacing="2">CLUSTER · prod-eks</text>
      {pods.map((p, i) => (
        <g key={i}>
          <rect
            x={p.x - 8}
            y={p.y - 8}
            width="16"
            height="16"
            rx="2"
            fill="none"
            stroke={p.blocked ? 'hsl(var(--accent-danger))' : accent2}
            strokeOpacity={p.blocked ? 0.9 : 0.7}
          />
          <circle cx={p.x} cy={p.y} r="2" fill={p.blocked ? 'hsl(var(--accent-danger))' : accent2}>
            <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" begin={`${i * 0.1}s`} />
          </circle>
          {p.blocked && (
            <line x1={p.x - 8} y1={p.y - 8} x2={p.x + 8} y2={p.y + 8} stroke="hsl(var(--accent-danger))" strokeWidth="1.2" />
          )}
        </g>
      ))}
    </Frame>
  )
}

function Flow() {
  const path = 'M 20 90 C 70 30, 130 150, 220 90'
  return (
    <Frame>
      <path d={path} stroke={dim} fill="none" strokeWidth="1" />
      <path d={path} stroke="url(#g1)" fill="none" strokeWidth="1.6" strokeDasharray="4 6">
        <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="3s" repeatCount="indefinite" />
      </path>
      <circle r="3" fill={accent}>
        <animateMotion dur="3s" repeatCount="indefinite" path={path} />
      </circle>
      <circle r="3" fill={accent2}>
        <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path={path} />
      </circle>
      <g fontFamily="ui-monospace" fontSize="8" fill={fg} letterSpacing="2">
        <text x="20" y="120">DETECT</text>
        <text x="120" y="40" textAnchor="middle">QUARANTINE</text>
        <text x="220" y="120" textAnchor="end">NOTIFY</text>
      </g>
    </Frame>
  )
}

function Lock() {
  return (
    <Frame>
      <g transform="translate(120 100)">
        <rect x="-32" y="-10" width="64" height="50" rx="4" fill="none" stroke={accent} strokeWidth="1.4" />
        <path d="M -22 -10 V -32 a 22 22 0 0 1 44 0 V -10" fill="none" stroke={accent} strokeWidth="1.4" />
        <circle cx="0" cy="14" r="4" fill={accent} />
        <line x1="0" y1="14" x2="0" y2="28" stroke={accent} strokeWidth="2" />
      </g>
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (Math.PI * 2 * i) / 8
        const x = 120 + Math.cos(a) * 70
        const y = 100 + Math.sin(a) * 50
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill={accent2} opacity="0.7" />
            <line x1={120 + Math.cos(a) * 50} y1={100 + Math.sin(a) * 35} x2={x} y2={y} stroke={dim} strokeOpacity="0.5" />
          </g>
        )
      })}
      <text x="120" y="22" textAnchor="middle" fontFamily="ui-monospace" fontSize="8" fill={fg} letterSpacing="2">JIT · LEAST-PRIV</text>
    </Frame>
  )
}

function Pipeline() {
  const stages = ['SRC', 'BUILD', 'SCAN', 'DEPLOY']
  return (
    <Frame>
      <line x1="20" y1="90" x2="220" y2="90" stroke={dim} />
      {stages.map((s, i) => {
        const x = 20 + i * 66
        return (
          <g key={s}>
            <circle cx={x} cy={90} r="10" fill="hsl(var(--bg-elev))" stroke={i === 2 ? accent : accent2} strokeWidth="1.4" />
            <circle cx={x} cy={90} r="3" fill={i === 2 ? accent : accent2}>
              <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
            <text x={x} y={114} textAnchor="middle" fontFamily="ui-monospace" fontSize="8" fill={fg} letterSpacing="2">{s}</text>
            {i === 2 && (
              <g>
                <rect x={x - 18} y={50} width="36" height="14" rx="2" fill="hsl(var(--accent)/0.1)" stroke={accent} />
                <text x={x} y={60} textAnchor="middle" fontFamily="ui-monospace" fontSize="7" fill={accent} letterSpacing="2">GATE</text>
              </g>
            )}
          </g>
        )
      })}
      <circle r="3" fill={accent}>
        <animateMotion dur="3s" repeatCount="indefinite" path="M 20 90 L 220 90" />
      </circle>
    </Frame>
  )
}
