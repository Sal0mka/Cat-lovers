import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { PopularBreeds } from './components/PopularBreeds';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { FloatingPaw } from './components/FloatingPaw';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <FloatingPaw />
      <ScrollToTop />
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Gallery />
      <PopularBreeds />
      <Contact />
    </div>
  );
}