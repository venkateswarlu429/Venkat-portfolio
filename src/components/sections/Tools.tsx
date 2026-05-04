'use client'

import { motion } from 'framer-motion'

const rowA = [
  { name: 'AWS',           glyph: '☁' },
  { name: 'Azure',         glyph: '◆' },
  { name: 'Kubernetes',    glyph: '⎈' },
  { name: 'Terraform',     glyph: '△' },
  { name: 'Python',        glyph: '🐍' },
  { name: 'EKS',           glyph: '▣' },
  { name: 'AKS',           glyph: '▤' },
  { name: 'IAM',           glyph: '🔐' },
  { name: 'KMS',           glyph: '🔑' },
  { name: 'Lambda',        glyph: 'λ' },
  { name: 'CloudTrail',    glyph: '◉' },
  { name: 'GuardDuty',     glyph: '◎' },
]

const rowB = [
  { name: 'Security Hub',     glyph: '⌬' },
  { name: 'Azure Policy',     glyph: '§' },
  { name: 'AAD · PIM',        glyph: '◐' },
  { name: 'GitLab CI',        glyph: '⫶' },
  { name: 'Azure DevOps',     glyph: '⬢' },
  { name: 'Trivy',            glyph: '◈' },
  { name: 'OPA',              glyph: '⬟' },
  { name: 'NetworkPolicy',    glyph: '⊞' },
  { name: 'Bash',             glyph: '$' },
  { name: 'Azure Functions',  glyph: 'ƒ' },
  { name: 'CIS · NIST · SOX', glyph: '✓' },
  { name: 'mTLS · SigV4',     glyph: '⨂' },
]

function Pill({ glyph, name }: { name: string; glyph: string }) {
  return (
    <div className="group inline-flex items-center gap-3 px-5 py-3 mx-2 rounded-full border border-default bg-elev/60 hover:border-accent/60 hover:bg-elev transition-colors whitespace-nowrap">
      <span className="text-accent text-base leading-none">{glyph}</span>
      <span className="font-mono text-[12px] tracking-[0.18em] text-fg-muted group-hover:text-fg transition-colors uppercase">
        {name}
      </span>
    </div>
  )
}

function Row({
  items,
  direction,
  duration,
}: {
  items: { name: string; glyph: string }[]
  direction: 'left' | 'right'
  duration: number
}) {
  const doubled = [...items, ...items]
  return (
    <div className="group relative overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <motion.div
        className="flex w-max"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        style={{ willChange: 'transform' }}
      >
        {doubled.map((it, i) => (
          <Pill key={`${it.name}-${i}`} {...it} />
        ))}
      </motion.div>
    </div>
  )
}

export default function Tools() {
  return (
    <section id="tools" className="relative py-20 border-t border-default overflow-hidden">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="label-mono mb-2">07 / Tools</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Daily drivers</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 label-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulseGlow" />
            production · battle-tested
          </div>
        </div>
      </div>

      <div className="relative space-y-3">
        <Row items={rowA} direction="left"  duration={42} />
        <Row items={rowB} direction="right" duration={48} />
      </div>

      <div className="container-custom mt-8 flex items-center justify-between label-mono">
        <span>{rowA.length + rowB.length} tools · 6 years · 4 frameworks</span>
        <span className="text-accent">[ continuous integration ]</span>
      </div>
    </section>
  )
}
