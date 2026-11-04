'use client'

import { motion } from 'framer-motion'

const highlights = [
  {
    value: '5+',
    unit: 'years',
    label: 'DevOps & cloud platforms',
    caption: '2021 → present, across AWS and Azure',
  },
  {
    value: '14',
    unit: 'projects',
    label: 'Open-source platform projects',
    caption: 'Public on GitHub, with code, docs, and CI',
  },
  {
    value: '~40',
    unit: 'integrations',
    label: 'Migrated onto a shared Azure platform',
    caption: 'Plant integrations and release workflows, Alcoa',
  },
  {
    value: '31',
    unit: 'tests',
    label: 'Passing on the AI Change Risk Checker',
    caption: 'Pre-deploy risk gate for Terraform plans',
  },
]

export default function Impact() {
  return (
    <section id="impact" className="relative py-24 border-t border-default">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="label-mono mb-2">05 / Highlights</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Highlights
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 label-mono">
            2021 → present
          </div>
        </div>

        <p className="text-fg-muted max-w-2xl mb-10">
          Only numbers that come from real work — no inflated counts, no
          invented savings.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-default border border-default rounded-xl overflow-hidden">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-elev/80 p-5 sm:p-6 relative group"
            >
              <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-gradient-accent">
                {h.value}
                <span className="ml-2 text-base sm:text-lg font-medium text-fg-muted">
                  {h.unit}
                </span>
              </div>
              <div className="mt-3 text-sm font-medium text-fg">{h.label}</div>
              <div className="mt-1 text-xs text-fg-muted">{h.caption}</div>

              <div className="absolute inset-x-0 bottom-0 h-px hairline-x opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-sm text-fg-muted">
          Platform work across manufacturing, agriculture, pharmaceuticals, and
          insurance.
        </p>
      </div>
    </section>
  )
}
