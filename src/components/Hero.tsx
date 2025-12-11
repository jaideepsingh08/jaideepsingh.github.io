import { ArrowDown, Linkedin, Mail, MapPin } from 'lucide-react';
import { companies } from '@/data/projects';
const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 bg-stone-100 text-blue-900" />
      
      {/* Subtle grid pattern */}
      <div style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} className="absolute inset-0 opacity-[0.02] bg-stone-100 text-blue-950" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl text-blue-900 bg-stone-100">
          {/* Name and Title */}
          <div className="animate-fade-up">
            <p className="text-primary font-medium mb-4 tracking-wide text-sm md:text-base">
              ROBOTICS & HARDWARE SYSTEMS
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Jaideep Singh
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fade-up animation-delay-100">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              I build robotic systems and hardware products that work in the real world. 
              From autonomous delivery drones to AI-powered inspection systems, 
              I lead teams that ship complex technology at scale.
            </p>
          </div>

          {/* Location and Contact */}
          <div className="animate-fade-up animation-delay-200 flex flex-wrap items-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">San Francisco Bay Area</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/jaideepsingh08/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:jaideepsingh08@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Logos */}
          <div className="animate-fade-up animation-delay-300">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Building at
            </p>
            <div className="flex flex-wrap items-center gap-8">
              {companies.map(company => <div key={company.name} className="group">
                  <div className="text-foreground font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                    {company.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {company.description}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>;
};
export default Hero;