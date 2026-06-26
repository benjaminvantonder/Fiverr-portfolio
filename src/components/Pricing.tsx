import { Shield, Clock, Wrench } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Pricing
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              One flat rate. No hourly billing, no surprises.
            </p>
          </div>

          <div className="max-w-lg mx-auto mb-12">
            <div className="rounded-2xl p-8 border-2 border-emerald-500 shadow-lg bg-emerald-50 transition-shadow duration-300 hover:shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                One Price
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  Business Website
                </h3>
                <p className="text-sm text-emerald-600 font-semibold mb-3">
                  4 Pages
                </p>
                <div className="text-4xl font-bold text-emerald-600 mb-1">
                  R3,500
                </div>
                <p className="text-slate-600 text-sm mt-3">
                  A proper business website for contractors, trades, and local
                  service businesses — built and live fast.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Home, About, Services & Contact pages",
                  "Mobile-responsive design",
                  "On-page SEO optimization",
                  "Social media integration",
                  "Contact forms & lead capture",
                  "Performance optimized",
                  "Fast static hosting",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2.5"></span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center py-3 rounded-lg font-semibold transition-colors bg-emerald-500 text-white hover:bg-emerald-600"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full">
                Add-On
              </span>
              <h3 className="text-2xl md:text-3xl font-bold">
                Monthly Care Plan
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Add ongoing maintenance to your website. Your site stays
                  updated, secure, and backed up.
                  <span className="text-emerald-400 font-semibold block mt-2 text-2xl">
                    R350 – R750 / month
                  </span>
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">
                        Cloud Hosting & SSL
                      </h4>
                      <p className="text-sm text-slate-400">
                        Fast hosting with automatic SSL renewal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">
                        1 Hour of Updates
                      </h4>
                      <p className="text-sm text-slate-400">
                        Text changes, image swaps, minor updates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">
                        Security & Backups
                      </h4>
                      <p className="text-sm text-slate-400">
                        Monthly security updates and automated backups
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
