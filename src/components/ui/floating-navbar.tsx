import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [hoveredNavItem, setHoveredNavItem] = useState<number | null>(null);

  const handleHover = (idx: number) => {
    setHoveredNavItem(idx);
  };

  const handleMouseLeave = () => {
    setHoveredNavItem(null);
  };

  return (
    <div
      className={cn(
        "flex max-w-sm md:max-w-lg h-16 fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-start space-x-4",
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <div key={`nav-item-${idx}`} className="relative" style={{ marginRight: "22px" }}>
          <AnimatePresence>
            {hoveredNavItem === idx && (
              <motion.span
                className="Navigation_bg__3QLGM"
                style={{
                  position: "absolute",
                  top: "-4px",
                  left: "-4px",
                  right: "-4px",
                  bottom: "-4px",
                  borderRadius: "10px",
                  backgroundColor: "yellow",
                  zIndex: -1,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>

          <div className="flex items-center"> {/* Centering the nav items */}
            <Link
              href={navItem.link}
              className={cn(
                "dark:text-neutral-50 items-center flex space-x-1 text-neutral-600",
                "rounded-full transition-colors duration-300",
                hoveredNavItem === idx && "text-neutral-500",
                "hover:text-black"
              )}
              onMouseEnter={() => handleHover(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="block md:hidden">{navItem.icon}</span>
              <span className="hidden md:block text-sm">{navItem.name}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
