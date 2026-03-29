"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { FiGithub, FiExternalLink, FiFilter } from "react-icons/fi";

const projects = [
  {
    title: "Malaysia's Biggest Online Auction",
    period: "Sep 2025 — Present",
    category: "Internship Project",
    description:
      "Real-time live auction system supporting 100+ concurrent bidders. Features sub-second bid updates via WebSocket and secure transactional data management.",
    bullets: [
      "Designed full auction system with Laravel Filament backend and Next.js frontend",
      "Integrated WebSocket for real-time bidding with sub-second updates",
      "Deployed via Docker; managed MySQL for data integrity",
      "Conducted end-to-end testing — reduced post-deploy issues by 30%",
    ],
    tags: ["Laravel", "Filament", "Next.js", "WebSocket", "MySQL", "Docker"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "AC Service Management System",
    period: "Sep 2025 — Present",
    category: "Internship Project",
    description:
      "Service management platform with refined admin interfaces and comprehensive developer documentation.",
    bullets: [
      "Logged 10+ issues via GitHub Issues, improving stability and release readiness",
      "Refined Filament admin interfaces, reducing admin task time by 25%",
      "Designed seeders and model factories for dev, test, and staging environments",
      "Created developer docs using VitePress for smoother onboarding",
    ],
    tags: ["Laravel", "Filament", "VitePress", "MySQL", "GitHub"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "School Bookshop Management System",
    period: "Sep 2025 — Present",
    category: "Internship Project",
    description:
      "Online bookshop handling hundreds of orders per term with automated email and report generation.",
    bullets: [
      "Built on WordPress + WooCommerce supporting hundreds of orders per school term",
      "Custom PHP plugins automated bulk emails, reducing processing by 40%",
      "Python scripts cut reporting time from hours to minutes",
    ],
    tags: ["WordPress", "WooCommerce", "PHP", "Python", "Automation"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "ESG Consultancy Website",
    period: "Sep 2025 — Present",
    category: "Internship Project",
    description:
      "Professional consultancy website with full deployment, SEO, and 100% email delivery resolution.",
    bullets: [
      "Developed and managed WordPress site — design, content, deployment, maintenance",
      "Configured Google Search Console for proper indexing",
      "Resolved email config issues — achieved 100% outbound email delivery",
    ],
    tags: ["WordPress", "Google Search Console", "Cloudflare", "SMTP"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "Preschool Website Network",
    period: "Sep 2025 — Present",
    category: "Internship Project",
    description:
      "Multi-site network of 5+ preschool websites with responsive design, SEO, and Cloudflare-backed hosting.",
    bullets: [
      "Developed and managed 5+ preschool sites with responsive design and SEO",
      "Handled Cloudflare DNS, domain configuration, and hosting integration",
      "Completed Google Search Console indexing and pre-launch checklists",
    ],
    tags: ["WordPress", "Cloudflare", "DNS", "SEO", "Multi-site"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "DriveFlow — Driving School System",
    period: "Oct 2024 — Jun 2025",
    category: "Final Year Project",
    description:
      "Full-stack web app that digitized manual paper-based workflows for driving schools, improving efficiency by 50%.",
    bullets: [
      "Built with PHP, MySQL, Bootstrap — automated booking, scheduling, and payment",
      "Digitized manual workflows, improving operational efficiency by 50%",
      "Role-based access for students, instructors, and admins",
    ],
    tags: ["PHP", "MySQL", "Bootstrap", "Full-Stack"],
    github: null,
    live: null,
    featured: true,
  },
];

const categories = ["All", "Internship Project", "Final Year Project"];

const categoryColors: Record<string, string> = {
  "Internship Project": "text-accent bg-accent/10 border-accent/30",
  "Final Year Project": "text-violet-400 bg-violet-500/10 border-violet-500/30",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading label="// projects" title="Projects" />

      {/* Filter tabs */}
      <motion.div
        className="flex flex-wrap gap-2 mb-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="flex items-center gap-1.5 text-[#a3a3a3] text-xs mr-1 self-center">
          <FiFilter size={12} /> Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveFilter(cat)}
            className={`font-mono text-xs px-4 py-2 rounded-lg border transition-all duration-200 ${
              activeFilter === cat
                ? "bg-accent text-[#0a0a0a] border-accent font-bold shadow-[0_0_16px_rgba(34,211,238,0.3)]"
                : "bg-[#111111] text-[#a3a3a3] border-[#262626] hover:text-[#e5e5e5] hover:border-[#404040]"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Project grid */}
      <motion.div layout className="grid sm:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group bg-[#111111] border border-[#262626] rounded-xl overflow-hidden hover:border-accent/25 hover:shadow-[0_8px_32px_rgba(34,211,238,0.08)] transition-all duration-300 flex flex-col"
            >
              {/* Top accent line on hover */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded-full border ${
                      categoryColors[project.category]
                    }`}
                  >
                    {project.category}
                  </span>
                  <span className="font-mono text-[#a3a3a3] text-xs whitespace-nowrap">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-[#e5e5e5] font-bold text-base mb-2 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-[#a3a3a3] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#a3a3a3] text-xs">
                      <span className="text-accent mt-0.5 shrink-0">▹</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs bg-[#1a1a1a] border border-[#262626] text-[#a3a3a3] px-2.5 py-1 rounded-md hover:border-accent/30 hover:text-accent/80 transition-colors duration-150"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.github || project.live) && (
                  <div className="flex items-center gap-4 pt-4 border-t border-[#262626]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[#a3a3a3] hover:text-accent transition-colors text-xs"
                        aria-label="GitHub"
                      >
                        <FiGithub size={14} /> Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[#a3a3a3] hover:text-accent transition-colors text-xs"
                        aria-label="Live site"
                      >
                        <FiExternalLink size={14} /> Live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
