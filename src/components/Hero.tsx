import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight, Sparkles } from "lucide-react";
import HeroBackground from "./HeroBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null!);
  const textRef = useRef<HTMLDivElement>(null!);
  const navRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.2 },
      );

      const badge = textRef.current.querySelector(".hero-badge");
      const title = textRef.current.querySelector(".hero-title");
      const subtitle = textRef.current.querySelector(".hero-subtitle");
      const buttons = textRef.current.querySelector(".hero-buttons");

      if (badge) {
        tl.fromTo(
          badge,
          { opacity: 0, scale: 0.8, y: -10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5 },
          "-=0.2",
        );
      }
      if (title) {
        tl.fromTo(
          title.querySelectorAll(".word"),
          { opacity: 0, y: 40, rotateX: -15 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.08 },
          "-=0.2",
        );
      }
      if (subtitle) {
        tl.fromTo(
          subtitle,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3",
        );
      }
      if (buttons) {
        tl.fromTo(
          buttons.children,
          { opacity: 0, y: 15, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
          "-=0.3",
        );
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(sectionRef.current.querySelector(".hero-parallax"), {
            y: progress * 80,
            opacity: 1 - progress * 0.6,
            duration: 0.1,
            overwrite: "auto",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] overflow-hidden bg-slate-950 text-white flex flex-col"
    >
      <HeroBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80 pointer-events-none z-[1]" />

      <div ref={navRef} className="relative z-10 container mx-auto px-6 py-6 opacity-0">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            Benjamin <span className="text-emerald-400">van Tonder</span>
          </span>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-medium border border-white/20 text-white/80 hover:text-white hover:border-emerald-400/50 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div
        ref={textRef}
        className="hero-parallax relative z-10 flex-1 flex items-center container mx-auto px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="hero-badge inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8 opacity-0">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs text-emerald-400 font-medium tracking-wide uppercase">
              Web Developer & Problem Solver
            </span>
          </div>

          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
            {"I build websites that help local businesses grow".split(" ").map(
              (word, i) => (
                <span key={i} className="word inline-block mr-[0.3em]">
                  {word === "grow" ? (
                    <span className="gradient-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 animate-gradient">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ),
            )}
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-slate-300/80 max-w-3xl mx-auto mb-10 leading-relaxed opacity-0">
            I'm Benjamin van Tonder — I craft fast, modern websites for service
            businesses like trades, contractors, and local shops. No fluff, just
            results that drive phone calls and quote requests.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0">
            <a
              href="#pricing"
              className="group relative px-8 py-3.5 rounded-full bg-emerald-500 font-semibold text-base inline-flex items-center gap-2 btn-shimmer shadow-lg shadow-emerald-500/20"
            >
              <span className="relative z-10">See Pricing</span>
              <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3.5 rounded-full glass-strong text-white/80 hover:text-white transition-all duration-300 font-semibold text-base"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-emerald-400/60 animate-float-slow" />
        </div>
      </div>
    </section>
  );
}
