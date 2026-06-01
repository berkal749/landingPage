import { DottedSurface } from '@/components/ui/dotted-surface'
import LogoAnimation from '@/components/sections/LogoAnimation'
import PortfolioSection from '@/components/sections/PortfolioSection'
import { cn } from '@/lib/utils'

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#131316] text-[#e4e1e5] selection:bg-[#ffb59e] selection:text-[#131316]">
      <DottedSurface className="size-full" />

      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none fixed inset-x-0 top-0 h-[55vh]',
          'bg-[radial-gradient(circle_at_center,rgba(255,181,158,0.12),transparent_55%)]',
          'blur-3xl',
        )}
      />

      <div className="relative z-10">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#131316]/70 backdrop-blur-sm">
          <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-16">
            <a href="#top" className="text-lg font-semibold tracking-[0.2em] text-[#e4e1e5]">
              ANA
            </a>

            <nav className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-[0.35em] text-[#c7c6ca] md:flex">
              <a className="transition-colors hover:text-[#e4e1e5]" href="#services">
                Services
              </a>
              <a className="transition-colors hover:text-[#e4e1e5]" href="#portfolio">
                Portfolio
              </a>
              <a className="transition-colors hover:text-[#e4e1e5]" href="#about">
                About
              </a>
              <a className="transition-colors hover:text-[#e4e1e5]" href="#contact">
                Contact
              </a>
            </nav>

            <a
              className="hidden border border-white/25 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.35em] text-[#e4e1e5] transition-colors hover:border-[#ffb59e] hover:text-[#ffb59e] md:block"
              href="#contact"
            >
              Start Project
            </a>
          </div>
        </header>

        <section id="top" className="min-h-[calc(100vh-5rem)] px-5 md:px-16">
          <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[1440px] flex-col items-center justify-center py-10 text-center">
            <div className="mb-6 md:mb-8">
              <LogoAnimation className="pointer-events-none" style={{ minHeight: 'auto' }} />
            </div>

            <div className="max-w-4xl">
              <h1 className="text-[clamp(2.2rem,5.8vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#e4e1e5] md:leading-[0.9]">
                Architectural precision
                <br />
                meets <span className="text-[#ffb59e]">creative energy</span>.
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#c7c6ca] md:text-base md:leading-7">
                We design digital experiences for high-end corporate clients and innovative
                startups. Quiet luxury with moments of intense vibrance.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  className="inline-flex min-w-[140px] items-center justify-center rounded-md bg-[#ffb59e] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#131316] transition-transform duration-200 hover:-translate-y-0.5"
                  href="#services"
                >
                  Explore Work
                </a>
                <a
                  className="inline-flex min-w-[140px] items-center justify-center rounded-md border border-white/25 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#e4e1e5] transition-colors duration-200 hover:border-[#ffb59e] hover:text-[#ffb59e]"
                  href="#contact"
                >
                  Start Project
                </a>
              </div>
            </div>

            <a
              aria-label="Scroll to services"
              className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full text-[#c7c6ca] transition-colors hover:text-[#ffb59e]"
              href="#services"
            >
              <span className="text-2xl leading-none">↓</span>
            </a>
          </div>
        </section>

        <section id="services" className="border-t border-white/5 px-5 py-20 md:px-16 md:py-28">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-14">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-[#ffb59e]/30 bg-[#ffb59e]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ffb59e]">
                Our Capabilities
              </div>
              <h2 className="mt-8 text-[clamp(2.2rem,5vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#e4e1e5]">
                Expertise at the edge of <span className="italic text-[#ffb59e]">precision.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-[#c7c6ca] md:text-base md:leading-7">
                We employ a multidisciplinary approach, bridging architectural rigor with digital
                innovation. Our services are designed for organizations that demand both technical
                excellence and profound creative expression.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: 'Brand Strategy',
                  body: 'Defining the foundational architecture of your identity. We craft positioning, messaging, and visual systems that communicate authority and secure market presence.',
                  tags: ['Positioning', 'Identity'],
                },
                {
                  title: 'Digital Experience',
                  body: 'Designing interfaces that feel less like software and more like spatial environments. We prioritize fluid interactions, stark layouts, and technical precision.',
                  tags: ['UI/UX', 'Web Design'],
                },
                {
                  title: 'Architectural Viz',
                  body: 'Translating physical spaces into photorealistic digital environments. We provide rendering and 3D modeling services that convey atmosphere and material fidelity.',
                  tags: ['3D Modeling', 'Rendering'],
                },
                {
                  title: 'Creative Tech',
                  body: 'Building the unseen infrastructure. From bespoke CMS solutions to interactive WebGL experiences, we engineer robust systems that power compelling narratives.',
                  tags: ['Development', 'WebGL'],
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group min-h-[320px] border border-white/5 bg-[#1b1b1e]/90 p-8 transition-colors duration-500 hover:border-[#ffb59e]/30 md:p-10"
                >
                  <div className="flex h-full flex-col justify-between gap-10">
                    <div>
                      <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#ffb59e]/25 text-[#ffb59e] transition-colors group-hover:border-[#ffb59e]/45">
                        <span className="text-lg">✦</span>
                      </div>
                      <h3 className="text-[1.5rem] font-semibold tracking-[-0.03em] text-[#e4e1e5]">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-md text-sm leading-6 text-[#c7c6ca]">
                        {item.body}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#2a2a2d] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7c6ca]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PortfolioSection />

        <section id="about" className="border-t border-white/5 px-5 py-20 md:px-16 md:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-3xl">
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.04em] text-[#e4e1e5]">
                The Methodology
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#c7c6ca] md:text-base md:leading-7">
                A rigorous, phased approach ensuring alignment, precision, and flawless execution at
                every stage.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-4">
              {[
                {
                  phase: 'Phase 01',
                  title: 'Discovery',
                  body: 'Auditing current state, defining objectives, and establishing the foundational constraints of the project.',
                },
                {
                  phase: 'Phase 02',
                  title: 'Blueprint',
                  body: 'Wireframing, system architecture, and strategic documentation. Drafting the schematic before laying bricks.',
                },
                {
                  phase: 'Phase 03',
                  title: 'Construction',
                  body: 'High-fidelity design and technical development. Executing the blueprint with rigorous attention to detail.',
                },
                {
                  phase: 'Phase 04',
                  title: 'Refinement',
                  body: 'QA testing, optimization, and final polish ensuring the product performs flawlessly upon deployment.',
                },
              ].map((step) => (
                <article key={step.phase} className="border-t border-white/10 pt-8">
                  <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ffb59e]">
                    {step.phase}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#e4e1e5]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#c7c6ca]">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-white/5 px-5 py-24 text-center md:px-16 md:py-32"
        >
          <div className="mx-auto max-w-[1440px]">
            <h2 className="text-[clamp(2.3rem,4.6vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#e4e1e5]">
              Let&apos;s build something <span className="italic text-[#ffb59e]">precise.</span>
            </h2>

            <a
              className="mt-8 inline-flex items-center justify-center rounded-md bg-[#ffb59e] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#131316] transition-transform duration-200 hover:-translate-y-0.5"
              href="mailto:hello@ana.studio"
            >
              Start Project
            </a>
          </div>
        </section>

        <footer className="border-t border-white/5 bg-[#0e0e11]/70">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-8 text-[11px] font-medium uppercase tracking-[0.3em] text-[#c7c6ca] md:flex-row md:items-center md:justify-between md:px-16">
            <div className="text-[#e4e1e5]">ANA</div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
              <a className="transition-colors hover:text-[#ffb59e]" href="#privacy">
                Privacy Policy
              </a>
              <a className="transition-colors hover:text-[#ffb59e]" href="#terms">
                Terms of Service
              </a>
              <a className="transition-colors hover:text-[#ffb59e]" href="#instagram">
                Instagram
              </a>
              <a className="transition-colors hover:text-[#ffb59e]" href="#linkedin">
                LinkedIn
              </a>
            </div>

            <div className="text-[#919094]">© 2024 ANA Agency. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </main>
  )
}
