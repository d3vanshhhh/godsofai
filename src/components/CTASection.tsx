import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section id="cta-section" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/cta/fit-bg.webp"
          alt="CTA background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Top blend strip */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />

        {/* Bottom blend strip */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-2xl mt-32 md:mt-48 lg:mt-32"
        >
          {/* Headline */}
          <h2 className="font-serif text-6xl md:text-8xl lg:text-8xl text-white leading-tight mb-8 md:12">
            Think you’re<br />a fit?
          </h2>

          {/* Primary CTA */}
          <motion.a
            href="#apply"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="
    inline-flex items-center gap-2
    px-8 py-4
    bg-primary/90 backdrop-blur-sm
    text-primary-foreground font-medium
    hover:bg-primary
    transition-colors
    group
  "
          >
            Check eligibility
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
