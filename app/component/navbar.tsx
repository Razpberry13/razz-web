"use client"

import { useState, useEffect } from "react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop: number = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div
              className={` font-bold text-xl cursor-pointer hover:text-gray-300 transition-colors ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              Logo
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#about"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About Me
              </a>
              <a
                href="#skills"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium transition-colors border border-white"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};