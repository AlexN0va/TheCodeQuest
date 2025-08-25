import React from 'react';
import heroImage1 from '../assets/Photos/2025_Wide.jpg';
const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-white to-accent/5 py-20">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl border-4 border-secondary/30"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl border-4 border-accent/30"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/20 rounded-full blur-xl border-4 border-primary/30"></div>
      
      {/* Additional floating shapes */}
      <div className="absolute top-32 right-1/3 w-16 h-16 bg-secondary/15 rounded-2xl transform rotate-45 border-2 border-secondary/40"></div>
      <div className="absolute bottom-32 right-1/4 w-12 h-12 bg-accent/15 rounded-xl transform -rotate-12 border-2 border-accent/40"></div>
      
      {/* New accent-colored squares and shapes */}
      <div className="absolute top-16 right-1/4 w-20 h-20 bg-accent/20 rounded-lg transform rotate-12 border-2 border-accent/40"></div>
      <div className="absolute bottom-16 left-1/3 w-16 h-16 bg-accent/25 rounded-2xl transform -rotate-45 border-2 border-accent/50"></div>
      <div className="absolute top-1/2 left-16 w-12 h-12 bg-accent/30 rounded-xl transform rotate-90 border border-accent/60"></div>
      <div className="absolute top-3/4 right-16 w-14 h-14 bg-accent/20 rounded-lg transform rotate-180 border-2 border-accent/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-secondary via-secondary/90 to-primary rounded-3xl shadow-2xl flex items-center justify-center border-4 border-accent/20">
            <img src={heroImage1} alt="hero" className="w-full h-full object-cover rounded-3xl border-4 border-accent/20" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl transform rotate-12 shadow-lg border-2 border-white"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-xl transform -rotate-12 shadow-lg border-2 border-white"></div>
            <div className="absolute top-1/2 -left-6 w-8 h-8 bg-secondary rounded-lg transform -rotate-45 shadow-md border border-white/50"></div>
            
            {/* Additional accent squares */}
            <div className="absolute top-1/4 -right-8 w-10 h-10 bg-accent rounded-lg transform rotate-45 shadow-md border border-white/50"></div>
            <div className="absolute bottom-1/4 -left-8 w-6 h-6 bg-accent rounded-md transform -rotate-90 shadow-md border border-white/50"></div>
          </div>
          
          {/* Right side - Text */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Unlock Your Child's
              <span className="text-secondary block">Future in Tech</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join TheCodeQuest's innovative summer camps and online Curriculum where kids discover the magic of coding, 
              robotics, and technology through hands-on learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-secondary to-primary/90 text-white rounded-xl font-semibold text-lg hover:from-primary/90 hover:to-secondary transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-secondary/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
