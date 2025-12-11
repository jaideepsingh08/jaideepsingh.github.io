import { ArrowDown, Linkedin, Mail, MapPin } from 'lucide-react';
import unitxLogo from '@/assets/logos/unitx-logo.jpg';
import greyorangeLogo from '@/assets/logos/greyorange-logo.png';
import fiatLogo from '@/assets/logos/fiat-logo.png';
import bumblebeeLogo from '@/assets/logos/bumblebee-logo.png';
import ziplineLogo from '@/assets/logos/zipline-logo.png';
import millLogo from '@/assets/logos/mill-logo.png';
import headshot from '@/assets/jaideep-headshot.jpeg';

// Company logos data - with size adjustments for smaller logos
const companyLogos = [
  { name: 'Mill', logo: millLogo, scale: 1 },
  { name: 'Zipline', logo: ziplineLogo, scale: 1 },
  { name: 'UnitX', logo: unitxLogo, scale: 1.5 },
  { name: 'Fiat', logo: fiatLogo, scale: 1 },
  { name: 'GreyOrange', logo: greyorangeLogo, scale: 1 },
  { name: 'Bumblebee Spaces', logo: bumblebeeLogo, scale: 1.5 },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-12 bg-stone-100">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-100 to-stone-200/50" />

      <div className="container-custom relative z-10">
        {/* Main content - two column layout */}
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Name */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-3 animate-fade-up">
              Jaideep Singh
            </h1>
            
            {/* Subtitle */}
            <p className="text-primary font-medium tracking-wide text-sm uppercase mb-6 animate-fade-up animation-delay-100">
              Hardware · Robotics · Manufacturing
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl animate-fade-up animation-delay-200">
              I build hardware companies from the ground up. Founding engineer through Series C, 
              I've shipped certified products across autonomous delivery, consumer appliances, 
              industrial robotics, and AI systems. From napkin sketch to factory floor.
            </p>

            {/* Location and Contact */}
            <div className="flex items-center gap-5 mb-10 animate-fade-up animation-delay-300">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco Bay Area</span>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/in/jaideepsingh08/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:jaideepsingh08@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Company Logos - clean grid */}
            <div className="animate-fade-up animation-delay-400">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Previously at</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 items-center">
                {companyLogos.map(company => (
                  <img 
                    key={company.name}
                    src={company.logo} 
                    alt={company.name}
                    style={{ transform: `scale(${company.scale})` }}
                    className="h-8 md:h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Headshot */}
          <div className="order-1 lg:order-2 animate-fade-up flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={headshot} 
                alt="Jaideep Singh" 
                className="w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-[22rem] rounded-2xl object-cover object-top shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
export default Hero;