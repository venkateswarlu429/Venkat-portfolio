export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 grid-bg">
      <div className="text-center">
        <div className="font-mono text-[10px] tracking-widest text-fg-muted mb-2">HTTP/1.1</div>
        <h1 className="text-8xl font-semibold text-gradient-accent leading-none">404</h1>
        <h2 className="text-xl font-semibold mt-4 mb-2">Route not found</h2>
        <p className="text-fg-muted text-sm mb-6">This endpoint does not exist on the mesh.</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 h-10 px-4 rounded bg-accent text-bg font-medium text-sm hover:opacity-90 transition"
        >
          Return home
        </a>
      </div>
    </div>
  )
}
