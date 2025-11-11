import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    package: "Starter Package",
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

    // ✅ Your WhatsApp number (no "+" or spaces)
    const phoneNumber = "27766395871"; // Example for South Africa (+27)

    const text = encodeURIComponent(
      `Hello! My name is ${name}.
Email: ${email}
Business: ${business || "N/A"}
Interested in: ${pkg}
Message: ${message}`
    );

    // Detect mobile vs desktop
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
          {/* ===== Header Section ===== */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Let's Build Something Great Together
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to take your business online? Have questions about my
              services? I'd love to hear from you.
            </p>
          </div>

          {/* ===== Contact Info + Form ===== */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Info */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Whether you're a local business looking to establish your first
                website or an international company seeking a reliable
                developer, I'm here to help. Drop me a message and let's discuss
                how I can bring your vision to life.
              </p>

              <div className="space-y-6">
                {/* Email */}
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

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                    <p className="text-slate-600">
                      Available for local and international clients
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Response Time
                    </h4>
                    <p className="text-slate-600">Typically within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Fiverr Section */}
              <div className="mt-8 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl p-6 border border-emerald-200">
                <h4 className="font-bold text-slate-900 mb-3">
                  Find Me On Other Platforms
                </h4>
                <p className="text-slate-700 mb-4">
                  I'm also available on freelancing platforms like Fiverr for
                  quick projects and ongoing website maintenance.
                </p>
                <a
                  href="https://www.fiverr.com/s/R7KwNXL" // TODO: Replace with your Fiverr link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center gap-2"
                >
                  Connect on Fiverr
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Send Me a Message
              </h3>
              <form className="space-y-6">
                {/* Name */}
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

                {/* Email */}
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

                {/* Business */}
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

                {/* Package */}
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
                    <option>Starter Package</option>
                    <option>Professional Package</option>
                    <option>Enterprise Package</option>
                    <option>Just Have Questions</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                {/* WhatsApp Button */}
                <button
                  type="submit"
                  onClick={SendMessage}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  Send Message On WhatsApp
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* ===== Call-to-Action Section ===== */}
          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Don't let another day go by without a professional online
              presence. Whether you're starting from scratch or looking to
              upgrade, I'm here to help you succeed. Let's create something
              amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:vantonderbenna@gmail.com"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me Now
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
              >
                View Pricing Again
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
