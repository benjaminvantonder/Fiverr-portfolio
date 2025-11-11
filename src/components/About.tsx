import { Award, BookOpen, Briefcase, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A passionate developer with a proven track record of delivering high-quality web solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Turning Vision Into Reality
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                My name is Benjamin van Tonder, and at 18 years old, I've already spent four years immersed in the world of programming and web development. What started as a curiosity about how websites work has evolved into a genuine passion and a thriving freelance business serving clients both locally and internationally.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Throughout my journey, I've worked with diverse clients ranging from small local businesses looking to establish their first online presence, to international companies seeking to enhance their digital footprint. This experience has taught me not just how to code, but how to truly understand business needs and translate them into effective web solutions.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                I specialize in creating static websites that load instantly, perform flawlessly across all devices, and are optimized for search engines. My approach combines modern development practices with a deep understanding of what makes websites not just look good, but actually work for businesses.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-emerald-500 transition-colors">
                <Briefcase className="w-10 h-10 text-emerald-500 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Professional Experience</h4>
                <p className="text-slate-600">4 years of hands-on development work with real clients and real projects</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-emerald-500 transition-colors">
                <BookOpen className="w-10 h-10 text-emerald-500 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Continuous Learning</h4>
                <p className="text-slate-600">Starting Computer Science studies next year to deepen technical expertise</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-emerald-500 transition-colors">
                <Target className="w-10 h-10 text-emerald-500 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Results-Driven</h4>
                <p className="text-slate-600">Every website is built with your business goals and user experience in mind</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-emerald-500 transition-colors">
                <Award className="w-10 h-10 text-emerald-500 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Quality Focused</h4>
                <p className="text-slate-600">Clean code, modern design, and attention to every detail</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-emerald-200">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Why Choose Me for Your Web Development Needs?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Technical Excellence</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  I build websites using React and TypeScript—industry-standard technologies trusted by companies like Facebook, Netflix, and Airbnb. This means your website is built on a solid foundation using the same tools that power the world's most successful digital platforms. My code is clean, maintainable, and follows best practices that ensure your website remains easy to update and scale as your business grows.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Every line of code I write is crafted with performance in mind. Static site generation ensures your website loads in milliseconds, not seconds. This isn't just about speed—it's about user experience, search engine rankings, and ultimately, your bottom line. Studies show that even a one-second delay in page load time can result in a 7% reduction in conversions.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Business Understanding</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  I don't just build websites; I build business solutions. Having worked with both local small businesses and international clients, I understand that different businesses have different needs. A local restaurant needs something completely different from an e-commerce startup or a consulting firm. I take the time to understand your specific goals, your target audience, and what success looks like for your business.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  My experience across diverse industries means I can bring insights and best practices from one sector to another, giving you the benefit of proven strategies. I focus on creating websites that don't just look professional, but actively work to achieve your business objectives—whether that's generating leads, showcasing your portfolio, or establishing credibility in your market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
