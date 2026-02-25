import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Shield, Rocket, ArrowRight, Sparkles, Clock, Users, Zap } from 'lucide-react';

export function FinalCTA() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neon-purple/10 rounded-full blur-[200px]" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div ref={sectionRef} className="text-center">
          {/* Guarantee Badge */}
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">7-Day Money Back Guarantee</p>
              <p className="text-gray-400 text-xs">If it doesn't help you start, you get a refund.</p>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Business Isn't <span className="gradient-text">Waiting</span>.
            <br />
            <span className="text-gray-500">Why Are You?</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Every day you wait is a day your competition gets ahead. 
            The tools are here. The system is proven. The only question is: 
            <span className="text-white font-semibold"> Are you ready?</span>
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3">
              <Clock className="w-5 h-5 text-neon-purple" />
              <div className="text-left">
                <p className="text-white font-bold">7 Days</p>
                <p className="text-gray-500 text-xs">To Launch</p>
              </div>
            </div>
            <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3">
              <Users className="w-5 h-5 text-neon-blue" />
              <div className="text-left">
                <p className="text-white font-bold">2,500+</p>
                <p className="text-gray-500 text-xs">Entrepreneurs</p>
              </div>
            </div>
            <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-500" />
              <div className="text-left">
                <p className="text-white font-bold">94%</p>
                <p className="text-gray-500 text-xs">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mb-8">
            <button className="btn-neon text-xl px-12 py-5 flex items-center gap-3 mx-auto group">
              <Rocket className="w-6 h-6 group-hover:animate-bounce" />
              Get Instant Access Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-neon-purple" />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-neon-blue" />
              <span>Lifetime Access</span>
            </div>
          </div>

          {/* Urgency Note */}
          <div className="mt-10 glass-card rounded-2xl p-6 border-yellow-500/20">
            <p className="text-yellow-400 font-medium mb-2">
              ⚡ Limited Time: Pro Plan at RM59 (Save RM20)
            </p>
            <p className="text-gray-400 text-sm">
              Price increases to RM79 soon. Lock in your discount today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
