'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="px-4 py-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface-light/50 transition-all duration-300 font-medium"
            >
              HOME
            </Link>
            <Link 
              href="/projects" 
              className="px-4 py-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface-light/50 transition-all duration-300 font-medium"
            >
              PROJECTS
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface-light/50 transition-all duration-300 font-medium"
            >
              ABOUT
            </Link>
            <a 
              href="https://www.linkedin.com/in/kaelan-nguyen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 p-2 rounded-lg hover:bg-surface-light transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L6 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="px-4 py-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface-light/50 transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="px-4 py-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface-light/50 transition-all duration-300 font-medium"
              >
                Projects
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface-light/50 transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a 
                href="https://www.linkedin.com/in/kaelan-nguyen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
