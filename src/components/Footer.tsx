import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Edge', href: '#edge' },
    { label: 'Events', href: '#events' },
    { label: 'Talent Network', href: '#talent-network' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Apply', href: '#apply' },
  ];

  return (
    <footer className="py-16 border-t border-border/50 relative">
      <div className="container-premium">
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="font-serif text-2xl mb-4">
              Gods of <span className="text-primary">AI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              An invite-only network for experienced AI engineers and founders
              building real systems.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
              Navigate
            </span>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
              Connect
            </span>

            <div className="flex gap-4">
              <a
                href="mailto:hello@godsofai.com"
                aria-label="Email Gods of AI"
                className="w-10 h-10 rounded-lg bg-card border border-border
               flex items-center justify-center
               hover:border-primary hover:bg-primary/10
               transition-all duration-300"
              >
                <Mail
                  className="w-4 h-4 text-muted-foreground hover:text-primary"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gods of AI on LinkedIn"
                className="w-10 h-10 rounded-lg bg-card border border-border
               flex items-center justify-center
               hover:border-primary hover:bg-primary/10
               transition-all duration-300"
              >
                <Linkedin
                  className="w-4 h-4 text-muted-foreground hover:text-primary"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border/30
                     flex flex-col md:flex-row
                     justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Gods of AI. Built for people who ship.
          </p>
          <p className="text-xs text-muted-foreground/60 italic">
            “The future belongs to builders.”
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
