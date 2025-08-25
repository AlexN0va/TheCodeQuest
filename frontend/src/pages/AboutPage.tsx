import React, { useState } from 'react';
import TeamImage from '../assets/Photos/2024_Team.jpg';
import SpecificHeroSection from '../components/SpecificHeroSection';

import image1 from '../assets/Photos/2024_Wide1.jpg';
import image2 from '../assets/Photos/2024_Small1.jpg';
import image3 from '../assets/Photos/2024_Wide.jpg';

import image4 from '../assets/Photos/2025_Wide1.jpg';
import image5 from '../assets/Photos/2025_wide2.jpg';
import image6 from '../assets/Photos/2025_wide3.jpg';

function AboutPage() {
  const [currentSlide2024, setCurrentSlide2024] = useState(0);
  const [currentSlide2025, setCurrentSlide2025] = useState(0);

  // Mock photo data - replace with actual photos
  const photos2024 = [
    { id: 1, src: `${image1}`, alt: 'Camp 2024 - Robotics Workshop' },
    { id: 2, src: `${image2}`, alt: 'Camp 2024 - Coding Session' },
    { id: 3, src: `${image3}`, alt: 'Camp 2024 - Team Building' },
  ];

  const photos2025 = [
    { id: 1, src: `${image4}`, alt: 'Camp 2025 - Innovation Lab' },
    { id: 2, src: `${image5}`, alt: 'Camp 2025 - STEM Projects' },
    { id: 3, src: `${image6}`, alt: 'Camp 2025 - Future Leaders' },
  ];

  const nextSlide = (setter: React.Dispatch<React.SetStateAction<number>>, max: number) => {
    setter(prev => (prev + 1) % max);
  };

  const prevSlide = (setter: React.Dispatch<React.SetStateAction<number>>, max: number) => {
    setter(prev => (prev - 1 + max) % max);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <SpecificHeroSection 
        title="About TheCodeQuest"
        description="Empowering the next generation of innovators through technology education"
      />

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Building Tomorrow's Innovators</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to bridge the gap between traditional education and the rapidly evolving world of technology, 
                TheCodeQuest emerged from a simple belief: every child deserves the opportunity to explore, create, and innovate.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a small community initiative has grown into a comprehensive educational platform that combines 
                cutting-edge robotics, interactive coding, and collaborative problem-solving. Our journey began with a handful 
                of passionate educators and has evolved into a movement that has touched the lives of hundreds of young learners.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to push boundaries, constantly updating our curriculum to reflect the latest technological 
                advancements while maintaining our core values of creativity, collaboration, and critical thinking.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center border-4 border-primary/30">
              <img src={TeamImage} alt="hero" className="w-full h-full object-cover rounded-3xl border-4 border-accent/20" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl transform rotate-45 shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-xl shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2024 Camp Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">2024 Summer Camp</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our inaugural summer camp was a tremendous success, bringing together young minds eager to explore 
              the world of robotics and programming.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">What We Accomplished</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Robotics Fundamentals</h4>
                    <p className="text-gray-600">Students built and programmed their first robots using LEGO Mindstorms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Coding Basics</h4>
                    <p className="text-gray-600">Introduction to block-based programming with Scratch and Python</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Team Projects</h4>
                    <p className="text-gray-600">Collaborative problem-solving challenges and robot competitions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Carousel */}
            <div className="relative">
              <div className="w-full h-80 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src={photos2024[currentSlide2024].src} 
                  alt={photos2024[currentSlide2024].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={() => prevSlide(setCurrentSlide2024, photos2024.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all duration-200"
              >
                ←
              </button>
              <button 
                onClick={() => nextSlide(setCurrentSlide2024, photos2024.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all duration-200"
              >
                →
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {photos2024.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide2024(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide2024 ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Camp Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">2025 Summer Camp</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building on our success, we're expanding our program with advanced robotics, AI integration, 
              and real-world project applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Carousel */}
            <div className="relative">
              <div className="w-full h-80 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src={photos2025[currentSlide2025].src} 
                  alt={photos2025[currentSlide2025].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={() => prevSlide(setCurrentSlide2025, photos2025.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all duration-200"
              >
                ←
              </button>
              <button 
                onClick={() => nextSlide(setCurrentSlide2025, photos2025.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all duration-200"
              >
                →
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {photos2025.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide2025(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide2025 ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">What's New This Year</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Advanced Robotics</h4>
                    <p className="text-gray-600">Advanced sensor integration and autonomous navigation systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">AI & Machine Learning</h4>
                    <p className="text-gray-600">Introduction to basic AI concepts and machine learning algorithms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Real-World Projects</h4>
                    <p className="text-gray-600">Solving actual community challenges with technology solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Industry Partnerships</h4>
                    <p className="text-gray-600">Collaboration with local tech companies and professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
