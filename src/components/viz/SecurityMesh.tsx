'use client'

import { motion } from 'framer-motion'

type Node = {
  id: string
  label: string
  x: number
  y: number
  kind: 'cloud' | 'service' | 'edge'
}

const nodes: Node[] = [
  { id: 'aws',    label: 'AWS',    x: 80,  y: 90,  kind: 'cloud' },
  { id: 'azure',  label: 'AZURE',  x: 420, y: 80,  kind: 'cloud' },
  { id: 'eks',    label: 'EKS',    x: 90,  y: 280, kind: 'service' },
  { id: 'aks',    label: 'AKS',    x: 420, y: 290, kind: 'service' },
  { id: 'kms',    label: 'KMS',    x: 250, y: 50,  kind: 'service' },
  { id: 'gd',     label: 'GUARDDUTY', x: 30,  y: 180, kind: 'edge' },
  { id: 'sh',     label: 'SEC HUB', x: 470, y: 180, kind: 'edge' },
  { id: 'ct',     label: 'CT',     x: 250, y: 330, kind: 'edge' },
]

const center = { x: 250, y: 180 }

const edges: Array<[string, string]> = [
  ['aws', 'eks'],
  ['azure', 'aks'],
  ['aws', 'kms'],
  ['kms', 'azure'],
  ['gd', 'eks'],
  ['sh', 'aks'],
  ['eks', 'ct'],
  ['aks', 'ct'],
]

export default function SecurityMesh() {
  return (
    <div className="relative aspect-[5/4] w-full surface-card rounded-xl overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.08),transparent_60%)]" />

      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
        <span className="label-mono">/sec/mesh · realtime</span>
        <span className="label-mono text-accent-2 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulseGlow" /> all systems nominal
        </span>
      </div>

      <svg
        viewBox="0 0 500 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
            <stop offset="60%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="edgeGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--accent-2))" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[60, 110, 160].map((r, i) => (
          <circle
            key={r}
            cx={center.x}
            cy={center.y}
            r={r}
            fill="none"
            stroke="hsl(var(--accent))"
            strokeOpacity={0.18 - i * 0.04}
            strokeDasharray="2 6"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${center.x} ${center.y}`}
              to={`${i % 2 === 0 ? 360 : -360} ${center.x} ${center.y}`}
              dur={`${30 + i * 15}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {nodes.map((n) => (
          <line
            key={`hub-${n.id}`}
            x1={center.x}
            y1={center.y}
            x2={n.x}
            y2={n.y}
            stroke="url(#edgeGrad)"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        ))}

        {edges.map(([a, b], i) => {
          const na = nodes.find((n) => n.id === a)!
          const nb = nodes.find((n) => n.id === b)!
          return (
            <g key={`${a}-${b}`}>
              <line
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="hsl(var(--border-strong))"
                strokeWidth="1"
                strokeOpacity="0.6"
              />
              <line
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="url(#edgeGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                style={{
                  animation: `dashFlow ${4 + (i % 3)}s linear infinite`,
                }}
              />
            </g>
          )
        })}

        <circle
          cx={center.x}
          cy={center.y}
          r="58"
          fill="url(#hub)"
        />
        <circle
          cx={center.x}
          cy={center.y}
          r="22"
          fill="hsl(var(--bg-elev))"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          filter="url(#glow)"
        />
        <text
          x={center.x}
          y={center.y - 1}
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-mono"
          fontSize="9"
          fill="hsl(var(--accent))"
          letterSpacing="2"
        >
          IAM
        </text>
        <text
          x={center.x}
          y={center.y + 10}
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-mono"
          fontSize="6"
          fill="hsl(var(--fg-muted))"
          letterSpacing="2"
        >
          ZERO-TRUST
        </text>

        <circle cx={center.x} cy={center.y} r="22" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" from="22" to="46" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.5" to="0" dur="2.4s" repeatCount="indefinite" />
        </circle>

        {nodes.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.kind === 'cloud' ? 16 : n.kind === 'service' ? 13 : 10}
              fill="hsl(var(--bg-elev))"
              stroke={n.kind === 'cloud' ? 'hsl(var(--accent))' : n.kind === 'service' ? 'hsl(var(--accent-2))' : 'hsl(var(--border-strong))'}
              strokeWidth="1.2"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={2}
              fill={n.kind === 'cloud' ? 'hsl(var(--accent))' : 'hsl(var(--accent-2))'}
            >
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <text
              x={n.x}
              y={n.y + (n.kind === 'cloud' ? 30 : 26)}
              textAnchor="middle"
              className="font-mono"
              fontSize="8"
              fill="hsl(var(--fg-muted))"
              letterSpacing="2"
            >
              {n.label}
            </text>
          </g>
        ))}

        {edges.map(([a, b], i) => {
          const na = nodes.find((n) => n.id === a)!
          const nb = nodes.find((n) => n.id === b)!
          return (
            <circle key={`p-${i}`} r="2" fill="hsl(var(--accent))">
              <animateMotion
                dur={`${3 + (i % 4)}s`}
                repeatCount="indefinite"
                path={`M${na.x},${na.y} L${nb.x},${nb.y}`}
              />
            </circle>
          )
        })}
      </svg>

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <span className="label-mono">nodes: 8 · flows: 8 · dropped: 0</span>
        <span className="label-mono text-fg-dim">[ enc · sigv4 · mtls ]</span>
      </div>

      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/70 to-transparent"
        animate={{ y: ['0%', '100%', '0%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        style={{ filter: 'blur(0.5px)' }}
      />
    </div>
  )
}
