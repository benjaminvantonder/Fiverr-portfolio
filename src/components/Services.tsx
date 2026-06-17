import { Layout, Smartphone, Rocket, Palette, Search, Lock } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Custom Website Design',
    description: 'I build custom-designed sites tailored to your brand and industry — not templates. Each layout is built from scratch to guide visitors toward a call-to-action, whether that\'s calling you or filling out a form.',
    style: 'square',
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive Development',
    description: 'Over 60% of web traffic comes from mobile devices. I develop sites that look and function perfectly on every screen size — from smartphones to desktops — tested across real devices and browsers.',
    style: 'circle',
  },
  {
    icon: Rocket,
    title: 'Lightning-Fast Performance',
    description: 'I use static site generation so your site loads in under a second. No database queries, no server processing — just pre-built pages served instantly. This improves user experience and search rankings directly.',
    style: 'square',
  },
  {
    icon: Palette,
    title: 'Clean UI/UX Design',
    description: 'Great design is about clarity and intent. I focus on typography, spacing, color, and hierarchy to create intuitive interfaces that naturally guide visitors to take action — whether that\'s calling you or filling out a form.',
    style: 'circle',
  },
  {
    icon: Search,
    title: 'Local SEO Optimization',
    description: 'I build with semantic HTML, proper heading structure, fast load times, and mobile responsiveness — the technical foundations that help search engines rank your site for local searches in your service area.',
    style: 'square',
  },
  {
    icon: Lock,
    title: 'Secure & Reliable Hosting',
    description: 'Static websites are inherently secure — no database, no server-side code to exploit. I include HTTPS, reliable cloud hosting, and automatic backups. Your site stays up, stays fast, and stays safe.',
    style: 'circle',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What I Do
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Straightforward web development services for local businesses that need a real online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isCircle = service.style === 'circle';
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300 ${isCircle ? 'text-center' : ''}`}
                >
                  <div className={`w-14 h-14 bg-emerald-100 flex items-center justify-center mb-6 ${isCircle ? 'rounded-full mx-auto' : 'rounded-lg'}`}>
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
        </div>
      </div>
    </section>
  );
}
