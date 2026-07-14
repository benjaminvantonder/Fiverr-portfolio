import { motion } from "framer-motion";
import { MessageSquare, Pencil, Code, TestTube, Rocket, Wrench } from 'lucide-react';
import StarfieldBackground from "./StarfieldBackground";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery Call',
    description: 'I start by understanding your business and who you want to reach — whether you\'re a contractor needing more quote requests, a local shop wanting foot traffic, or a service business that needs phone calls. I ask the questions that make sure the site drives real results for you.'
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
    <section id="process" className="relative py-28 bg-surface">
      <StarfieldBackground count={600} color="#34d399" speed={0.02} opacity={0.3} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-foreground-muted mb-4 block font-medium">
              Process
            </span>
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              How It Works
            </motion.h2>
            <motion.p
              className="text-lg text-foreground-muted max-w-2xl mx-auto mt-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A straightforward process from start to launch
            </motion.p>
          </motion.div>

          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 rounded-xl p-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0 mt-0.5">
                !
              </div>
              <div>
                <h4 className="font-bold text-emerald-800 dark:text-emerald-300 text-lg mb-1">
                  Fast turnaround
                </h4>
                <p className="text-emerald-700 dark:text-emerald-300/80 leading-relaxed">
                  I send 2–3 design directions &rarr; you pick one &rarr; I
                  build and refine &rarr; it&rsquo;s live in 5–7 days. No
                  lengthy process, just a fast turnaround for your new
                  website.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="relative space-y-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-emerald-200" />
            <motion.div
              className="hidden md:block absolute left-8 top-8 w-px bg-emerald-500"
              initial={{ height: 0 }}
              whileInView={{ height: "calc(100% - 64px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            />
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="flex flex-col md:flex-row gap-6 bg-surface-alt rounded-xl p-8 border border-boundary hover:border-emerald-500 transition-colors relative"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/20">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start gap-4 mb-4">
                      <Icon className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-foreground-muted leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
