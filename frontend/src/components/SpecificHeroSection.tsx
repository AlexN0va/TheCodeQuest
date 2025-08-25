
interface SpecificHeroSectionProps {
  title: string;
  description: string;
}

function SpecificHeroSection(shp: SpecificHeroSectionProps) {
  return (
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">{shp.title}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {shp.description}
          </p>
        </div>
      </section>
  );
}

export default SpecificHeroSection;