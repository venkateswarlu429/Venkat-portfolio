'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Metric = {
  label: string
  value: number
  suffix?: string
  prefix?: string
  caption: string
  series: number[]
  tone: 'accent' | 'accent2' | 'warn'
}

const metrics: Metric[] = [
  {
    label: 'YEARS · CLOUD SECURITY',
    value: 6,
    suffix: '+',
    caption: 'AWS · Azure · Kubernetes',
    series: [3, 4, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12],
    tone: 'accent',
  },
  {
    label: 'AWS ACCOUNTS · SECURED',
    value: 50,
    suffix: '+',
    caption: 'centralized findings · org-wide',
    series: [4, 8, 14, 18, 22, 28, 32, 36, 41, 45, 48, 50],
    tone: 'accent2',
  },
  {
    label: 'IAM ROLES · LEAST-PRIV',
    value: 320,
    suffix: '',
    caption: 'flat → scoped · KMS-bound',
    series: [40, 60, 90, 120, 160, 190, 220, 245, 270, 290, 310, 320],
    tone: 'accent',
  },
  {
    label: 'AUTO-REMEDIATIONS / MO',
    value: 1240,
    suffix: '',
    caption: 'Lambda · Azure Functions · Python',
    series: [120, 220, 340, 410, 520, 600, 720, 840, 960, 1050, 1180, 1240],
    tone: 'warn',
  },
  {
    label: 'COMPLIANCE FRAMEWORKS',
    value: 4,
    suffix: '',
    caption: 'SOX · ISO 27001 · CIS · NIST',
    series: [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4],
    tone: 'accent2',
  },
  {
    label: 'MEAN TIME TO REMEDIATE',
    value: 4,
    prefix: '< ',
    suffix: 'm',
    caption: 'detect → quarantine → notify',
    series: [42, 36, 28, 22, 18, 14, 11, 9, 7, 6, 5, 4],
    tone: 'accent',
  },
]

const toneClass = {
  accent:  { text: 'text-accent',   stroke: 'hsl(var(--accent))' },
  accent2: { text: 'text-accent-2', stroke: 'hsl(var(--accent-2))' },
  warn:    { text: 'text-accent-warn', stroke: 'hsl(var(--accent-warn))' },
}

function Counter({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: 1400, bounce: 0 })
  const text = useTransform(spring, (v) => Math.round(v).toLocaleString())

  useEffect(() => {
    if (inView) mv.set(to)
  }, [inView, to, mv])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{text}</motion.span>
      {suffix}
    </span>
  )
}

function Sparkline({ data, stroke }: { data: number[]; stroke: string }) {
  const w = 120, h = 36, pad = 2
  const max = Math.max(...data), min = Math.min(...data)
  const range = max - min || 1
  const step = (w - pad * 2) / (data.length - 1)
  const pts = data.map((v, i) => {
    const x = pad + i * step
    const y = h - pad - ((v - min) / range) * (h - pad * 2)
    return `${x},${y}`
  })
  const path = `M ${pts.join(' L ')}`
  const area = `${path} L ${w - pad},${h - pad} L ${pad},${h - pad} Z`
  return (
    <svg width={w} height={h} className="overflow-visible">
      <defs>
        <linearGradient id={`g-${stroke}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#g-${stroke})`} />
      <path d={path} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx={pad + (data.length - 1) * step} cy={h - pad - ((data[data.length - 1] - min) / range) * (h - pad * 2)} r="2.2" fill={stroke}>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="relative py-24 border-t border-default">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="label-mono mb-2">02 / Impact</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Telemetry from the field
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 label-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulseGlow" />
            live · 2019 → present
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-default border border-default rounded-xl overflow-hidden">
          {metrics.map((m, i) => {
            const tone = toneClass[m.tone]
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-elev/80 p-5 sm:p-6 relative group"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="label-mono text-[10px]">{m.label}</span>
                  <Sparkline data={m.series} stroke={tone.stroke} />
                </div>
                <div className={`mt-3 text-4xl sm:text-5xl font-semibold tracking-tight ${tone.text}`}>
                  <Counter to={m.value} prefix={m.prefix} suffix={m.suffix} />
                </div>
                <div className="mt-2 text-xs text-fg-muted">{m.caption}</div>

                <div className="absolute inset-x-0 bottom-0 h-px hairline-x opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
