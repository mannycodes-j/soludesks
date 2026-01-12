// Dashboard home page

export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s an overview of your learning progress.</p>
      </div>

      {/* Placeholder content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 animate-scale-in stagger-${i}`}
          >
            <div className="h-4 w-24 rounded bg-muted animate-pulse" />
            <div className="mt-3 h-8 w-16 rounded bg-muted animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  )
}
