import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '🎯',
      title: 'Expert Instructors',
      description: 'Learn from experienced educators and industry professionals passionate about technology education.',
      color: 'secondary'
    },
    {
      icon: '🚀',
      title: 'Modern Curriculum',
      description: 'Stay ahead with cutting-edge technology and programming languages used in today\'s industry.',
      color: 'accent'
    },
    {
      icon: '🌟',
      title: 'Small Groups',
      description: 'Personalized attention with small class sizes ensuring every child gets the support they need.',
      color: 'primary'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/8 via-white to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,134,206,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(165,40,9,0.1),transparent_50%)]"></div>
      
      {/* Floating accent squares */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-accent/20 rounded-xl transform rotate-45 border-2 border-accent/30"></div>
      <div className="absolute top-32 right-24 w-16 h-16 bg-accent/25 rounded-lg transform -rotate-12 border-2 border-accent/40"></div>
      <div className="absolute bottom-24 left-24 w-18 h-18 bg-accent/15 rounded-2xl transform rotate-90 border border-accent/50"></div>
      <div className="absolute bottom-16 right-16 w-12 h-12 bg-accent/30 rounded-lg transform rotate-180 border-2 border-accent/40"></div>
      <div className="absolute top-1/2 left-8 w-14 h-14 bg-accent/20 rounded-xl transform rotate-45 border border-accent/30"></div>
      <div className="absolute top-1/2 right-8 w-10 h-10 bg-accent/25 rounded-lg transform -rotate-45 border-2 border-accent/35"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Why Choose TheCodeQuest?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about making technology accessible and exciting for every child
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-${feature.color}/20 hover:border-${feature.color}/40`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color} to-${feature.color}/80 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg border-2 border-${feature.color}/30`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
