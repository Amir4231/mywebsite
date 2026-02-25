import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, X, User, UserX, GraduationCap, Briefcase, Rocket, Clock, Users } from 'lucide-react';

const targetAudience = [
  { icon: GraduationCap, text: "Students" },
  { icon: Briefcase, text: "Side Hustlers" },
  { icon: Rocket, text: "Beginner Entrepreneurs" },
  { icon: Users, text: "Freelancers" },
  { icon: Clock, text: "People Stuck in 9-5" },
];

const notFor = [
  { icon: X, text: "People who want to be overnight millionaires" },
  { icon: X, text: "People who don't take action" },
];

export function Audience() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Is This <span className="gradient-text">For You?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's be honest about who this will help — and who it won't.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Who It's For */}
          <div className="glass-card rounded-3xl p-8 border-green-500/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Who Is This For?</h3>
                <p className="text-green-400 text-sm">Perfect match for you</p>
              </div>
            </div>

            <ul className="space-y-4">
              {targetAudience.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/10 hover:border-green-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <p className="text-green-300 text-sm text-center">
                If you're ready to take action and build something real, 
                this is designed specifically for you.
              </p>
            </div>
          </div>

          {/* Who It's NOT For */}
          <div className="glass-card rounded-3xl p-8 border-red-500/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                <UserX className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Who Is This NOT For?</h3>
                <p className="text-red-400 text-sm">Save your money if...</p>
              </div>
            </div>

            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-gray-300 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-red-300 text-sm text-center">
                This isn't a magic pill. It requires effort and commitment. 
                If you're not willing to put in the work, please don't buy.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <div className="inline-block glass-card rounded-2xl px-8 py-6">
            <p className="text-xl text-white font-medium mb-2">
              Still reading? You're probably one of us.
            </p>
            <p className="text-gray-400">
              Action-takers. Dreamers who do. People who refuse to settle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
