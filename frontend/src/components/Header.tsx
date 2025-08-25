import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Brand/logo-no-background.svg';

function Header() {
  const location = useLocation();
  return (
    <header className="bg-background shadow-lg border-b-4 border-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-60 h-8">
              <span className=""><img src={logo} alt="logo" className="" /></span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`text-xl font-medium border-b-2 pb-1 transition-colors duration-200 ${
                location.pathname === '/' 
                  ? 'text-primary border-primary' 
                  : 'text-primary hover:text-primary border-transparent hover:border-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/programs" 
              className={`text-xl font-medium border-b-2 pb-1 transition-colors duration-200 ${
                location.pathname === '/programs' 
                  ? 'text-primary border-primary' 
                  : 'text-primary hover:text-primary border-transparent hover:border-primary'
              }`}
            >
              Programs
            </Link>
            <Link 
              to="/about" 
              className={`text-xl font-medium border-b-2 pb-1 transition-colors duration-200 ${
                location.pathname === '/about' 
                  ? 'text-primary border-primary' 
                  : 'text-primary hover:text-primary border-transparent hover:border-primary'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary border-2 border-transparent hover:border-primary transition-all duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
