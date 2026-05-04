import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-default mt-12">
      <div className="absolute inset-x-0 top-0 h-px hairline-x" />
      <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest text-fg-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulseGlow" />
          SYSTEM/SECURE · {year} · MADDULA VENKATESWARLU
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/venkateswarlu429"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-default rounded hover:border-accent hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/venkatswarlu-maddula-53a890162/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-default rounded hover:border-accent hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={14} />
          </a>
          <a
            href="mailto:vm4537145@gmail.com"
            className="p-2 border border-default rounded hover:border-accent hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
