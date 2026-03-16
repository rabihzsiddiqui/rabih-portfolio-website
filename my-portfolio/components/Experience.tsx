const experiences = [
  {
    role: "Trusted Tester",
    company: "Google",
    period: "Sept 2021 – Present",
    badge: "Voluntary",
    description:
      "Participate in early-stage testing of Google's experimental apps, features, and hardware products. Deliver structured reports covering usability, functionality, and accessibility, helping teams prioritize fixes and improvements before public release.",
    tags: ["Product Testing", "QA", "Accessibility", "Usability"],
  },
  {
    role: "User Research Participant",
    company: "Google",
    period: "Nov 2023 – Present",
    badge: "Voluntary",
    description:
      "Engage in moderated and unmoderated research sessions — including interviews, diary studies, and prototype evaluations — to inform product design decisions across Google's product suite. Provide detailed qualitative feedback on user flows and pain points.",
    tags: ["UX Research", "User Interviews", "Prototype Testing"],
  },
  {
    role: "User Research Participant",
    company: "Meta",
    period: "Mar 2025 – Present",
    badge: "Voluntary",
    description:
      "Participate in research studies evaluating Meta's emerging social platforms and technologies. Deliver actionable feedback on interaction design, feature discoverability, and end-to-end user experience across web and mobile surfaces.",
    tags: ["UX Research", "Social Platforms", "Interaction Design"],
  },
  {
    role: "VR Prototype QA",
    company: "KIWI design",
    period: "Dec 2020 – Aug 2024",
    badge: "Freelance",
    description:
      "Performed quality assurance testing on VR accessories and prototype hardware designed for Meta Quest headsets. Logged hardware defects, identified usability regressions, and reported compatibility issues, contributing to faster iteration cycles and higher product quality.",
    tags: ["VR/XR", "Hardware QA", "Bug Reporting", "Meta Quest"],
  },
];

const badgeColors: Record<string, string> = {
  Voluntary: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Freelance: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3">
            Work History
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-zinc-800" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 flex justify-center pt-6">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-zinc-950 z-10" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-indigo-500/30 hover:bg-zinc-800/70 transition-all duration-300 group">
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors duration-200">
                          {exp.role}
                        </h3>
                        <p className="text-indigo-400 font-medium text-sm mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                          badgeColors[exp.badge] ??
                          "bg-zinc-700 text-zinc-400 border-zinc-600"
                        }`}
                      >
                        {exp.badge}
                      </span>
                    </div>

                    {/* Date */}
                    <p className="text-xs text-zinc-500 mb-4 flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5"
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
                      {exp.period}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
