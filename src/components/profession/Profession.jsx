import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Internship Experience",
    description:
      "Completed project-based robotics training at Zetspire Technologies through the eYantra Lab setup initiative (eLSI).",
  },
  {
    id: 2,
    title: "Academic Projects",
    description:
      "Built an Assistive Learning Software for hearing-impaired children and a Smart Attendance system using biometric-based verification.",
  },
  {
    id: 3,
    title: "Technical Strengths",
    description:
      "Strong foundation in Python, Java, SQL, HTML, CSS, and JavaScript, with quick learning and problem-solving capabilities.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Professional Highlights</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I am a B.Tech Information Technology graduate from Sethu Institute
            of Technology with practical exposure through internship and
            project-based learning.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My focus is on building useful software solutions, continuously
            improving technical skills, and contributing effectively in a
            professional environment.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Contact Me
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
