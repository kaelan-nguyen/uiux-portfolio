import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Kaelan Nguyen</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
