import React from "react";
import { motion } from "framer-motion";

/**
 * HoverCard (simplified & cleaner)
 * Props:
 *  - title
 *  - image
 *  - description (optional)
 *  - onClick
 *  - variant: "project" | "certificate"
 */
export default function HoverCard({
  title,
  image,
  description,
  onClick,
  variant = "project",
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="relative min-w-[300px] lg:min-w-[340px] h-[400px] rounded-2xl overflow-hidden shadow-md bg-white/70 dark:bg-black/10 border border-base-200 cursor-pointer hover:shadow-xl"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      aria-label={title}
    >
      {/* Image */}
      <div className="h-[75%] w-full flex items-center justify-center bg-base-200">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`max-h-full max-w-full ${
            variant === "project"
              ? "object-cover w-full h-full"
              : "object-contain p-3"
          }`}
        />
      </div>

      {/* Content */}
      <div className="px-4 py-3 flex flex-col justify-center h-[25%]">
        <h3 className="text-lg font-semibold line-clamp-2 mb-1">{title}</h3>
        {variant === "project" && description && (
          <p className="text-sm opacity-80 line-clamp-2">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
