import { useEffect, useRef } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Hero from "./components/Hero";
import RecentWork from "./components/RecentWork";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

if (typeof history !== "undefined" && "scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
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

    const handleAnchor = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href && href.length > 1) {
          const el = document.querySelector(href);
          if (el) lenis.scrollTo(el, { offset: -80 });
        }
      }
    };
    document.addEventListener("click", handleAnchor);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <RecentWork />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
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
