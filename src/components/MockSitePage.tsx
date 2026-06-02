import { useParams } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Star, Dumbbell, Coffee, Wrench, Quote, Users, Award, ChefHat, Heart, Shield, Zap, User } from "lucide-react";

const siteData: Record<string, {
  title: string;
  theme: string;
  heroGradient: string;
  heroIcon: React.ReactNode;
  heroDesc: string;
  sections: React.ReactNode[];
}> = {
  "bold-trades": {
    title: "Bold Trades",
    theme: "bg-amber-50",
    heroGradient: "from-amber-500 to-orange-600",
    heroIcon: <Wrench className="w-10 h-10" />,
    heroDesc: "Trusted contractor services for your home & business",
    sections: [
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { value: "12+", label: "Years Experience" },
              { value: "500+", label: "Projects Done" },
              { value: "98%", label: "Happy Clients" },
            ].map((stat, i) => (
              <div key={i} className="text-center py-8 bg-amber-50 rounded-2xl border border-amber-100">
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-1">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">What We Do</h2>
            <p className="text-lg text-slate-600">Reliable workmanship, every time</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Renovations", desc: "Full home renovations — kitchens, bathrooms, and living spaces", icon: Wrench },
              { name: "Plumbing", desc: "Expert plumbing installations, repairs, and maintenance", icon: Wrench },
              { name: "Electrical", desc: "Certified electrical work — wiring, fittings, and safety checks", icon: Zap },
              { name: "Painting", desc: "Interior and exterior painting with premium finishes", icon: Wrench },
              { name: "Carpentry", desc: "Custom carpentry — built-in cabinets, decks, and furniture", icon: Wrench },
              { name: "Roofing", desc: "Roof repairs, replacements, and storm damage restoration", icon: Shield },
            ].map((service, i) => (
              <div key={i} className="bg-amber-50 rounded-xl p-6 text-center border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <service.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{service.name}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>,
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <Quote className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Sarah M.", text: "Transformed our kitchen beyond what we imagined. Professional, on time, and spotless work.", rating: 5 },
              { name: "James K.", text: "Had a leak emergency at 10pm — they arrived within an hour and fixed it. Absolute legends.", rating: 5 },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-amber-100 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{t.text}"</p>
                <p className="font-semibold text-slate-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>,
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 text-lg mb-3">Call us for a free, no-obligation estimate</p>
          <p className="text-slate-400 text-sm mb-8">We serve the greater Johannesburg area</p>
          <a href="tel:+27123456789" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-amber-500/20">
            <Phone className="w-5 h-5" /> (012) 345 6789
          </a>
        </div>
      </section>,
    ],
  },
  "bloom-cafe": {
    title: "Bloom Café",
    theme: "bg-rose-50",
    heroGradient: "from-rose-400 to-pink-600",
    heroIcon: <Coffee className="w-10 h-10" />,
    heroDesc: "Fresh brews & wholesome eats in the heart of town",
    sections: [
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-rose-500 text-sm font-semibold uppercase tracking-widest">Our Menu</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-3">Made Fresh, Served with Love</h2>
            <p className="text-lg text-slate-600">Everything we serve is made in-house from locally sourced ingredients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Artisan Coffee", desc: "Single-origin espresso, pour-over & cold brew", price: "R28–R45", icon: Coffee },
              { name: "Fresh Pastries", desc: "Baked daily — croissants, muffins & scones", price: "R18–R35", icon: ChefHat },
              { name: "Hearty Bowls", desc: "Sourdough toast, avo, eggs & seasonal greens", price: "R55–R75", icon: Heart },
            ].map((item, i) => (
              <div key={i} className="bg-rose-50 rounded-xl p-8 text-center border border-rose-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.name}</h3>
                <p className="text-rose-600 text-sm font-semibold mb-2">{item.price}</p>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>,
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-rose-500 text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">A Café Born from Passion</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Bloom Café started as a small dream between two friends who believed that great coffee and good food could bring a community together. Every drink we pour and every plate we serve reflects that belief.</p>
              <p className="text-slate-600 leading-relaxed">We source our beans from local roasters, our produce from nearby farms, and our inspiration from the people who walk through our door.</p>
            </div>
            <div className="bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl p-12 text-center">
              <Coffee className="w-16 h-16 text-rose-400 mx-auto mb-3" />
              <p className="text-rose-700 text-lg font-semibold">"Great coffee builds community"</p>
            </div>
          </div>
        </div>
      </section>,
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0" />
                <span>42 High Street, Town Centre</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Clock className="w-5 h-5 text-rose-500 shrink-0" />
                <span>Mon–Sat 7am–4pm • Sun 8am–2pm</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Phone className="w-5 h-5 text-rose-500 shrink-0" />
                <span>(012) 345 6789</span>
              </div>
            </div>
          </div>
        </div>
      </section>,
    ],
  },
  "pulse-studio": {
    title: "Pulse Studio",
    theme: "bg-violet-50",
    heroGradient: "from-violet-500 to-purple-700",
    heroIcon: <Dumbbell className="w-10 h-10" />,
    heroDesc: "Train harder. Go further. Feel stronger.",
    sections: [
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">Our Classes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-3">Something for Every Level</h2>
            <p className="text-lg text-slate-600">From beginners to seasoned athletes — find your flow</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "HIIT", desc: "High-intensity interval training to burn fat fast", time: "6:00 AM • 12:00 PM • 5:30 PM", level: "All Levels" },
              { name: "Yoga Flow", desc: "Flexibility, balance & mindful movement", time: "7:30 AM • 5:30 PM • 7:00 PM", level: "Beginner+" },
              { name: "Strength", desc: "Build muscle with guided resistance training", time: "8:00 AM • 4:00 PM • 6:30 PM", level: "Intermediate" },
            ].map((cls, i) => (
              <div key={i} className="bg-violet-50 rounded-2xl p-8 border border-violet-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-4">
                  <Dumbbell className="w-7 h-7 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{cls.name}</h3>
                <span className="inline-block text-xs font-semibold text-violet-600 bg-violet-100 px-2.5 py-0.5 rounded-full mb-3">{cls.level}</span>
                <p className="text-sm text-violet-600 font-medium mb-2">{cls.time}</p>
                <p className="text-slate-600 text-sm">{cls.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>,
      <section className="py-20 bg-violet-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Meet Our Trainers</h2>
            <p className="text-lg text-slate-600">Expert guidance every step of the way</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Thabo M.", role: "Head Coach — HIIT & Strength", bio: "10 years of coaching experience, certified strength and conditioning specialist" },
              { name: "Priya K.", role: "Yoga & Flexibility Coach", bio: "500hr RYT certified, specialising in vinyasa and restorative yoga" },
              { name: "James D.", role: "Nutrition & Wellness Advisor", bio: "Registered dietitian with a passion for sports nutrition and meal planning" },
            ].map((trainer, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-violet-100 text-center shadow-sm">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{trainer.name}</h3>
                <p className="text-violet-600 text-sm font-medium mb-2">{trainer.role}</p>
                <p className="text-slate-600 text-sm">{trainer.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>,
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-white/80 text-lg mb-3">First class is completely free — no strings attached</p>
          <p className="text-white/60 text-sm mb-8">Flexible memberships from R299/month</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27123456789" className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold px-8 py-4 rounded-xl text-lg transition-colors hover:bg-violet-50 shadow-lg">
              <Phone className="w-5 h-5" /> (012) 345 6789
            </a>
            <a href="mailto:hello@pulsestudio.co.za" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg border border-white/20 transition-colors">
              <Mail className="w-5 h-5" /> hello@pulsestudio.co.za
            </a>
          </div>
        </div>
      </section>,
    ],
  },
};

export default function MockSitePage() {
  const { siteId } = useParams();
  const site = siteId ? siteData[siteId] : undefined;

  if (!site) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Site not found</h1>
          <a href="#/" className="text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${site.theme} page-enter`}>
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#/" onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            window.location.hash = '#/';
            window.location.reload();
          }} className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </a>
          <span className="text-sm text-slate-500 font-medium">{site.title} — Mock Preview</span>
        </div>
      </div>

      <section className={`bg-gradient-to-br ${site.heroGradient} text-white py-24 md:py-32 overflow-hidden relative`}>
        <div className="blur-orb w-[500px] h-[500px] bg-white/15 top-0 -right-20"></div>
        <div className="blur-orb w-[400px] h-[400px] bg-white/10 -bottom-20 left-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              {site.heroIcon}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{site.title}</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">{site.heroDesc}</p>
          </div>
        </div>
      </section>

      {site.sections.map((section, i) => (
        <div key={i}>{section}</div>
      ))}

      <footer className="py-8 bg-slate-900 text-slate-400 text-center text-sm">
        <div className="container mx-auto px-6">
          <p>Mock preview — part of Benjamin van Tonder's portfolio</p>
        </div>
      </footer>
    </div>
  );
}
