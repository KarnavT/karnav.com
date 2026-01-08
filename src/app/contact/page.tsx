"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: any) => {
    e.preventDefault();
    e.stopPropagation?.();
    const email = "karnavnt@gmail.com";
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(email).catch(() => {});
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 1900);
  }; 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({ type: "error", message: "Please enter your name." });
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return false;
    }
    if (!formData.subject.trim()) {
      setStatus({ type: "error", message: "Please enter a subject." });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: "error", message: "Please enter a message." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ type: "loading", message: "" });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  const isLoading = status.type === "loading";

  return (
    <div className="mx-auto w-full max-w-2xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
          Contact Me
        </h1>
        <p className="text-base text-gray-600">
          Have a question or want to work together? Feel free to reach out.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Status Message */}
        {status.type !== "idle" && (
          <div
            className={`rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
              status.type === "success"
                ? "border border-green-200 bg-green-50 text-green-700"
                : status.type === "error"
                  ? "border border-red-200 bg-red-50 text-red-700"
                  : "border border-blue-200 bg-blue-50 text-blue-700"
            }`}
          >
            {status.type === "loading" ? (
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              status.message
            )}
          </div>
        )}

        {/* Name Input */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Your name"
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:text-gray-500"
          />
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="your@email.com"
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:text-gray-500"
          />
        </div>

        {/* Subject Input */}
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="What is this about?"
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:text-gray-500"
          />
        </div>

        {/* Message Textarea */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Tell me more..."
            rows={6}
            className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:text-gray-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed active:scale-95"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Alternative Contact Methods */}
      <div className="border-t border-gray-200 pt-8">
        <p className="mb-4 text-sm text-gray-600">
          Prefer other ways to connect?
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href="mailto:karnavnt@gmail.com"
            onClick={handleCopyEmail}
            className="rounded-lg border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:border-gray-300"
          >
            <span className="inline-flex items-center justify-center gap-2">
              <span className={`btn-label ${copiedEmail ? "shift-left" : ""}`}>Email</span>
              {copiedEmail && (
                <span role="status" aria-live="polite" className="inline-flex items-center rounded-full bg-green-100 text-green-800 px-2 py-0.5 text-xs font-medium animate-fade-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-1">Copied</span>
                </span>
              )}
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/karnav-trivedi/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:border-gray-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
