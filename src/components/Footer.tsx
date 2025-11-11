import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="w-8 h-8 text-emerald-400" />
                <span className="text-2xl font-bold">BvT Dev</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Professional web development services for businesses worldwide. Building fast, responsive, and beautiful websites.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-slate-400 hover:text-emerald-400 transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-slate-400 hover:text-emerald-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-slate-400">Static Website Development</li>
                <li className="text-slate-400">Responsive Design</li>
                <li className="text-slate-400">SEO Optimization</li>
                <li className="text-slate-400">Website Hosting</li>
                <li className="text-slate-400">Maintenance & Updates</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Benjamin van Tonder. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
