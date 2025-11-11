import { Layout, Smartphone, Rocket, Palette, Search, Lock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Layout,
      title: 'Custom Website Design',
      description: 'Every business is unique, and your website should reflect that. I create custom-designed websites tailored to your brand identity, industry requirements, and business goals. No templates, no cookie-cutter solutions—just a website that truly represents who you are and what you do. From color schemes that match your brand to layouts that guide visitors toward action, every design decision is intentional and strategic.'
    },
    {
      icon: Smartphone,
      title: 'Fully Responsive Development',
      description: 'With over 60% of web traffic coming from mobile devices, a mobile-friendly website isn\'t optional—it\'s essential. I develop websites that look stunning and function flawlessly on every device, from the smallest smartphone to the largest desktop monitor. Using responsive design principles and thorough testing across multiple devices, I ensure your visitors have a perfect experience regardless of how they access your site.'
    },
    {
      icon: Rocket,
      title: 'Lightning-Fast Performance',
      description: 'Speed is crucial. A slow website drives visitors away and hurts your search engine rankings. I specialize in static site generation, which means your website loads almost instantly—often in under a second. This is achieved through modern build processes that pre-generate your pages, optimize images, minimize code, and implement smart caching strategies. The result? A website that feels responsive, engaging, and professional.'
    },
    {
      icon: Palette,
      title: 'Modern UI/UX Design',
      description: 'Great design is more than just aesthetics—it\'s about creating intuitive experiences that guide visitors toward your goals. I craft user interfaces with careful attention to hierarchy, spacing, typography, and color psychology. Every element is positioned to naturally draw the eye and encourage interaction. I follow modern design trends while ensuring your website remains timeless and professional, not trendy and dated.'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'What good is a beautiful website if nobody can find it? I build every website with search engine optimization in mind from the ground up. This includes semantic HTML structure, optimized meta tags, proper heading hierarchy, fast load times, mobile responsiveness, and clean URLs. These technical foundations help search engines understand and rank your content, making it easier for potential customers to discover your business online.'
    },
    {
      icon: Lock,
      title: 'Secure & Reliable',
      description: 'Security and reliability are non-negotiable. Static websites are inherently more secure than traditional dynamic sites because there\'s no database to hack or server-side code to exploit. I implement HTTPS encryption, secure hosting practices, and follow security best practices to protect both you and your visitors. Your website will be dependable, secure, and always available when your customers need it.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Services I Provide
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive web development solutions designed to help your business succeed online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              What Makes My Websites Stand Out?
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Static Site Architecture</h4>
                <p className="text-slate-700 leading-relaxed">
                  I specialize in static websites, which might sound old-school, but it's actually the cutting-edge approach for modern web development. Static doesn't mean boring or limited—it means your website is pre-built and optimized, resulting in unbeatable speed, enhanced security, and lower hosting costs. This architecture is perfect for business websites, portfolios, landing pages, and marketing sites. The pages are generated once and served instantly to every visitor, eliminating server processing delays.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Built With React & TypeScript</h4>
                <p className="text-slate-700 leading-relaxed">
                  Using React means your website is built with components—reusable, modular pieces that make maintenance and updates straightforward. TypeScript adds an extra layer of reliability by catching errors during development, not after your website is live. This combination results in fewer bugs, easier maintenance, and a more robust final product. These aren't just buzzwords—they're proven technologies used by industry leaders that ensure your website is built to last and easy to expand as your business grows.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Hosting & Maintenance Support</h4>
                <p className="text-slate-700 leading-relaxed">
                  I don't just build your website and disappear. I provide hosting services and offer minor alterations and updates through platforms like Fiverr. This means you have ongoing support whenever you need small changes, content updates, or adjustments. Your website is a living part of your business, and I'm here to help it evolve with you. Whether you need to update contact information, add new content, or make seasonal changes, I'm just a message away.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Cross-Border Experience</h4>
                <p className="text-slate-700 leading-relaxed">
                  Working with both local and international clients has given me unique insights into different markets, cultural preferences, and business practices. I understand time zones, communication challenges, and the importance of clear documentation. Whether you're a local business down the street or an international company halfway around the world, I have the experience and professionalism to deliver exceptional results. I'm comfortable working remotely, communicating digitally, and managing projects efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
