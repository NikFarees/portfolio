import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import TypewriterText from "@/components/TypewriterText";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <p className="font-mono text-accent text-sm mb-4">Hi, my name is</p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e5e5e5] leading-tight mb-4">
          Nik Farees
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#a3a3a3] mb-6 min-h-[2.5rem]">
          <TypewriterText />
        </h2>

        <p className="text-[#a3a3a3] max-w-xl leading-relaxed mb-10 text-base sm:text-lg">
          Software Engineering student and aspiring developer with strong backend and
          frontend skills. Hands-on experience across full-stack web development,
          backend systems, and automation. Based in{" "}
          <span className="text-[#e5e5e5]">Kuala Lumpur, Malaysia</span>.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Link
            href="/projects"
            className="px-6 py-3 bg-accent text-[#0a0a0a] font-semibold rounded text-sm hover:bg-cyan-300 transition-colors"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-accent text-accent font-semibold rounded text-sm hover:bg-accent/10 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/NikFarees"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikfarees"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href="mailto:nfarees.faizal@gmail.com"
            className="text-[#a3a3a3] hover:text-accent transition-colors"
            aria-label="Email"
          >
            <FiMail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
