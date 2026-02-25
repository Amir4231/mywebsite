import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Rocket, Eye, Sparkles, Zap } from 'lucide-react';

export function Hero() {
  const heroRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-purple/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-medium text-gray-300">AI-Powered Business System</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Start Your Business in </span>
              <span className="gradient-text">7 Days</span>
              <span className="text-white"> — Even If You Have </span>
              <span className="text-neon-blue">Zero Experience</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              A complete AI-powered prompt system that generates your business plan, 
              branding, marketing, pricing strategy, and content — in minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="btn-neon flex items-center justify-center gap-2 text-lg">
                <Rocket className="w-5 h-5" />
                Get Instant Access
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2 text-lg">
                <Eye className="w-5 h-5" />
                See What's Inside
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue border-2 border-dark-slate"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-white font-semibold">2,500+</span>
                <span>entrepreneurs launched</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="relative animate-float">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 to-neon-blue/30 rounded-2xl blur-2xl scale-95" />
              
              {/* Dashboard Image */}
              <div className="relative glass-card rounded-2xl overflow-hidden">
                <img
                  src="/hero-dashboard.jpg"
                  alt="AI Business Launch Kit Dashboard"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-slate/60 via-transparent to-transparent" />
                
                {/* Floating Stats Cards */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <div className="glass-card px-4 py-3 rounded-xl flex-1">
                    <div className="text-xs text-gray-400">Business Plans</div>
                    <div className="text-lg font-bold text-white">10,000+</div>
                  </div>
                  <div className="glass-card px-4 py-3 rounded-xl flex-1">
                    <div className="text-xs text-gray-400">Success Rate</div>
                    <div className="text-lg font-bold text-neon-blue">94%</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-purple/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-blue/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-500">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-neon-purple rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
