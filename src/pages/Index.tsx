
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import WorkShowcase from '../components/WorkShowcase';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WorkShowcase />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
