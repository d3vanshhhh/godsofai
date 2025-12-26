import { motion } from 'framer-motion';
import {
  Home,
  Calendar,
  TrendingUp,
  HelpCircle,
  Sparkles,
  Users,
  MousePointer,
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState('#');

  const navItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: TrendingUp, label: 'Edge', href: '#edge' },
    { icon: Calendar, label: 'Events', href: '#events' },
    { icon: Users, label: 'Testimonials', href: '#testimonials' },
    { icon: HelpCircle, label: 'FAQs', href: '#faq' },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || '#');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className={`fixed left-0 top-0 h-full z-50 flex flex-col
        bg-sidebar border-r border-sidebar-border transition-all duration-300
        ${isOpen ? 'w-[190px]' : 'w-[60px]'}`}
    >
      {/* LOGO */}
      <div
        className={`p-5 flex items-center ${isOpen ? 'justify-between' : 'justify-center'
          }`}
      >
        {isOpen && (
          <a href="#" className="font-serif text-[1.5rem] text-foreground">
            Gods of <span className="text-primary">AI</span>
          </a>
        )}

        <button
          onClick={onToggle}
          className="p-1.5 rounded-md hover:bg-sidebar-accent transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="9" y1="3" x2="9" y2="21" />
          </svg>
        </button>
      </div>

      {/* CENTERED NAV */}
      <div className="flex-1 flex flex-col justify-center px-2">
        <nav>
          <ul className="space-y-4">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href;
              return (
                <li key={i}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg
                      text-[15px] transition-colors
                      ${isActive
                        ? 'bg-sidebar-accent text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50'
                      }
                      ${!isOpen ? 'justify-center' : ''}
                    `}
                    title={!isOpen ? item.label : undefined}
                  >
                    <item.icon size={19} />
                    {isOpen && <span>{item.label}</span>}
                  </a>
                </li>
              );
            })}

            {/* TALENT NETWORK */}
            <li className="mt-10">
              <a
                href="#talent-network"
                rel="noopener noreferrer"
                className={`flex items-center px-3 py-2.5 rounded-lg
                  text-[0.871rem] transition-colors
                  text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50
                  ${!isOpen ? 'justify-center' : ''}
                `}
                title={!isOpen ? 'Talent Network' : undefined}
              >
                {/* CLOSED → ICON ONLY */}
                {!isOpen && <Sparkles size={19} />}

                {/* OPEN → TEXT ONLY */}
                {isOpen && (
                  <span className="w-full text-left uppercase tracking-widest font-semibold">
                    Talent Network
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* BOTTOM CTA */}
      <div className="p-3 mb-4">
        {isOpen ? (
          <a
            href="#apply"
            className="block w-full py-2.5 text-center text-base font-medium
              bg-primary text-primary-foreground rounded-full
              hover:opacity-90 transition-opacity"
          >
            Check Eligibility
          </a>
        ) : (
          <a
            href="#apply"
            className="flex items-center justify-center p-2
              bg-primary text-primary-foreground rounded-full
              hover:opacity-90 transition-opacity"
            title="Check Eligibility"
          >
            <MousePointer size={16} />
          </a>
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar;