import React from 'react';
import image from '../assets/Photos/2024_Small.jpg';

const ContentSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-secondary/10 rounded-full border-4 border-secondary/20"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/10 rounded-full border-4 border-accent/20"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary/10 rounded-2xl transform rotate-45 border-2 border-primary/20"></div>
      
      {/* New accent-colored squares */}
      <div className="absolute top-20 right-1/3 w-24 h-24 bg-accent/15 rounded-xl transform rotate-12 border-2 border-accent/30"></div>
      <div className="absolute bottom-20 right-1/4 w-18 h-18 bg-accent/20 rounded-lg transform -rotate-45 border-2 border-accent/40"></div>
      <div className="absolute top-1/3 left-8 w-14 h-14 bg-accent/25 rounded-2xl transform rotate-90 border border-accent/50"></div>
      <div className="absolute bottom-1/3 right-8 w-10 h-10 bg-accent/30 rounded-lg transform rotate-180 border-2 border-accent/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary leading-tight">
              Building Tomorrow's
              <span className="text-secondary block">Innovators</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our unique approach combines cutting-edge technology with creative problem-solving, helping children develop critical thinking skills while having fun with robotics and coding.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700 font-medium">Hands-on robotics projects</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700 font-medium">Interactive coding challenges</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700 font-medium">Team collaboration activities</span>
              </div>
            </div>
          </div>
          
          {/* Image placeholder */}
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-3xl shadow-2xl flex items-center justify-center border-4 border-accent/20">
              <img src={image} alt="hero" className="w-full h-full object-cover rounded-3xl border-4 border-accent/20" />
            </div>
            {/* Geometric shapes */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-accent rounded-2xl transform rotate-45 shadow-lg border-2 border-white"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary rounded-xl shadow-lg border-2 border-white"></div>            
            {/* Additional accent squares */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-accent rounded-md transform rotate-45 shadow-md border border-white/50"></div>
            <div className="absolute bottom-1/4 -right-4 w-10 h-10 bg-accent rounded-lg transform -rotate-90 shadow-md border border-white/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
