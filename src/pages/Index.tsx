
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import PreviewSlideshow from '@/components/PreviewSlideshow';
import FeatureHighlights from '@/components/FeatureHighlights';
import MobileAppPromo from '@/components/MobileAppPromo';
import TrustScoreExplainer from '@/components/TrustScoreExplainer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureHighlights />
        <HowItWorks />
        <PreviewSlideshow />
        <TrustScoreExplainer />
        <TrustSection />
        <MobileAppPromo />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
