import { DottedSurface } from '@/components/ui/dotted-surface'
import { cn } from '@/lib/utils'

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <DottedSurface className="size-full">
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
              'bg-[radial-gradient(ellipse_at_center,var(--color-foreground)/10%,transparent_50%)]',
              'blur-[30px]',
            )}
          />
          <div className="relative z-10 text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-white/60">
              shadcn-ready component
            </p>
            <h1 className="font-mono text-4xl font-semibold sm:text-5xl">
              Dotted Surface
            </h1>
          </div>
        </div>
      </DottedSurface>
    </main>
  )
}
