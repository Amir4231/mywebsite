import { Sparkles, Mail, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-slate to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AI Launch Kit</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-4">
              Empowering entrepreneurs to launch successful businesses using the power of AI. 
              No experience needed — just follow the system.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-neon-purple/20 hover:text-neon-purple transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-neon-purple/20 hover:text-neon-purple transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-neon-purple/20 hover:text-neon-purple transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-neon-purple/20 hover:text-neon-purple transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'How It Works', 'Demo', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 text-sm hover:text-neon-purple transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {['Contact Us', 'Help Center', 'Terms of Service', 'Privacy Policy', 'Refund Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 text-sm hover:text-neon-purple transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 AI Business Launch Kit. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Made with 💜 for aspiring entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  );
}
