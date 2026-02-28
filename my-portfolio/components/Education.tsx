export default function Education() {
  return (
    <section id="education" className="py-24 bg-zinc-900/40">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education
          </h2>
        </div>

        {/* Education card */}
        <div className="relative bg-zinc-800/40 border border-zinc-700/50 rounded-2xl p-8 md:p-10 overflow-hidden group hover:border-indigo-500/30 transition-all duration-300">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/10 transition-colors duration-300" />

          <div className="relative flex flex-col md:flex-row md:items-center gap-8">
            {/* University seal placeholder */}
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-zinc-700/50 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0v7"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    University of California, San Diego
                  </h3>
                  <p className="text-indigo-400 font-medium text-lg mb-3">
                    B.S. Cognitive Science
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 text-sm text-zinc-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Class of 2024
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-zinc-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      La Jolla, CA
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-medium">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Graduated
                </span>
              </div>
            </div>
          </div>

          {/* About CogSci blurb */}
          <div className="mt-8 pt-8 border-t border-zinc-700/50">
            <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
              Cognitive Science at UC San Diego bridges psychology, neuroscience,
              linguistics, philosophy, and computer science to understand the
              nature of mind and intelligence. Coursework provided a strong
              foundation in human-centered design, research methodology, and
              the cognitive underpinnings of user behavior — directly informing
              my approach to UX research and product evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
