'use client'

import { motion } from 'framer-motion'

const deliverySteps = [
  {
    step: '01',
    title: 'Code & IaC',
    text: 'Terraform, Ansible, and app code — everything versioned, reviewed, and repeatable.',
  },
  {
    step: '02',
    title: 'CI/CD & GitOps',
    text: 'Gated pipelines and GitOps sync — signed releases, staged rollouts, rollback-ready.',
  },
  {
    step: '03',
    title: 'Kubernetes',
    text: 'EKS and AKS platforms — scaling, safe rollouts and rollbacks, day-2 operations.',
  },
  {
    step: '04',
    title: 'Observe',
    text: 'Prometheus, Grafana, and SLO-based alerts that page on user impact, not noise.',
  },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 grid-bg radial-fade opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-14 h-px hairline-x" />

      <div className="container-custom grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-default bg-elev/60 backdrop-blur"
          >
            <span className="relative h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent-2" />
              <span className="absolute inset-0 rounded-full bg-accent-2 animate-ping" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-fg-muted">
              5Y+ EXPERIENCE · DEVOPS &amp; PLATFORM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[44px] sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight"
          >
            Senior
            <br />
            <span className="text-gradient-accent">DevOps &amp; Platform</span>
            <br />
            Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-fg-muted text-base sm:text-lg max-w-lg"
          >
            I build and run reliable cloud platforms — Kubernetes,
            infrastructure as code, and CI/CD pipelines across AWS and Azure.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fg text-sm sm:text-base max-w-lg flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulseGlow flex-none" />
            Open to DevOps, platform, and SRE roles — remote or on-site,
            anywhere in the U.S.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 h-11 px-5 rounded bg-accent text-bg font-medium text-sm tracking-wide hover:opacity-90 transition"
            >
              View projects
              <span className="font-mono text-xs opacity-70">↘</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-11 px-5 rounded border border-strong text-fg hover:border-accent hover:text-accent transition"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 grid grid-cols-3 max-w-md gap-px bg-default border border-default rounded-lg overflow-hidden"
          >
            {[
              { k: 'AWS',        v: 'production' },
              { k: 'AZURE',      v: 'production' },
              { k: 'KUBERNETES', v: 'EKS · AKS' },
            ].map((c) => (
              <div key={c.k} className="bg-elev/80 p-3">
                <div className="font-mono text-[10px] tracking-widest text-fg-dim">{c.k}</div>
                <div className="text-xs text-fg mt-1">{c.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="surface-card rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-default">
              <span className="label-mono">How I deliver</span>
              <span className="label-mono text-accent-2">end to end</span>
            </div>
            <div className="divide-y divide-default">
              {deliverySteps.map((s) => (
                <div key={s.step} className="flex gap-4 px-5 py-4">
                  <span className="font-mono text-sm text-accent pt-0.5">{s.step}</span>
                  <div>
                    <div className="font-medium text-fg">{s.title}</div>
                    <div className="text-sm text-fg-muted mt-0.5 leading-relaxed">{s.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-4 border-t border-default bg-elev/40">
              <div className="text-xs text-fg-muted leading-relaxed">
                <span className="text-fg">Currently —</span> Senior Azure DevOps
                Engineer · Alcoa · Mar 2025 → Present
              </div>
              <div className="text-xs text-fg-muted leading-relaxed mt-1">
                Horsham, PA · Open to remote &amp; relocation
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
