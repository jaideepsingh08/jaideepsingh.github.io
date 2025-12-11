import { useState } from 'react';
import { projects, ProjectCategory } from '@/data/projects';
import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');

  const filters: { label: string; value: 'all' | ProjectCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Professional', value: 'professional' },
    { label: 'Academic', value: 'academic' },
    { label: 'Personal', value: 'personal' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground">
            From robotic systems to consumer products, here is a selection of projects 
            where I have led hardware engineering and brought complex technology to market.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                activeFilter === filter.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
