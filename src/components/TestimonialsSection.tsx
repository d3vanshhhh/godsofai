import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      quote: "I spent the last decade leading AI research at top labs. Its been 2 years since I became a Gods of AI member & its been a ride. This community is its people - ambitious, hungry & empathetic.",
      name: "Alex Chen",
      role: "Head of AI Research",
      company: "Anthropic",
      memberSince: "2023",
    },
    {
      quote: "The real value of Gods of AI is the community. Every conversation sharpens my thinking. Every event is a delta and the learning platform is problem solving on demand.",
      name: "Sarah Kim",
      role: "ML Engineer",
      company: "OpenAI",
      memberSince: "2024",
    },
    {
      quote: "Gods of AI's learning stack and community tinkering with cutting-edge models feel like an unfair advantage for anyone building in the space.",
      name: "Michael Ross",
      role: "AI Founder",
      company: "Stealth Startup",
      memberSince: "2024",
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-6 rounded-2xl bg-card border border-border"
            >
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-serif">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}, {testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">Member since {testimonial.memberSince}</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">{testimonial.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
