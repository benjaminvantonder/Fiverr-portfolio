import { MessageSquare, Pencil, Code, TestTube, Rocket, Wrench } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery & Consultation',
      description: 'We start with a detailed conversation about your business, goals, target audience, and vision. I ask questions to understand not just what you want, but why you want it and how it fits into your broader business strategy. This phase is crucial—it ensures we\'re aligned and sets the foundation for a successful project.'
    },
    {
      icon: Pencil,
      title: 'Planning & Design',
      description: 'Based on our consultation, I create a detailed plan including site structure, design mockups, and a clear timeline. You\'ll see exactly what your website will look like before I write a single line of code. This collaborative phase allows for feedback and revisions, ensuring the final design perfectly matches your vision and brand identity.'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'This is where the magic happens. I transform designs into a fully functional website using React and TypeScript. Every component is built with performance, accessibility, and maintainability in mind. I follow industry best practices and write clean, well-documented code that will serve you well into the future.'
    },
    {
      icon: TestTube,
      title: 'Testing & Quality Assurance',
      description: 'Before launch, I rigorously test your website across multiple browsers, devices, and screen sizes. I check for broken links, test forms and interactions, validate performance metrics, and ensure everything works flawlessly. This thorough testing phase catches issues before they reach your customers.'
    },
    {
      icon: Rocket,
      title: 'Launch & Deployment',
      description: 'Once everything is perfect, I deploy your website to reliable, fast hosting infrastructure. I handle all the technical details including domain configuration, SSL certificates, and performance optimization. Your website goes live smoothly, with minimal downtime and maximum impact.'
    },
    {
      icon: Wrench,
      title: 'Ongoing Support',
      description: 'After launch, I\'m still here for you. Need to update content? Want to add a new section? I offer hosting services and minor alterations through Fiverr and other platforms. Your website isn\'t a one-time purchase—it\'s an ongoing partnership where I help keep your digital presence fresh and effective.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              My Development Process
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven, transparent workflow that ensures your project is delivered on time, on budget, and exceeds expectations
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

          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why This Process Works
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-3 text-emerald-400">Transparency</h4>
                <p className="text-slate-300 leading-relaxed mb-6">
                  You're never left wondering what's happening with your project. I maintain clear communication throughout the entire process, providing regular updates and always being available to answer questions. You'll know exactly what stage we're at, what's next, and when to expect deliverables.
                </p>
                <h4 className="text-xl font-bold mb-3 text-emerald-400">Collaboration</h4>
                <p className="text-slate-300 leading-relaxed">
                  This is your website, and your input is invaluable. I involve you at key decision points, seek your feedback on designs and functionality, and ensure the final product truly represents your vision. The best websites come from collaboration between business expertise and technical skill.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-emerald-400">Flexibility</h4>
                <p className="text-slate-300 leading-relaxed mb-6">
                  While I follow a structured process, I understand that business needs can change. Maybe you discover new requirements, or your market shifts mid-project. I'm flexible and can adapt the plan while still delivering on time and within budget. Your success is my priority.
                </p>
                <h4 className="text-xl font-bold mb-3 text-emerald-400">Quality Assurance</h4>
                <p className="text-slate-300 leading-relaxed">
                  Every step includes built-in quality checks. From code reviews to cross-browser testing, I don't cut corners. You receive a polished, professional website that you can be proud to show your customers. Quality isn't an afterthought—it's embedded in every phase of the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
