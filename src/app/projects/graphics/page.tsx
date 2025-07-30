import Image from 'next/image';
import Link from 'next/link';

export default function GraphicsPortfolio() {
  return (
    <div className="min-h-screen relative">
      {/* Return to Projects Link */}
      <div className="absolute top-4 left-8 z-20">
        <Link href="/projects" className="inline-flex items-center gap-2 px-4 py-2 text-text-secondary hover:text-primary transition-colors duration-300 font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          RETURN TO PROJECTS
        </Link>
      </div>

      {/* Hero Section */}
      <section className="section fade-in">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-horizon text-white glow-text">
              GRAPHICS PORTFOLIO
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
              A collection of graphic design work including branding, marketing materials, and visual design projects.
            </p>
          </div>
        </div>
      </section>

      {/* Freelance Commissions Section */}
      <section className="section slide-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-cascadia">FREELANCE COMMISSIONS</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card glass p-0">
                             <Image 
                 src="/hvnsan logo 4 pfp.png" 
                 alt="BASS Hanson Logo" 
                 width={800} 
                 height={600} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/bts party burn book ver.png" 
                 alt="Burn Book Event Poster" 
                 width={800} 
                 height={600} 
                 className="w-full h-auto" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* Coursebite Section */}
      <section className="section slide-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-cascadia">COURSEBITE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card glass p-0">
                             <Image 
                 src="/cb ig raffle post.png" 
                 alt="Coursebite Raffle Post" 
                 width={500} 
                 height={400} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/study tips cover.png" 
                 alt="Study Tips Cover" 
                 width={500} 
                 height={400} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/cb ig1.png" 
                 alt="Coursebite IG Post" 
                 width={500} 
                 height={400} 
                 className="w-full h-auto" 
               />
            </div>
                     </div>
                       {/* <div className="flex items-center justify-center mb-12">
              <div className="card glass p-0 w-full">
                                 <video 
                   src="/cb this is cb post.mp4" 
                   autoPlay 
                   loop 
                   muted 
                   playsInline
                   className="w-full h-auto"
                   controls
                 >
                   Your browser does not support the video tag.
                 </video>
              </div>
            </div> */}
           <div className="flex items-center justify-center">
             <div className="flex items-center space-x-6">
                              <Image 
                  src="/coursebite logo.png" 
                  alt="Coursebite Logo" 
                  width={200} 
                  height={200} 
                  className="w-96 h-auto object-contain" 
                />
             </div>
           </div>
        </div>
      </section>

      {/* Dallas Omegas Section */}
      <section className="section slide-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-cascadia">DALLAS OMEGAS</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="card glass p-0">
               <Image 
                 src="/bts party og ver.png" 
                 alt="2BACK SCHOOL Event" 
                 width={300} 
                 height={300} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/eboard_cover.png" 
                 alt="EBOARD 23-24 REVEAL" 
                 width={300} 
                 height={300} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/rush_kai.png" 
                 alt="Lambda Class" 
                 width={300} 
                 height={300} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/rush_johnny2.png" 
                 alt="DALLAS OMEGAS KAPPA CLASS" 
                 width={300} 
                 height={300} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/paintball.png" 
                 alt="Paintball an Omega" 
                 width={300} 
                 height={300} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/ice bath fundraiser.png" 
                 alt="JEE++ BATH" 
                 width={300} 
                 height={300} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/philanthropy workshop.png" 
                 alt="Mental Health Awareness Workshop" 
                 width={300} 
                 height={300} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/rush_kaelan.png" 
                 alt="Rush Event" 
                 width={300} 
                 height={300} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/rush schedule square.png" 
                 alt="Rush Schedule" 
                 width={300} 
                 height={300} 
                 className="w-full h-auto" 
               />
             </div>
                          <div className="card glass p-0">
               <Image 
                 src="/convention post.png" 
                 alt="Convention Post" 
                 width={300} 
                 height={300} 
                 className="w-full h-auto" 
               />
             </div>
          </div>
        </div>
      </section>

      {/* No Signal Section */}
      <section className="section slide-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-cascadia">NO SIGNAL</h2>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
                             <div className="card glass p-0">
                                   <Image 
                    src="/continuity clock typography front.png" 
                    alt="JAN. 24" 
                    width={400} 
                    height={300} 
                    className="w-full h-auto" 
                  />
                </div>
                <div className="card glass p-0">
                  <Image 
                    src="/continuity ig ad.png" 
                    alt="CONTINUITY" 
                    width={400} 
                    height={300} 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
              <div className="card glass p-0">
                <Image 
                  src="/continuity clock x pinterest concept black bg.png" 
                  alt="LIFE IS A CONTINUITY" 
                  width={400} 
                  height={600} 
                  className="w-full h-auto" 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="card glass p-0">
                <Image 
                  src="/continuity pollinators black bg.png" 
                  alt="CONTINUITY Floral" 
                  width={1200} 
                  height={300} 
                  className="w-full h-auto" 
                />
              </div>
              <div className="card glass p-0">
                <Image 
                  src="/no signal logo DABTISM.png" 
                  alt="No Signal Logo" 
                  width={400} 
                  height={150} 
                  className="w-full h-auto" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* Invision Section */}
      <section className="section slide-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-cascadia">INVISION</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="card glass p-0">
                             <Image 
                 src="/1 first meeting.png" 
                 alt="INVISION FIRST MEETING" 
                 width={500} 
                 height={700} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/shirt design front.png" 
                 alt="Take Flight Front" 
                 width={700} 
                 height={500} 
                 className="w-full h-auto" 
               />
             </div>
             <div className="card glass p-0">
               <Image 
                 src="/shirt design back.png" 
                 alt="Take Flight Back" 
                 width={700} 
                 height={500} 
                 className="w-full h-auto" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section slide-up">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="/projects" className="btn-primary">
              VIEW MORE PROJECTS
            </a>
            <a href="/about" className="btn-secondary">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}