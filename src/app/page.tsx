export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section fade-in">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-horizon gradient-text glow-text">
            Hey, I&apos;m Kaelan 👋
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed slide-up">
            I&apos;m a UI/UX designer and developer blending clean design with functional frontends. 
            Here&apos;s some of my work.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 slide-up">
          <div className="card glass hover:glow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-primary">50+</h3>
                <p className="text-text-secondary">Projects Completed</p>
              </div>
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="card glass hover:glow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-secondary">3+</h3>
                <p className="text-text-secondary">Years Experience</p>
              </div>
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="card glass hover:glow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-accent">100%</h3>
                <p className="text-text-secondary">Client Satisfaction</p>
              </div>
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center slide-up">
          <div className="inline-flex gap-4">
            <button className="btn-primary">
              View My Work
            </button>
            <button className="btn-secondary">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="section">
        <div className="mb-12">
          <h2 className="section-title text-center">Featured Work</h2>
          <p className="section-subtitle text-center mx-auto">
            A showcase of my latest projects and design work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">Project Alpha</h3>
                  <p className="text-sm text-gray-300">UI/UX Design • Web Development</p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Project Alpha</h3>
            <p className="text-text-secondary">A modern web application with intuitive user experience and clean design principles.</p>
          </div>

          <div className="card group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">Project Beta</h3>
                  <p className="text-sm text-gray-300">Mobile App • Brand Design</p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Project Beta</h3>
            <p className="text-text-secondary">Mobile application featuring innovative design patterns and seamless user interactions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
