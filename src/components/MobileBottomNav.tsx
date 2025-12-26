import { Home, Calendar,  TrendingUp, HelpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { icon: Home, label: 'Home', href: '#' },
  { icon: Calendar, label: 'Events', href: '#events' },
  { icon: TrendingUp, label: 'Edge', href: '#edge' },
  { icon: HelpCircle, label: 'FAQs', href: '#faq' },
];

const MobileBottomNav = () => {
  const [active, setActive] = useState('#');

  useEffect(() => {
    const updateActive = () => {
      setActive(window.location.hash || '#');
    };
    updateActive();
    window.addEventListener('hashchange', updateActive);
    return () => window.removeEventListener('hashchange', updateActive);
  }, []);

  return (
    <nav className="
      fixed bottom-0 left-0 right-0 z-50
      bg-background/95 backdrop-blur
      border-t border-border
      px-4 py-2
    ">
      <ul className="flex items-center justify-between">
        {navItems.map((item) => {
          const isActive = active === item.href;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`
                  flex flex-col items-center justify-center gap-1
                  text-xs
                  ${isActive ? 'text-primary' : 'text-muted-foreground'}
                `}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
