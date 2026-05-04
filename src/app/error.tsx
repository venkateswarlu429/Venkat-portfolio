'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 grid-bg">
      <div className="text-center surface-card rounded-xl p-8 max-w-md">
        <div className="label-mono text-[hsl(var(--accent-danger))] mb-3">SYSTEM · ERROR</div>
        <h2 className="text-2xl font-semibold mb-3">Unhandled exception</h2>
        <p className="text-fg-muted text-sm mb-6 font-mono break-all">
          {error.message || 'unexpected_error'}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 h-10 px-4 rounded bg-accent text-bg font-medium text-sm hover:opacity-90 transition"
        >
          Retry
        </button>
      </div>
    </div>
  )
}
