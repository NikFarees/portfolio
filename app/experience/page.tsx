import SectionHeading from "@/components/SectionHeading";

const workExperience = [
  {
    role: "Web Developer Intern",
    company: "Latitude Innovation Sdn. Bhd.",
    period: "Sep 2025 — Feb 2026",
    bullets: [
      "Contributed to backend and frontend development across 5+ production projects using Laravel, Next.js, Filament, and WordPress (Elementor, WooCommerce).",
      "Assisted in system integration, testing, and debugging, helping deliver stable deployments and reducing post-launch issues by 30%.",
      "Managed domain registration, server configuration, Cloudflare setup, and SMTP email integration for multiple client websites, ensuring reliable uptime and email delivery.",
      "Supported website design, client coordination, and technical documentation, enabling smoother project handovers and faster client onboarding.",
      "Improved system performance and scalability through Docker-based deployments and MySQL optimization.",
    ],
  },
  {
    role: "Lecturer Assistant — Principles of Computer Programming",
    company: "University Kuala Lumpur (MIIT)",
    period: "Oct 2023 — Mar 2024",
    bullets: [
      "Assisted in conducting weekly lectures and practical sessions for 50+ students, covering core programming concepts.",
      "Provided one-on-one academic support and debugging assistance, improving student understanding and problem-solving skills.",
      "Supported preparation of course materials, lab exercises, and assignment grading, contributing to efficient course delivery and assessment processes.",
    ],
  },
];

const extracurricular = [
  { title: "GreenCity AR Competition", detail: "Silver Award — Designed an Augmented Reality green city prototype" },
  { title: "Debate Bootcamp", detail: "Enhanced public speaking and critical thinking skills" },
  { title: "Online Business Challenge", detail: "Developed and presented an online business model" },
  { title: "Innovation TVET Competition", detail: "Showcased creative problem-solving in tech innovation" },
  { title: "MARA Mentorship Program", detail: "Networking initiative with CEOs and senior executives from leading organizations" },
];

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading label="// experience" title="Experience" />

      {/* Work Experience Timeline */}
      <div className="mb-20">
        <h3 className="text-lg font-semibold text-[#e5e5e5] mb-8">Work Experience</h3>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[#262626]" />

          <div className="space-y-12 pl-8">
            {workExperience.map((job, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-[#0a0a0a]" />

                <p className="font-mono text-accent text-xs mb-1">{job.period}</p>
                <h4 className="text-[#e5e5e5] font-semibold text-base mb-0.5">{job.role}</h4>
                <p className="text-[#a3a3a3] text-sm mb-4">{job.company}</p>
                <ul className="space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#a3a3a3] text-sm">
                      <span className="text-accent mt-1 shrink-0">▹</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extracurricular */}
      <div>
        <h3 className="text-lg font-semibold text-[#e5e5e5] mb-6">Extracurricular Activities</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {extracurricular.map(({ title, detail }) => (
            <div
              key={title}
              className="bg-[#111111] border border-[#262626] rounded-lg p-5"
            >
              <h4 className="text-[#e5e5e5] font-medium text-sm mb-1">{title}</h4>
              <p className="text-[#a3a3a3] text-sm">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
