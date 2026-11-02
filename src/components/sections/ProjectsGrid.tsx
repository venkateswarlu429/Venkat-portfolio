'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { projectsData } from '@/config/projects'

export default function ProjectsGrid() {
  return (
    <section id="work" className="relative py-24 border-t border-default">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="label-mono mb-2">02 / Work</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Selected work
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 label-mono">
            13 open-source projects
          </div>
        </div>

        <p className="text-fg-muted max-w-2xl mb-10">
          Real repositories, not case-study mockups — every project below is
          public on GitHub with code, docs, and CI. Strongest platform work
          first.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="group relative surface-card rounded-xl p-5 hover:border-accent/40 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="font-mono text-[10px] tracking-widest text-fg-dim">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-fg-muted group-hover:text-accent transition-colors">
                  <Github size={13} />
                  GITHUB
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              <h3 className="text-base font-semibold text-fg leading-snug mb-2 group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed mb-4">
                {p.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded border border-default font-mono text-[10px] tracking-widest text-fg-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/venkateswarlu429"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 h-11 px-5 rounded border border-strong text-fg hover:border-accent hover:text-accent transition-colors text-sm font-medium"
          >
            <Github size={16} />
            See all 13 projects on GitHub
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
