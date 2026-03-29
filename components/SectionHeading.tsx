"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-mono text-accent text-xs mb-3 tracking-[0.2em] uppercase">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#e5e5e5] mb-4">{title}</h2>
      <div className="h-px w-24 bg-gradient-to-r from-accent via-accent/40 to-transparent" />
    </motion.div>
  );
}
