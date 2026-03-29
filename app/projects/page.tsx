import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Malaysia's Biggest Online Auction",
    period: "Sep 2025 — Present",
    category: "Internship Project",
    description:
      "Real-time live auction system supporting 100+ concurrent bidders during peak sessions. Features sub-second bid updates via WebSocket and secure transactional data management.",
    bullets: [
      "Designed and developed full auction system with backend (Laravel Filament) and frontend (Next.js)",
      "Integrated WebSocket for real-time bidding with sub-second updates",
      "Deployed via Docker for consistent environments; managed MySQL for data integrity",
      "Conducted end-to-end testing, debugging, and client training — reduced post-deploy issues by 30%",
    ],
    tags: ["Laravel", "Filament", "Next.js", "WebSocket", "MySQL", "Docker"],
    github: null,
    live: null,
  },
  {
    title: "Air Conditioning Service Management System",
    period: "Sep 2025 — Present",
    category: "Internship Project",
    description:
      "Service management platform with refined admin interfaces and comprehensive developer documentation.",
    bullets: [
      "Logged 10+ issues via GitHub Issues, improving system stability and release readiness",
      "Refined Laravel Filament admin interfaces, reducing admin task time by 25%",
      "Designed database seeders and model factories for dev, test, and staging environments",
      "Created and maintained developer docs using VitePress, improving onboarding efficiency",
    ],
    tags: ["Laravel", "Filament", "VitePress", "MySQL", "GitHub"],
    github: null,
    live: null,
  },
  {
    title: "School Bookshop Management System",
    period: "Sep 2025 — Present",
    category: "Internship Project",
    description:
      "Online bookshop platform for schools handling hundreds of orders per term, with automated email and report generation.",
    bullets: [
      "Built on WordPress + WooCommerce supporting hundreds of orders per school term",
      "Custom PHP plugins to automate bulk email notifications, reducing manual processing by 40%",
      "Python automation scripts cut reporting time from hours to minutes",
    ],
    tags: ["WordPress", "WooCommerce", "PHP", "Python", "Automation"],
    github: null,
    live: null,
  },
  {
    title: "ESG Consultancy Website",
    period: "Sep 2025 — Present",
    category: "Internship Project",
    description:
      "Professional consultancy website with full deployment, SEO configuration, and 100% email delivery resolution.",
    bullets: [
      "Developed and managed site on WordPress covering design, content, deployment, and maintenance",
      "Configured Google Search Console for proper indexing and improved search visibility",
      "Diagnosed and resolved email config issues — achieved 100% successful outbound email delivery",
    ],
    tags: ["WordPress", "Google Search Console", "Cloudflare", "SMTP"],
    github: null,
    live: null,
  },
  {
    title: "Preschool Website Network",
    period: "Sep 2025 — Present",
    category: "Internship Project",
    description:
      "Multi-site network of 5+ preschool websites with responsive design, strong SEO, and stable Cloudflare-backed hosting.",
    bullets: [
      "Developed and managed 5+ preschool sites on WordPress with responsive design and SEO",
      "Handled Cloudflare DNS, domain configuration, and hosting integration",
      "Completed Google Search Console indexing and pre-launch technical checklists",
    ],
    tags: ["WordPress", "Cloudflare", "DNS", "SEO", "Multi-site"],
    github: null,
    live: null,
  },
  {
    title: "DriveFlow — Driving School Management System",
    period: "Oct 2024 — Jun 2025",
    category: "Final Year Project",
    description:
      "Full-stack web application that digitized manual paper-based workflows for driving schools, improving operational efficiency by 50%.",
    bullets: [
      "Built with PHP, MySQL, and Bootstrap — automated license booking, scheduling, and payment",
      "Digitized previously manual workflows, improving operational efficiency by 50%",
      "Centralized platform supporting students, instructors, and admins with role-based access",
    ],
    tags: ["PHP", "MySQL", "Bootstrap", "Full-Stack"],
    github: null,
    live: null,
  },
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading label="// projects" title="Projects" />

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col border border-[#262626] bg-[#111111] ring-0 hover:border-accent/30 transition-colors rounded-lg gap-0 py-0"
          >
            <CardHeader className="px-6 pt-6 pb-3 gap-1">
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-accent text-xs">{project.category}</span>
                <span className="font-mono text-[#a3a3a3] text-xs whitespace-nowrap">{project.period}</span>
              </div>
              <h3 className="text-[#e5e5e5] font-semibold text-base leading-snug">{project.title}</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">{project.description}</p>
            </CardHeader>

            <CardContent className="px-6 pb-6 flex flex-col flex-1 gap-4">
              <ul className="space-y-1.5 flex-1">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#a3a3a3] text-xs">
                    <span className="text-accent mt-0.5 shrink-0">▹</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="font-mono text-xs text-[#a3a3a3] border-[#262626] bg-[#1a1a1a] rounded px-2 py-0.5 h-auto"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {(project.github || project.live) && (
                <div className="flex items-center gap-4 pt-3 border-t border-[#262626]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a3a3a3] hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <FiGithub size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a3a3a3] hover:text-accent transition-colors"
                      aria-label="Live site"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
