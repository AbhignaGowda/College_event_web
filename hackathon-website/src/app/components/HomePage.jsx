"use client";

import '../../styles/globals.css';
import { useRef } from 'react';
import NavigationBar from './NavigationBar';
import Events from './events';
import Schedule from './schedule';
import ContactUs from './contactUs';
import About from './About';
import Hero from './Hero';

export default function HomePage() {
  // Initialize refs
  const eventsRef = useRef(null);
  const scheduleRef = useRef(null);
  const contactUsRef = useRef(null);
  const heroSectionRef = useRef(null);
  const aboutRef = useRef(null); // Correctly define aboutRef

  // Scroll to the section based on the passed section name
  const scrollToSection = (section) => {
    switch (section) {
      case 'events':
        eventsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'schedule':
        scheduleRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contactUs':
        contactUsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'home':
        heroSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  // Render the page content
  return (
    <div className="w-full pt-20">
      <NavigationBar scrollToSection={scrollToSection} />

      <div ref={heroSectionRef}>
        <Hero />
      </div>

      <div ref={eventsRef}>
        <Events />
      </div>

      <div ref={scheduleRef}>
        <Schedule />
      </div>

      {/* Ensure this section is rendered properly */}
      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={contactUsRef}>
        <ContactUs />
      </div>
    </div>
  );
}
