import { Check, Shield, Clock, Wrench } from 'lucide-react';

const tiers = [
  {
    name: 'The Quick Fix',
    subtitle: 'One-Pager',
    priceZAR: 'R3,500 – R6,000',
    priceUSD: '$200 – $350',
    description: 'Perfect for replacing a "Coming Soon" page or getting a solo trader online fast',
    features: [
      'Single-page landing site',
      'Contact form & Google Maps',
      'Mobile optimized',
      'Basic SEO setup',
      'Fast static hosting',
    ],
  },
  {
    name: 'Standard Business Site',
    subtitle: '3–6 Pages',
    priceZAR: 'R7,500 – R15,000',
    priceUSD: '$400 – $800',
    description: 'A proper business website for contractors, trades, and local service businesses',
    features: [
      'Home, About, Services, Gallery, Contact',
      'Mobile-responsive design',
      'On-page SEO optimization',
      'Social media integration',
      'Contact forms & lead capture',
      'Performance optimized',
    ],
    popular: true,
  },
  {
    name: 'Growth Premium',
    subtitle: '7+ Pages',
    priceZAR: 'R18,000 – R30,000+',
    priceUSD: '$1,000 – $1,600+',
    description: 'Full digital presence with advanced local targeting and booking integration',
    features: [
      'Service area pages',
      'Advanced local SEO',
      'Booking/scheduling integration',
      'Custom animations & interactions',
      'Analytics integration',
      'Priority support & maintenance',
    ],
  },
];

const plans = [
  {
    name: 'Foot in the Door',
    setup: 'R2,500',
    monthly: 'R450/month',
    contract: '12-month',
    description: 'Low upfront cost with predictable monthly payments. Great for businesses burned by previous devs or hesitant about a large lump sum.',
  },
  {
    name: 'Value-Based',
    tag: 'Sell Leads, Not Pages',
    description: 'If your average job is R2,000 and this site brings 3 new clients a month, it pays for itself in 30 days. Everything after is pure profit.',
  },
  {
    name: 'We Do Everything',
    tag: 'Fully Turnkey',
    description: 'Domain registration, SSL, hosting, copywriting, local SEO (Google Business Profile), and monthly updates — all handled. You focus on your business.',
  },
];

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
              Flat-rate project pricing for South African small businesses. No hourly billing, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border-2 ${
                  tier.popular
                    ? 'border-emerald-500 shadow-xl scale-105 bg-gradient-to-br from-emerald-50 to-cyan-50'
                    : 'border-slate-200 bg-white'
                } transition-all duration-300 hover:shadow-xl relative`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{tier.name}</h3>
                  <p className="text-sm text-emerald-600 font-semibold mb-3">{tier.subtitle}</p>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">{tier.priceZAR}</div>
                  <div className="text-sm text-slate-500 mb-3">{tier.priceUSD}</div>
                  <p className="text-slate-600 text-sm">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-slate-200 text-slate-900 hover:bg-slate-300'
                  }`}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-lg mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              How to Work With Me
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                  {plan.tag && (
                    <p className="text-sm font-semibold text-emerald-600 mb-3">{plan.tag}</p>
                  )}
                  {plan.setup && (
                    <div className="mb-3">
                      <span className="text-2xl font-bold text-emerald-600">{plan.setup}</span>
                      <span className="text-slate-600 text-sm"> setup + </span>
                      <span className="text-xl font-bold text-emerald-600">{plan.monthly}</span>
                      <div className="text-xs text-slate-500">({plan.contract} contract)</div>
                    </div>
                  )}
                  <p className="text-slate-600 leading-relaxed">{plan.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Monthly Care Plan
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Every website comes with the option of a monthly maintenance plan. 
                  <span className="text-emerald-400 font-semibold block mt-2 text-2xl">R350 – R750 / month</span>
                  <span className="text-sm text-slate-400">($20 – $40)</span>
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Get 10–15 clients on this plan and your hosting, software, and basic expenses are covered. 
                  You don't even need to write code each month.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Cloud Hosting & SSL</h4>
                      <p className="text-sm text-slate-400">Fast hosting with automatic SSL renewal and CDN</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">1 Hour of Updates</h4>
                      <p className="text-sm text-slate-400">Text changes, image swaps, minor content updates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Security & Backups</h4>
                      <p className="text-sm text-slate-400">Monthly security updates and automated backups</p>
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
