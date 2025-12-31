import { Layers, Users, Zap, TrendingUp } from 'lucide-react';
const About = () => {
  const strengths = [{
    icon: Layers,
    title: 'Systems Engineering',
    description: 'End-to-end hardware systems—mechanical, electrical, firmware—designed for reliability at scale.'
  }, {
    icon: Users,
    title: 'Team Leadership',
    description: 'Cross-functional teams from 0 to 1 and 1 to N. Hiring, culture, and execution.'
  }, {
    icon: Zap,
    title: 'Product Certification',
    description: 'Prototype to production. UL/FCC certification, manufacturing ramp, and market launch.'
  }, {
    icon: TrendingUp,
    title: 'Startup Operations',
    description: 'Founding engineer through Series C. Building engineering functions that support product and business growth.'
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
                I work at the intersection of mechanical, electrical, and software engineering in a range of industries.
              </p>
              <p>
                I've led hardware organizations from founding through Series C: building teams, managing budgets, navigating certifications, and shipping products that work at scale. I care about getting the details right and moving fast.
              </p>
              <p>
                Background in Physics, Mechanical Engineering, and Hybrid Electric Vehicles.
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