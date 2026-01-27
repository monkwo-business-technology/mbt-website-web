import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import StickyDemoBanner from '../components/layout/StickyDemoBanner';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import DataServices from '../components/sections/DataServices';
import Products from '../components/sections/Products';
import CaseStudies from '../components/sections/CaseStudies';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <DataServices />
        <Products />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyDemoBanner />
    </div>
  );
};

export default Index;
