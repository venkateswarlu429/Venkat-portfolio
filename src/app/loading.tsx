export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border border-accent border-t-transparent animate-spin" />
          <div className="absolute inset-2 rounded-full bg-accent/20 animate-pulseGlow" />
        </div>
        <div className="font-mono text-[10px] tracking-widest text-fg-muted">INITIALIZING…</div>
      </div>
    </div>
  )
}
