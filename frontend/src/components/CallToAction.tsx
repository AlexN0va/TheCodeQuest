import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(56,134,206,0.3),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(165,40,9,0.2),transparent_50%)]"></div>
      
      {/* Floating accent squares */}
      <div className="absolute top-16 left-16 w-16 h-16 bg-accent/30 rounded-lg transform rotate-45 border-2 border-accent/50"></div>
      <div className="absolute top-32 right-16 w-12 h-12 bg-accent/25 rounded-xl transform -rotate-12 border border-accent/40"></div>
      <div className="absolute bottom-16 left-24 w-14 h-14 bg-accent/20 rounded-2xl transform rotate-90 border-2 border-accent/30"></div>
      <div className="absolute bottom-32 right-24 w-18 h-18 bg-accent/35 rounded-lg transform rotate-180 border border-accent/60"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Child's Coding Journey?
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Join our summer camps or use our online curriculum and watch your child discover the exciting world of technology, 
          creativity, and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-white/20">
            Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
