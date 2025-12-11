import { ArrowDown, Linkedin, Mail, MapPin } from 'lucide-react';
import unitxLogo from '@/assets/logos/unitx-logo.jpg';
import greyorangeLogo from '@/assets/logos/greyorange-logo.png';
import fiatLogo from '@/assets/logos/fiat-logo.png';
import bumblebeeLogo from '@/assets/logos/bumblebee-logo.png';
import ziplineLogo from '@/assets/logos/zipline-logo.png';
import millLogo from '@/assets/logos/mill-logo.png';

// Company logos data
const companyLogos = [
  { name: 'Mill', logo: millLogo, className: '', extraSpace: false },
  { name: 'Zipline', logo: ziplineLogo, className: '', extraSpace: false },
  { name: 'UnitX', logo: unitxLogo, className: 'scale-[2]', extraSpace: true },
  { name: 'Fiat', logo: fiatLogo, className: '', extraSpace: false },
  { name: 'GreyOrange', logo: greyorangeLogo, className: '', extraSpace: false },
  { name: 'Bumblebee Spaces', logo: bumblebeeLogo, className: 'scale-[1.5]', extraSpace: true },
];

const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 bg-stone-100">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-100 to-stone-200/50" />
      
      {/* Subtle grid pattern */}
      <div style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} className="absolute inset-0 opacity-[0.02]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {/* Name and Title */}
          <div className="animate-fade-up">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4">
              Jaideep Singh
            </h1>
            <p className="text-primary font-medium mb-6 tracking-wide text-sm md:text-base">
              Building in Hardware, Robotics and Manufacturing
            </p>
          </div>

          {/* Description */}
          <div className="animate-fade-up animation-delay-100">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              I build hardware companies from the ground up. Founding engineer through Series C, 
              I've shipped certified products across autonomous delivery, consumer appliances, 
              industrial robotics, and AI systems. From napkin sketch to factory floor.
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
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              {companyLogos.map(company => (
                <div key={company.name} className={`group ${company.extraSpace ? 'mx-4 md:mx-6' : ''}`}>
                  {company.logo ? (
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className={`h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 ${company.className}`}
                    />
                  ) : (
                    <span className="text-foreground/60 font-heading font-semibold text-sm md:text-base hover:text-primary transition-colors">
                      {company.name}
                    </span>
                  )}
                </div>
              ))}
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