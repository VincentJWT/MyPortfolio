import { useEffect, useRef } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const children = content.children;
    Array.from(children).forEach((child, index) => {
      (child as HTMLElement).style.opacity = '0';
      (child as HTMLElement).style.transform = 'translateY(30px)';
      setTimeout(() => {
        (child as HTMLElement).style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        (child as HTMLElement).style.opacity = '1';
        (child as HTMLElement).style.transform = 'translateY(0)';
      }, 150 * index);
    });
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center blueprint-bg overflow-hidden transition-colors duration-300"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 border border-blue-200/30 dark:border-blue-500/20 rounded-full" />
        <div className="absolute bottom-40 right-20 w-96 h-96 border border-blue-200/20 dark:border-blue-500/10 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-blue-200/25 dark:border-blue-500/15 rotate-45" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left"
      >
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-500" />
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Portfolio 2026
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-4">
          WENTIAN
          <br />
          <span className="text-blue-600 dark:text-blue-500">(VINCENT) JIANG</span>
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground tracking-wide mb-6">
          ARCHITECTURAL TECHNOLOGIST
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-secondary-foreground max-w-2xl mb-10 leading-relaxed">
          Transforming visions into buildable realities through precision BIM modeling, 
          technical documentation, and Alberta Building Code compliance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 group"
          >
            View Projects
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            About Me
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border max-w-lg">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-foreground">8+</div>
            <div className="text-sm text-muted-foreground mt-1">Projects</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-foreground">5+</div>
            <div className="text-sm text-muted-foreground mt-1">Years Exp.</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-foreground">10+</div>
            <div className="text-sm text-muted-foreground mt-1">Software</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
