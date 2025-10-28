"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // You can replace this with your API endpoint later
      await new Promise((r) => setTimeout(r, 1000));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-section"
      className="py-24 px-4 sm:px-6 lg:px-8 text-center"
    >
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto flex flex-col gap-5 text-left"
      >
        <Input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          disabled={loading}
          className="mt-2 text-lg py-5 font-medium"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>

        {status === "success" && (
          <p className="text-green-600 mt-2 text-center">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2 text-center">
            ❌ Failed to send. Please try again.
          </p>
        )}
      </form>

      <div className="mt-12 flex justify-center space-x-6">
        <a
          href="mailto:vivek.indie.dev@gmail.com"
          className="hover:text-accent transition-colors"
          aria-label="Email"
        >
          <Mail size={28} />
        </a>
        <a
          href="https://github.com/vickvey"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/vickvey"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>
      </div>
    </section>
  );
}
