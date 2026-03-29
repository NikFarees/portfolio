"use client";

import SectionHeading from "@/components/SectionHeading";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";

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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
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

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading label="// contact" title="Let's Connect" />

      <p className="text-[#a3a3a3] max-w-lg mb-12 leading-relaxed">
        I&apos;m currently open to new opportunities. Whether you have a question, a project idea,
        or just want to say hi — my inbox is always open.
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: contact info */}
        <div>
          <div className="space-y-5 mb-10">
            <a
              href="mailto:nfarees.faizal@gmail.com"
              className="flex items-center gap-4 bg-[#111111] border border-[#262626] rounded-lg p-4 hover:border-[#22d3ee44] transition-colors group"
            >
              <div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-accent">
                <FiMail size={18} />
              </div>
              <div>
                <p className="font-mono text-accent text-xs mb-0.5">Email</p>
                <p className="text-[#e5e5e5] text-sm group-hover:text-accent transition-colors">
                  nfarees.faizal@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-[#111111] border border-[#262626] rounded-lg p-4">
              <div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-accent">
                <FiPhone size={18} />
              </div>
              <div>
                <p className="font-mono text-accent text-xs mb-0.5">Phone</p>
                <p className="text-[#e5e5e5] text-sm">+601175112905</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#111111] border border-[#262626] rounded-lg p-4">
              <div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-accent">
                <FiMapPin size={18} />
              </div>
              <div>
                <p className="font-mono text-accent text-xs mb-0.5">Location</p>
                <p className="text-[#e5e5e5] text-sm">Kuala Lumpur, Malaysia</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/NikFarees"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#262626] rounded-lg px-4 py-3 text-[#a3a3a3] hover:text-accent hover:border-[#22d3ee44] transition-colors text-sm"
            >
              <FiGithub size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nikfarees"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#262626] rounded-lg px-4 py-3 text-[#a3a3a3] hover:text-accent hover:border-[#22d3ee44] transition-colors text-sm"
            >
              <FiLinkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: contact form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-mono text-accent text-xs block mb-1.5">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              disabled={status === "sending" || status === "success"}
              className="w-full bg-[#111111] border border-[#262626] rounded-lg px-4 py-3 text-[#e5e5e5] text-sm placeholder-[#a3a3a3] focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
            />
          </div>
          <div>
            <label className="font-mono text-accent text-xs block mb-1.5">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              disabled={status === "sending" || status === "success"}
              className="w-full bg-[#111111] border border-[#262626] rounded-lg px-4 py-3 text-[#e5e5e5] text-sm placeholder-[#a3a3a3] focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
            />
          </div>
          <div>
            <label className="font-mono text-accent text-xs block mb-1.5">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What's on your mind?"
              disabled={status === "sending" || status === "success"}
              className="w-full bg-[#111111] border border-[#262626] rounded-lg px-4 py-3 text-[#e5e5e5] text-sm placeholder-[#a3a3a3] focus:outline-none focus:border-accent transition-colors resize-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className="w-full bg-accent text-[#0a0a0a] font-semibold py-3 rounded-lg text-sm hover:bg-cyan-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-accent font-mono">
              ✓ Thanks! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400 font-mono">
              ✗ Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
