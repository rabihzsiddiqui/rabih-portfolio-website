const skillGroups = [
  {
    category: "Languages",
    icon: (
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    skills: ["Python", "Java", "JavaScript", "HTML", "CSS", "R"],
    color: "indigo",
  },
  {
    category: "Design & Tools",
    icon: (
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
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    skills: ["Figma", "Git", "Microsoft Office Suite", "Google Workspace", "Slack"],
    color: "violet",
  },
  {
    category: "Research & Testing",
    icon: (
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    skills: ["Product Testing", "UX Research", "Research Design", "Usability Testing"],
    color: "emerald",
  },
];

const colorMap: Record<string, { tag: string; header: string; icon: string }> = {
  indigo: {
    tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/20 hover:border-indigo-500/40",
    header: "text-indigo-400",
    icon: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  },
  violet: {
    tag: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-500/40",
    header: "text-violet-400",
    icon: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  emerald: {
    tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40",
    header: "text-emerald-400",
    icon: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3">
            Toolkit
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const colors = colorMap[group.color];
            return (
              <div
                key={group.category}
                className="bg-zinc-800/40 border border-zinc-700/50 rounded-2xl p-6"
              >
                {/* Group header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${colors.icon}`}
                  >
                    {group.icon}
                  </span>
                  <h3 className={`text-sm font-semibold ${colors.header}`}>
                    {group.category}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-sm px-3 py-1.5 rounded-full border font-medium transition-all duration-200 cursor-default ${colors.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
