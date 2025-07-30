export default function About() {
  return (
    <div className="min-h-screen relative">
      <section className="section fade-in">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-horizon text-white glow-text text-left leading-tight">
                UI/UX designer with a background in Graphic design. Based in Dallas, Texas.
              </h1>
            </div>
            
            {/* Right Side - Profile Picture */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 rounded-full overflow-hidden">
                <img 
                  src="/kaelan-nguyen-professional-portrait.jpg" 
                  alt="Kaelan Nguyen Professional Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* BIO Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6 font-cascadia">BIO</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Starting out in graphic design, I always had a passion for creating visually appealing work. 
                  But I wanted more than just aesthetics—I wanted to understand how people interact with what I create. 
                  That curiosity led me to UX design, where I&apos;ve found the perfect blend of creativity and problem-solving. 
                  Now, I design digital experiences that are not only beautiful but also intuitive and user-focused.
                </p>
                <p>
                  Hi! I&apos;m Kaelan—a graphic designer with around 9 years of experience. 
                  I&apos;m currently a student and work as a designer for a startup called Coursebite. 
                  My portfolio spans branding, marketing design, typography, data visualization, 
                  UI/UX, and social media graphics. I&apos;m always open to new opportunities 
                  and collaborations—feel free to reach out with any inquiries!
                </p>
              </div>
            </div>

            {/* SKILLS Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 font-cascadia">SKILLS</h2>
              <ul className="space-y-3 text-text-secondary">
                <li>Visual Design & Branding</li>
                <li>User Interface Design</li>
                <li>User Experience Design</li>
                <li>Responsive Design</li>
                <li>Market & User Research</li>
                <li>Wire-framing & Prototyping</li>
                <li>Graphic Design</li>
                <li>Typography</li>
                <li>Data Visualization</li>
                <li>Social Media Graphics</li>
              </ul>
            </div>
          </div>

          {/* DESIGN TOOLS Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6 font-cascadia">DESIGN TOOLS</h2>
            <ul className="space-y-3 text-text-secondary">
              <li>Figma</li>
              <li>Photoshop</li>
              <li>React.js</li>
              <li>CSS</li>
              <li>Illustrator</li>
              <li>InDesign</li>
            </ul>
          </div>

          {/* Work Experience & Education */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div className="card glass slide-up">
              <h2 className="text-2xl font-bold text-white mb-6 font-cascadia">Work Experience</h2>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 font-cascadia">Coursebite Education</h3>
                    <p className="text-primary font-medium">Graphic Designer</p>
                  </div>
                  <span className="text-text-muted text-sm mt-2 md:mt-0 font-cascadia">
                    June 2024 - Current
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 font-cascadia">Dallas Omegas</h3>
                    <p className="text-primary font-medium">Graphics Chair</p>
                  </div>
                  <span className="text-text-muted text-sm mt-2 md:mt-0 font-cascadia">
                    January 2023 - May 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="card glass slide-up">
              <h2 className="text-2xl font-bold text-white mb-6 font-cascadia">Education</h2>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 font-cascadia">The University of Texas at Dallas</h3>
                  <p className="text-primary font-medium">Student</p>
                </div>
                <span className="text-text-muted text-sm mt-2 md:mt-0 font-cascadia">
                  August 2022 - Current
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
  