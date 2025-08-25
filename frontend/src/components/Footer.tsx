import React from 'react';
import logo from '../assets/Brand/logo-no-background.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t-4 border-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,134,206,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="w-50"><img src={logo} alt="logo" className="" /></span>
          </div>
          <p className="text-gray-600 mb-4">
            Empowering the next generation of innovators through technology education
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>© 2024 TheCodeQuest. All rights reserved.</span>
            <span className="text-secondary">•</span>
            <span className="hover:text-secondary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-secondary">•</span>
            <span className="hover:text-secondary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
