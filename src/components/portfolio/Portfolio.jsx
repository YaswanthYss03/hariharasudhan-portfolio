const coreSkills = [
  { name: "Python", level: 84 },
  { name: "Java", level: 78 },
  { name: "SQL", level: 80 },
  { name: "HTML / CSS / JavaScript", level: 85 },
  { name: "Excel", level: 74 },
];

const specialties = [
  {
    title: "Project: Assistive Learning Software",
    description:
      "Built for hearing-impaired children with gesture-to-text communication support through a web portal.",
  },
  {
    title: "Project: Smart Attendance Using Biometric",
    description:
      "Implemented automated exam-hall attendance verification to improve accuracy, efficiency, and security.",
  },
  {
    title: "Internship: Zetspire Technologies",
    description:
      "Completed project-based robotics training through the eYantra Lab setup initiative (eLSI).",
  },
];

const toolStack = [
  "Python",
  "Java",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "XML",
  "Pandas",
  "Excel",
  "MERN Workshop",
  "AI Tools Workshop",
  "ChatGPT",
  "Quick Learner",
  "Problem Solving",
  "Communication",
];

const Portfolio = () => {
  return (
    <div
      className="content mt-12 md:mt-16 xl:mt-24 mb-12 md:mb-24 px-2"
      id="skills"
    >
      <div className="relative overflow-hidden rounded-3xl border border-[#E8EAF2] bg-gradient-to-b from-white to-[#F7F8FC] p-5 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-[#F0DAFF] blur-2xl"></div>
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-[#DDF5FF] blur-2xl"></div>

        <div className="relative z-10 max-w-2xl">
          <p className="section-title">Skills</p>
          <p className="mt-5 text-sm sm:text-base text-[#5A6475]">
            Resume-based overview of my technical skills, internship exposure,
            and project experience.
          </p>
        </div>

        <div className="relative z-10 mt-8 grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-4 rounded-2xl bg-[#1B2434] text-white p-6 sm:p-7">
            <p className="text-xs tracking-[0.16em] uppercase text-[#A8B4CF]">
              Profile Snapshot
            </p>
            <p className="mt-3 text-2xl font-semibold">B.Tech IT Graduate</p>
            <p className="mt-3 text-sm text-[#CFD8E8] leading-6">
              Strong foundation in programming, web technologies, and database
              concepts, with practical project and internship experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/15">
                Sethu Institute of Technology
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/15">
                2020 - 2024
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/15">
                English & Tamil
              </span>
            </div>
          </div>

          <div className="xl:col-span-5 rounded-2xl bg-white border border-[#E6E9F2] p-6 sm:p-7">
            <p className="text-lg font-semibold text-[#1C2333]">Core Proficiency</p>
            <div className="mt-5 space-y-4">
              {coreSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-sm font-medium text-[#2E3647]">{skill.name}</p>
                    <p className="text-xs font-semibold text-picto-primary">
                      {skill.level}%
                    </p>
                  </div>
                  <div className="h-2 rounded-full bg-[#EEF1F7] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#A53DFF] to-[#7E2FE0]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="xl:col-span-3 rounded-2xl bg-[#FCFCFF] border border-[#E6E9F2] p-6 sm:p-7">
            <p className="text-lg font-semibold text-[#1C2333]">Skills & Strengths</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {toolStack.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#394357] bg-[#EEF2FF] border border-[#DDE4FF]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white border border-[#E9ECF4] p-4 sm:p-5"
            >
              <p className="text-sm font-semibold text-[#1D2330]">{item.title}</p>
              <p className="mt-2 text-sm text-[#5B6578] leading-6">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
