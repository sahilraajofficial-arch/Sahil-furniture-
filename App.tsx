import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import WorkingProcess from './components/WorkingProcess';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <WorkingProcess />
        <CTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;