import { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Sidebar from '@/components/Sidebar';
import MobileBottomNav from '@/components/MobileBottomNav';

import HeroSection from '@/components/HeroSection';
import CompanyLogosSection from '@/components/CompanyLogosSection';
import EventsSection from '@/components/EventsSection';
import LearnSection from '@/components/LearnSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import VSLSection from '@/components/VSLSection';
import AccessNotice from '@/components/AccessNotice';
import TalentNetworkSection from '@/components/TalentNetworkSection';

const Index = () => {
  useSmoothScroll();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Global urgency banner */}
      <AccessNotice />

      {/* Desktop / Tablet Sidebar */}
      <div className="hidden md:block">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden">
        <MobileBottomNav />
      </div>

      {/* Main content */}
      <main
        className={`
          transition-all duration-300
          ${sidebarOpen ? 'md:ml-[180px]' : 'md:ml-[60px]'}
          ml-0
          pb-20 md:pb-0
        `}
      >
        <HeroSection />
        <CompanyLogosSection />
        <LearnSection />
        <EventsSection />
        <TalentNetworkSection />
        <VSLSection />
        <TestimonialsSection />
        <CTASection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
