import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/molecules/navigation.css"; // Import the custom styles

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="">
      <div className="nav-container fixed top-0 left-0 w-full">
        <div className="nav-menu">
          <Link to="/" className="nav-brand">
           Harshana Eranda 
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/education" className="nav-link">
              Education
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
        <div className="md:hidden p-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-toggle-button"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state */}
      {isOpen && (
        <div className="md:hidden pt-14">
          <div className="px-2 space-y-1 sm:px-3 bg-black pt-5 pb-4">
            <Link to="/about" className="nav-link-mobile">
              About
            </Link>
            <Link to="/education" className="nav-link-mobile">
              Education
            </Link>
            <Link to="/projects" className="nav-link-mobile">
              Projects
            </Link>
            <Link to="/contact" className="nav-link-mobile">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
