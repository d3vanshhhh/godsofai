import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Network, Zap } from 'lucide-react';

const ApplySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const pillars = [
    {
      title: 'Production insight',
      icon: Briefcase,
    },
    {
      title: 'High-trust network',
      icon: Network,
    },
    {
      title: 'Early opportunities',
      icon: Zap,
    },
  ];

  return (
    <section
      ref={ref}
      id="apply"
      className="section-padding bg-black text-white"
    >
      <div className="container-premium">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Apply to <span className="text-primary">Gods of AI</span>
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — PILLARS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-10 max-w-xl"
          >
            {pillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-10 w-10  flex items-center justify-center">
                    <Icon size={18} className="text-white/80" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              );
            })}

            {/* Contact & filler */}
            <div className="pt-10 space-y-4 border-t border-white/10">
              <div className="text-sm text-white/60">
                Questions or referrals
              </div>
              <a
                href="mailto:hello@godsofai.com"
                className="text-white hover:underline text-sm"
              >
                hello@godsofai.com
              </a>

              <div className="text-xs text-white/40 leading-relaxed max-w-md">
                Applications are reviewed manually. Access is intentionally
                limited to maintain trust and signal quality inside the network.
                You’ll hear back if there’s a fit.
              </div>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              rounded-2xl
              border border-white/15
              bg-white/[0.03]
              p-6
              backdrop-blur
              space-y-4
            "
          >
            {/* Name */}
            <input
              type="text"
              placeholder="Full name"
              className="
                w-full
                bg-black
                border border-white/15
                rounded-lg
                px-4 py-2.5
                text-white
                placeholder-white/40
                focus:outline-none
                focus:border-white/40
              "
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Work email"
              className="
                w-full
                bg-black
                border border-white/15
                rounded-lg
                px-4 py-2.5
                text-white
                placeholder-white/40
                focus:outline-none
                focus:border-white/40
              "
            />

            {/* Role */}
            <input
              type="text"
              placeholder="Current role"
              className="
                w-full
                bg-black
                border border-white/15
                rounded-lg
                px-4 py-2.5
                text-white
                placeholder-white/40
                focus:outline-none
                focus:border-white/40
              "
            />

            {/* Context */}
            <textarea
              rows={3}
              placeholder="What are you currently working on?"
              className="
                w-full
                bg-black
                border border-white/15
                rounded-lg
                px-4 py-2.5
                text-white
                placeholder-white/40
                focus:outline-none
                focus:border-white/40
                resize-none
              "
            />

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full
                mt-2
                px-6 py-3
                rounded-full
                border border-white/30
                text-white/90
                hover:bg-white
                hover:text-black
                transition-colors
              "
            >
              Submit application
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ApplySection;