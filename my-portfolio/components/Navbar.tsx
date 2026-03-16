"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/about" },
];

const EMAIL = "rabihzsiddiqui@gmail.com";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!emailRevealed) return;
    const handler = (e: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setEmailRevealed(false);
        setCopied(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [emailRevealed]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-lg font-semibold text-white tracking-tight hover:opacity-80 transition-opacity"
        >
          Rabih<span className="text-indigo-400">.</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div ref={contactRef} className="relative">
            {!emailRevealed ? (
              <button
                onClick={() => setEmailRevealed(true)}
                className="text-sm px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 hover:scale-105"
              >
                Contact
              </button>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 transition-all duration-300">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  {EMAIL}
                </a>
                <button
                  onClick={handleCopy}
                  aria-label={copied ? "Copied" : "Copy email"}
                  className="text-zinc-500 hover:text-indigo-400 transition-colors duration-200 flex-shrink-0"
                >
                  {copied ? (
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-4 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {!emailRevealed ? (
            <button
              onClick={() => setEmailRevealed(true)}
              className="text-sm text-center w-full px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-200 mt-1"
            >
              Contact
            </button>
          ) : (
            <div className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-full bg-zinc-800 border border-zinc-700 mt-1">
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 truncate"
                onClick={() => setMenuOpen(false)}
              >
                {EMAIL}
              </a>
              <button
                onClick={() => { handleCopy(); setTimeout(() => setMenuOpen(false), 1200); }}
                aria-label={copied ? "Copied" : "Copy email"}
                className="text-zinc-500 hover:text-indigo-400 transition-colors duration-200 flex-shrink-0"
              >
                {copied ? (
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-4 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
