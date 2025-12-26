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
      question: 'Who is Gods of AI built for?',
      answer:
        'Gods of AI is built for engineers and technical founders who own real production decisions. Most members are actively designing, deploying, or scaling AI systems and care about architectural judgment, failure modes, and long-term technical direction.',
    },
    {
      question: 'Who is this community not for?',
      answer:
        'This is not a beginner learning space, bootcamp, or content library. It is also not for consultants, agencies, recruiters, or anyone looking to sell services. Passive consumption and surface-level discussion are explicitly discouraged.',
    },
    {
      question: 'What do members actually get from participating?',
      answer:
        'Members gain exposure to how experienced engineers and founders think through real constraints. This includes production trade-offs, failure analysis, tooling decisions, and early hiring or collaboration signals that are rarely shared publicly.',
    },
    {
      question: 'How is this different from Slack groups, Discords, or online forums?',
      answer:
        'Gods of AI is intentionally small, moderated, and closed. Conversations happen between peers who are accountable for production outcomes. There is no noise, self-promotion, or content farming. What’s shared inside is practical, unfinished, and often sensitive.',
    },
    {
      question: 'Is this a course, program, or structured curriculum?',
      answer:
        'No. There are no lessons, tracks, or recordings. Learning happens through real conversations, live problem-solving, and observing how decisions are made in active systems.',
    },
    {
      question: 'How much time do I need to commit?',
      answer:
        'There is no required time commitment. Members engage when discussions or sessions intersect with their work. Value compounds through selective participation, not constant presence.',
    },
    {
      question: 'How does membership access work?',
      answer:
        'Access is invite-only or application-based. Applications are reviewed to maintain trust, discretion, and signal quality. Acceptance is intentionally limited.',
    },
  ];

  return (
    <section
      ref={ref}
      id="faq"
      className="section-padding bg-black pt-0"
    >
      <div className="container-premium max-w-3xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Common <span className="text-primary">questions</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/15 rounded-2xl px-6 bg-white/[0.03] backdrop-blur"
              >
                <AccordionTrigger
                  className="
                  text-left
                  font-medium
                  py-6
                  text-white
                  text-base
                  md:text-lg
                  hover:no-underline
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                  text-white/70
                  text-sm
                  md:text-base
                  leading-relaxed
                  pb-6
                  "
                >
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
