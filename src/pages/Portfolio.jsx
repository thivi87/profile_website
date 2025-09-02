import React from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Expertise />
      <Experience />
      <Certifications />
      <Education />
      <Publications />
      <Contact />
    </div>
  );
}