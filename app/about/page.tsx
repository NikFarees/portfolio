"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { FiAward, FiCheckCircle } from "react-icons/fi";

const quickStats = [
  { value: "3.81", label: "CGPA", sub: "Dean's List ×6" },
  { value: "6+", label: "Projects", sub: "Production & Academic" },
  { value: "7+", label: "Certs", sub: "Industry Recognised" },
  { value: "2+", label: "Years", sub: "Coding Experience" },
];

const skillGroups = [
  { category: "Languages", color: "from-cyan-500/20 to-cyan-500/5", skills: ["Java", "PHP", "Python", "JavaScript", "C#"] },
  { category: "Frontend", color: "from-sky-500/20 to-sky-500/5", skills: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"] },
  { category: "Frameworks", color: "from-violet-500/20 to-violet-500/5", skills: ["Laravel", "Filament", "Next.js", "React.js", "ASP.NET MVC", "Flutter"] },
  { category: "CMS & E-Commerce", color: "from-blue-500/20 to-blue-500/5", skills: ["WordPress", "WooCommerce", "Elementor", "Custom WP Plugins"] },
  { category: "Databases", color: "from-emerald-500/20 to-emerald-500/5", skills: ["MySQL", "SQLite"] },
  { category: "DevOps & Tools", color: "from-orange-500/20 to-orange-500/5", skills: ["Docker", "Git", "GitHub", "Cloudflare", "Ubuntu Linux", "WebSocket", "XAMPP"] },
  { category: "Concepts", color: "from-rose-500/20 to-rose-500/5", skills: ["REST APIs", "System Integration", "Automation"] },
];

const certifications = [
  "Google Project Management Professional Certificate (Coursera)",
  "Microsoft Certified: Azure AI Fundamentals",
  "CompTIA Cloud+ ce Certification",
  "Cisco IT Essentials",
  "Top Coders 2024 — Python Programming",
  "SwiftUI Academy — iOS Development",
  "Program Usahawan Peranti SPACE",
];

const awards = [
  "Best Student Award — Foundation in Information Technology",
  "Best Student Award — Kursus Kejurulatihan Silat",
  "Dean's List Award — Semester 1, 2, 3, 4, 5 and 6",
  "Black Belt Taekwondo & Red Belt Silat",
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading label="// about" title="About Me" />

      {/* Quick stats */}
      <AnimatedSection className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
        {quickStats.map(({ value, label, sub }) => (
          <div
            key={label}
            className="bg-[#111111] border border-[#262626] rounded-xl p-5 text-center hover:border-accent/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.07)] transition-all duration-300"
          >
            <p className="text-2xl font-bold text-accent font-mono mb-0.5">{value}</p>
            <p className="text-[#e5e5e5] text-xs font-medium mb-0.5">{label}</p>
            <p className="text-[#a3a3a3] text-[10px]">{sub}</p>
          </div>
        ))}
      </AnimatedSection>

      {/* Bio */}
      <AnimatedSection delay={0.1} className="mb-16">
        <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 border-l-2 border-l-accent">
          <p className="text-[#a3a3a3] leading-relaxed text-base">
            I&apos;m a Software Engineering student at{" "}
            <span className="text-[#e5e5e5] font-medium">University Kuala Lumpur (MIIT)</span>,
            graduating in Feb 2026 with a CGPA of 3.81. My background from a Tahfiz school
            has instilled strong discipline, adaptability, and attention to detail — qualities I
            carry into every project. I specialize in{" "}
            <span className="text-accent font-medium">Full-Stack Web Development</span>,{" "}
            <span className="text-accent font-medium">Backend Systems</span>, and{" "}
            <span className="text-accent font-medium">Automation</span>, with hands-on experience
            across real production environments.
          </p>
        </div>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection delay={0.15} className="mb-16">
        <h3 className="text-lg font-bold text-[#e5e5e5] mb-6 flex items-center gap-2">
          <span className="w-1.5 h-5 rounded-full bg-accent inline-block" />
          Education
        </h3>
        <div className="space-y-4">
          {[
            {
              period: "Sep 2022 — Feb 2026",
              degree: "Bachelor of IT (Hons) in Software Engineering",
              school: "University Kuala Lumpur (MIIT)",
              cgpa: "3.81",
              status: "Graduating",
            },
            {
              period: "Aug 2021 — Aug 2022",
              degree: "Foundation in Computer Technology",
              school: "University Kuala Lumpur (MIIT)",
              cgpa: "3.93",
              status: "Completed",
            },
          ].map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-[#111111] border border-[#262626] rounded-xl p-5 hover:border-accent/25 hover:shadow-[0_0_20px_rgba(34,211,238,0.06)] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <p className="font-mono text-accent text-xs mb-1.5">{edu.period}</p>
                <h4 className="text-[#e5e5e5] font-semibold mb-1">{edu.degree}</h4>
                <p className="text-[#a3a3a3] text-sm">{edu.school}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-2xl font-bold text-accent font-mono">{edu.cgpa}</p>
                <p className="text-[#a3a3a3] text-xs">CGPA</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection delay={0.2} className="mb-16">
        <h3 className="text-lg font-bold text-[#e5e5e5] mb-6 flex items-center gap-2">
          <span className="w-1.5 h-5 rounded-full bg-accent inline-block" />
          Technical Skills
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map(({ category, color, skills }, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -2 }}
              className="bg-[#111111] border border-[#262626] rounded-xl overflow-hidden hover:border-accent/20 hover:shadow-[0_4px_20px_rgba(34,211,238,0.07)] transition-all duration-300"
            >
              <div className={`bg-gradient-to-b ${color} px-4 pt-4 pb-2`}>
                <p className="font-mono text-accent text-xs font-semibold tracking-wider uppercase">
                  {category}
                </p>
              </div>
              <div className="px-4 pb-4 pt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs bg-[#1a1a1a] border border-[#262626] text-[#e5e5e5] px-2.5 py-1 rounded-md hover:border-accent/30 hover:text-accent transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Certifications + Awards side by side */}
      <AnimatedSection delay={0.25} className="grid lg:grid-cols-2 gap-8 mb-16">
        <div>
          <h3 className="text-lg font-bold text-[#e5e5e5] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-5 rounded-full bg-accent inline-block" />
            Certifications
          </h3>
          <div className="space-y-2.5">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-start gap-3 bg-[#111111] border border-[#262626] rounded-lg px-4 py-3 hover:border-accent/20 transition-colors duration-200"
              >
                <FiCheckCircle size={14} className="text-accent mt-0.5 shrink-0" />
                <span className="text-[#a3a3a3] text-sm leading-snug">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#e5e5e5] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-5 rounded-full bg-accent inline-block" />
            Awards & Achievements
          </h3>
          <div className="space-y-2.5">
            {awards.map((award) => (
              <div
                key={award}
                className="flex items-start gap-3 bg-[#111111] border border-[#262626] rounded-lg px-4 py-3 hover:border-accent/20 transition-colors duration-200"
              >
                <FiAward size={14} className="text-accent mt-0.5 shrink-0" />
                <span className="text-[#a3a3a3] text-sm leading-snug">{award}</span>
              </div>
            ))}
          </div>

          {/* Languages */}
          <h3 className="text-lg font-bold text-[#e5e5e5] mt-8 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-5 rounded-full bg-accent inline-block" />
            Languages
          </h3>
          <div className="flex flex-col gap-2.5">
            {[
              { lang: "Bahasa Melayu", level: "Native" },
              { lang: "English", level: "Professional Working Proficiency" },
            ].map(({ lang, level }) => (
              <div
                key={lang}
                className="flex items-center justify-between bg-[#111111] border border-[#262626] rounded-lg px-4 py-3"
              >
                <span className="text-[#e5e5e5] text-sm font-medium">{lang}</span>
                <span className="font-mono text-accent text-xs">{level}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
