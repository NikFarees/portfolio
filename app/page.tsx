"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from "react-icons/fi";
import TypewriterText from "@/components/TypewriterText";

const stats = [
  { value: "6+", label: "Projects Built" },
  { value: "3.81", label: "CGPA" },
  { value: "10+", label: "Technologies" },
  { value: "7+", label: "Certifications" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(34,211,238,0.07)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      {/* Ambient glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — text */}
          <div className="flex-1 min-w-0">
            <motion.p
              className="font-mono text-accent text-xs mb-4 tracking-[0.3em] uppercase"
              {...fadeUp(0.1)}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e5e5e5] leading-tight mb-4"
              {...fadeUp(0.2)}
            >
              Nik Farees
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl font-medium mb-6 min-h-[2rem]"
              {...fadeUp(0.3)}
            >
              <TypewriterText />
            </motion.div>

            <motion.p
              className="text-[#a3a3a3] max-w-lg leading-relaxed mb-10 text-base"
              {...fadeUp(0.4)}
            >
              Software Engineering graduate & current{" "}
              <span className="text-[#e5e5e5] font-medium">Website & System Developer</span> at{" "}
              <span className="text-accent">Latitude Innovation</span>. Specialising in
              full-stack web development, backend systems, and automation. Based in{" "}
              <span className="text-[#e5e5e5]">Kuala Lumpur, Malaysia</span>.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3 mb-10" {...fadeUp(0.5)}>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-[#0a0a0a] font-bold rounded-lg text-sm hover:bg-cyan-300 transition-all duration-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
              >
                View Projects
                <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent/40 text-accent font-semibold rounded-lg text-sm hover:bg-accent/10 hover:border-accent transition-all duration-200"
              >
                <FiDownload size={14} />
                Download Resume
              </a>
            </motion.div>

            <motion.div className="flex items-center gap-5" {...fadeUp(0.6)}>
              {[
                { href: "https://github.com/NikFarees", icon: <FiGithub size={20} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/nikfarees", icon: <FiLinkedin size={20} />, label: "LinkedIn" },
                { href: "mailto:nfarees.faizal@gmail.com", icon: <FiMail size={20} />, label: "Email" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="text-[#a3a3a3] hover:text-accent transition-colors duration-200 hover:scale-110 transform"
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — profile photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-[288px] lg:h-[288px]">
              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/25"
                style={{ margin: "-14px" }}
                animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/12"
                style={{ margin: "-28px" }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              />
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl scale-125 pointer-events-none" />
              {/* Initials fallback */}
              <div className="absolute inset-0 rounded-full bg-[#111111] border-2 border-[#262626] flex items-center justify-center z-0">
                <span className="font-mono text-5xl font-bold text-[#262626]">NF</span>
              </div>
              {/* Profile image */}
              <Image
                src="/profile.jpg"
                alt="Nik Farees"
                fill
                className="rounded-full object-cover object-top border-2 border-[#262626] z-10 relative"
                priority
              />
            </div>
          </motion.div>

        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.75, ease: "easeOut" }}
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="group bg-[#111111] border border-[#262626] rounded-xl p-5 text-center hover:border-accent/30 hover:bg-[#111111] hover:shadow-[0_0_24px_rgba(34,211,238,0.07)] transition-all duration-300 cursor-default"
            >
              <p className="text-2xl font-bold text-accent font-mono mb-1 group-hover:scale-105 transition-transform duration-200">
                {value}
              </p>
              <p className="text-[#a3a3a3] text-xs">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
