import { motion } from "framer-motion";

const VSLSection = () => {
  return (
    <section className="relative pt-32 pb-12 bg-background">
      <div className="container-premium text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4"
        >
          How the community <span className="text-primary">works</span>
        </motion.h2>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            relative mx-auto max-w-5xl
            aspect-video
            rounded-2xl
            overflow-hidden
            border border-border
            bg-black
            mt-10
          "
        >
          {/* Thumbnail */}
          <img
            src="/vsl/thumbnail.png"
            alt="How the Gods of AI network works"
            className="absolute inset-0 h-full w-full object-contain opacity-90"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Play button */}
          <button
            aria-label="Play video"
            className="
              absolute inset-0
              flex items-center justify-center
              group
            "
          >
            <div
              className="
                flex items-center justify-center
                w-20 h-20
                rounded-full
                bg-white/90
                text-black
                group-hover:scale-105
                transition-transform
              "
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </button>

          {/* Top label */}
          <div className="absolute top-4 left-4 flex items-center gap-2 text-sm text-white/80">
            <span className="font-medium">
              A 2-minute walkthrough of how access works.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSLSection;
