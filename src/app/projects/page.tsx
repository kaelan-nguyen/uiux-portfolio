import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Coursebite UI/UX Case Study",
      description: "A comprehensive case study for an AI-powered education platform that revolutionizes how students study and learn.",
      tags: ["ui/ux case study", "graphics", "web dev"],
      link: "/projects/coursebite"
    },
    {
      title: "Graphics Portfolio",
      description: "A collection of graphic design work including branding, marketing materials, and visual design projects.",
      tags: ["graphics", "branding", "marketing"],
      link: "/projects/graphics"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <section className="section fade-in">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-horizon text-white glow-text">
              PROJECTS
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
              A collection of my work in UI/UX design, graphic design, and web development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
