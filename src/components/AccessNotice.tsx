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
      className="
        fixed
        right-0
        z-50
        bottom-20
        sm:bottom-16
        md:bottom-6
      "
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
        {/* ACCENT SPINE */}
        <div
          className="
            absolute left-0 top-0 h-full
            w-[14px] sm:w-[16px] md:w-[20px]
            bg-primary
            flex items-center justify-center
          "
        >
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
                  text-[9px]
                  sm:text-[10px]
                  md:text-[11px]
                  font-semibold
                  tracking-widest
                  uppercase
                  text-black
                "
              >
                Apply Now
              </span>
            )}
            <ArrowUpRight
              className="text-black"
              size={12}
            />
          </div>
        </div>

        <div
          className="
            relative flex items-center
            pl-[28px] sm:pl-[32px] md:pl-[36px]
          "
        >
          {/* EXPANDED */}
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="
                  flex flex-col items-center
                  px-4 sm:px-5 md:px-6
                  py-3 sm:py-3.5 md:py-4
                  space-y-2
                "
              >
                <span
                  className="
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-muted-foreground
                  "
                >
                  Membership
                </span>

                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-3xl sm:text-4xl font-semibold text-primary leading-none">
                    $0
                  </span>
                  <span className="text-sm sm:text-lg line-through text-muted-foreground leading-none">
                    $99
                  </span>
                </div>

                <div className="w-6 sm:w-8 h-px bg-border" />

                <span
                  className="
                    text-[9px]
                    sm:text-[11px]
                    uppercase
                    tracking-wider
                    text-muted-foreground
                  "
                >
                  LIMITED ACCESS WINDOW
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* COLLAPSED */}
          <AnimatePresence initial={false}>
            {collapsed && (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="
                  flex items-center
                  gap-2
                  px-3 sm:px-4
                  py-2.5 sm:py-3
                "
              >
                <span className="text-lg sm:text-xl font-semibold text-primary leading-none">
                  $0
                </span>
                <span className="text-xs sm:text-sm line-through text-muted-foreground leading-none">
                  $99
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TOGGLE */}
          <button
            onClick={handleToggle}
            className="
              flex items-center
              px-2
              text-muted-foreground
              hover:text-foreground
            "
            aria-label="Toggle access notice"
          >
            {collapsed ? (
              <ChevronLeft size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AccessNotice;
