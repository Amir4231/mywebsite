import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Puzzle, 
  FileText, 
  Target, 
  DollarSign, 
  Palette, 
  Smartphone, 
  Megaphone, 
  Package, 
  Calendar, 
  TrendingUp 
} from 'lucide-react';

const features = [
  {
    icon: Puzzle,
    title: "Business Idea Generator",
    description: "Turn any passion into a profitable business concept with AI-powered ideation.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FileText,
    title: "Complete Business Plan Creator",
    description: "Generate professional business plans with financial projections in minutes.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Target Audience Analyzer",
    description: "Identify your ideal customers, their pain points, and where to find them.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: DollarSign,
    title: "Pricing Strategy Builder",
    description: "Set optimal prices that maximize profit while staying competitive.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Palette,
    title: "Brand Name & Identity Creator",
    description: "Create memorable brand names, logos concepts, and visual guidelines.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Smartphone,
    title: "Social Media Content Generator",
    description: "Never run out of content ideas with AI-generated posts for all platforms.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Megaphone,
    title: "Ad Copy Generator",
    description: "Write high-converting ad copy that drives clicks and sales.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Package,
    title: "Product Description Generator",
    description: "Create compelling product descriptions that convert browsers into buyers.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "30-Day Content Calendar",
    description: "Get a complete month of content planned and ready to execute.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy Planner",
    description: "Map out your path from launch to sustainable growth and scaling.",
    color: "from-cyan-500 to-blue-500",
  },
];

export function Features() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-neon-purple">✨</span>
            <span className="text-sm font-medium text-gray-300">10 Powerful AI Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Inside <span className="gradient-text">The Prompt Vault</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to launch, brand, and grow your business — 
            all powered by cutting-edge AI prompts.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 reveal-stagger"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-5 reveal-item group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-neon-purple transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Plus exclusive bonuses worth <span className="text-neon-purple font-semibold">RM500+</span>
          </p>
          <button className="btn-neon">
            Unlock All Features
          </button>
        </div>
      </div>
    </section>
  );
}
