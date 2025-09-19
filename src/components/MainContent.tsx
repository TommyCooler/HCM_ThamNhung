import React from 'react';
import TheorySection from './sections/TheorySection';
import RealitySection from './sections/RealitySection';
import SolutionsSection from './sections/SolutionsSection';
import EventsSection from './sections/EventsSection';
import ConclusionSection from './sections/ConclusionSection';

const MainContent: React.FC = () => {
  return (
    <main className="relative">
      {/* Theory Section */}
      <TheorySection />
      
      {/* Reality Section */}
      <RealitySection />
      
      {/* Solutions Section */}
      <SolutionsSection />
      
      {/* Events Section */}
      <EventsSection />
      
      {/* Conclusion Section */}
      <ConclusionSection />
    </main>
  );
};

export default MainContent;