
import { useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  index: number;
  video?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  index,
  video
}: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${id}`}
      className="glow-card bg-card p-6 rounded-xl border border-border hover:border-primary/50 cursor-pointer block animate-fade-in-up group overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Video Preview */}
      {video && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <video
            className="w-full h-48 object-cover rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Project Title */}
      <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h4>

      {/* Project Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* View Project Button */}
      <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        View Project <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const isVisible = useScrollAnimation(sectionRef);

  const [activeCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h3
          className={`section-title justify-center ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Projects
        </h3>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isVisible &&
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.shortDescription}
                index={index}
                video={project.videos?.[0]}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

