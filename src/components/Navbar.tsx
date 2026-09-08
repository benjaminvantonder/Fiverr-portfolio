import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Code2, ArrowRight } from "lucide-react";
import { useStore } from "../store/useStore";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overlay = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        overlay
          ? "bg-transparent border-b border-transparent"
          : "bg-[var(--nav-bg)] backdrop-blur-xl border-b border-boundary shadow-sm"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-105 group-hover:rotate-3 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span
                className={`block text-base md:text-lg font-bold tracking-tight transition-colors ${
                  overlay ? "text-white" : "text-foreground"
                }`}
              >
                Benjamin <span className="text-accent">van Tonder</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-accent font-medium">
                Web Developer
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : overlay
                        ? "text-white/70 hover:text-white hover:bg-white/10"
                        : "text-foreground-muted hover:text-foreground hover:bg-surface-alt"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                overlay
                  ? "border-white/20 text-white/80 hover:text-white hover:border-white/40"
                  : "border-boundary text-foreground-muted hover:text-accent hover:border-accent/40 bg-surface-card"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-accent text-slate-900 dark:text-white text-sm font-semibold btn-shimmer shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-shadow"
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className={`lg:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                overlay
                  ? "border-white/20 text-white"
                  : "border-boundary text-foreground bg-surface-card"
              }`}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="lg:hidden overflow-hidden bg-[var(--nav-bg)] backdrop-blur-xl border-b border-boundary"
          >
            <motion.div className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-accent/10 text-accent"
                          : "text-foreground-muted hover:text-foreground hover:bg-surface-alt"
                      }`
                    }
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.25 }}
                className="pt-3"
              >
                <Link
                  to="/contact"
                  className="block text-center px-5 py-3 rounded-xl bg-accent text-slate-900 dark:text-white text-sm font-semibold btn-shimmer"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}