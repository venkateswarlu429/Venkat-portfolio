'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react'

const channels = [
  { icon: Mail,     label: 'Email',     value: 'vm4537145@gmail.com',                                  href: 'mailto:vm4537145@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn',  value: '/in/venkatswarlu-maddula',                             href: 'https://www.linkedin.com/in/venkatswarlu-maddula-53a890162/' },
  { icon: Github,   label: 'GitHub',    value: '@venkateswarlu429',                                    href: 'https://github.com/venkateswarlu429' },
  { icon: MapPin,   label: 'Location',  value: 'Norristown, PA · UTC-5',                               href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 border-t border-default overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade opacity-30 pointer-events-none" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="label-mono mb-2">06 / Contact</div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1]"
            >
              Got a perimeter
              <br />
              that needs <span className="text-gradient-accent">hardening?</span>
            </motion.h2>

            <p className="mt-5 text-fg-muted max-w-md">
              Open to senior cloud-security and platform-security roles. Async-first, ship fast, document everything.
            </p>

            <a
              href="mailto:vm4537145@gmail.com"
              className="group inline-flex items-center gap-3 mt-8 h-12 pl-5 pr-4 rounded bg-accent text-bg font-medium tracking-wide hover:opacity-90 transition"
            >
              Start a conversation
              <span className="h-7 w-7 rounded-full bg-bg/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>

          <div className="lg:col-span-6">
            <div className="surface-card rounded-xl overflow-hidden scan-line">
              <div className="flex items-center justify-between px-4 py-2 border-b border-default">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent-danger))]" />
                  <span className="h-2 w-2 rounded-full bg-accent-warn" />
                  <span className="h-2 w-2 rounded-full bg-accent-2" />
                  <span className="ml-3 label-mono">~/contact.sh</span>
                </div>
                <span className="label-mono text-accent-2">● connected</span>
              </div>
              <div className="p-5 font-mono text-[12.5px] leading-7">
                <div className="text-fg-dim">$ whoami</div>
                <div className="text-fg">venkateswarlu · cloud-security-engineer</div>
                <div className="text-fg-dim mt-3">$ list --channels</div>
                <div className="mt-1 divide-y divide-default border border-default rounded">
                  {channels.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-3 py-2.5 hover:bg-accent/5 transition-colors"
                    >
                      <c.icon size={14} className="text-fg-muted group-hover:text-accent transition-colors" />
                      <span className="text-fg-muted w-20 text-[11px] tracking-widest">{c.label.toUpperCase()}</span>
                      <span className="text-fg flex-1 truncate">{c.value}</span>
                      <ArrowUpRight size={12} className="text-fg-dim group-hover:text-accent transition-colors" />
                    </a>
                  ))}
                </div>
                <div className="text-fg-dim mt-3">
                  $ <span className="text-accent">_</span>
                  <span className="inline-block w-2 h-4 align-middle ml-0.5 bg-accent animate-blink" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
