import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: 'Starter',
      price: '$5',
      description: 'Perfect for individuals and small businesses just getting started online',
      features: [
        'Single-page website',
        'Mobile-responsive design',
        'Contact form integration',
        'Basic SEO optimization',
        'Fast loading times',
        'Up to 3 sections',
        '1 revision included'
      ],
      ideal: 'Ideal for personal portfolios, landing pages, or simple business sites'
    },
    {
      name: 'Professional',
      price: 'Custom',
      description: 'Comprehensive solution for established businesses needing a strong digital presence',
      features: [
        'Multi-page website (up to 5 pages)',
        'Advanced responsive design',
        'Custom UI/UX design',
        'Advanced SEO optimization',
        'Contact forms & integrations',
        'Social media integration',
        'Performance optimization',
        'Up to 5 revisions included',
        '30 days post-launch support'
      ],
      popular: true,
      ideal: 'Perfect for small to medium businesses, service providers, and professional portfolios'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Premium solution for businesses requiring extensive functionality and customization',
      features: [
        'Unlimited pages',
        'Completely custom design',
        'Advanced animations & interactions',
        'E-commerce integration ready',
        'Third-party API integration',
        'Comprehensive SEO strategy',
        'Analytics integration',
        'Priority support',
        'Unlimited revisions during development',
        '60 days post-launch support'
      ],
      ideal: 'Built for growing businesses, e-commerce stores, and companies with specific requirements'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Transparent Pricing
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Affordable packages designed to fit different budgets and requirements. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border-2 ${
                  pkg.popular
                    ? 'border-emerald-500 shadow-xl scale-105 bg-gradient-to-br from-emerald-50 to-cyan-50'
                    : 'border-slate-200 bg-white'
                } transition-all duration-300 hover:shadow-xl relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-slate-600 text-sm">
                    {pkg.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-slate-600 font-medium">
                    {pkg.ideal}
                  </p>
                </div>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-slate-200 text-slate-900 hover:bg-slate-300'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              Understanding the Investment
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Why Start at Just $5?</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  I believe every business deserves a professional online presence, regardless of budget. Starting at $5 for a simple site allows me to help those just beginning their journey while demonstrating my skills and building my reputation. As I gain more testimonials and expand my portfolio, I plan to introduce additional package tiers that reflect the growing value and experience I bring.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This starter pricing isn't about compromising on quality—every website, regardless of price, receives the same attention to detail, clean code, and professional design. It's about making web development accessible while I establish myself in the market.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">What "Custom" Pricing Means</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  For Professional and Enterprise packages, pricing is custom because every project is unique. A five-page site with basic information costs differently than one with complex integrations, animations, or custom functionality. During our initial consultation, I'll provide a detailed, transparent quote based on your specific requirements.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Custom pricing ensures you only pay for what you need. I break down costs clearly, explain what each component involves, and work within your budget to deliver maximum value. No surprise fees, no hidden charges—just honest, straightforward pricing.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Additional Services & Ongoing Support
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-emerald-400 mb-4">Hosting Services</h4>
                <p className="text-slate-300 leading-relaxed mb-6">
                  I provide reliable, fast hosting for your website. No need to worry about technical setup, server configuration, or maintenance. Your site will be hosted on high-performance infrastructure with guaranteed uptime, automatic backups, and SSL security included. Hosting fees are affordable and transparent.
                </p>
                <h4 className="text-xl font-bold text-emerald-400 mb-4">Minor Alterations & Updates</h4>
                <p className="text-slate-300 leading-relaxed">
                  Need to change some text? Update contact information? Swap out an image? I offer minor alterations and updates through platforms like Fiverr. These small changes are quick, affordable, and ensure your website stays current without requiring you to learn code or hire expensive developers for simple tasks.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-400 mb-4">Future Package Expansion</h4>
                <p className="text-slate-300 leading-relaxed mb-6">
                  As I build my reputation and gain more experience, I plan to introduce additional specialized packages. These might include ongoing maintenance plans, SEO optimization services, content updates, or performance monitoring. Early clients will receive preferential rates on these future services as a thank you for their trust and support.
                </p>
                <h4 className="text-xl font-bold text-emerald-400 mb-4">Long-Term Partnership</h4>
                <p className="text-slate-300 leading-relaxed">
                  I view client relationships as long-term partnerships, not one-time transactions. As your business grows, your website can grow with it. Whether you need new features, additional pages, or a complete redesign down the road, I'm here to support your evolving needs with the same dedication and quality you received initially.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
