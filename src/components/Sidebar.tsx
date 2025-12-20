import { motion } from 'framer-motion';
import { Home, Calendar, Gift, BookOpen, CreditCard, Sparkles } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const navItems = [
    { icon: Home, label: 'Home', href: '#', active: true },
    { icon: Calendar, label: 'Events', href: '#events' },
    { icon: Gift, label: 'Perks', href: '#perks' },
    { icon: BookOpen, label: 'Learn', href: '#learn' },
    { icon: CreditCard, label: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className={`fixed left-0 top-0 h-full bg-sidebar z-50 flex flex-col border-r border-sidebar-border transition-all duration-300 ${
        isOpen ? 'w-[180px]' : 'w-[180px]'
      }`}
    >
      {/* Logo */}
      <div className="p-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-xl text-foreground">
            Gods<span className="text-primary">X</span>
          </span>
        </a>
        <button
          onClick={onToggle}
          className="p-1.5 rounded-md hover:bg-sidebar-accent transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="9" y1="3" x2="9" y2="21" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  item.active
                    ? 'bg-sidebar-accent text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50'
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Elevate section */}
        <div className="mt-6 px-3">
          <a
            href="#elevate"
            className="flex items-center gap-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Sparkles size={18} />
            <span className="tracking-widest text-xs uppercase">Elevate</span>
          </a>
        </div>
      </nav>

      {/* Bottom CTAs */}
      <div className="p-4 space-y-3">
        <a
          href="#apply"
          className="block w-full py-2.5 text-center text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
        >
          Check Eligibility
        </a>
        <a
          href="#login"
          className="block w-full py-2.5 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Member login
        </a>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
