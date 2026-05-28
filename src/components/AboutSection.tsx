import { Zap } from 'lucide-react';
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const leftContent = [
  "I'm Manoj, a passionate software engineering student with a strong interest in cybersecurity, software development, automation, and intelligent systems. I enjoy building practical projects and continuously exploring new technologies to improve my skills.",
  
  "Beyond academics, I enjoy coding, learning about cybersecurity tools, and working on mini-projects related to web development, networking, and AI-based applications. I like turning creative ideas into real-world solutions through technology."
];

const rightContent = [
  "My strengths include problem-solving, analytical thinking, and combining software with innovative technologies to create efficient solutions. I've worked on projects related to web applications, cybersecurity, AI, and automation systems.",

  "My goal is to become a skilled software developer and cybersecurity engineer who can build impactful and secure technology solutions that make everyday life better."
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        <h3 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Zap className="w-8 h-8 text-primary" />
          About Me
        </h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          <div className="space-y-6">
            {leftContent.map((paragraph, index) => (
              <p
                key={index}
                className={`text-muted-foreground leading-relaxed ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-6">
            {rightContent.map((paragraph, index) => (
              <p
                key={index}
                className={`text-muted-foreground leading-relaxed ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
