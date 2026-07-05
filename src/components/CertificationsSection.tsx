import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { BookOpen, Brain, ExternalLink, Calendar, Award } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  icon: React.ComponentType<any>;
  skills: string[];
  featured?: boolean;
}

const certificationsList: Certification[] = [
  {
    id: 'speech-enhancement-publication',
    title: 'Speech Enhancement using Spectrogram Denoising with Deep U-Net Architectures',
    issuer: 'Research Publication',
    date: '2026',
    credentialUrl: 'https://channavsmanoj.in/cert.pdf',
    icon: BookOpen,
    skills: ['Deep Learning', 'Audio Signal Processing', 'U-Net', 'TensorFlow'],
    featured: true,
  },
  {
    id: 'azure-ai-fundamentals',
    title: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: '2026',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/ChannaVenkataSaiManoj-3581/283A6691DA5EFAD4?sharingId=20C3317E8103F5B8',
    icon: Brain,
    skills: ['Artificial Intelligence', 'Microsoft Azure', 'Machine Learning', 'Cloud AI Services'],
    featured: false,
  }
];

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-24 bg-secondary/10"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h3
          className={`section-title justify-center ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'
            }`}
        >
          Certifications & Publications
        </h3>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {certificationsList.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.id}
                className={`glow-card bg-card p-6 rounded-xl border border-border hover:border-primary/50 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${cert.featured ? 'ring-1 ring-primary/30 shadow-lg shadow-primary/5' : ''
                  } ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background design accents */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors duration-500 blur-xl" />

                <div>
                  {/* Top line with Icon & Date */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-secondary rounded-lg text-primary group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground text-sm font-medium mb-4">
                    {cert.issuer}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-0.5 bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-foreground rounded-full transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Button */}
                <div className="pt-4 border-t border-border/50 flex flex-col gap-3">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground font-semibold rounded-lg text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-border group-hover:border-primary/30 shadow-sm"
                  >
                    {cert.id.includes('publication') ? 'View Publication' : 'View Certificate'}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {cert.featured && (
                    <div className="flex justify-center">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-primary/20 text-primary rounded">
                        Featured Publication
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
