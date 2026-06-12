import React, { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Instagram, Youtube, Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DockIcon {
  icon: React.ComponentType<any>;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface FloatingDockProps {
  icons?: DockIcon[];
  position?: 'bottom' | 'top' | 'left' | 'right';
  className?: string;
}

const DEFAULT_ICONS: DockIcon[] = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
  { icon: Mail, label: 'Contact', href: 'mailto:hello@stellarui.com' },
];

const SPRING = { mass: 0.1, stiffness: 150, damping: 12 };

const activate = (item: DockIcon) => {
  if (item.onClick) {
    item.onClick();
  } else if (item.href) {
    window.open(item.href, '_blank', 'noopener,noreferrer');
  }
};

export const FloatingDock: React.FC<FloatingDockProps> = ({
  icons = DEFAULT_ICONS,
  position = 'bottom',
  className = '',
}) => {
  const placement =
    position === 'top' ? 'top-4 left-1/2 -translate-x-1/2'
    : position === 'left' ? 'left-4 top-1/2 -translate-y-1/2'
    : position === 'right' ? 'right-4 top-1/2 -translate-y-1/2'
    : 'bottom-4 left-1/2 -translate-x-1/2';

  return (
    <div className={cn('absolute z-10 transform', placement, className)}>
      <FloatingDockDesktop icons={icons} />
      <FloatingDockMobile icons={icons} />
    </div>
  );
};

/* ---------------- Desktop: cursor magnification ---------------- */

const FloatingDockDesktop: React.FC<{ icons: DockIcon[] }> = ({ icons }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto hidden h-16 items-end gap-[0.8rem] rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 pb-3 shadow-2xl backdrop-blur-sm md:flex"
    >
      {icons.map((item, i) => (
        <IconContainer key={i} mouseX={mouseX} item={item} />
      ))}
    </motion.div>
  );
};

const IconContainer: React.FC<{ mouseX: MotionValue<number>; item: DockIcon }> = ({
  mouseX,
  item,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  // Distance from the cursor to this icon's horizontal center.
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Box grows (and pushes neighbors) near the cursor; the glyph scales with it.
  const widthBox = useSpring(useTransform(distance, [-150, 0, 150], [44, 80, 44]), SPRING);
  const heightBox = useSpring(useTransform(distance, [-150, 0, 150], [44, 80, 44]), SPRING);
  const widthIcon = useSpring(useTransform(distance, [-150, 0, 150], [22, 40, 22]), SPRING);
  const heightIcon = useSpring(useTransform(distance, [-150, 0, 150], [22, 40, 22]), SPRING);

  const Icon = item.icon;

  return (
    <motion.button
      ref={ref}
      style={{ width: widthBox, height: heightBox }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => activate(item)}
      aria-label={item.label}
      className="relative flex aspect-square items-center justify-center rounded-full bg-zinc-800 text-zinc-300 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 8, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 4, x: '-50%' }}
            className="absolute -top-9 left-1/2 w-fit whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-800 px-2 py-1 text-xs text-white"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
      <motion.span style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
        <Icon className="h-full w-full" strokeWidth={1.75} />
      </motion.span>
    </motion.button>
  );
};

/* ---------------- Mobile: collapsible stack ---------------- */

const FloatingDockMobile: React.FC<{ icons: DockIcon[] }> = ({ icons }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative block md:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="dock-stack"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col items-center gap-2"
          >
            {icons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { delay: idx * 0.05 } }}
                  transition={{ delay: (icons.length - 1 - idx) * 0.05 }}
                  onClick={() => activate(item)}
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 shadow-lg"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 shadow-2xl backdrop-blur-sm transition-colors hover:text-white"
      >
        {open ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
      </button>
    </div>
  );
};

export const FloatingDockExample = () => (
  <div className="relative h-64 rounded-xl bg-zinc-900/60 border border-zinc-800">
    <p className="absolute inset-0 flex items-center justify-center text-sm text-zinc-500 select-none">
      Hover the dock below
    </p>
    <FloatingDock position="bottom" />
  </div>
);
