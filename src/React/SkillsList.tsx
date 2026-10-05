const CategoryIcons = {
  "Web Development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-app-window-mac text-[var(--sec)]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/></svg>
  ),
  "Interface & Interaction": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-spline-pointer text-[var(--sec)]"><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/><path d="M5 17A12 12 0 0 1 17 5"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/></svg>
  ),
};

const SkillsList = () => {
  const skills = [
    {
      category: "Web Development",
      items: [
        {
          label: "Astro, React, and Tailwind",
          evidence: "This portfolio",
          href: "#projects",
        },
        {
          label: "Gym management application",
          evidence: "RepReady live app",
          href: "https://repready-gym.vercel.app/",
          external: true,
        },
        {
          label: "HRMS, Finance, and POS modules",
          evidence: "ERP live app",
          href: "https://portforlio-1cqq.onrender.com/hrms/login",
          external: true,
        },
      ],
    },
    {
      category: "Interface & Interaction",
      items: [
        {
          label: "Screenshot galleries and lightbox",
          evidence: "Portfolio projects",
          href: "#projects",
        },
        {
          label: "Gym management workflows",
          evidence: "RepReady live app",
          href: "https://repready-gym.vercel.app/",
          external: true,
        },
        {
          label: "HRMS, Finance, and POS interfaces",
          evidence: "ERP live app",
          href: "https://portforlio-1cqq.onrender.com/hrms/login",
          external: true,
        },
      ],
    },
  ];

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        Skills in practice
      </h3>
      <ul className="space-y-3 mt-4 text-lg">
        {skills.map(({ category, items }) => (
          <li key={category} className="w-full">
            <details className="group relative inline-block md:w-[400px] w-full">
              <summary className="flex list-none items-center gap-3 rounded-xl border border-[var(--white-icon-tr)] bg-[#141414] p-4 text-left transition-colors hover:bg-[#1a1a1a] cursor-pointer [&::-webkit-details-marker]:hidden">
                {CategoryIcons[category as keyof typeof CategoryIcons]}
                <div className="flex items-center gap-2 flex-grow justify-between min-w-0">
                  <div className="min-w-0 overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-[var(--white)] transform transition-transform duration-300 ease-out group-open:rotate-180"
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </summary>

              <div className="mt-2 rounded-xl border border-[var(--white-icon-tr)] bg-[#141414] p-2 shadow-[0_12px_28px_rgba(0,0,0,0.25)]">
                <ul className="space-y-1 text-sm">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex flex-col gap-1 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#1d1d1d] md:flex-row md:items-center md:justify-between md:gap-3"
                      >
                        <span className="text-[var(--white)]">{item.label}</span>
                        <span className="text-left text-[13px] leading-5 text-[var(--white-icon)] md:shrink-0 md:text-right md:text-xs">{item.evidence}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
