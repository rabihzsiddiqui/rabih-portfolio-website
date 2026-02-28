import type { ReactNode } from "react";

type Project = {
  title: string;
  titleNode?: ReactNode;
  description: string;
  tech: string[];
  icon: ReactNode;
  gradient: string;
  accentBorder: string;
  accentGlow: string;
  liveUrl?: string;
  githubUrl?: string;
  slidesUrl?: string;
};

const projects: Project[] = [
  {
    title: "audoRa — browser-based audio extractor",
    titleNode: (
      <>
        <a
          href="https://audora-audio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
        >
          audoRa
        </a>
        <span className="text-zinc-300"> — browser-based audio extractor</span>
      </>
    ),
    description:
      "Converts video files to MP3 entirely in the browser using ffmpeg.wasm — no uploads, no servers. Supports .mp4, .webm, .mov, .mkv, and more. Lets users control bitrate (128–320 kbps), audio channels, and trim specific segments before export. Works offline once loaded.",
    tech: ["Next.js", "TypeScript", "ffmpeg.wasm", "Tailwind CSS"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
    gradient: "from-sky-500/20 to-cyan-500/20",
    accentBorder: "hover:border-sky-500/40",
    accentGlow: "group-hover:shadow-sky-500/10",
    liveUrl: "https://audora-audio.vercel.app/",
    githubUrl: "https://github.com/rabihzsiddiqui/audora-audio-extractor",
  },
  {
    title: "Restaurant Rating Analysis Based on Proximity",
    description:
      "Analyzed correlations between restaurant ratings and geographic proximity using real-world dataset. Applied statistical methods and data visualization techniques to identify patterns in how location influences user ratings across review platforms. Findings were presented through interactive Jupyter notebooks with clear charts and narrative commentary.",
    tech: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    gradient: "from-indigo-500/20 to-blue-500/20",
    accentBorder: "hover:border-indigo-500/40",
    accentGlow: "group-hover:shadow-indigo-500/10",
    githubUrl: "https://github.com/rabihzsiddiqui/Restaurant_Rating_Analysis/blob/dataproject/Restaurant_Rating_Analysis_Complete.ipynb",
  },
  {
    title: "V.I.S.A — Visual Impairment & Sensory Aid",
    description:
      "Designed a conceptual assistive technology solution for individuals with visual impairments. Used collaborative mind-mapping and Google Workspace to outline a multi-sensory aid system integrating haptic feedback, spatial audio cues, and environmental awareness features. The project emphasized inclusive design principles and real-world usability for the visually impaired community.",
    tech: ["Google Workspace", "Mind Maps", "UX Design", "Accessibility"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    gradient: "from-violet-500/20 to-purple-500/20",
    accentBorder: "hover:border-violet-500/40",
    accentGlow: "group-hover:shadow-violet-500/10",
    slidesUrl: "https://docs.google.com/presentation/d/1_LtnJbvFi7YNItDpYPvUZvkwUi15jeFHNBYP9KKGZSw/edit?usp=sharing",
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

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-zinc-800/40 border border-zinc-700/50 rounded-2xl p-7 flex flex-col transition-all duration-300 ${project.accentBorder} hover:shadow-xl ${project.accentGlow}`}
            >
              {/* Icon */}
              {(() => {
                const iconHref = project.liveUrl ?? project.githubUrl ?? project.slidesUrl;
                return iconHref ? (
                  <a
                    href={iconHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} border border-zinc-700/50 flex items-center justify-center text-zinc-300 mb-5 hover:scale-110 transition-transform duration-200`}
                  >
                    {project.icon}
                  </a>
                ) : (
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} border border-zinc-700/50 flex items-center justify-center text-zinc-300 mb-5`}
                  >
                    {project.icon}
                  </div>
                );
              })()}

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-indigo-300 transition-colors duration-200">
                {project.titleNode ?? project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-zinc-700/60 text-zinc-300 border border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.liveUrl || project.githubUrl || project.slidesUrl) && (
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-700/40">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      live demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-zinc-400 hover:text-zinc-200 flex items-center gap-1.5 transition-colors duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      source
                    </a>
                  )}
                  {project.slidesUrl && (
                    <a
                      href={project.slidesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-zinc-400 hover:text-zinc-200 flex items-center gap-1.5 transition-colors duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      view slides
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
