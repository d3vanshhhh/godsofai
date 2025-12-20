import { motion } from 'framer-motion';

const CompanyLogosSection = () => {
  const companies = [
    'OpenAI', 'Anthropic', 'Google', 'Meta', 'Microsoft', 
    'DeepMind', 'Hugging Face', 'Stability AI', 'Cohere', 'Mistral',
    'xAI', 'Perplexity', 'Runway', 'Midjourney', 'Scale AI',
  ];

  return (
    <section className="relative py-16 bg-background overflow-hidden">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl max-w-3xl mx-auto px-6"
        >
          5,000+ leaders from the{' '}
          <span className="block">world's top AI companies are</span>
          <span className="block">Gods of AI members.</span>
        </motion.h2>
      </div>

      {/* Scrolling logos */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-left">
          {/* First set */}
          <div className="flex items-center gap-12 px-6 shrink-0">
            {companies.map((company, i) => (
              <div
                key={`first-${i}`}
                className="flex items-center justify-center w-24 h-12 text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-12 px-6 shrink-0">
            {companies.map((company, i) => (
              <div
                key={`second-${i}`}
                className="flex items-center justify-center w-24 h-12 text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosSection;
