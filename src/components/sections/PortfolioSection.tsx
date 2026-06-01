import { useRef, useEffect, useState } from 'react';

interface Project {
  id: string;
  title: string;
  tags: string[];
  category: 'BRANDING' | 'DIGITAL' | 'PHYSICAL';
  image: string;
}

const projects: Project[] = [
  {
    id: 'monolith',
    title: 'The Monolith',
    tags: ['ARCHITECTURAL', 'BRANDING'],
    category: 'BRANDING',
    image: '/portfolio/the_monolith.png',
  },
  {
    id: 'pulse',
    title: 'Pulse',
    tags: ['CREATIVE TECH', 'INTERACTIVE'],
    category: 'DIGITAL',
    image: '/portfolio/pulse.png',
  },
  {
    id: 'aether',
    title: 'Aether',
    tags: ['MINIMALIST', 'IDENTITY'],
    category: 'BRANDING',
    image: '/portfolio/aether.png',
  },
  {
    id: 'vortex',
    title: 'Vortex',
    tags: ['EXPERIMENTAL', '3D'],
    category: 'PHYSICAL',
    image: '/portfolio/vortex.png',
  },
];

export function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'BRANDING' | 'DIGITAL' | 'PHYSICAL'>('ALL');

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewHeight = window.innerHeight;

      // Start pinning when container top meets top of viewport
      const scrollStart = rect.top;
      const totalScrollableDistance = sectionHeight - viewHeight;

      if (totalScrollableDistance <= 0) return;

      // Calculate progress (0 to 1)
      let progress = -scrollStart / totalScrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      // Translate the track
      const trackWidth = trackRef.current.scrollWidth;
      const maxTranslate = trackWidth - window.innerWidth;
      
      if (maxTranslate > 0) {
        trackRef.current.style.transform = `translateX(${-progress * maxTranslate}px)`;
      } else {
        trackRef.current.style.transform = 'translateX(0px)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Set a small timeout to let the DOM render before calculating
    const timer = setTimeout(() => {
      handleScroll();
    }, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, [activeFilter]);

  return (
    <section
      ref={containerRef}
      id="portfolio"
      className="relative w-full bg-[#131316] border-t border-white/5"
      style={{ height: '320vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,181,158,0.04),transparent_50%)] pointer-events-none" />

        {/* Main horizontal scrolling container */}
        <div
          ref={trackRef}
          className="flex h-full items-center px-[8vw] gap-[8vw] transition-transform duration-75 ease-out"
          style={{ willChange: 'transform' }}
        >
          {/* Panel 1: Heading Block */}
          <div className="flex flex-col justify-center w-[30vw] min-w-[320px] shrink-0 pr-[4vw] border-r border-white/10 z-10">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ffb59e] mb-4">
              02 / SELECTED WORKS
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[#e4e1e5]">
              Selected <br />
              <span className="text-[#ffb59e]">Works.</span>
            </h2>
            <p className="font-body mt-6 text-sm leading-relaxed text-[#c7c6ca]">
              An intersection of architectural precision and creative energy. Explore our recent methodologies applied across digital environments and physical spaces.
            </p>
            
            {/* Categories/Filters */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] font-semibold tracking-[0.25em] text-[#c7c6ca]">
              {(['ALL', 'BRANDING', 'DIGITAL', 'PHYSICAL'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative py-1 uppercase transition-colors hover:text-[#e4e1e5] cursor-pointer ${
                    activeFilter === filter ? 'text-[#ffb59e]' : 'text-[#c7c6ca]/60'
                  }`}
                >
                  {filter === 'ALL' ? 'ALL WORKS' : filter}
                  {activeFilter === filter && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffb59e] animate-fade-in" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards */}
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`relative group shrink-0 overflow-hidden flex flex-col justify-end p-8 border border-white/5 bg-[#1b1b1e] rounded-sm transition-all duration-500 hover:border-[#ffb59e]/30 cursor-pointer ${
                idx % 4 === 0
                  ? 'w-[32vw] min-w-[280px] h-[55vh] -translate-y-[5vh]'
                  : idx % 4 === 1
                  ? 'w-[24vw] min-w-[240px] h-[45vh] translate-y-[8vh]'
                  : idx % 4 === 2
                  ? 'w-[28vw] min-w-[260px] h-[50vh] -translate-y-[8vh]'
                  : 'w-[34vw] min-w-[300px] h-[52vh] translate-y-[5vh]'
              }`}
            >
              {/* Image container */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/45 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col justify-between h-full pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[9px] text-[#ffb59e]/80 border border-[#ffb59e]/20 px-2.5 py-0.5 rounded-full uppercase tracking-[0.2em] bg-[#131316]/50">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-[#c7c6ca]/40">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-[#e4e1e5] mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#c7c6ca]/60 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
