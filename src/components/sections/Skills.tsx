'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/config/skills'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 border-t border-default">
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />

      <div className="container-custom">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="label-mono mb-2">01 / Stack</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              What I work with
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 label-mono">
            5+ years · 2021 → present
          </div>
        </div>

        <p className="text-fg-muted max-w-2xl mb-10">
          The stack behind the projects below — production platforms on AWS and
          Azure, Kubernetes, infrastructure as code, and CI/CD. Security shows
          up here in its proper place: IAM least-privilege, policy guardrails,
          and pipeline security gates, as part of platform work.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((c, i) => (
            <motion.div
              key={c.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="surface-card rounded-xl p-5 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-base font-semibold text-fg">{c.category}</h3>
                <span className="font-mono text-[10px] tracking-widest text-fg-dim">
                  0{i + 1}
                </span>
              </div>
              <p className="text-xs text-fg-muted mb-4">{c.blurb}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-full border border-default bg-elev/60 font-mono text-[11px] tracking-wider text-fg hover:border-accent/60 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="surface-card rounded-xl p-5 hover:border-accent/40 transition-colors"
          >
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-base font-semibold text-fg">Also in the toolkit</h3>
              <span className="font-mono text-[10px] tracking-widest text-fg-dim">
                06
              </span>
            </div>
            <p className="text-xs text-fg-muted mb-4">
              Secondary competencies and earlier platform work.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Windows Server', 'Active Directory', 'IIS', 'VMware', 'Snowflake', 'dbt', 'GCP'].map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-full border border-dashed border-default bg-elev/60 font-mono text-[11px] tracking-wider text-fg-muted hover:text-fg transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-fg-dim leading-relaxed">
              GCP from an earlier platform role (Raheja QBE); Snowflake &amp; dbt
              for data warehousing; Windows Server, Active Directory, IIS, and
              VMware administration.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
