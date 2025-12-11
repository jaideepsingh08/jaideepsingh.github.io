import { Mail, Linkedin, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer id="contact" className="section-padding border-t border-border bg-stone-100 text-blue-950">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something
          </h2>
          <p className="text-muted-foreground mb-8">
            I love digging into hard problems, whiteboarding wild ideas, 
            and connecting with fellow builders. Let's nerd out.
          </p>

          {/* Contact Link */}
          <a href="mailto:jaideepsingh08@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity mb-12">
            <Mail className="w-5 h-5" />
            jaideepsingh08@gmail.com
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <a href="https://www.linkedin.com/in/jaideepsingh08/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            <span>San Francisco Bay Area, California</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jaideep Singh Chavan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;