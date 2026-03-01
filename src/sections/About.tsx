import { useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, MapPin, Calendar, Plane } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animated', 'animate-fade-in-up');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 bg-background transition-colors duration-300"
    >
      <div ref={contentRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-on-scroll mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-500" />
            <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Professional Background
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Profile Summary */}
            <div className="animate-on-scroll">
              <p className="text-lg leading-relaxed text-foreground">
                Architectural Technologist with hands-on Revit experience in residential and modular design. 
                Skilled in Alberta Building Code compliance, permit documentation, and BIM coordination. 
                Background in project management and field verification.
              </p>
            </div>

            {/* Work Experience */}
            <div className="animate-on-scroll">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                Work Experience
              </h3>
              <Card className="transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Inventory Project Coordinator - CAD Support
                      </h4>
                      <p className="text-muted-foreground">WIS International</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      2018 - 2023
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    Edmonton, AB
                  </div>
                  <ul className="space-y-2 text-sm text-secondary-foreground">
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-500 mt-1">•</span>
                      Drafted AutoCAD floor plans for 10+ commercial sites (gas stations, retail stores), 
                      improving inventory workflow efficiency by 30%
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-500 mt-1">•</span>
                      Managed concurrent projects with tight deadlines, ensuring on-time deliverables
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-500 mt-1">•</span>
                      Performed field verification, data collection, and quality control for site surveys
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-500 mt-1">•</span>
                      Led teams of 5-15 staff across retail, pharmacy, and industrial sites
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education & Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                Education
              </h3>
              <div className="space-y-4">
                <Card className="transition-colors duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">Architectural Technology Diploma</h4>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">2023 - 2025</span>
                    </div>
                    <p className="text-sm text-muted-foreground">NAIT - Northern Alberta Institute of Technology</p>
                  </CardContent>
                </Card>
                <Card className="transition-colors duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">Hospitality Management Diploma</h4>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">2014 - 2016</span>
                    </div>
                    <p className="text-sm text-muted-foreground">NAIT - Northern Alberta Institute of Technology</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Drone Certification - Subtle mention */}
            <div className="animate-on-scroll">
              <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-card border-blue-100 dark:border-blue-900/50 transition-colors duration-300">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                      <Plane className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">RPAS Pilot</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Transport Canada certified drone pilot with advanced operations rating. 
                        Experienced in aerial site documentation and surveying.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location */}
            <div className="animate-on-scroll">
              <Card className="transition-colors duration-300">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-sm text-muted-foreground">Edmonton, AB, Canada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
