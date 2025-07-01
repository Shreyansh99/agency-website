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
        "rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm px-5 py-4 shadow-md transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg hover:border-blue-500/40 cursor-pointer"
      )}
    >
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Icon className="h-6 w-6 text-white" />
          </motion.div>
          <div>
            <motion.h3
              layout
              className="text-xl font-semibold text-white"
            >
              {title}
            </motion.h3>
            <p className="text-sm font-medium text-gray-300">{subtitle}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-400"
        >
          <ChevronDown className="h-5 w-5" />
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
            <ul className="space-y-3 pl-2 text-sm font-medium">
              {content.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-2"
                >
                  {item.startsWith("📌") ? (
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/20">
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
                    <span className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                      {item}
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