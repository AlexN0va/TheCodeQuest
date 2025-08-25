import SpecificHeroSection from '../components/SpecificHeroSection';
import { ProgramCard } from '../components';

function ProgramsPage() {
  return (
    <>
      <SpecificHeroSection 
        title="Explore Our Programs"
        description="From coding to career development, we offer programs designed to empower students with the skills they need for the future."
      />
      {/*Camps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Summer Camps</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our summer camps are designed to ignite curiosity and foster creativity in young minds. Through hands-on projects, students will explore robotics, coding, and more in a fun and engaging environment.
            </p>
          </div>
          
          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgramCard 
              title="2025 Robotics Camp" 
              description="Learn the basics of robotics and programming through hands-on projects and team challenges."
            />
            <ProgramCard 
              title="2024 Coding Camp" 
              description="Master programming fundamentals with fun projects, games, and creative coding exercises."
            />
            <ProgramCard 
              title="2026 Coding Camp" 
              description="Upcoming coding camp focusing on advanced programming techniques and real-world applications."
            />
          </div>
        </div>
       </section>

      {/*Resource Database*/}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Resource Database</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our resource database provides a wealth of information and tools for students, educators, and parents. From local aid services to career advice, find everything you need to support learning and development.
            </p>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgramCard 
              title="Scholarship Finder" 
              description="Discover scholarships and financial aid opportunities to support your education."
            />
            <ProgramCard 
              title="Career Development Resource" 
              description="Access resources for career planning, resume building, and interview preparation."
            />
            <ProgramCard 
              title="Local Aid Services" 
              description="Find local services that provide support for education, health, and community needs."
            />
          </div>
        </div>
      </section>

      {/*Digital Workshops*/}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Digital Workshops</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our digital workshops to enhance your technical and life skills in various subjects. These interactive sessions are designed to provide practical knowledge and hands-on experience in a virtual setting.
            </p>
          </div>
                  {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgramCard 
              title="Intro to Digital World" 
              description="Learn the basics of our digital ecosystem, including online safety, digital literacy, and how the internet/computers works."
            />
            <ProgramCard 
              title="Intro to Programming" 
              description="Get started with programming through lessons and projects that teach coding fundamentals."
            />
            <ProgramCard 
              title="The world of Craftsmanship" 
              description="Explore the art of craftsmanship with hands-on projects that blend creativity and technical skills."
            />
          </div>
        </div>
      </section>

    </>
  );
};

export default ProgramsPage;
