import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
// Import project data from centralized config file
// To modify projects/images, edit: src/data/projects.ts
import { projects, type Project } from '@/data/projects';

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animated', 'animate-scale-in');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 md:py-32 bg-secondary/30 dark:bg-secondary/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-on-scroll mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-500" />
            <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Selected Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of architectural projects spanning residential, commercial, 
            and public building design, showcasing technical expertise and creative vision.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="animate-on-scroll group cursor-pointer"
              onClick={() => openProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-2xl dark:hover:shadow-black/20 transition-all duration-300 hover:scale-[1.02]">
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <Badge className="mb-2 w-fit bg-blue-600 text-white">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-white/70 text-sm">
                    <ExternalLink className="h-4 w-4" />
                    View Details
                  </div>
                </div>

                {/* Category Badge (always visible) */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 dark:bg-black/70 text-foreground dark:text-white">
                    {project.category}
                  </Badge>
                </div>

                {/* Title (always visible at bottom) */}
                <div className="p-4 bg-card border-t border-border transition-colors duration-300">
                  <h3 className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 bg-card">
          {selectedProject && (
            <>
              {/* Image Gallery */}
              <div className="relative aspect-video bg-black">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                
                {/* Navigation */}
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-blue-600 text-white">
                      {selectedProject.category}
                    </Badge>
                  </div>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-4 space-y-4">
                  <p className="text-muted-foreground">
                    {selectedProject.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {selectedProject.details.map((detail, index) => (
                        <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-blue-600 dark:text-blue-500 mt-0.5">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
