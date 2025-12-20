import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Zap } from 'lucide-react';

const LearnSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const courses = [
    {
      title: 'How to build your first AI agent',
      duration: '1hr 22min',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop',
    },
    {
      title: 'AI Engineering Playbook: LLMs, RAG & Agents',
      duration: '1hr 40min',
      image: 'https://images.unsplash.com/photo-1676299081847-c3c9a0f4c4f0?w=600&auto=format&fit=crop',
    },
    {
      title: 'Build Voice-AI agents in 30 minutes',
      duration: '1hr 3min',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&auto=format&fit=crop',
    },
    {
      title: 'How memory makes AI agents smarter',
      duration: '1hr 1min',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop',
    },
    {
      title: 'Fine-tuning LLMs for production',
      duration: '1hr 35min',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop',
    },
    {
      title: 'Building search for AI agents',
      duration: '1hr 6min',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section ref={ref} id="learn" className="section-padding bg-card/50">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Learn & implement AI every week
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Members get access to 90 min online sessions taught
            by top experts in AI. Take notes, ask questions & implement right away.
          </p>
          <a
            href="#library"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Explore the library <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-serif text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Zap size={12} className="text-primary" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
