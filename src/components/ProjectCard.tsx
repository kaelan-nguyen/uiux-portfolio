import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  link: string;
  tags?: string[];
};

export default function ProjectCard({ title, description, link, tags }: Props) {
  return (
    <Link href={link} className="block card glass hover:glow transition-all duration-300 group">
      <h3 className="text-xl font-semibold text-white mb-3 font-work-sans">{title}</h3>
      <p className="text-text-secondary font-work-sans mb-4">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2 text-sm">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium font-cascadia-mono">
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
