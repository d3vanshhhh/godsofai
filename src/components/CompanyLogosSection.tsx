import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
];

const logos = [
  "/logos/sarvam_ai.webp",
  "/logos/blume.svg",
  "/logos/peak_15.webp",
  "/logos/processity.webp",
  "/logos/nurix.svg",
  "/logos/gan_ai.svg",
  "/logos/segwise.svg",
  "/logos/mercor.svg",
  "/logos/kubo_care.webp",
  "/logos/drizz.webp",
  "/logos/turgon.svg",
  "/logos/vault.svg",
];

const MOBILE_LOGOS_PER_PAGE = 4;
const TABLET_LOGOS_PER_PAGE = 6;

const CompanyCredibilitySection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const mobileStart = (index * MOBILE_LOGOS_PER_PAGE) % logos.length;
  const mobileLogos = logos
    .slice(mobileStart, mobileStart + MOBILE_LOGOS_PER_PAGE)
    .concat(
      logos.slice(
        0,
        Math.max(0, mobileStart + MOBILE_LOGOS_PER_PAGE - logos.length)
      )
    );

  const tabletStart = (index * TABLET_LOGOS_PER_PAGE) % logos.length;
  const tabletLogos = logos
    .slice(tabletStart, tabletStart + TABLET_LOGOS_PER_PAGE)
    .concat(
      logos.slice(
        0,
        Math.max(0, tabletStart + TABLET_LOGOS_PER_PAGE - logos.length)
      )
    );

  const logoClass =
  "h-full w-full object-contain scale-[0.75] filter brightness-0 invert opacity-80 transition-opacity";


  return (
    <section className="relative h-[100dvh] md:min-h-screen w-full overflow-hidden flex flex-col">
      {/* Background slideshow */}
      <AnimatePresence>
        <motion.div
          key={index % backgroundImages.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImages[index % backgroundImages.length]})`,
          }}
        />
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Headline */}
        <div className="px-6 md:px-14 pt-10 md:pt-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              font-serif
              text-[2rem] sm:text-3xl md:text-5xl lg:text-[3.7rem]
              mt-10 md:mt-0
              text-white max-w-[39rem] leading-snug
            "
          >
            Be in the room with <span className="text-primary">5,000+</span>{" "}
            engineers and founders building production AI.
          </motion.h2>
        </div>

        <div className="flex-1" />

        {/* LOGO WALL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full border-t border-white/20"
        >
          {/* MOBILE — 2x2 */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 divide-x divide-y divide-white/20">
              {mobileLogos.map((logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center h-16 px-6 py-3"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={logo}
                      src={logo}
                      alt="Company logo"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className={logoClass}
                    />
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* TABLET — 2x3 */}
          <div className="hidden md:grid lg:hidden grid-cols-3 divide-x divide-y divide-white/20">
            {tabletLogos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center h-20 px-8 py-4"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={logo}
                    src={logo}
                    alt="Company logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={logoClass}
                  />
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* DESKTOP — static */}
          <div className="hidden lg:grid grid-cols-6 divide-x divide-y divide-white/20">
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center h-24 px-10 py-6"
              >
                <img
                  src={logo}
                  alt="Company logo"
                  className={logoClass}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyCredibilitySection;