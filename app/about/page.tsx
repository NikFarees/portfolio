import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "PHP", "Python", "JavaScript", "C#"],
  },
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
  },
  {
    category: "Frameworks",
    skills: ["Laravel", "Filament", "Next.js", "React.js", "ASP.NET MVC", "Flutter"],
  },
  {
    category: "CMS & E-Commerce",
    skills: ["WordPress", "WooCommerce", "Elementor", "Custom WP Plugins"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "SQLite"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "Cloudflare", "Ubuntu Linux", "WebSocket", "XAMPP"],
  },
  {
    category: "Concepts",
    skills: ["REST APIs", "System Integration", "Automation"],
  },
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

      {/* Bio */}
      <p className="text-[#a3a3a3] leading-relaxed max-w-2xl mb-16 text-base">
        I&apos;m a Software Engineering student at{" "}
        <span className="text-[#e5e5e5]">University Kuala Lumpur (MIIT)</span>, graduating in
        Feb 2026 with a CGPA of 3.81. My background from a Tahfiz school has instilled strong
        discipline, adaptability, and attention to detail — qualities I carry into every project.
        I specialize in{" "}
        <span className="text-accent">Full-Stack Web Development</span>,{" "}
        <span className="text-accent">Backend Systems</span>, and{" "}
        <span className="text-accent">Automation</span>, with hands-on experience across real
        production environments.
      </p>

      {/* Education */}
      <div className="mb-16">
        <h3 className="text-lg font-semibold text-[#e5e5e5] mb-6">Education</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              period: "Sep 2022 — Feb 2026",
              degree: "Bachelor of IT (Hons) in Software Engineering",
              school: "University Kuala Lumpur (MIIT)",
              cgpa: "3.81",
            },
            {
              period: "Aug 2021 — Aug 2022",
              degree: "Foundation in Computer Technology",
              school: "University Kuala Lumpur (MIIT)",
              cgpa: "3.93",
            },
          ].map((edu) => (
            <Card key={edu.degree} className="border border-[#262626] bg-[#111111] ring-0 rounded-lg gap-0 py-0">
              <CardContent className="p-5">
                <p className="font-mono text-accent text-xs mb-1">{edu.period}</p>
                <h4 className="text-[#e5e5e5] font-semibold mb-1">{edu.degree}</h4>
                <p className="text-[#a3a3a3] text-sm">{edu.school}</p>
                <p className="text-[#a3a3a3] text-sm mt-1">
                  CGPA: <span className="text-accent font-mono">{edu.cgpa}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-16">
        <h3 className="text-lg font-semibold text-[#e5e5e5] mb-6">Technical Skills</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(({ category, skills }) => (
            <Card key={category} className="border border-[#262626] bg-[#111111] ring-0 rounded-lg gap-0 py-0">
              <CardContent className="p-5">
                <p className="font-mono text-accent text-xs mb-3">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="font-mono text-xs text-[#e5e5e5] border-[#262626] bg-[#1a1a1a] rounded px-2 py-1 h-auto"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-16">
        <h3 className="text-lg font-semibold text-[#e5e5e5] mb-6">Certifications</h3>
        <ul className="space-y-3">
          {certifications.map((cert) => (
            <li key={cert} className="flex items-start gap-3 text-[#a3a3a3] text-sm">
              <span className="text-accent mt-1">▹</span>
              {cert}
            </li>
          ))}
        </ul>
      </div>

      {/* Awards */}
      <div className="mb-16">
        <h3 className="text-lg font-semibold text-[#e5e5e5] mb-6">Awards & Achievements</h3>
        <ul className="space-y-3">
          {awards.map((award) => (
            <li key={award} className="flex items-start gap-3 text-[#a3a3a3] text-sm">
              <span className="text-accent mt-1">▹</span>
              {award}
            </li>
          ))}
        </ul>
      </div>

      {/* Languages */}
      <div>
        <h3 className="text-lg font-semibold text-[#e5e5e5] mb-4">Languages</h3>
        <div className="flex gap-4 flex-wrap">
          <Card className="border border-[#262626] bg-[#111111] ring-0 rounded gap-0 py-0">
            <CardContent className="px-4 py-2 text-sm text-[#a3a3a3]">
              Bahasa Melayu — <span className="text-[#e5e5e5]">Native</span>
            </CardContent>
          </Card>
          <Card className="border border-[#262626] bg-[#111111] ring-0 rounded gap-0 py-0">
            <CardContent className="px-4 py-2 text-sm text-[#a3a3a3]">
              English — <span className="text-[#e5e5e5]">Professional Working Proficiency</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
