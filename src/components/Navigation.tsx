import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Github, Mail } from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Work',
    path: '/#work'
  }, {
    name: 'About',
    path: '/#about'
  }, {
    name: 'Contact',
    path: '/#contact'
  }];
  const socialLinks = [{
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/jaideepsingh08/',
    label: 'LinkedIn'
  }, {
    icon: Github,
    href: 'https://github.com/jaideepsingh08',
    label: 'GitHub'
  }, {
    icon: Mail,
    href: 'mailto:jaideepsingh08@gmail.com',
    label: 'Email'
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border bg-stone-200 text-blue-950">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-heading font-bold text-xl md:text-2xl tracking-tight">
            <span className="text-foreground">Jaideep</span>
            <span className="text-muted-foreground font-light">Singh</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.path} className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.name}
              </a>)}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={link.label}>
                <link.icon className="w-5 h-5" />
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
            <div className="container-custom py-6 space-y-6">
              {navLinks.map(link => <a key={link.name} href={link.path} onClick={() => setIsOpen(false)} className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {link.name}
                </a>)}
              <div className="flex items-center gap-6 pt-4 border-t border-border">
                {socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={link.label}>
                    <link.icon className="w-5 h-5" />
                  </a>)}
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;