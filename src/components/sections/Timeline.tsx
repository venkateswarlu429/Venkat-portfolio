'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { experienceData } from '@/config/experience'

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.7', 'end 0.3'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="timeline" className="relative py-24 border-t border-default">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="label-mono mb-2">04 / Path</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Trajectory
            </h2>
          </div>
          <div className="hidden sm:block label-mono">2019 → present</div>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-default md:-translate-x-px" />
          <motion.div
            className="absolute left-[18px] md:left-1/2 top-0 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent md:-translate-x-px"
            style={{ height: lineHeight, boxShadow: '0 0 12px hsl(var(--accent))' }}
          />

          <div className="space-y-16">
            {experienceData.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={exp.company} className="relative grid md:grid-cols-2 gap-6 md:gap-12">
                  <div className="absolute left-[18px] md:left-1/2 top-3 -translate-x-1/2 z-10">
                    <span className="relative block h-3 w-3 rounded-full bg-bg border-2 border-accent">
                      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                    </span>
                  </div>

                  <div className={`pl-12 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-15% 0px' }}
                      transition={{ duration: 0.5 }}
                      className="surface-card rounded-xl p-5 sm:p-6 hover:border-accent/40 transition-colors group"
                    >
                      <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                        <span className="label-mono text-accent">{exp.period}</span>
                      </div>
                      <div className="text-xs font-mono tracking-widest text-fg-dim mb-1">
                        {exp.company.toUpperCase()}
                      </div>
                      <h3 className="text-xl font-semibold text-fg mb-3">{exp.position}</h3>
                      <ul className={`space-y-1.5 text-sm text-fg-muted ${isLeft ? 'md:[&>li]:flex-row-reverse' : ''}`}>
                        {(exp.achievements ?? []).slice(0, 3).map((a) => (
                          <li key={a} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-none" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
                        {(exp.technologies ?? []).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded border border-default font-mono text-[10px] tracking-widest text-fg-muted group-hover:border-strong transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className={`hidden md:block ${isLeft ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: '-15% 0px' }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className={`pt-3 ${isLeft ? 'pl-12' : 'pr-12 text-right'}`}
                    >
                      <div className="font-mono text-[10px] tracking-widest text-fg-dim mb-2">
                        NODE · {String(experienceData.length - i).padStart(2, '0')}
                      </div>
                      <div className="text-5xl font-semibold tabular-nums text-gradient-accent">
                        {exp.period.split(' ')[exp.period.split(' ').length - 1] === 'Present'
                          ? 'NOW'
                          : exp.period.split('-').slice(-1)[0].trim().slice(-4)}
                      </div>
                      <div className="mt-1 label-mono">{exp.company}</div>
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
