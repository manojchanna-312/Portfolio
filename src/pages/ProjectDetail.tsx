import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowLeft, Play, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button variant="hero" asChild>
            <Link to="/">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              {project.title}
            </h1>

            {/* Video Player or Placeholder */}
            {project.videos && project.videos.length > 0 ? (
              <div className="relative aspect-video bg-card/40 backdrop-blur-md rounded-2xl border border-border/80 overflow-hidden mb-10 shadow-2xl group transition-all duration-500 hover:shadow-primary/5 hover:border-primary/30 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <video
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={project.videos[0]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-sm font-medium text-white/90 backdrop-blur-md bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    Project Video Demo
                  </span>
                </div>
              </div>
            ) : project.videoPlaceholder ? (
              <div className="aspect-video bg-card rounded-xl border border-border mb-8 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Video Demo Coming Soon</p>
                </div>
              </div>
            ) : null}

            {/* Project Description */}
            <div className="space-y-6 mb-10">
              {project.fullDescription.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-muted-foreground text-lg leading-relaxed animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features */}
            {project.features && (
              <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Project Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
                <h2 className="text-2xl font-bold text-foreground mb-4">System Architecture & Architecture Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {project.images.map((image, index) => (
                    <div 
                      key={index}
                      onClick={() => setActiveImage(image)}
                      className="group relative aspect-video bg-card/30 backdrop-blur-sm rounded-xl border border-border/80 overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300"
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - Screenshot ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-primary/95 text-primary-foreground px-4 py-2 rounded-full text-xs font-semibold shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                          View Fullscreen
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-secondary text-foreground rounded-full border border-border hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
              <Button variant="heroOutline" asChild>
                <Link to="/#projects">
                  <ArrowLeft className="w-5 h-5" />
                  All Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <button 
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 bg-secondary/80 text-foreground rounded-full border border-border hover:bg-secondary transition-colors duration-200 z-50 shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-border/60 shadow-2xl bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage} 
              alt="Fullscreen Preview"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
