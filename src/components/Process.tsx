import { MessageSquare, Pencil, Code, TestTube, Rocket, Wrench } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery Call',
    description: 'We talk about your business, your goals, and who you want to reach. I ask questions to understand what success looks like for you — more calls? More quote requests? A stronger local presence?'
  },
  {
    icon: Pencil,
    title: 'Planning & Design',
    description: 'I map out your site structure and design mockups. You\'ll see exactly what your site will look like before I write code. You give feedback, I refine, and we lock in the design.'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'I build your site using React and TypeScript — component-based, fast, and maintainable. Every piece is crafted with performance and accessibility in mind.'
  },
  {
    icon: TestTube,
    title: 'Testing',
    description: 'I test across browsers, devices, and screen sizes. Forms are checked, links are verified, load times are measured. Everything works before you see it.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'I deploy your site to fast, secure hosting. Domain setup, SSL certificates, performance tuning — all handled. Your site goes live without hassle.'
  },
  {
    icon: Wrench,
    title: 'Ongoing Support',
    description: 'Your site is live but that\'s not the end. I offer monthly maintenance plans for updates, backups, and peace of mind. Your website grows with your business.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A straightforward process from start to launch
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-emerald-500 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start gap-4 mb-4">
                      <Icon className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
