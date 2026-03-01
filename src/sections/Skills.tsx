import { useEffect, useRef } from 'react';
import { 
  PenTool, 
  FileText, 
  Layers, 
  Box, 
  Monitor,
  CheckCircle2,
  Plane
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const draftingSkills = [
  'Construction documents',
  'Permit sets',
  'Plans, elevations, sections',
  'Details, site plans',
  'Wall assemblies',
  'Schedules, redlines',
  'As-built drawings',
];

const softwareSkills = [
  { name: 'Revit (BIM)', level: 'Expert' },
  { name: 'AutoCAD', level: 'Expert' },
  { name: 'ReCap', level: 'Proficient' },
  { name: 'SketchUp', level: 'Proficient' },
  { name: 'Enscape', level: 'Proficient' },
  { name: 'Adobe Photoshop', level: 'Proficient' },
  { name: 'Adobe Illustrator', level: 'Proficient' },
  { name: 'Adobe InDesign', level: 'Proficient' },
  { name: 'Bluebeam Revu', level: 'Proficient' },
  { name: 'Microsoft Office', level: 'Expert' },
];

const droneSkills = [
  'Aerial site documentation',
  'Site surveying',
  'Progress photography',
  'VLOS operations',
  'Advanced operations',
];

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animated', 'animate-fade-in-up');
              }, index * 50);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 md:py-32 bg-background transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-on-scroll mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-500" />
            <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Software
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive technical skills in architectural drafting, documentation, 
            and industry-standard software tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Drafting & Documentation */}
          <div className="animate-on-scroll">
            <Card className="h-full transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <PenTool className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Drafting & Documentation
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Technical drawing expertise
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {draftingSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 dark:bg-secondary/30 hover:bg-secondary dark:hover:bg-secondary/50 transition-colors"
                    >
                      <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Software Skills */}
          <div className="animate-on-scroll">
            <Card className="h-full transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <Monitor className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Software Proficiency
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Industry-standard tools
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {softwareSkills.map((software, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 dark:bg-secondary/30 hover:bg-secondary dark:hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-card dark:bg-background flex items-center justify-center shadow-sm">
                          <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {software.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-xs text-muted-foreground">
                          {software.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Skills - Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Drone Operations */}
          <div className="animate-on-scroll">
            <Card className="h-full bg-gradient-to-br from-sky-50 to-white dark:from-sky-950/30 dark:to-card border-sky-100 dark:border-sky-900/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center">
                    <Plane className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Drone Operations
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      RPAS pilot capabilities
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {droneSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg bg-white/70 dark:bg-black/20 hover:bg-white dark:hover:bg-black/30 transition-colors"
                    >
                      <CheckCircle2 className="h-4 w-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                      <span className="text-sm text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* General Capabilities */}
          <div className="animate-on-scroll">
            <Card className="h-full transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <Box className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Additional Capabilities
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Professional expertise
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Alberta Building Code',
                    'BIM Coordination',
                    'Permit Documentation',
                    'Field Verification',
                    'Project Management',
                    'Quality Control',
                    'Team Leadership',
                    'Site Surveying',
                  ].map((capability, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-colors"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm text-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
