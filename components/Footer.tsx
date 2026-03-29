import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-[#0a0a0a] py-8 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#a3a3a3] text-sm font-mono">
          © {new Date().getFullYear()} Nik Farees
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/NikFarees"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikfarees"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="mailto:nfarees.faizal@gmail.com"
            className="text-[#a3a3a3] hover:text-accent transition-colors"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
