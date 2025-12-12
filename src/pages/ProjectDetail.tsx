import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Calendar, Building2, User } from 'lucide-react';
import { getProjectById, projects } from '@/data/projects';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProtectedImage from '@/components/ProtectedImage';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="dark min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="container-custom pt-32 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you are looking for does not exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    professional: 'bg-primary/10 text-primary border-primary/20',
    academic: 'bg-accent/10 text-accent border-accent/20',
    personal: 'bg-muted text-muted-foreground border-border',
  };

  // Get related projects (same category, exclude current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding border-b border-border">
          <div className="container-custom">
            {/* Back Link */}
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left - Info */}
              <div>
                {/* Category */}
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-4 ${categoryColors[project.category]}`}>
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>

                {/* Title */}
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {project.title}
                </h1>

                {/* Description */}
                <p className="text-lg text-muted-foreground mb-8">
                  {project.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                  {project.company && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span>{project.company}</span>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{project.role}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right - Image */}
              <div className="aspect-[4/3] bg-card border border-border rounded-lg overflow-hidden">
                <ProtectedImage 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="font-heading text-2xl font-bold mb-6">Overview</h2>
                <div className="prose prose-invert max-w-none">
                  {project.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mt-12">
                  <h3 className="font-heading text-xl font-bold mb-6">Key Contributions</h3>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="sticky top-24">
                  {/* Technologies */}
                  <div className="p-6 bg-card border border-border rounded-lg mb-6">
                    <h3 className="font-heading font-semibold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                    <h3 className="font-heading font-semibold mb-2">Interested in this work?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Let's discuss how I can help with your project.
                    </p>
                    <a
                      href="mailto:jaideepsingh08@gmail.com"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                    >
                      Get in touch
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        {project.gallery && project.gallery.length > 1 && (
          <section className="section-padding border-t border-border">
            <div className="container-custom">
              <h2 className="font-heading text-2xl font-bold mb-8">Project Gallery</h2>
              <div className="relative px-12">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {project.gallery.map((img, index) => (
                      <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border">
                          <ProtectedImage
                            src={img}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </Carousel>
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="section-padding bg-secondary/30 border-t border-border">
            <div className="container-custom">
              <h2 className="font-heading text-2xl font-bold mb-8">Related Projects</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.id}
                    to={`/project/${related.id}`}
                    className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {related.shortTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {related.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </div>
  );
};

export default ProjectDetail;
