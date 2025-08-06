"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function CoursebiteCaseStudy() {
  const [openAnswers, setOpenAnswers] = useState<number[]>([]);

  const toggleAnswer = (index: number) => {
    setOpenAnswers(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-horizon text-white glow-text">
              COURSEBITE
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
              An AI-powered education platform that revolutionizes how students study and learn.
            </p>
          </div>

          {/* Landing Page Image */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-4xl">
              <Image 
                src="/coursebite-landing.png" 
                alt="Coursebite Landing Page" 
                width={1200} 
                height={800} 
                className="w-full h-auto rounded-lg shadow-2xl" 
              />
            </div>
          </div>

          {/* Project Overview Card */}
          <div className="card glass mb-16 slide-up">
            <h2 className="text-3xl font-bold text-white mb-8 font-cascadia">PROJECT OVERVIEW</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Project Goals</h3>
                  <ul className="text-text-secondary space-y-2">
                    <li>• Create an intuitive AI-powered study platform</li>
                    <li>• Streamline the learning process with RAG technology</li>
                    <li>• Improve student engagement and comprehension</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Problem</h3>
                  <p className="text-text-secondary">
                    Students struggle with unstructured study materials, lack of clear learning paths, and difficulty finding relevant, contextual help for their specific courses.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Solution</h3>
                  <p className="text-text-secondary">
                    An AI platform that uses retrieval augmented generation to parse textbooks and syllabi, creating personalized study plans and interactive learning experiences.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">My Role</h3>
                  <ul className="text-text-secondary space-y-2">
                    <li>• UI/UX Design</li>
                    <li>• Web Development</li>
                    <li>• Graphics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Tools</h3>
                  <ul className="text-text-secondary space-y-2">
                    <li>• Figma</li>
                    <li>• Adobe Creative Suite</li>
                    <li>• Miro</li>
                    <li>• Google Analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 slide-up">
            <div className="card glass hover:glow">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">5</h3>
                <p className="text-text-secondary">Student Interviews</p>
              </div>
            </div>
            <div className="card glass hover:glow">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-secondary mb-2">3+</h3>
                <p className="text-text-secondary">Months Duration</p>
              </div>
            </div>
            <div className="card glass hover:glow">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">7</h3>
                <p className="text-text-secondary">Core Features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Define Section */}
      <section className="section slide-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4 font-horizon">DEFINE</h2>
          <p className="text-xl text-text-secondary mb-12">Defining the problem and scope.</p>

          {/* Problem Statement */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">PROBLEM STATEMENT</h3>
            <p className="text-text-secondary leading-relaxed text-lg">
              CourseBite needs a compelling landing page and intuitive app UI that demonstrates how the platform will transform students&apos; learning experiences rather than just showcasing features. The app should be well-organized and simplify the learning process by providing clear guidance on what to study and how to proceed with their education journey.
            </p>
          </div>

          {/* Goal */}
          <div className="card glass">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">GOAL</h3>
            <p className="text-text-secondary leading-relaxed text-lg">
              My goal is to create an aesthetic and compelling landing page to attract conversions and to design and build an app including &quot;chat,&quot; &quot;learn,&quot; &quot;practice,&quot; &quot;reinforce,&quot; &quot;flashcards,&quot; &quot;study guides,&quot; and &quot;practice exams&quot; features. The app should make learning a streamlined experience from start to finish while incorporating proven study methodologies and AI-powered personalization.
            </p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="section slide-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4 font-horizon">RESEARCH</h2>
          <p className="text-xl text-text-secondary mb-12">Empathizing with users and understanding their needs.</p>

          {/* Competitive Analysis */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">COMPETITIVE ANALYSIS</h3>
            <div className="flex justify-center">
              <Image 
                src="/competitors.png" 
                alt="Competitive Analysis" 
                width={800} 
                height={600} 
                className="w-full max-w-4xl h-auto rounded-lg" 
              />
            </div>
          </div>

          {/* Interviews */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">INTERVIEWS</h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              I conducted interviews with 5 students to understand their studying and learning pain points, gaining insights into their current study habits and challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-6 bg-transparent">
                <h4 className="font-semibold text-primary mb-4">Question 1</h4>
                <div className="h-20 mb-4">
                  <p className="text-text-secondary text-sm">
                    &quot;When you sit down to study for a class, what&apos;s the hardest part of getting started?&quot;
                  </p>
                </div>
                <button 
                  onClick={() => toggleAnswer(0)}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  {openAnswers.includes(0) ? 'Hide Answer' : 'STUDENTS SAID:'}
                </button>
                {openAnswers.includes(0) && (
                  <p className="text-text-secondary text-sm mt-2 italic">
                    &quot;Usually I don&apos;t know where to begin. I have slides, notes, and textbook chapters, but no idea what&apos;s most important or what I&apos;ll be tested on.&quot;
                  </p>
                )}
              </div>

              <div className="border border-border rounded-lg p-6 bg-transparent">
                <h4 className="font-semibold text-primary mb-4">Question 2</h4>
                <div className="h-20 mb-4">
                  <p className="text-text-secondary text-sm">
                    &quot;How do you currently organize your study materials and plan for exams?&quot;
                  </p>
                </div>
                <button 
                  onClick={() => toggleAnswer(1)}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  {openAnswers.includes(1) ? 'Hide Answer' : 'STUDENTS SAID:'}
                </button>
                {openAnswers.includes(1) && (
                  <p className="text-text-secondary text-sm mt-2 italic">
                    &quot;I kind of just wing it. Sometimes I make a to-do list or use Google Docs, but I often forget where I saved things or end up cramming.&quot;
                  </p>
                )}
              </div>

              <div className="border border-border rounded-lg p-6 bg-transparent">
                <h4 className="font-semibold text-primary mb-4">Question 3</h4>
                <div className="h-20 mb-4">
                  <p className="text-text-secondary text-sm">
                    &quot;Where do you go when you don&apos;t understand a topic? Does it work well?&quot;
                  </p>
                </div>
                <button 
                  onClick={() => toggleAnswer(2)}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  {openAnswers.includes(2) ? 'Hide Answer' : 'STUDENTS SAID:'}
                </button>
                {openAnswers.includes(2) && (
                  <p className="text-text-secondary text-sm mt-2 italic">
                    &quot;Usually I Google stuff or ask ChatGPT. Sometimes it helps, but a lot of the time it doesn&apos;t match exactly what I&apos;m learning in class.&quot;
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* User Personas */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">USER PERSONAS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-6 bg-transparent">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <h4 className="font-semibold text-primary">Sarah, 20</h4>
                  <p className="text-text-secondary text-sm">College Sophomore</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-white text-sm mb-1">Goals</h5>
                    <p className="text-text-secondary text-xs">Maintain good GPA, understand complex topics, stay organized</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-sm mb-1">Pain Points</h5>
                    <p className="text-text-secondary text-xs">Overwhelmed by study materials, doesn&apos;t know what&apos;s important</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-sm mb-1">Tech Comfort</h5>
                    <p className="text-text-secondary text-xs">High - uses apps daily</p>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6 bg-transparent">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <h4 className="font-semibold text-secondary">Mike, 22</h4>
                  <p className="text-text-secondary text-sm">Graduating Senior</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-white text-sm mb-1">Goals</h5>
                    <p className="text-text-secondary text-xs">Graduate on time, prepare for career, maximize learning efficiency</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-sm mb-1">Pain Points</h5>
                    <p className="text-text-secondary text-xs">Poor study organization, last-minute cramming, forgets important concepts</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-sm mb-1">Tech Comfort</h5>
                    <p className="text-text-secondary text-xs">Medium - uses basic tools</p>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6 bg-transparent">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <h4 className="font-semibold text-accent">Emma, 19</h4>
                  <p className="text-text-secondary text-sm">Freshman Student</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-white text-sm mb-1">Goals</h5>
                    <p className="text-text-secondary text-xs">Build good study habits, understand course material, get help when stuck</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-sm mb-1">Pain Points</h5>
                    <p className="text-text-secondary text-xs">Needs contextual help, struggles with complex topics, wants guidance</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-sm mb-1">Tech Comfort</h5>
                    <p className="text-text-secondary text-xs">High - digital native</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Findings */}
          <div className="card glass">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">FINDINGS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-6 bg-transparent">
                <h4 className="font-semibold text-primary mb-3">Overwhelming Materials</h4>
                <p className="text-text-secondary text-sm">
                  Students feel overwhelmed by unstructured materials and lack clarity on prioritizing what to study. This suggests strong potential for Coursebite&apos;s AI-curated lessons and study guides that highlight key concepts.
                </p>
              </div>
              
              <div className="border border-border rounded-lg p-6 bg-transparent">
                <h4 className="font-semibold text-primary mb-3">Poor Organization</h4>
                <p className="text-text-secondary text-sm">
                  Current study organization methods are ineffective, leading to last-minute cramming. Structured learning tools (flashcards, guides) would fill a major gap.
                </p>
              </div>
              
              <div className="border border-border rounded-lg p-6 bg-transparent">
                <h4 className="font-semibold text-primary mb-3">Contextual Help Needed</h4>
                <p className="text-text-secondary text-sm">
                  Students need help contextualized to their specific syllabus and materials. Coursebite&apos;s RAG approach can give it an edge by generating answers grounded in their actual textbooks and course notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="section slide-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4 font-horizon">DESIGN</h2>
          <p className="text-xl text-text-secondary mb-12">Brainstorming and sketching solutions.</p>

          {/* Project Goals */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">PROJECT GOALS</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Venn Diagram Image */}
              <div className="flex justify-center">
                <Image 
                  src="/cb venn.png" 
                  alt="Project Goals Venn Diagram" 
                  width={400} 
                  height={300} 
                  className="w-full h-auto rounded-lg" 
                />
              </div>
              
              {/* Text Description */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">User Goals</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Students want to study more efficiently, improve their grades, and better understand course material. 
                    They need tools that save time, provide clear guidance, and help them retain information effectively.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Business Goals</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Coursebite aims to build a sustainable platform that attracts and retains users, generates revenue 
                    through subscriptions, and establishes itself as a leading AI-powered education solution.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-accent mb-2">Alignment Strategy</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    By focusing on student success and creating genuine value through AI-powered learning tools, 
                    we can achieve both user satisfaction and business growth. The platform&apos;s success depends on 
                    students actually improving their academic performance and study habits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Site Map */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">SITE MAP</h3>
            <div className="space-y-6">
              <Image 
                src="/Sitemap planning.png" 
                alt="Coursebite Site Map Planning" 
                width={800} 
                height={600} 
                className="w-full h-auto rounded-lg" 
              />
              <p className="text-text-secondary leading-relaxed">
                The site map outlines the overall structure and navigation flow of the Coursebite platform. 
                It shows how users will move through different sections including the landing page, dashboard, 
                study modules, chat interface, and practice areas. This planning ensures a logical and intuitive 
                user experience from initial onboarding to advanced study features.
              </p>
            </div>
          </div>

          {/* User Flow */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">USER FLOW</h3>
            <div className="space-y-6">
              <Image 
                src="/cb-user-flow.png" 
                alt="Coursebite User Flow" 
                width={800} 
                height={600} 
                className="w-full h-auto rounded-lg" 
              />
              <p className="text-text-secondary leading-relaxed">
                The user flow diagram illustrates the step-by-step journey users take through the Coursebite platform, 
                from initial material upload through AI analysis, study plan generation, and active learning engagement. 
                This flow ensures users can seamlessly navigate between different features while maintaining focus on 
                their learning objectives.
              </p>
            </div>
          </div>

          {/* Sketches */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">SKETCHES</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Image 
                  src="/sketches-2.png" 
                  alt="Coursebite Sketches 2" 
                  width={500} 
                  height={400} 
                  className="w-full h-auto rounded-lg" 
                />
                <p className="text-text-secondary text-sm text-center">Initial Landing Page Concepts</p>
              </div>
              <div className="space-y-4">
                <Image 
                  src="/sketches-1.png" 
                  alt="Coursebite Sketches 1" 
                  width={500} 
                  height={400} 
                  className="w-full h-auto rounded-lg" 
                />
                <p className="text-text-secondary text-sm text-center">App Interface Explorations</p>
              </div>
            </div>
          </div>

          {/* Wireframes */}
          <div className="card glass">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">WIREFRAMES</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4 bg-transparent">
                  <Image
                    src="/wireframe course dash.png"
                    alt="Course Dashboard Wireframe"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-text-secondary text-sm">Course Dashboard</p>
                    <a 
                      href="https://www.figma.com/design/iGS02FiVzAblDnkD8n23PN/cb-course-dash-wireframe?m=auto&t=yJWJJSh4lJhmJwbU-6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      Figma
                    </a>
                  </div>
                </div>
                <div className="border border-border rounded-lg p-4 bg-transparent">
                  <Image
                    src="/wireframe my courses.png"
                    alt="My Courses Wireframe"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-text-secondary text-sm">My Courses</p>
                    <a 
                      href="https://www.figma.com/design/VNtD5rcpmMbVppj9hkkFXP/cb-my-courses-wireframe?m=auto&t=yJWJJSh4lJhmJwbU-6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      Figma
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4 bg-transparent">
                  <Image
                    src="/wireframe all assign.png"
                    alt="All Assignments Wireframe"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-text-secondary text-sm">All Assignments</p>
                    <a 
                      href="https://www.figma.com/design/1riO6vkSZwgs1vMxR2nvfa/cb-all-assign-wireframe?m=auto&t=yJWJJSh4lJhmJwbU-6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      Figma
                    </a>
                  </div>
                </div>
                <div className="border border-border rounded-lg p-4 bg-transparent">
                  <Image
                    src="/wireframe flashcard.png"
                    alt="Flashcard Wireframe"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-text-secondary text-sm">Flashcard Interface</p>
                    <a 
                      href="https://www.figma.com/design/rhpnQweNWIN72NNqNyiFVI/cb-flashcards-wireframe?m=auto&t=yJWJJSh4lJhmJwbU-6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      Figma
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Section */}
      <section className="section slide-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4 font-horizon">PROTOTYPE</h2>
          <p className="text-xl text-text-secondary mb-12">Bringing the designs to life.</p>

          {/* Branding */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">BRANDING</h3>
            
            <div className="flex justify-center">
              <Image 
                src="/mood-board.png" 
                alt="Coursebite Mood Board" 
                width={1200} 
                height={900} 
                className="w-full max-w-6xl h-auto rounded-lg shadow-lg" 
                quality={100}
                priority
              />
            </div>
          </div>

          {/* High Fidelity Wireframes */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">HIGH FIDELITY WIREFRAMES</h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              These high-fidelity wireframes showcase the refined user interface designs for CourseBite's core features. 
              Each screen demonstrates the application of our branding system and design principles to create an intuitive 
              and engaging learning experience. The designs focus on clarity, accessibility, and seamless user flow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4 bg-transparent">
                  <Image
                    src="/hifi My Courses.png"
                    alt="High-Fidelity My Courses Mockup"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-text-secondary text-sm">My Courses Interface</p>
                  </div>
                </div>
                <div className="border border-border rounded-lg p-4 bg-transparent">
                  <Image
                    src="/hifi Course Dash.png"
                    alt="High-Fidelity Course Dashboard Mockup"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-text-secondary text-sm">Course Dashboard</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4 bg-transparent">
                  <Image
                    src="/hifi Chat.png"
                    alt="High-Fidelity Chat Interface Mockup"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-text-secondary text-sm">AI Chat Interface</p>
                  </div>
                </div>
                <div className="border border-border rounded-lg p-4 bg-transparent">
                  <Image
                    src="/hifi Modules.png"
                    alt="High-Fidelity Modules Mockup"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-text-secondary text-sm">Learning Modules</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-text-secondary">
                Here's a link to the <a href="https://www.figma.com/design/z4I2EShGiVHlzOwzuHhK70/cb?node-id=0-1&t=fX5fBapLLnlaARzC-1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Figma</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section className="section slide-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4 font-horizon">TEST</h2>
          <p className="text-xl text-text-secondary mb-12">Gathering feedback and iterating.</p>

          {/* Usability Testing */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">USABILITY TESTING</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              We conducted usability testing with 15 participants across different demographics. 
              The testing focused on task completion rates, time on task, and user satisfaction scores.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-primary mb-2">87%</h4>
                <p className="text-text-secondary text-sm">Task Completion Rate</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-secondary mb-2">2.3 min</h4>
                <p className="text-text-secondary text-sm">Average Time on Task</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-accent mb-2">4.8/5</h4>
                <p className="text-text-secondary text-sm">User Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Feedback & Iterations */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">FEEDBACK & ITERATIONS</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-white mb-2">Navigation Confusion</h4>
                <p className="text-text-secondary text-sm mb-2">Users found the navigation menu unclear</p>
                <p className="text-primary text-sm">→ Simplified navigation with clear labels</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-semibold text-white mb-2">Feature Discovery</h4>
                <p className="text-text-secondary text-sm mb-2">Users had trouble finding study features</p>
                <p className="text-secondary text-sm">→ Added feature highlights and onboarding</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-white mb-2">Call-to-Action Visibility</h4>
                <p className="text-text-secondary text-sm mb-2">Study buttons were not prominent enough</p>
                <p className="text-accent text-sm">→ Enhanced button styling and positioning</p>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Results Section */}
      <section className="section slide-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4 font-horizon">RESULTS</h2>
          <p className="text-xl text-text-secondary mb-12">Key outcomes and impact of the project.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card glass">
              <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">Quantitative Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">User Engagement</span>
                  <span className="text-primary font-semibold">+45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Study Time Efficiency</span>
                  <span className="text-primary font-semibold">+32%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Learning Retention</span>
                  <span className="text-primary font-semibold">+40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">User Satisfaction</span>
                  <span className="text-primary font-semibold">4.8/5</span>
                </div>
              </div>
            </div>

            <div className="card glass">
              <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">Qualitative Results</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">User Feedback</h4>
                  <p className="text-text-secondary text-sm">&quot;Finally, a platform that actually helps me study effectively!&quot;</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Stakeholder Response</h4>
                  <p className="text-text-secondary text-sm">Positive reception from educational institutions and investors</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Team Impact</h4>
                  <p className="text-text-secondary text-sm">Improved collaboration and design process efficiency</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Learnings */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">KEY LEARNINGS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">User Research Importance</h4>
                  <p className="text-text-secondary text-sm">Deep user research revealed pain points we hadn&apos;t initially considered</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Iteration Value</h4>
                  <p className="text-text-secondary text-sm">Multiple rounds of testing and iteration significantly improved the final product</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Visual Hierarchy</h4>
                  <p className="text-text-secondary text-sm">Clear visual hierarchy was crucial for complex information display</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Cross-functional Collaboration</h4>
                  <p className="text-text-secondary text-sm">Close collaboration with developers and business stakeholders was essential</p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Scope */}
          <div className="card glass">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">FUTURE SCOPE</h3>
            <div className="space-y-4">
              <p className="text-text-secondary leading-relaxed">
                The success of this project has opened opportunities for expanding into additional educational 
                categories and developing advanced features like AI-powered recommendations and personalized 
                learning paths. Future iterations will focus on enhancing the user experience through machine 
                learning and predictive analytics.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="border border-border rounded-lg p-4 text-center bg-transparent">
                  <span className="text-primary font-semibold">AI Recommendations</span>
                </div>
                <div className="border border-border rounded-lg p-4 text-center bg-transparent">
                  <span className="text-primary font-semibold">Personalized Learning</span>
                </div>
                <div className="border border-border rounded-lg p-4 text-center bg-transparent">
                  <span className="text-primary font-semibold">Advanced Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section slide-up">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/projects" className="btn-primary">
              VIEW MORE PROJECTS
            </Link>
            <Link href="/about" className="btn-secondary">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}