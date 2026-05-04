'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SecurityMesh from '../viz/SecurityMesh'

const tickerEvents = [
  { t: 'IAM',     msg: 'over-privileged role quarantined', sev: 'warn' },
  { t: 'EKS',     msg: 'unsigned image · admission denied', sev: 'high' },
  { t: 'KMS',     msg: 'key rotation enforced · 84 keys',   sev: 'ok'   },
  { t: 'AAD',     msg: 'PIM elevation · auto-revoked',      sev: 'ok'   },
  { t: 'CT',      msg: 'anomalous API call · isolated',     sev: 'high' },
  { t: 'CONFIG',  msg: 'S3 public ACL · auto-remediated',   sev: 'warn' },
]

const sevColor: Record<string, string> = {
  ok:   'text-accent-2',
  warn: 'text-accent-warn',
  high: 'text-[hsl(var(--accent-danger))]',
}

export default function Hero() {
  const [tick, setTick] = useState(0)
  const [now, setNow] = useState<string>('')

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % tickerEvents.length), 2200)
    const stamp = () => setNow(new Date().toISOString().slice(0, 19))
    stamp()
    const clock = setInterval(stamp, 1000)
    return () => {
      clearInterval(id)
      clearInterval(clock)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 grid-bg radial-fade opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-14 h-px hairline-x" />

      <div className="container-custom grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-5 space-y-6">
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
              SYSTEM · OPERATIONAL · 6Y UPTIME
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[44px] sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight"
          >
            Cloud
            <br />
            <span className="text-gradient-accent">Security</span>
            <br />
            Engineer
            <span className="inline-block w-[6px] h-[0.85em] align-baseline ml-2 bg-accent animate-blink" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-fg-muted text-base sm:text-lg max-w-md"
          >
            I harden multi-cloud platforms with zero-trust IAM, signed-image pipelines,
            and Python-driven auto-remediation.
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
              View work
              <span className="font-mono text-xs opacity-70">↘</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-11 px-5 rounded border border-strong text-fg hover:border-accent hover:text-accent transition"
            >
              <span className="font-mono text-xs">~/</span> contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 grid grid-cols-3 max-w-md gap-px bg-default border border-default rounded-lg overflow-hidden"
          >
            {[
              { k: 'AWS',   v: 'multi-account' },
              { k: 'AZURE', v: 'SOX-ready' },
              { k: 'K8S',   v: 'admission-hardened' },
            ].map((c) => (
              <div key={c.k} className="bg-elev/80 p-3">
                <div className="font-mono text-[10px] tracking-widest text-fg-dim">{c.k}</div>
                <div className="text-xs text-fg mt-1">{c.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 relative"
        >
          <SecurityMesh />

          <div className="mt-4 surface-card rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-default">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent-danger))]" />
                <span className="h-2 w-2 rounded-full bg-accent-warn" />
                <span className="h-2 w-2 rounded-full bg-accent-2" />
                <span className="ml-3 font-mono text-[10px] tracking-widest text-fg-dim">
                  /var/log/security · live
                </span>
              </div>
              <span suppressHydrationWarning className="font-mono text-[10px] tracking-widest text-fg-dim">
                {now ? `${now}Z` : '----------T--:--:--Z'}
              </span>
            </div>
            <div className="px-4 py-3 font-mono text-[12px] h-[68px] overflow-hidden">
              {tickerEvents.map((e, i) => {
                const offset = (i - tick + tickerEvents.length) % tickerEvents.length
                if (offset > 2) return null
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 leading-6 transition-opacity"
                    style={{ opacity: offset === 0 ? 1 : 0.4 - offset * 0.15 }}
                  >
                    <span className="text-fg-dim">{String(i).padStart(3, '0')}</span>
                    <span className="text-fg-muted">{e.t.padEnd(7, ' ')}</span>
                    <span className={sevColor[e.sev]}>●</span>
                    <span className="text-fg/90">{e.msg}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
