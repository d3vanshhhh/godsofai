import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const LearnSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const insights = [
    {
      title: 'Fixing real production failures',
      description:
        'Concrete incidents shared by engineers responsible for live systems, including the failure, root cause, and final fix.',
    },
    {
      title: 'Designing AI systems for scale',
      description:
        'How top-of-the-funnel teams structure, deploy, and evolve agent systems under real operational constraints.',
    },
    {
      title: 'Mastering tools trusted by top teams',
      description:
        'Tools used by high-performing teams that were kept, replaced, or dropped after real usage exposed limits.',
    },
    {
      title: 'Access to an opt-in talent network',
      description:
        'Direct access to an opt-in talent network where top AI startups and engineering teams actively source engineers.',
    },
  ];

  return (
    <section ref={ref} id="edge" className="section-padding bg-card/40">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-20 max-w-5xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            How members <span className="text-primary">benefit</span> from Gods of AI
          </h2>
        </motion.div>

        {/* Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {insights.map((item, i) => (
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
      </div>
    </section>
  );
};

export default LearnSection;