import { motion } from "framer-motion";
import { Code2, Heart } from 'lucide-react';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div variants={itemVariants}>
              <motion.div
                className="flex items-center space-x-2 mb-4"
                whileHover={{ x: 3 }}
              >
                <Code2 className="w-8 h-8 text-emerald-400" />
                <span className="text-2xl font-bold">Benjamin van Tonder</span>
              </motion.div>
              <p className="text-slate-400 leading-relaxed">
                Building fast, modern websites for local service businesses in South Africa.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Recent Work", "About", "Services", "Portfolio", "Testimonials", "Pricing", "Contact"].map((link) => {
                  const href = "#" + link.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <li key={link}>
                      <motion.a
                        href={href}
                        className="text-slate-400 hover:text-emerald-400 transition-colors inline-block"
                        whileHover={{ x: 4, color: "#34d399" }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {["Custom Website Design", "Responsive Development", "Local SEO", "Website Hosting", "Monthly Maintenance"].map((s) => (
                  <li key={s} className="text-slate-400">{s}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            variants={itemVariants}
          >
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Benjamin van Tonder. All rights reserved.
            </p>
            <motion.p
              className="text-slate-400 text-sm flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
            >
              Built with years of experience and care for South Africa <Heart className="w-4 h-4 text-red-500" />
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
