import type { ReactNode } from "react";

type Project = {
  title: string;
  subtitle?: string;
  titleNode?: ReactNode;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  slidesUrl?: string;
};

const projects: Project[] = [
  {
    title: "audoRa",
    subtitle: "browser-based audio extractor",
    titleNode: (
      <a
        href="https://audora-audio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
      >
        audoRa
      </a>
    ),
    description:
      "Pulls audio from video files right in the browser using ffmpeg.wasm, so nothing gets uploaded anywhere. Supports common formats like MP4, WebM, MOV, and MKV, with options for bitrate, channels, and trimming before export.",
    tech: ["Next.js", "TypeScript", "ffmpeg.wasm", "Tailwind CSS"],
    liveUrl: "https://audora-audio.vercel.app/",
    githubUrl: "https://github.com/rabihzsiddiqui/audora-audio-extractor",
  },
  {
    title: "compResso",
    subtitle: "browser-based video compressor",
    titleNode: (
      <a
        href="https://compresso-beta.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
      >
        compResso
      </a>
    ),
    description:
      "Compresses video files directly in the browser without sending them to a server. Lets users adjust compression settings, compare file size changes, and export a smaller file locally. Made to keep video compression quick, simple, and private.",
    tech: ["Next.js", "TypeScript", "ffmpeg.wasm", "Tailwind CSS"],
    liveUrl: "https://compresso-beta.vercel.app/",
    githubUrl: "https://github.com/rabihzsiddiqui/compResso",
  },
  {
    title: "scReen",
    subtitle: "browser-native display comparison tool",
    titleNode: (
      <a
        href="https://sc-reen.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
      >
        scReen
      </a>
    ),
    description:
      "A browser-native display comparison tool that renders any two screens side by side at accurate physical scale. Choose from a preset library of phones, tablets, laptops, monitors, and TVs, or enter custom dimensions. Everything runs locally with no uploads and no tracking.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest"],
    liveUrl: "https://sc-reen.vercel.app/",
    githubUrl: "https://github.com/rabihzsiddiqui/scReen",
  },
  {
    title: "pomodoRo",
    subtitle: "browser-native pomodoro timer",
    titleNode: (
      <a
        href="https://romodoro.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
      >
        pomodoRo
      </a>
    ),
    description:
      "A browser-native Pomodoro timer with configurable work and break cycles. Fully keyboard-driven with spacebar, skip, and reset controls. Includes a circular SVG countdown ring, session tracking via localStorage, optional audio chimes, browser notifications, and a dynamic favicon that updates with the timer state.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest"],
    liveUrl: "https://romodoro.vercel.app/",
    githubUrl: "https://github.com/rabihzsiddiqui/pomo",
  },
  {
    title: "scRibe",
    subtitle: "minimalist writing workspace",
    titleNode: (
      <a
        href="https://sc-ribe.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
      >
        scRibe
      </a>
    ),
    description:
      "A distraction-free writing workspace with write, preview, and read modes. Tracks word count, character count, reading time, and session progress in real time. Includes a built-in Pomodoro timer for focused writing sessions and a dark/light theme that persists across visits.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://sc-ribe.vercel.app/",
    githubUrl: "https://github.com/rabihzsiddiqui/scRibe",
  },
  {
    title: "spectRa",
    subtitle: "color accessibility and CVD simulator",
    titleNode: (
      <a
        href="https://spectra-oculi.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
      >
        spectRa
      </a>
    ),
    description:
      "Still a work in progress. A client-side color accessibility tool that goes beyond basic contrast checks by showing how color pairings appear under different types of color vision deficiency and suggesting better alternatives. Built by someone who is colorblind, for people who want to design more accessibly.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://spectra-oculi.vercel.app/",
    githubUrl: "https://github.com/rabihzsiddiqui/spectRa",
  },
  {
    title: "nyra",
    subtitle: "prototype companion interface",
    titleNode: (
      <a
        href="https://nyra-prototype.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-indigo-400 to-sky-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
      >
        nyra
      </a>
    ),
    description:
      "A prototype interface for a personal AI companion and assistant. Built around four states: idle, listening, thinking, and speaking, with a minimal frosted-glass UI and WebGL-based visual effects through GLSL shaders. This is the starting point for a larger long-term assistant project.",
    tech: ["JavaScript", "Vite", "GLSL", "WebGL", "HTML/CSS"],
    liveUrl: "https://nyra-prototype.vercel.app/",
    githubUrl: "https://github.com/rabihzsiddiqui/nyra-prototype",
  },
  {
    title: "Restaurant Rating Analysis Based on Proximity",
    description:
      "Looked at whether restaurant ratings seemed to relate to geographic proximity using a real review dataset. Built in Jupyter with Python, pandas, and data visualization to explore patterns and present the results clearly.",
    tech: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib"],
    githubUrl:
      "https://github.com/rabihzsiddiqui/Restaurant_Rating_Analysis/blob/dataproject/Restaurant_Rating_Analysis_Complete.ipynb",
  },
  {
    title: "V.I.S.A",
    subtitle: "visual impairment and sensory aid",
    description:
      "A concept for an assistive tool that helps visually impaired users navigate their surroundings with more confidence. The idea combines haptic feedback, spatial audio, and environmental awareness, with accessibility and usability kept at the center of the project.",
    tech: ["Google Workspace", "Mind Maps", "UX Design", "Accessibility"],
    slidesUrl:
      "https://docs.google.com/presentation/d/1_LtnJbvFi7YNItDpYPvUZvkwUi15jeFHNBYP9KKGZSw/edit?usp=sharing",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projects
          </h2>
        </div>

        {/* Project list */}
        <div>
          {projects.map((project, index) => {
            const href =
              project.liveUrl ?? project.githubUrl ?? project.slidesUrl;

            return (
              <div
                key={index}
                className="group relative border-t border-zinc-800/80 py-10 last:border-b last:border-zinc-800/80"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 inset-y-0 w-px bg-indigo-500/0 group-hover:bg-indigo-500/50 transition-colors duration-300" />

                <div className="flex gap-6 md:gap-10 pl-4">
                  {/* Index number */}
                  <div className="w-6 flex-shrink-0 pt-1.5">
                    <span className="text-xs font-mono text-zinc-700 tabular-nums select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-6 mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold leading-tight">
                          {project.titleNode ??
                            (href ? (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-zinc-300 transition-colors duration-200"
                              >
                                {project.title}
                              </a>
                            ) : (
                              <span className="text-white">{project.title}</span>
                            ))}
                        </h3>
                        {project.subtitle && (
                          <p className="text-sm text-zinc-500 mt-1">
                            {project.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4 flex-shrink-0 sm:pt-1.5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-zinc-500 hover:text-white transition-colors duration-200"
                          >
                            live ↗
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
                          >
                            source ↗
                          </a>
                        )}
                        {project.slidesUrl && (
                          <a
                            href={project.slidesUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
                          >
                            slides ↗
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <p className="text-xs font-mono text-zinc-600">
                      {project.tech.join(" / ")}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
