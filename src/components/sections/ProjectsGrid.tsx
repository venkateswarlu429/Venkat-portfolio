'use client'

import { motion } from 'framer-motion'
import { projectsData } from '@/config/projects'
import ProjectVisual from '../viz/ProjectVisual'

const projectMeta = [
  { metric: '50+',  unit: 'accounts',     kind: 'mesh'      as const },
  { metric: 'SOX',  unit: 'compliant',    kind: 'shield'    as const },
  { metric: '100%', unit: 'admission',    kind: 'cluster'   as const },
  { metric: '1.2k', unit: 'auto/mo',      kind: 'flow'      as const },
  { metric: '0',    unit: 'standing-priv',kind: 'lock'      as const },
  { metric: '4',    unit: 'gates',        kind: 'pipeline'  as const },
]

export default function ProjectsGrid() {
  return (
    <section id="work" className="relative py-24 border-t border-default">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="label-mono mb-2">05 / Work</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Selected systems
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 label-mono">
            6 case studies · production
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-default border border-default rounded-xl overflow-hidden">
          {projectsData.map((p, i) => {
            const meta = projectMeta[i] ?? projectMeta[0]
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="group relative bg-elev/80 hover:bg-elev transition-colors flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-default">
                  <div className="absolute inset-0 dot-bg opacity-30" />
                  <ProjectVisual kind={meta.kind} />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="font-mono text-[10px] tracking-widest text-fg-dim">
                      0{i + 1}
                    </span>
                    <span className="h-px w-6 bg-fg-dim/30" />
                  </div>
                  <div className="absolute top-3 right-3 text-right">
                    <div className="text-2xl font-semibold tabular-nums text-gradient-accent leading-none">
                      {meta.metric}
                    </div>
                    <div className="font-mono text-[9px] tracking-widest text-fg-dim mt-0.5">
                      {meta.unit}
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-semibold text-fg leading-snug mb-2 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-fg-muted leading-relaxed line-clamp-2 mb-4">
                    {p.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1">
                    {p.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded font-mono text-[9px] tracking-widest text-fg-dim border border-default"
                      >
                        {t}
                      </span>
                    ))}
                    {p.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 font-mono text-[9px] tracking-widest text-fg-dim">
                        +{p.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
