import { useState } from "react";
import { Mail, MapPin, Clock, Send, Github } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    package: "Quick Fix (One-Pager)",
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
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Let's Talk
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Have a project in mind? Want a quote? Send me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Whether you're a local tradesperson needing your first website or an established business looking for an upgrade, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                    <a
                      href="mailto:vantonderbenna@gmail.com"
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      vantonderbenna@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                    <p className="text-slate-600">South Africa — serving local and international clients</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Response Time</h4>
                    <p className="text-slate-600">Typically within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl p-6 border border-emerald-200">
                <h4 className="font-bold text-slate-900 mb-3">Check My Work</h4>
                <p className="text-slate-700 mb-4">
                  All my projects are open-source on GitHub. Browse the code, see what I'm building, and get a sense of my style.
                </p>
                <a
                  href="https://github.com/benjaminvantonder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  github.com/benjaminvantonder
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Send Me a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Business/Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="package"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Interested In
                  </label>
                  <select
                    id="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  >
                    <option>Quick Fix (One-Pager)</option>
                    <option>Standard Business Site</option>
                    <option>Growth Premium Site</option>
                    <option>Monthly Care Plan</option>
                    <option>Just Have Questions</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Tell Me About Your Project
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                    placeholder="What kind of site do you need? What are your goals? Any specific features or pages in mind?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onClick={SendMessage}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  Send via WhatsApp
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
