'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillsData } from '@/config/skills'

export default function SkillsRadar() {
  const [active, setActive] = useState(0)
  const cat = skillsData[active]

  const size = 360
  const cx = size / 2
  const cy = size / 2
  const r = 140
  const n = cat.skills.length
  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2

  const point = (i: number, value: number) => {
    const a = angle(i)
    const dist = (value / 100) * r
    return { x: cx + Math.cos(a) * dist, y: cy + Math.sin(a) * dist }
  }

  const polyPoints = cat.skills.map((s, i) => {
    const p = point(i, s.level)
    return `${p.x},${p.y}`
  }).join(' ')

  const gridLevels = [25, 50, 75, 100]

  return (
    <section id="skills" className="relative py-24 border-t border-default">
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />

      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="label-mono mb-2">03 / Stack</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Capability radar
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 label-mono">
            scaled · 0 → 100 · self-assessed
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3 space-y-1">
            {skillsData.map((c, i) => {
              const isActive = i === active
              return (
                <button
                  key={c.category}
                  onClick={() => setActive(i)}
                  className={`group w-full flex items-center justify-between px-3 py-2.5 rounded border transition-all text-left ${
                    isActive
                      ? 'border-accent bg-accent/5 text-fg'
                      : 'border-default hover:border-strong text-fg-muted hover:text-fg'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`font-mono text-[10px] tracking-widest w-6 ${
                        isActive ? 'text-accent' : 'text-fg-dim'
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className="text-sm font-medium">{c.category}</span>
                  </span>
                  <span className={`font-mono text-[10px] tracking-widest ${isActive ? 'text-accent' : 'text-fg-dim'}`}>
                    {c.skills.length}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="lg:col-span-5 surface-card rounded-xl p-4 relative overflow-hidden">
            <div className="absolute top-3 left-4 right-4 flex items-center justify-between">
              <span className="label-mono">/radar/{cat.category.toLowerCase().replace(/\s+/g, '-')}</span>
              <span className="label-mono text-accent">[ live ]</span>
            </div>

            <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto">
              <defs>
                <radialGradient id="fillRadar" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.05" />
                </radialGradient>
              </defs>

              {gridLevels.map((lvl) => (
                <polygon
                  key={lvl}
                  points={cat.skills
                    .map((_, i) => {
                      const a = angle(i)
                      const d = (lvl / 100) * r
                      return `${cx + Math.cos(a) * d},${cy + Math.sin(a) * d}`
                    })
                    .join(' ')}
                  fill="none"
                  stroke="hsl(var(--border-strong))"
                  strokeOpacity={lvl === 100 ? 0.5 : 0.25}
                  strokeDasharray={lvl === 100 ? '0' : '2 4'}
                />
              ))}

              {cat.skills.map((_, i) => {
                const a = angle(i)
                return (
                  <line
                    key={i}
                    x1={cx}
                    y1={cy}
                    x2={cx + Math.cos(a) * r}
                    y2={cy + Math.sin(a) * r}
                    stroke="hsl(var(--border-strong))"
                    strokeOpacity="0.3"
                  />
                )
              })}

              <AnimatePresence mode="wait">
                <motion.polygon
                  key={active}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  points={polyPoints}
                  fill="url(#fillRadar)"
                  stroke="hsl(var(--accent))"
                  strokeWidth="1.5"
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              </AnimatePresence>

              {cat.skills.map((s, i) => {
                const p = point(i, s.level)
                const labelP = {
                  x: cx + Math.cos(angle(i)) * (r + 22),
                  y: cy + Math.sin(angle(i)) * (r + 22),
                }
                return (
                  <g key={s.name}>
                    <circle cx={p.x} cy={p.y} r="4" fill="hsl(var(--accent))" />
                    <circle cx={p.x} cy={p.y} r="8" fill="hsl(var(--accent))" opacity="0.2">
                      <animate attributeName="r" values="6;12;6" dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <text
                      x={labelP.x}
                      y={labelP.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="font-mono"
                      fontSize="9"
                      letterSpacing="1.5"
                      fill="hsl(var(--fg-muted))"
                    >
                      {s.name.toUpperCase()}
                    </text>
                  </g>
                )
              })}

              <circle cx={cx} cy={cy} r="3" fill="hsl(var(--accent))" />
            </svg>
          </div>

          <div className="lg:col-span-4 space-y-2">
            <div className="label-mono mb-3">{cat.category} · breakdown</div>
            {cat.skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5 text-sm">
                    <span className="text-base">{s.icon}</span>
                    <span className="text-fg">{s.name}</span>
                  </div>
                  <span className="font-mono text-[11px] tracking-widest text-fg-muted">
                    {s.level.toString().padStart(3, '0')}
                  </span>
                </div>
                <div className="relative h-1 bg-surface rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.level}%` }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.05, ease: 'easeOut' }}
                    className="absolute inset-y-0 left-0 gradient-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
