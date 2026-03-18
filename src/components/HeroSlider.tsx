import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import heroHome1 from "@/assets/hero-home-1.jpg";
import heroHome2 from "@/assets/hero-home-2.jpg";
import heroHome3 from "@/assets/hero-home-3.jpg";

const slides = [
  {
    label: "Platform Overview",
    heading: "School ERP Software for Australia & New Zealand",
    description:
      "Camu ERP connects students, parents, teachers, and administrators into one powerful ecosystem — reducing overhead and amplifying what matters most: learning.",
    ctas: [
      { label: "Register Your School", path: "/contact", primary: true },
      { label: "Watch Demo", path: "#demo", primary: false },
    ],
    stats: [
      { num: "2,300+", label: "Schools Addressable" },
      { num: "1", label: "Integrated Platform" },
      { num: "5", label: "User Personas" },
    ],
    image: heroHome1,
  },
  {
    label: "Problem & Solution",
    heading: "Still Using Multiple School Systems?",
    description:
      "Replace disconnected tools with one integrated ERP platform designed for modern schools. One login. One source of truth. Zero fragmentation.",
    ctas: [
      { label: "Explore Features", path: "/features", primary: true },
    ],
    stats: [
      { num: "90%", label: "Time Saved on Attendance" },
      { num: "75%", label: "Faster Parent Comms" },
      { num: "68%", label: "Report Card Automation" },
    ],
    image: heroHome2,
  },
  {
    label: "Trust & Coverage",
    heading: "Trusted School ERP Across ANZ",
    description:
      "Available across VIC, NSW, QLD, SA, WA, TAS, ACT, NT & New Zealand. Victorian DE Panel SSP001 Approved — pre-approved procurement for government schools.",
    ctas: [
      { label: "View Implementation", path: "/implementation", primary: true },
    ],
    stats: [
      { num: "9", label: "Regions Covered" },
      { num: "4", label: "DE Panel Categories" },
      { num: "ISO", label: "27001 Certified" },
    ],
    image: heroHome3,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/65" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--navy) / 0.5) 0%, transparent 60%), radial-gradient(ellipse at 65% 30%, hsl(var(--gold) / 0.1) 0%, transparent 50%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/20"
            style={{ left: `${10 + i * 11}%`, top: `${15 + (i % 4) * 20}%` }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-20 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            {/* Pill */}
            <div
              className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-8"
              style={{
                background: "hsl(var(--gold) / 0.1)",
                borderColor: "hsl(var(--gold) / 0.25)",
                color: "hsl(var(--gold))",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold tracking-[0.14em] uppercase">
                {slide.label}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black leading-[1.06] tracking-tight mb-6 text-background">
              {slide.heading}
            </h1>

            {/* Description */}
            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "hsl(0 0% 100% / 0.7)" }}
            >
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              {slide.ctas.map((cta) =>
                cta.primary ? (
                  <Link key={cta.label} to={cta.path} className="btn-gold">
                    {cta.label} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                ) : (
                  <Link
                    key={cta.label}
                    to={cta.path}
                    className="btn-outline border-background/20 text-background hover:border-secondary hover:text-secondary"
                  >
                    <Play className="mr-2 w-4 h-4" /> {cta.label}
                  </Link>
                )
              )}
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              {slide.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative pl-4 border-l-2"
                  style={{ borderColor: "hsl(var(--gold))" }}
                >
                  <div className="font-serif text-3xl font-black text-background leading-none">
                    {stat.num}
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase mt-1"
                    style={{ color: "hsl(0 0% 100% / 0.4)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 flex items-center gap-4">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-background/20 text-background/60 hover:text-background hover:border-background/40 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`slider-dot ${i === current ? "active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 rounded-full border border-background/20 text-background/60 hover:text-background hover:border-background/40 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
