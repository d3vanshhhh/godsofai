import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const EventsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const events = [
    {
      title: 'Build AI Agents From Scratch',
      host: 'Alex Chen',
      date: 'Fri, Dec 27',
      location: 'San Francisco',
      badge: 'Last Few Spots',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    },
    {
      title: 'How to Scale AI Startups',
      host: 'Sarah Kim',
      date: 'Sat, Jan 4',
      location: 'Virtual Event',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop',
    },
    {
      title: 'The AI Builder Roadmap',
      host: 'Michael Ross',
      date: 'Thu, Jan 10',
      location: 'Virtual Event',
      badge: 'Watch Recording',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop',
    },
    {
      title: 'LLM Fine-tuning Workshop',
      host: 'Emily Zhang',
      date: 'Sun, Jan 12',
      location: 'New York',
      image: 'https://images.unsplash.com/photo-1676299081847-c3c9a0f4c4f0?w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section ref={ref} id="events" className="section-padding bg-background">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Be around people smarter than you
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Members get access to online private community & in-person events.
            Choose from AI learning sprints, vibe coding hackathons, meetups & more.
          </p>
          <a
            href="#all-events"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            See all events <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {event.badge && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {event.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-serif text-lg mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                    {event.host.charAt(0)}
                  </div>
                  <span className="text-sm text-muted-foreground">{event.host}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
