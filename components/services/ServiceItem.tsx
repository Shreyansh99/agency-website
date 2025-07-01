"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ServiceItemProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  content: string[];
}

export const ServiceItem = ({
  title,
  subtitle,
  icon: Icon,
  content,
}: ServiceItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "w-full rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm px-4 py-4 sm:px-5 shadow-md transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg hover:border-blue-500/40 cursor-pointer"
      )}
    >
      <div className="flex w-full items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </motion.div>
          <div className="min-w-0 flex-1">
            <motion.h3
              layout
              className="text-lg sm:text-xl font-semibold text-white truncate"
            >
              {title}
            </motion.h3>
            <p className="text-xs sm:text-sm font-medium text-gray-300 line-clamp-2">{subtitle}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-400 flex-shrink-0"
        >
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" as const }}
            className="overflow-hidden pt-4 text-gray-300"
          >
            <ul className="space-y-2 sm:space-y-3 pl-2 text-xs sm:text-sm font-medium">
              {content.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-2"
                >
                  {item.startsWith("📌") ? (
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/20 text-xs">
                      {item.replace("📌", "").trim()}
                    </Badge>
                  ) : item.startsWith("🛠") ? (
                    <div className="text-xs bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20 text-blue-300">
                      {item.replace("🛠", "").trim()}
                    </div>
                  ) : item.startsWith("📦") ? (
                    <div className="text-xs bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20 text-indigo-300">
                      {item.replace("📦", "").trim()}
                    </div>
                  ) : (
                    <span className="flex items-center gap-2 break-words">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-1.5"></div>
                      <span className="leading-relaxed">{item}</span>
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 