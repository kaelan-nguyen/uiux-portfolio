import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Rotating Splatters */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large splatter - rotating clockwise */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-60 animate-spin-slow">
          <Image 
            src="/splatter.png" 
            alt="" 
            width={600} 
            height={600} 
            className="w-full h-full object-contain" 
          />
        </div>
        
        {/* Small splatter in middle - rotating counter-clockwise */}
        <div className="absolute top-[200px] right-[200px] w-[200px] h-[200px] opacity-80 animate-spin-reverse">
          <Image 
            src="/splatter.png" 
            alt="" 
            width={200} 
            height={200} 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="section fade-in relative z-10">
        <div className="text-left mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-horizon text-white glow-text">
            Kaelan Nguyen
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed slide-up">
            I do UI/UX, graphic design, and web development. I bring visions to life. 
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
        <div className="slide-up">
          <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group">
            <span className="text-lg">View Projects</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
