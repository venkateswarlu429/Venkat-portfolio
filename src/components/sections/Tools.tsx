'use client'

import { motion } from 'framer-motion'

const rowA = [
  'AWS', 'Azure', 'Kubernetes', 'EKS', 'AKS',
  'Docker', 'Terraform', 'Ansible', 'Python', 'Bash',
]

const rowB = [
  'PowerShell', 'GitHub Actions', 'Azure DevOps', 'Jenkins', 'GitLab CI',
  'ArgoCD', 'Grafana', 'Prometheus', 'Azure Monitor', 'CloudWatch',
]

function Pill({ name }: { name: string }) {
  return (
    <div className="group inline-flex items-center gap-3 px-5 py-3 mx-2 rounded-full border border-default bg-elev/60 hover:border-accent/60 hover:bg-elev transition-colors whitespace-nowrap">
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
  items: string[]
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
        {doubled.map((name, i) => (
          <Pill key={`${name}-${i}`} name={name} />
        ))}
      </motion.div>
    </div>
  )
}

export default function Tools() {
  const total = rowA.length + rowB.length
  return (
    <section id="tools" className="relative py-20 border-t border-default overflow-hidden">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="label-mono mb-2">03 / Tools</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Daily drivers</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 label-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulseGlow" />
            production &amp; open source
          </div>
        </div>
      </div>

      <div className="relative space-y-3">
        <Row items={rowA} direction="left" duration={42} />
        <Row items={rowB} direction="right" duration={48} />
      </div>

      <div className="container-custom mt-8 flex items-center justify-between label-mono">
        <span>{total} tools · 5+ years · 5 areas</span>
        <span className="text-accent">[ continuous integration ]</span>
      </div>
    </section>
  )
}
