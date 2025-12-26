import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const TalentNetworkSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

    const items = [
        {
            title: 'One profile, multiple interviews',
            description:
                'Create one profile and get considered for multiple startup roles.',
        },
        {
            title: 'Direct interviews with top founders',
            description:
                'Founders reach out directly when your background matches what they are building.',
        },
        {
            title: 'Focused on AI and engineering roles',
            description:
                'Roles are limited to AI, ML, and core engineering positions at VC-backed startups.',
        },
    ];

    const logos = [
        "/logos/sarvam-ai-logo-2.webp",
        "/logos/blume.svg",
        "/logos/peak 15.webp",
        "/logos/processity.png",
        "/logos/nurix.svg",
        "/logos/Gan AI.svg",
        "/logos/segwise.svg",
        "/logos/mercor.svg",
        "/logos/kubo_care.png",
        "/logos/drizz.avif",
        "/logos/turgon.svg",
        "/logos/vault.svg",
    ];

    return (
        <section
            ref={ref}
            id="talent-network"
            className="section-padding pb-12 bg-card/40"
        >
            <div className="container-premium">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="mb-20 max-w-5xl mx-auto text-center"
                >
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Opt-in <span className="text-primary">Talent Network</span>
                    </h2>
                </motion.div>

                {/* CARDS — SAME SCALE AS LEARN */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.08 }}
                            className="
                group
                h-full
                flex
                flex-col
                rounded-3xl
                p-8
                bg-card/60
                backdrop-blur
                border
                border-border/40
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:bg-card
                hover:border-primary/40
                hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.4)]
              "
                        >
                            <h3
                                className="
                  font-serif
                  text-[2rem]
                  lg:text-[2.2rem]
                  leading-snug
                  min-h-[4.5rem] md:min-h-[5rem]
                  mb-4
                  transition-colors
                  duration-300
                  group-hover:text-primary
                "
                            >
                                {item.title}
                            </h3>

                            <p className="text-base md:text-lg text-muted-foreground">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-16"
                >
                    <a
                        href="https://candidate.coderound.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              inline-flex items-center gap-2
              px-8 py-4
              text-base font-medium
              rounded-full
              bg-primary text-primary-foreground
              hover:opacity-90
              transition-opacity
            "
                    >
                        Join Now
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>

            {/* COMPANY LOGO MARQUEE */}
            <div className="relative overflow-hidden pt-4 pb-8">
                <div className="animate-marquee flex gap-16 items-center">
                    {[...logos, ...logos].map((logo, i) => (
                        <img
                            key={i}
                            src={logo}
                            alt="Company logo"
                            className="
          h-8
          filter
          brightness-0
          invert
          opacity-70
          hover:opacity-100
          transition-opacity
        "
                        />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default TalentNetworkSection;