import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, X, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    subtitle: "Prompt Pack",
    price: "39",
    period: "RM",
    description: "Perfect for getting started with AI-powered business creation",
    icon: Zap,
    features: [
      { text: "50+ Core Business Prompts", included: true },
      { text: "Business Idea Generator", included: true },
      { text: "Basic Business Plan Template", included: true },
      { text: "Brand Name Generator", included: true },
      { text: "Social Media Content Pack", included: false },
      { text: "Ad Copy Generator", included: false },
      { text: "30-Day Content Calendar", included: false },
      { text: "Video Tutorial Guide", included: false },
      { text: "Bonus Niche Prompts", included: false },
      { text: "Priority Support", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    subtitle: "Prompt + Tutorial Guide",
    price: "59",
    period: "RM",
    description: "The complete system for serious entrepreneurs ready to launch",
    icon: Star,
    features: [
      { text: "100+ Premium Business Prompts", included: true },
      { text: "Business Idea Generator", included: true },
      { text: "Complete Business Plan Creator", included: true },
      { text: "Brand Identity Creator", included: true },
      { text: "Social Media Content Generator", included: true },
      { text: "Ad Copy Generator", included: true },
      { text: "30-Day Content Calendar", included: true },
      { text: "Step-by-Step Video Tutorial", included: true },
      { text: "Bonus Niche Prompts", included: false },
      { text: "Priority Support", included: false },
    ],
    cta: "Get Pro Access",
    popular: true,
  },
  {
    name: "Elite",
    subtitle: "Full Suite + Bonuses",
    price: "79",
    period: "RM",
    description: "Everything you need plus exclusive bonuses for rapid growth",
    icon: Crown,
    features: [
      { text: "150+ Ultimate Prompt Collection", included: true },
      { text: "Business Idea Generator", included: true },
      { text: "Complete Business Plan Creator", included: true },
      { text: "Full Brand Identity Suite", included: true },
      { text: "Social Media Content Generator", included: true },
      { text: "Ad Copy & Email Sequences", included: true },
      { text: "90-Day Content Calendar", included: true },
      { text: "Advanced Video Masterclass", included: true },
      { text: "20 Bonus Niche Prompt Packs", included: true },
      { text: "Priority 1-on-1 Support", included: true },
    ],
    cta: "Go Elite",
    popular: false,
  },
];

export function Pricing() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-neon-purple">💎</span>
            <span className="text-sm font-medium text-gray-300">Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your <span className="gradient-text">Launch Kit</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            One-time payment. Lifetime access. No subscriptions. 
            Start your business journey today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start reveal-stagger"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative reveal-item ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-neon-purple to-neon-blue text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card */}
              <div 
                className={`glass-card rounded-3xl p-6 lg:p-8 h-full flex flex-col ${
                  plan.popular 
                    ? 'featured-card border-neon-purple/50' 
                    : 'border-gray-700/50'
                }`}
              >
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-neon-purple to-neon-blue' 
                      : 'bg-gray-800'
                  }`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                    <span className={`text-4xl lg:text-5xl font-bold ${plan.popular ? 'gradient-text' : 'text-white'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">One-time payment</p>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm text-center mb-6">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                          <X className="w-3 h-3 text-gray-500" />
                        </div>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'btn-neon'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">7-Day Money Back Guarantee</p>
              <p className="text-gray-500 text-xs">Not satisfied? Get a full refund, no questions asked.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
