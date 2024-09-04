"use client";
import '../../styles/globals.css';
import Link from 'next/link';
import HeroSection from './HeroSection';
import CountdownTimer from './CountdownTimer';
import ProblemStatements from './ProblemStatements';
import RegistrationForm from '../register/page';
import HackathonDetails from '../hackthon-details/page';
import Footer from './footer';

export default function HackthonPage() {
  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr]">
      {/* Container for the Back to Home Button */}
      <div className="fixed top-4 right-4 z-10">
        <Link
          href="/"
          className="bg-blue-500 text-black px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Home
        </Link>
      </div>

      {/* Page Sections */}
      <div className="relative z-0">
        <HeroSection />
        <CountdownTimer />
        <ProblemStatements />
        <RegistrationForm />
        <HackathonDetails />
        <Footer/>
      </div>
    </div>
  );
}
