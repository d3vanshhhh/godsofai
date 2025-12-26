import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const EventsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const rooms = [
    {
      index: '01',
      title: 'Live AI Roundtables',
      description:
        'Small, closed online sessions where members walk through real production architectures, explain why key decisions were made, and dissect what broke, what scaled, and what they would change if building again.',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&auto=format&fit=crop',
    },
    {
      index: '02',
      title: 'Agent & Infra Debugging',
      description:
        'Hands-on problem-solving sessions where members bring real bugs, scaling issues, and agent failures to debug architectures, prompts, infrastructure, and deployment choices with experienced peers.',
      image: '/events/event-2.png',
    },
    {
      index: '03',
      title: 'Founder × Engineer Sessions',
      description:
        'Private 1:1 online sessions with top AI founders where engineers evaluate problem statements, team needs, and technical direction, often leading to early hiring conversations, advisory roles, or long-term collaboration.',
      image: '/events/event-3.png',
    },
  ];

  return (
    <section ref={ref} id="events" className="section-padding bg-background">
      <div className="container-premium">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-20 max-w-xl"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            What <span className="text-primary">happens</span> inside the community
          </h2>
        </motion.div>

        {/* Rooms */}
        <div className="space-y-24">
          {rooms.map((room, i) => {
            const isEven = i % 2 === 1;

            return (
              <motion.div
                key={room.index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`
                  grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
                  ${isEven ? 'lg:grid-flow-col-dense' : ''}
                `}
              >
                {/* Image */}
                <div
                  className={`
                    relative h-[320px] rounded-3xl overflow-hidden
                    ${isEven ? 'lg:col-start-2' : ''}
                  `}
                >
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="max-w-xl">
                  <div className="text-muted-foreground font-mono text-[1.4rem] mb-4">
                    {room.index}
                  </div>

                  <h3 className="font-serif font-semibold text-4xl md:text-5xl mb-4">
                    {room.title}
                  </h3>

                  <p className="text-base md:text-lg text-muted-foreground">
                    {room.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
