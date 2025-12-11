import { Wrench, Lightbulb, Users, Rocket } from 'lucide-react';
const About = () => {
  const strengths = [{
    icon: Wrench,
    title: 'Systems Architecture',
    description: 'Taking complex problems apart and building elegant solutions that integrate mechanical, electrical, and software systems.'
  }, {
    icon: Lightbulb,
    title: 'Hardware Leadership',
    description: 'Building and leading cross-functional ME/EE/FW teams to deliver products from concept through production.'
  }, {
    icon: Users,
    title: 'Shipping at Scale',
    description: 'Getting products certified, manufactured, and into users hands—from UL/FCC to factory floor.'
  }, {
    icon: Rocket,
    title: 'Startup Building',
    description: 'Founding engineer experience at multiple startups, building hardware teams and product culture from the ground up.'
  }];
  return <section id="about" className="section-padding bg-stone-100 text-blue-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Story */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a product and systems architect with graduate education in Physics, 
                Mechanical Engineering, and Hybrid Electric Vehicles. I build products at 
                the intersection of mechanical, electrical, hardware, and software systems.
              </p>
              <p>
                Working with highly ambitious teams solving challenging problems through 
                robotics and hardware excites me. I have a proven track record of building 
                successful products from concept through production and certification while 
                working with diverse cross-functional teams.
              </p>
              <p>
                My experience spans autonomous delivery systems at Zipline, consumer hardware 
                at Mill, AI-powered manufacturing at UnitX, and now physical AI systems at 
                Sensory Labs. I specialize in bringing complex technology to market.
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