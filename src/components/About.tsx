import { Layers, Users, Zap, TrendingUp } from 'lucide-react';
const About = () => {
  const strengths = [{
    icon: Layers,
    title: 'Full-Stack Hardware',
    description: 'Designing end-to-end hardware systems (mechanical, electrical, firmware) that work reliably at scale.'
  }, {
    icon: Users,
    title: 'Build & Scale Teams',
    description: 'Building and scaling cross-functional teams from 0 to 1 and 1 to N. Hiring, culture, and execution.'
  }, {
    icon: Zap,
    title: 'Zero to Production',
    description: 'Taking products from prototype to production. UL/FCC certification, manufacturing ramp, and market launch.'
  }, {
    icon: TrendingUp,
    title: 'Founder Experience',
    description: 'Multiple founding engineer roles. I build the engineering functions necessary for product and business success.'
  }];
  return <section id="about" className="section-padding bg-stone-100 text-blue-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Story */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              About
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a hardware builder with a graduate education in Physics, Mechanical Engineering, and Hybrid Electric Vehicles. I build products at the intersection of mechanical, electrical, and software systems.
              </p>
              <p>
                I've led hardware organizations from pre-seed through Series C, scaling teams, managing multi-million dollar budgets, and navigating the full journey from prototype to certified, shipping products. I thrive in ambiguity and move fast, building teams and companies from earliest days to scale.
              </p>
              <p>
                My track record spans Sensory Labs (Founder, Physical AI), UnitX (AI manufacturing), Mill (consumer hardware, 18 patents), Zipline (autonomous delivery), and GreyOrange Robotics (Warehouse Robotics).
              </p>
            </div>
          </div>

          {/* Right - Strengths */}
          <div className="grid sm:grid-cols-2 gap-6">
            {strengths.map((strength, index) => <div key={strength.title} className="p-6 border border-border rounded-lg bg-stone-200 text-blue-900">
                <strength.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {strength.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {strength.description}
                </p>
              </div>)}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="font-heading font-semibold text-xl mb-6">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {['Technical Strategy', 'Team Scaling', 'Roadmap Planning', 'Stakeholder Management', 'Budget & Vendor Management', 'Robotics', 'Systems Architecture', 'Hardware Integration', 'Embedded Systems', 'Product Certification', 'Manufacturing', 'Cross-functional Leadership', 'Startup Building'].map(skill => <span key={skill} className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full">
                {skill}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;