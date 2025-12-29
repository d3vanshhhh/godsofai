import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Most communities talk about AI in theory. Gods of AI is where you see how real production decisions are made. Listening to engineers break down failures, trade-offs, and second-order effects has directly changed how I approach system design and risk in my own work.",
    name: "Merin Mandanna",
    role: "AI Partnerships",
    company: "Lenskart",
    memberSince: "2025",
    image: "/testimonials/merin.webp",
    logo: "/testimonials/testimonial-lenskart.webp",
  },
  {
    quote:
      "What stands out is the quality of judgment in the room. You’re exposed to how experienced engineers reason through constraints, tooling choices, and architectural trade-offs. That exposure sharpens your instincts far more than reading docs or postmortems in isolation.",
    name: "Alex Chen",
    role: "Head of AI Research",
    company: "Meta",
    memberSince: "2023",
    image: "/testimonials/alex.webp",
    logo: "/testimonials/testimonial-meta.webp",
  },
  {
    quote:
      "Being part of Gods of AI means seeing work while it’s still messy. You watch systems evolve, break, and get fixed in real time. That visibility has helped me avoid mistakes and make better technical decisions much earlier in the build cycle.",
    name: "Sarah Kim",
    role: "ML Engineer",
    company: "Sarvam AI",
    memberSince: "2024",
    image: "/testimonials/sarah.webp",
    logo: "/testimonials/testimonial-sarvam.webp",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative min-h-screen lg:h-screen w-full lg:overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          {/* Layout wrapper */}
          <div className="relative z-20 h-full flex flex-col lg:grid lg:grid-cols-2">

            {/* MOBILE + TABLET — IMAGE */}
            <div className="relative h-[45vh] md:h-[50vh] w-full lg:hidden mt-8 md:mt-12">
              <img
                src={t.image}
                alt={t.name}
                className="h-full w-full object-cover object-top lg:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
            </div>

            {/* TEXT */}
            <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-10 lg:py-0">
              <div className="max-w-xl">
                <div className="text-7xl md:text-9xl font-serif text-white/80 leading-none -mb-6">
                  “
                </div>

                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed mb-10">
                  {t.quote}
                </p>

                <div className="text-white/90 font-serif text-xl">
                  {t.name}, {t.role}
                </div>

                <div className="text-base text-white/60 mt-1">
                  Member since {t.memberSince}
                </div>

                <div className="mt-5">
                  <img
                    src={t.logo}
                    alt={t.company}
                    className="h-7 object-contain opacity-90"
                  />
                </div>
              </div>
            </div>

            {/* DESKTOP — IMAGE */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md h-[75%] bg-black">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover rounded-sm"
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.85) 100%)",
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.25), rgba(0,0,0,0))",
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
                  }}
                />
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TestimonialsSection;
