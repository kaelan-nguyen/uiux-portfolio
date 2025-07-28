import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'Coursebite UI/UX Case Study',
    description: 'End-to-end redesign of Coursebite’s study experience.',
    link: '/projects/coursebite', // optional route later
    tags: ['UI/UX', 'Case Study'],
  },
  {
    title: 'Poster Series – Lunar & Retro',
    description: 'Graphic art posters exploring texture, typography, and mood.',
    link: 'https://www.behance.net/kaelannguyen', // example
    tags: ['Graphic Design', 'Art'],
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-6 space-y-6">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
