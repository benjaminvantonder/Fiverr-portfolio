import { useEffect, useRef } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { useStore } from "./store/useStore";
import CustomCursor from "./components/CustomCursor";
import EnhancedMouseGlow from "./components/EnhancedMouseGlow";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import RecentWork from "./components/RecentWork";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";


if (typeof history !== "undefined" && "scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
};

function Home() {
  const lenisRef = useRef<Lenis | null>(null);
  const theme = useStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const handleAnchor = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href && href.length > 1) {
          const el = document.querySelector(href);
          if (el) {
            if (lenisRef.current) {
              lenisRef.current.scrollTo(el, { offset: -80 });
            } else {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }
      }
    };
    document.addEventListener("click", handleAnchor);

    if (window.innerWidth < 768) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchor);
    };
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-surface text-foreground overflow-x-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <CustomCursor />
      <EnhancedMouseGlow />
      <ThemeToggle />
      <Hero />
      <RecentWork />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
