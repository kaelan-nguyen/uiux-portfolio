import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  link: string;
  tags?: string[];
};

export default function ProjectCard({ title, description, link, tags }: Props) {
  return (
    <Link href={link} className="block border p-4 rounded-lg hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
      {tags && (
        <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-500">
          {tags.map((tag, i) => (
            <span key={i}>#{tag}</span>
          ))}
        </div>
      )}
    </Link>
  );
}
