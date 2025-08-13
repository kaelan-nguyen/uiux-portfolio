import Link from 'next/link';
import Image from 'next/image';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 w-screen h-screen z-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(192, 192, 192, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 192, 192, 0.1) 1px, transparent 1px)',
        backgroundSize: '120px 120px',
        overflow: 'hidden'
      }}>
      </div>

      {/* Spline Background - Full Screen */}
      <div className="fixed inset-0 w-screen h-screen z-0" style={{ overflow: 'hidden' }}>
        <Spline
          scene="https://prod.spline.design/2L0fpcHCEQ2P9uYZ/scene.splinecode"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="section fade-in relative z-10 pointer-events-none">
        <div className="text-center mb-16 w-fit mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-horizon text-white glow-text w-fit mx-auto pointer-events-auto">
            Kaelan Nguyen
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed slide-up font-work-sans w-fit mx-auto pointer-events-auto">
            I do UI/UX, graphic design, and web development.
            <br />
            I bring visions to life. Here&apos;s some of my work.
          </p>
        </div>



        {/* CTA Section */}
        <div className="slide-up text-center pointer-events-auto w-fit mx-auto">
          <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 group">
            <span className="text-lg">VIEW PROJECTS</span>
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
