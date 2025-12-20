import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const faqs = [
    {
      question: "Who should join Gods of AI?",
      answer: "AI engineers, researchers, founders, and builders who are curious about AI and want to accelerate their career. We look for growth-minded individuals who are eager to learn and excited about building with AI."
    },
    {
      question: "Who shouldn't apply?",
      answer: "If you're looking for someone else to do career growth for you, this isn't the community. We also don't accept consultants or freelancers who join primarily to sell to our members."
    },
    {
      question: "How do I access my membership?",
      answer: "Access learning courses, events, jobs, and more through our online platform. We also host monthly in-person events in multiple cities globally."
    },
    {
      question: "What do I get with my membership?",
      answer: "5,000+ member online private community, in-person monthly events, $5K worth of AI credits and perks, self-paced AI learning programs, live weekly sessions with AI leaders, and interview prep resources."
    },
    {
      question: "How much time investment is required?",
      answer: "Learning programs are self-paced and recorded. Live events happen after work hours on weekdays, and in-person community events are typically on weekends."
    },
    {
      question: "What is your refund policy?",
      answer: "We encourage you to review all membership details carefully before purchasing. As this is a digital, experience-led offering, we do not offer refunds."
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-premium max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
