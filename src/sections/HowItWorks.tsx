import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Copy, Bot, Rocket, ArrowRight, Check } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Copy,
    title: "Copy the Prompt",
    description: "Browse our vault of 100+ proven AI prompts, each crafted by business experts and copywriting professionals.",
    features: ["100+ ready-to-use prompts", "Organized by business stage", "Copy with one click"],
  },
  {
    number: "02",
    icon: Bot,
    title: "Paste Into Any AI Model",
    description: "Works with ChatGPT, Claude, Gemini, or any AI tool you prefer. No special software needed.",
    features: ["ChatGPT compatible", "Claude & Gemini ready", "No tech skills required"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Generate Your Business System",
    description: "Watch as AI generates complete business documents, strategies, and content tailored to your goals.",
    features: ["Instant results", "Fully customizable", "Professional quality"],
  },
];

export function HowItWorks() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const stepsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-neon-blue">⚡</span>
            <span className="text-sm font-medium text-gray-300">Simple 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            3 Steps to <span className="gradient-text">Launch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No complicated setup. No learning curve. Just copy, paste, and launch.
          </p>
        </div>

        {/* Steps */}
        <div 
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger"
        >
          {steps.map((step, index) => (
            <div key={index} className="relative reveal-item">
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5">
                  <div className="w-full h-full bg-gradient-to-r from-neon-purple/50 to-neon-blue/50" />
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-neon-blue" />
                </div>
              )}

              {/* Step Card */}
              <div className="glass-card rounded-3xl p-8 h-full group hover:border-neon-purple/40 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-2 w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-neon-purple" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {step.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-neon-blue flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-300 text-sm">
              Average time to first business plan: <span className="text-white font-semibold">Under 5 minutes</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
