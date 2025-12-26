import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const AccessNotice = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleNavigate = () => {
    window.location.hash = '#apply';
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsed(!collapsed);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed bottom-24 md:bottom-6 right-0 z-50"
    >
      <motion.div
        layout
        onClick={handleNavigate}
        className="
          relative cursor-pointer
          overflow-hidden
          rounded-l-2xl
          border border-border
          bg-background/95
          backdrop-blur
          shadow-2xl
        "
      >
        {/* THICK ACCENT SPINE */}
        <div className="absolute left-0 top-0 h-full w-[20px] bg-primary flex items-center justify-center">
          <div
            className="
              rotate-90
              flex items-center gap-1
              whitespace-nowrap
              select-none
            "
          >
          
            {!collapsed && (
              <span
                className="
                  text-[11px]
                  font-semibold
                  tracking-widest
                  uppercase
                  text-black
                "
              >
                Apply Now
              </span>
            )}

            <ArrowUpRight size={14} className="text-black" />
          </div>
        </div>

        <div className="relative flex items-center pl-[36px]">
          {/* MAIN CONTENT */}
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex flex-col items-center px-6 py-4 space-y-2"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Membership
                </span>

                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-semibold text-primary leading-none">
                    $0
                  </span>
                  <span className="text-lg line-through text-muted-foreground leading-none">
                    $99
                  </span>
                </div>

                <div className="w-8 h-px bg-border" />

                <span className="text-[11px] text-muted-foreground uppercase tracking-wider">
                  LIMITED ACCESS WINDOW
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* COLLAPSED STATE */}
          <AnimatePresence initial={false}>
            {collapsed && (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex items-center gap-2 px-4 py-3"
              >
                <span className="text-xl font-semibold text-primary leading-none">
                  $0
                </span>
                <span className="text-sm line-through text-muted-foreground leading-none">
                  $99
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TOGGLE ICON — ONLY THIS COLLAPSES */}
          <button
            onClick={handleToggle}
            className="flex items-center px-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle access notice"
          >
            {collapsed ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AccessNotice;
