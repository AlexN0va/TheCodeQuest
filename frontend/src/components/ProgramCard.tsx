import React from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description }) => {
  return (
    <div className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      {/* Corner decorative element */}
      <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-br from-secondary to-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Main content */}
      <div className="relative p-6">
        
        {/* Title with enhanced typography */}
        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3 group-hover:from-secondary group-hover:to-primary transition-all duration-300">
          {title}
        </h3>
        
        {/* Description with better spacing */}
        <p className="text-gray-600 leading-relaxed mb-6 text-sm group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Enhanced button with gradient */}
        <button className="relative w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-[1.02] shadow-lg hover:shadow-xl overflow-hidden">
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <span className="relative z-10">Learn More</span>
        </button>
      </div>
      
      {/* Bottom subtle accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>
  );
};

export default ProgramCard;
