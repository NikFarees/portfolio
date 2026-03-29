"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail size={18} />,
    label: "Email",
    value: "nfarees.faizal@gmail.com",
    href: "mailto:nfarees.faizal@gmail.com",
  },
  {
    icon: <FiPhone size={18} />,
    label: "Phone",
    value: "+60 11-7511 2905",
    href: null,
  },
  {
    icon: <FiMapPin size={18} />,
    label: "Location",
    value: "Kuala Lumpur, Malaysia",
    href: null,
  },
];

const socials = [
  { icon: <FiGithub size={18} />, label: "GitHub", href: "https://github.com/NikFarees" },
  { icon: <FiLinkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/nikfarees" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mvzvkrdn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const disabled = status === "sending" || status === "success";

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading label="// contact" title="Let's Connect" />

      <AnimatedSection delay={0.05}>
        <p className="text-[#a3a3a3] max-w-lg mb-14 leading-relaxed">
          I&apos;m currently open to new opportunities. Whether you have a question, a project
          idea, or just want to say hi — my inbox is always open.
        </p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left — contact info */}
        <AnimatedSection delay={0.1} className="space-y-4">
          {contactInfo.map(({ icon, label, value, href }) => {
            const Inner = (
              <div className="flex items-center gap-4 bg-[#111111] border border-[#262626] rounded-xl p-4 hover:border-accent/25 hover:shadow-[0_0_20px_rgba(34,211,238,0.07)] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/15 transition-colors">
                  {icon}
                </div>
                <div>
                  <p className="font-mono text-accent text-xs mb-0.5 tracking-wider uppercase">{label}</p>
                  <p className="text-[#e5e5e5] text-sm group-hover:text-accent transition-colors duration-200">
                    {value}
                  </p>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href}>{Inner}</a>
            ) : (
              <div key={label}>{Inner}</div>
            );
          })}

          <div className="flex gap-3 pt-2">
            {socials.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#111111] border border-[#262626] rounded-xl px-4 py-3 text-[#a3a3a3] hover:text-accent hover:border-accent/25 hover:shadow-[0_0_16px_rgba(34,211,238,0.07)] transition-all duration-300 text-sm font-medium"
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Right — contact form */}
        <AnimatedSection delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { key: "name", label: "Name", type: "text", placeholder: "Your name" },
              { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label className="font-mono text-accent text-xs block mb-2 tracking-wider uppercase">
                  {label}
                </label>
                <input
                  type={type}
                  required
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="w-full bg-[#111111] border border-[#262626] rounded-xl px-4 py-3 text-[#e5e5e5] text-sm placeholder-[#404040] focus:outline-none focus:border-accent focus:shadow-[0_0_16px_rgba(34,211,238,0.12)] transition-all duration-200 disabled:opacity-50"
                />
              </div>
            ))}

            <div>
              <label className="font-mono text-accent text-xs block mb-2 tracking-wider uppercase">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What's on your mind?"
                disabled={disabled}
                className="w-full bg-[#111111] border border-[#262626] rounded-xl px-4 py-3 text-[#e5e5e5] text-sm placeholder-[#404040] focus:outline-none focus:border-accent focus:shadow-[0_0_16px_rgba(34,211,238,0.12)] transition-all duration-200 resize-none disabled:opacity-50"
              />
            </div>

            <motion.button
              type="submit"
              disabled={disabled}
              whileHover={!disabled ? { scale: 1.01 } : {}}
              whileTap={!disabled ? { scale: 0.99 } : {}}
              className="w-full flex items-center justify-center gap-2 bg-accent text-[#0a0a0a] font-bold py-3.5 rounded-xl text-sm hover:bg-cyan-300 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
            >
              <FiSend size={14} />
              {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-accent font-mono bg-accent/5 border border-accent/20 rounded-lg py-3"
              >
                ✓ Thanks! I&apos;ll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-red-400 font-mono bg-red-500/5 border border-red-500/20 rounded-lg py-3"
              >
                ✗ Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </form>
        </AnimatedSection>
      </div>
    </div>
  );
}
