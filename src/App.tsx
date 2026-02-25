import { Hero } from '@/sections/Hero';
import { Problem } from '@/sections/Problem';
import { Features } from '@/sections/Features';
import { HowItWorks } from '@/sections/HowItWorks';
import { Demo } from '@/sections/Demo';
import { Pricing } from '@/sections/Pricing';
import { Audience } from '@/sections/Audience';
import { FinalCTA } from '@/sections/FinalCTA';
import { Footer } from '@/sections/Footer';
import { Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-slate/80 backdrop-blur-xl border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white hidden sm:block">AI Launch Kit</span>
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a>
          </div>

          {/* CTA */}
          <button className="btn-neon py-2.5 px-5 text-sm">
            Get Access
          </button>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-dark-slate text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <section id="features">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <Demo />
        <section id="pricing">
          <Pricing />
        </section>
        <Audience />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
