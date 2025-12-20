import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    'Weekly Live learning (AI, agents & engineering)',
    'In-person curated monthly events in 10+ cities',
    'AI credits & perks from top brands worth $5K',
    'Self-paced AI engineering programs',
    '5,000+ member online vetted community',
    'Interview prep lessons with Elevate',
  ];

  return (
    <section ref={ref} id="pricing" className="section-padding bg-card/50">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Membership fees & inclusions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-card p-8">
            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="text-center py-6 border-t border-border">
              <div className="text-4xl font-serif mb-1">
                $499<span className="text-lg text-muted-foreground">/year</span>
              </div>
              <div className="text-sm text-muted-foreground">
                One-time payment, cancel anytime
              </div>
            </div>

            {/* CTA */}
            <a
              href="#apply"
              className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Check Eligibility
              <ArrowRight size={18} />
            </a>

            <a
              href="#inclusions"
              className="block text-center mt-4 text-sm text-primary hover:underline"
            >
              Explore all inclusions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
