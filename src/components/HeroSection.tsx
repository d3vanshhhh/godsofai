import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-bg.webm"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
      </div>

      {/* TOP RIGHT BRAND */}
      <div className="absolute z-20 opacity-80 top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8">
        <span className="font-serif text-2xl md:text-4xl text-foreground">
          Gods of <span className="text-primary">AI</span>
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-[3.37rem] md:text-7xl lg:text-8xl leading-[1.1] mb-6 tracking-tight"
        >
          <span className="block">Built for the</span>
          Top 3% AI Engineers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm md:text-xl max-w-xl mx-auto mb-8 leading-relaxed tracking-tight font-medium"
        >
          An invite-only network connecting experienced AI engineers with leading founders.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4
              text-sm md:text-base bg-primary/90 backdrop-blur-sm
              text-primary-foreground rounded-full font-medium
              hover:bg-primary transition-colors group"
          >
            Apply to Join
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;