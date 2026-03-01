import { useEffect, useRef } from 'react';
import { Mail, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Contact() {
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
              }, index * 100);
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
      id="contact"
      className="py-20 md:py-32 bg-secondary/30 dark:bg-secondary/10 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-on-scroll text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-500" />
            <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
              Contact
            </span>
            <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Interested in collaborating or discussing architectural projects? 
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="animate-on-scroll">
            <Card className="h-full hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/20 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get in touch via email
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:wentian.jiang@example.com">
                    Send Email
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* LinkedIn */}
          <div className="animate-on-scroll">
            <Card className="h-full hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/20 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                  <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect professionally
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://linkedin.com/in/wentian-jiang" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Profile
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Location */}
          <div className="animate-on-scroll sm:col-span-2 md:col-span-1">
            <Card className="h-full hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/20 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Based in Edmonton, AB
                </p>
                <div className="text-sm text-foreground">
                  Open to relocation
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="animate-on-scroll mt-20 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Wentian (Vincent) Jiang. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Architectural Technologist | Edmonton, AB, Canada
          </p>
        </div>
      </div>
    </section>
  );
}
