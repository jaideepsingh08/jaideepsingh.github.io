import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';
interface ProjectCardProps {
  project: Project;
  index: number;
}
const ProjectCard = ({
  project,
  index
}: ProjectCardProps) => {
  const categoryColors: Record<string, string> = {
    professional: 'bg-primary/10 text-primary border-primary/20',
    academic: 'bg-accent/10 text-accent border-accent/20',
    personal: 'bg-muted text-muted-foreground border-border'
  };
  return <Link to={`/project/${project.id}`} className="group block" style={{
    animationDelay: `${index * 100}ms`
  }}>
      <article className="relative bg-card border border-border rounded-lg overflow-hidden card-hover h-full">
        {/* Image */}
        <div className="aspect-[4/3] bg-secondary overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 bg-stone-200 text-blue-900">
          {/* Category Badge */}
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[project.category]}`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {project.shortTitle}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Company if exists */}
          {project.company && <p className="text-xs text-muted-foreground">
              {project.company}
            </p>}

          {/* Arrow */}
          <div className="absolute bottom-5 right-5 md:bottom-6 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-5 h-5 text-primary" />
          </div>
        </div>
      </article>
    </Link>;
};
export default ProjectCard;