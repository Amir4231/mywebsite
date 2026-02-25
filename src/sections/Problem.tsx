import { useScrollReveal } from '@/hooks/useScrollReveal';
import { X, Brain, Lightbulb, AlertTriangle, BookOpen, Wallet } from 'lucide-react';

const problems = [
  {
    icon: Lightbulb,
    text: "Don't know where to start",
  },
  {
    icon: Brain,
    text: "Overthinking business ideas",
  },
  {
    icon: AlertTriangle,
    text: "Scared of failure",
  },
  {
    icon: BookOpen,
    text: "No marketing knowledge",
  },
  {
    icon: Wallet,
    text: "Can't afford consultant",
  },
];

export function Problem() {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Most People <span className="gradient-text">Never Start</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            You've got the dream, but something keeps holding you back...
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 reveal-stagger"
        >
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 reveal-item group hover:border-red-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-lg">{problem.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Extra card for visual balance */}
          <div className="glass-card rounded-2xl p-6 reveal-item border-dashed border-2 border-gray-700 flex items-center justify-center">
            <p className="text-gray-500 text-center italic">Sound familiar?</p>
          </div>
        </div>

        {/* Punchline */}
        <div className="text-center">
          <div className="inline-block glass-card rounded-3xl px-8 sm:px-12 py-6 sm:py-8">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              You don't need <span className="text-gray-500 line-through">motivation</span>.
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
              You need a <span className="gradient-text">system</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
