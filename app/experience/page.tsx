"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";

const workExperience = [
  {
    role: "Website & System Developer",
    company: "Latitude Innovation Sdn. Bhd.",
    period: "Sep 2025 — Present",
    type: "Internship",
    bullets: [
      "Contributed to backend and frontend development across 5+ production projects using Laravel, Next.js, Filament, and WordPress (Elementor, WooCommerce).",
      "Assisted in system integration, testing, and debugging, helping deliver stable deployments and reducing post-launch issues by 30%.",
      "Managed domain registration, server configuration, Cloudflare setup, and SMTP email integration for multiple client websites.",
      "Supported website design, client coordination, and technical documentation, enabling faster client onboarding.",
      "Improved system performance and scalability through Docker-based deployments and MySQL optimization.",
    ],
  },
  {
    role: "Lecturer Assistant — Principles of Computer Programming",
    company: "University Kuala Lumpur (MIIT)",
    period: "Oct 2023 — Mar 2024",
    type: "Academic",
    bullets: [
      "Assisted in conducting weekly lectures and practical sessions for 50+ students, covering core programming concepts.",
      "Provided one-on-one academic support and debugging assistance, improving student understanding and problem-solving skills.",
      "Supported preparation of course materials, lab exercises, and assignment grading.",
    ],
  },
];

const extracurricular = [
  { title: "GreenCity AR Competition", detail: "Silver Award — Designed an Augmented Reality green city prototype", icon: "🥈" },
  { title: "Debate Bootcamp", detail: "Enhanced public speaking and critical thinking skills", icon: "🎙️" },
  { title: "Online Business Challenge", detail: "Developed and presented an online business model", icon: "💼" },
  { title: "Innovation TVET Competition", detail: "Showcased creative problem-solving in tech innovation", icon: "🚀" },
  { title: "MARA Mentorship Program", detail: "Networking initiative with CEOs and senior executives from leading organisations", icon: "🤝" },
];

const typeColors: Record<string, string> = {
  Internship: "bg-accent/10 text-accent border-accent/30",
  Academic: "bg-violet-500/10 text-violet-400 border-violet-500/30",
};

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading label="// experience" title="Experience" />

      {/* Work Experience Timeline */}
      <div className="mb-20">
        <AnimatedSection>
          <h3 className="text-lg font-bold text-[#e5e5e5] mb-10 flex items-center gap-2">
            <span className="w-1.5 h-5 rounded-full bg-accent inline-block" />
            Work Experience
          </h3>
        </AnimatedSection>

        <div className="relative">
          {/* Gradient vertical line */}
          <div className="absolute left-3 top-3 bottom-3 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />

          <div className="space-y-10 pl-12">
            {workExperience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-5 w-3 h-3 rounded-full bg-accent border-2 border-[#0a0a0a] shadow-[0_0_8px_rgba(34,211,238,0.5)] z-10" />

                <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 hover:border-accent/25 hover:shadow-[0_4px_24px_rgba(34,211,238,0.07)] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-[#e5e5e5] font-bold text-base">{job.role}</h4>
                        <span className={`font-mono text-xs px-2 py-0.5 rounded-full border ${typeColors[job.type]}`}>
                          {job.type}
                        </span>
                      </div>
                      <p className="text-[#a3a3a3] text-sm">{job.company}</p>
                    </div>
                    <span className="font-mono text-accent text-xs bg-accent/5 border border-accent/20 px-3 py-1.5 rounded-lg whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#a3a3a3] text-sm">
                        <span className="text-accent mt-1 shrink-0">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Extracurricular */}
      <AnimatedSection delay={0.1}>
        <h3 className="text-lg font-bold text-[#e5e5e5] mb-8 flex items-center gap-2">
          <span className="w-1.5 h-5 rounded-full bg-accent inline-block" />
          Extracurricular Activities
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {extracurricular.map(({ title, detail, icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-[#111111] border border-[#262626] rounded-xl p-5 hover:border-accent/25 hover:shadow-[0_4px_20px_rgba(34,211,238,0.07)] transition-all duration-300"
            >
              <div className="text-2xl mb-3">{icon}</div>
              <h4 className="text-[#e5e5e5] font-semibold text-sm mb-2">{title}</h4>
              <p className="text-[#a3a3a3] text-xs leading-relaxed">{detail}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
