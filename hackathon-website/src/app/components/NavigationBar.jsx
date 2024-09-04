"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu

export default function NavigationBar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Darker background
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.3)", // Lighter border for contrast
      }}
      className="fixed top-0 left-0 w-full z-50 text-white shadow-md navbar-container"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://nipe.nitte.edu.in/img/logo.png" // Replace with the path to your logo image
              alt="Logo"
              className="h-8 w-auto sm:h-12"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-4 flex-1 justify-center">
            <button
              onClick={() => scrollToSection("home")}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("schedule")}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Schedule
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contactUs")}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact-us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Darker background for mobile menu
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.5)", // Lighter border for contrast
          }}
          className="sm:hidden text-gray-300 mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                scrollToSection("home");
                toggleMenu();
              }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection("events");
                toggleMenu();
              }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              Events
            </button>
            <button
              onClick={() => {
                scrollToSection("schedule");
                toggleMenu();
              }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              Schedule
            </button>
            <button
              onClick={() => {
                scrollToSection("about");
                toggleMenu();
              }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection("contactUs");
                toggleMenu();
              }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              Contact-us
            </button>
          </div>
        </div>
      )}

      {/* Bottom Glow Effect */}
      <div className="navbar-glow"></div>
    </nav>
  );
}
