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
              CourseBite needs a compelling landing page and intuitive app UI that demonstrates how the platform will transform students' learning experiences rather than just showcasing features. The app should be well-organized and simplify the learning process by providing clear guidance on what to study and how to proceed with their education journey.
            </p>
          </div>

          {/* Goal */}
          <div className="card glass">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">GOAL</h3>
            <p className="text-text-secondary leading-relaxed text-lg">
              My goal is to create an aesthetic and compelling landing page to attract conversions and to design and build an app including "chat," "learn," "practice," "reinforce," "flashcards," "study guides," and "practice exams" features. The app should make learning a streamlined experience from start to finish while incorporating proven study methodologies and AI-powered personalization.
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
                    "When you sit down to study for a class, what's the hardest part of getting started?"
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
                    "Usually I don't know where to begin. I have slides, notes, and textbook chapters, but no idea what's most important or what I'll be tested on."
                  </p>
                )}
              </div>

              <div className="border border-border rounded-lg p-6 bg-transparent">
                <h4 className="font-semibold text-primary mb-4">Question 2</h4>
                <div className="h-20 mb-4">
                  <p className="text-text-secondary text-sm">
                    "How do you currently organize your study materials and plan for exams?"
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
                    "I kind of just wing it. Sometimes I make a to-do list or use Google Docs, but I often forget where I saved things or end up cramming."
                  </p>
                )}
              </div>

              <div className="border border-border rounded-lg p-6 bg-transparent">
                <h4 className="font-semibold text-primary mb-4">Question 3</h4>
                <div className="h-20 mb-4">
                  <p className="text-text-secondary text-sm">
                    "Where do you go when you don't understand a topic? Does it work well?"
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
                    "Usually I Google stuff or ask ChatGPT. Sometimes it helps, but a lot of the time it doesn't match exactly what I'm learning in class."
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
                    <p className="text-text-secondary text-xs">Overwhelmed by study materials, doesn't know what's important</p>
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
                  Students feel overwhelmed by unstructured materials and lack clarity on prioritizing what to study. This suggests strong potential for Coursebite's AI-curated lessons and study guides that highlight key concepts.
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
                  Students need help contextualized to their specific syllabus and materials. Coursebite's RAG approach can give it an edge by generating answers grounded in their actual textbooks and course notes.
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

          {/* User Goals vs Business Goals */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">USER GOALS VS BUSINESS GOALS</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Venn Diagram */}
              <div className="flex justify-center">
                <div className="relative w-96 h-64">
                  {/* User Goals Circle */}
                  <div className="absolute top-0 left-0 w-48 h-48 bg-primary/20 rounded-full border-2 border-primary flex items-center justify-center">
                    <div className="text-center p-3">
                      <h4 className="font-semibold text-primary mb-2 text-sm">User Goals</h4>
                      <ul className="text-text-secondary text-xs space-y-1">
                        <li>• Efficient studying</li>
                        <li>• Better grades</li>
                        <li>• Time management</li>
                        <li>• Understanding concepts</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Business Goals Circle */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full border-2 border-secondary flex items-center justify-center">
                    <div className="text-center p-3">
                      <h4 className="font-semibold text-secondary mb-2 text-sm">Business Goals</h4>
                      <ul className="text-text-secondary text-xs space-y-1">
                        <li>• User retention</li>
                        <li>• Revenue growth</li>
                        <li>• Market expansion</li>
                        <li>• Brand recognition</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Overlap Area */}
                  <div className="absolute top-8 left-24 w-24 h-24 bg-accent/30 rounded-full border-2 border-accent flex items-center justify-center">
                    <div className="text-center p-1">
                      <h4 className="font-semibold text-accent text-xs mb-1">Shared Goals</h4>
                      <ul className="text-text-secondary text-xs space-y-0.5">
                        <li>• Student success</li>
                        <li>• Platform adoption</li>
                        <li>• Long-term engagement</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                    we can achieve both user satisfaction and business growth. The platform's success depends on 
                    students actually improving their academic performance and study habits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* User Flow */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">USER FLOW</h3>
            <div className="border border-border rounded-lg p-8 bg-transparent">
              <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
                <div className="bg-primary text-white px-4 py-2 rounded-lg">Upload Materials</div>
                <div className="text-primary">→</div>
                <div className="bg-primary text-white px-4 py-2 rounded-lg">AI Analysis</div>
                <div className="text-primary">→</div>
                <div className="bg-primary text-white px-4 py-2 rounded-lg">Study Plan</div>
                <div className="text-primary">→</div>
                <div className="bg-primary text-white px-4 py-2 rounded-lg">Learn & Practice</div>
                <div className="text-primary">→</div>
                <div className="bg-primary text-white px-4 py-2 rounded-lg">Mastery</div>
              </div>
            </div>
          </div>

          {/* Brainstorming */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">BRAINSTORMING</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Through collaborative brainstorming sessions, we generated over 50 ideas focused on 
              simplifying the learning process. Key themes emerged around AI personalization, 
              structured learning paths, and interactive study tools.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border border-border rounded-lg p-4 text-center bg-transparent">
                <span className="text-primary font-semibold">AI Chat</span>
              </div>
              <div className="border border-border rounded-lg p-4 text-center bg-transparent">
                <span className="text-primary font-semibold">Study Plans</span>
              </div>
              <div className="border border-border rounded-lg p-4 text-center bg-transparent">
                <span className="text-primary font-semibold">Interactive Practice</span>
              </div>
              <div className="border border-border rounded-lg p-4 text-center bg-transparent">
                <span className="text-primary font-semibold">Progress Tracking</span>
              </div>
            </div>
          </div>

          {/* Sketches */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">SKETCHES</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-6 text-center bg-transparent">
                <div className="w-full h-32 bg-gray-600 rounded mb-4 flex items-center justify-center">
                  <span className="text-white">Sketch 1</span>
                </div>
                <p className="text-text-secondary text-sm">Landing Page Layout</p>
              </div>
              <div className="border border-border rounded-lg p-6 text-center bg-transparent">
                <div className="w-full h-32 bg-gray-600 rounded mb-4 flex items-center justify-center">
                  <span className="text-white">Sketch 2</span>
                </div>
                <p className="text-text-secondary text-sm">App Dashboard</p>
              </div>
              <div className="border border-border rounded-lg p-6 text-center bg-transparent">
                <div className="w-full h-32 bg-gray-600 rounded mb-4 flex items-center justify-center">
                  <span className="text-white">Sketch 3</span>
                </div>
                <p className="text-text-secondary text-sm">Chat Interface</p>
              </div>
            </div>
          </div>

          {/* Wireframes */}
          <div className="card glass">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">WIREFRAMES</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4 bg-transparent">
                  <div className="w-full h-48 bg-gray-600 rounded mb-3 flex items-center justify-center">
                    <span className="text-white">Wireframe 1</span>
                  </div>
                  <p className="text-text-secondary text-sm">Main Dashboard</p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-transparent">
                  <div className="w-full h-48 bg-gray-600 rounded mb-3 flex items-center justify-center">
                    <span className="text-white">Wireframe 2</span>
                  </div>
                  <p className="text-text-secondary text-sm">Study Plan View</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4 bg-transparent">
                  <div className="w-full h-48 bg-gray-600 rounded mb-3 flex items-center justify-center">
                    <span className="text-white">Wireframe 3</span>
                  </div>
                  <p className="text-text-secondary text-sm">Chat Interface</p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-transparent">
                  <div className="w-full h-48 bg-gray-600 rounded mb-3 flex items-center justify-center">
                    <span className="text-white">Wireframe 4</span>
                  </div>
                  <p className="text-text-secondary text-sm">Practice Module</p>
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

          {/* Mockups */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">MOCKUPS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-4 text-center bg-transparent">
                <div className="w-full h-64 bg-gray-600 rounded mb-3 flex items-center justify-center">
                  <span className="text-white">Mockup 1</span>
                </div>
                <p className="text-text-secondary text-sm">Landing Page</p>
              </div>
              <div className="border border-border rounded-lg p-4 text-center bg-transparent">
                <div className="w-full h-64 bg-gray-600 rounded mb-3 flex items-center justify-center">
                  <span className="text-white">Mockup 2</span>
                </div>
                <p className="text-text-secondary text-sm">App Dashboard</p>
              </div>
              <div className="border border-border rounded-lg p-4 text-center bg-transparent">
                <div className="w-full h-64 bg-gray-600 rounded mb-3 flex items-center justify-center">
                  <span className="text-white">Mockup 3</span>
                </div>
                <p className="text-text-secondary text-sm">Chat Interface</p>
              </div>
            </div>
          </div>

          {/* Design System */}
          <div className="card glass mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">DESIGN SYSTEM</h3>
            
            {/* Color Palette */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-primary mb-4">Color Palette</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-2"></div>
                  <p className="text-text-secondary text-sm">Primary</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-2"></div>
                  <p className="text-text-secondary text-sm">Secondary</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-2"></div>
                  <p className="text-text-secondary text-sm">Accent</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-surface rounded-lg mx-auto mb-2"></div>
                  <p className="text-text-secondary text-sm">Surface</p>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-primary mb-4">Typography</h4>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-white">Heading 1</h1>
                <h2 className="text-2xl font-semibold text-white">Heading 2</h2>
                <h3 className="text-xl font-medium text-white">Heading 3</h3>
                <p className="text-text-secondary">Body text for regular content</p>
              </div>
            </div>

            {/* UI Components */}
            <div>
              <h4 className="text-xl font-semibold text-primary mb-4">UI Components</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <button className="btn-primary w-full">Primary Button</button>
                  <button className="btn-secondary w-full">Secondary Button</button>
                </div>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-3 bg-transparent">
                    <input type="text" placeholder="Input field" className="w-full bg-transparent text-white placeholder-text-muted outline-none" />
                  </div>
                  <div className="border border-border rounded-lg p-3 bg-transparent">
                    <select className="w-full bg-transparent text-white outline-none">
                      <option>Dropdown</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="card">
                    <p className="text-text-secondary text-sm">Card Component</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Design */}
          <div className="card glass">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">VISUAL DESIGN</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border rounded-lg p-6 text-center bg-transparent">
                <div className="w-full h-48 bg-gray-600 rounded mb-4 flex items-center justify-center">
                  <span className="text-white">Visual Design 1</span>
                </div>
                <p className="text-text-secondary text-sm">Illustrations & Icons</p>
              </div>
              <div className="border border-border rounded-lg p-6 text-center bg-transparent">
                <div className="w-full h-48 bg-gray-600 rounded mb-4 flex items-center justify-center">
                  <span className="text-white">Visual Design 2</span>
                </div>
                <p className="text-text-secondary text-sm">Final App Screens</p>
              </div>
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

          {/* Final Design */}
          <div className="card glass">
            <h3 className="text-2xl font-bold text-white mb-6 font-cascadia">FINAL DESIGN</h3>
            <div className="text-center">
              <div className="w-full max-w-md mx-auto border border-border rounded-lg p-8 bg-transparent">
                <div className="w-full h-64 bg-gray-600 rounded mb-4 flex items-center justify-center">
                  <span className="text-white">Final App Design</span>
                </div>
                <p className="text-text-secondary text-sm">Polished education platform ready for development</p>
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
                  <p className="text-text-secondary text-sm">"Finally, a platform that actually helps me study effectively!"</p>
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
                  <p className="text-text-secondary text-sm">Deep user research revealed pain points we hadn't initially considered</p>
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