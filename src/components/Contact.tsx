import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, Github } from "lucide-react";
import StarfieldBackground from "./StarfieldBackground";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const contactItemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.1 * i, ease: [0.25, 0.1, 0.25, 1] } }),
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    package: "Business Website (R3,500)",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const SendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { name, email, business, package: pkg, message } = formData;

    const phoneNumber = "27766395871";

    const text = encodeURIComponent(
      `Hi Benjamin! My name is ${name}.
Email: ${email}
Business: ${business || "N/A"}
Interested in: ${pkg}
Message: ${message}`
    );

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappURL = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${text}`
      : `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="relative py-28 bg-surface">
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
              Contact
            </span>
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Let&rsquo;s Talk
            </motion.h2>
            <motion.p
              className="text-lg text-foreground-muted max-w-2xl mx-auto mt-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Have a project in mind? Send me a message and I'll get back to you within 24 hours.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={reveal}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                Whether you're a local tradesperson needing your first website or an established business looking for an upgrade, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", content: <a href="mailto:vantonderbenna@gmail.com" className="text-accent hover:text-emerald-700">vantonderbenna@gmail.com</a> },
                  { icon: MapPin, title: "Location", content: <p className="text-foreground-muted">South Africa — based locally, working with South African small businesses.</p> },
                  { icon: Clock, title: "Response Time", content: <p className="text-foreground-muted">Typically within 24 hours</p> },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4"
                      variants={contactItemVariants}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                        {item.content}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="mt-8 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-900/30"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -2 }}
              >
                <h4 className="font-bold text-foreground mb-3">Check My Work</h4>
                <p className="text-foreground-muted mb-4">
                  All my projects are open-source on GitHub. Browse the code, see what I'm building, and get a sense of my style.
                </p>
                <motion.a
                  href="https://github.com/benjaminvantonder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-emerald-700 font-semibold inline-flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  <Github className="w-5 h-5" />
                  github.com/benjaminvantonder
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-surface rounded-2xl p-8 border border-boundary shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send Me a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground-muted mb-2"
                  >
                    Your Name
                  </label>
                  <motion.div animate={focusedField === "name" ? { scale: 1.01 } : { scale: 1 }}>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-surface-card border border-boundary rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </motion.div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground-muted mb-2"
                  >
                    Email Address
                  </label>
                  <motion.div animate={focusedField === "email" ? { scale: 1.01 } : { scale: 1 }}>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-surface-card border border-boundary rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="block text-sm font-semibold text-foreground-muted mb-2"
                  >
                    Business/Company (Optional)
                  </label>
                  <motion.div animate={focusedField === "business" ? { scale: 1.01 } : { scale: 1 }}>
                    <input
                      type="text"
                      id="business"
                      value={formData.business}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("business")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-surface-card border border-boundary rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="Your Company Name"
                    />
                  </motion.div>
                </div>

                <div>
                  <label
                    htmlFor="package"
                    className="block text-sm font-semibold text-foreground-muted mb-2"
                  >
                    Interested In
                  </label>
                  <motion.div animate={focusedField === "package" ? { scale: 1.01 } : { scale: 1 }}>
                    <select
                      id="package"
                      value={formData.package}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("package")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-surface-card border border-boundary rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    >
                      <option>Business Website (R3,500)</option>
                      <option>Monthly Care Plan</option>
                      <option>Just Have Questions</option>
                    </select>
                  </motion.div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground-muted mb-2"
                  >
                    Tell Me About Your Project
                  </label>
                  <motion.div animate={focusedField === "message" ? { scale: 1.01 } : { scale: 1 }}>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-surface-card border border-boundary rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                      placeholder="What kind of site do you need? What are your goals? Any specific features or pages in mind?"
                    ></textarea>
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  onClick={SendMessage}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send via WhatsApp
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
