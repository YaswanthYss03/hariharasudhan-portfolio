import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "B.Tech Information Technology",
    description:
      "Completed B.Tech IT at Sethu Institute of Technology. Year Studied: 2020 - 2024.",
    svgPath:
      "M16 4L2 10L16 16L27 11.286V20H30V10L16 4ZM8 14.2V19C8 22.3 12.8 25 16 25C19.2 25 24 22.3 24 19V14.2L16 17.6L8 14.2Z",
  },
  {
    id: 2,
    title: "HSC",
    description:
      "Completed HSC at Keren Matric. Hr. Sec. School. Year Studied: 2019 - 2020.",
    svgPath:
      "M5 4H27C27.552 4 28 4.448 28 5V27C28 27.552 27.552 28 27 28H5C4.448 28 4 27.552 4 27V5C4 4.448 4.448 4 5 4ZM9 8V24H23V8H9ZM12 11H20V14H12V11ZM12 17H16V20H12V17Z",
  },
  {
    id: 3,
    title: "SSLC",
    description:
      "Completed SSLC at Keren Matric. Hr. Sec. School. Year Studied: 2017 - 2018.",
    svgPath:
      "M6 5H26C27.105 5 28 5.895 28 7V25C28 26.105 27.105 27 26 27H6C4.895 27 4 26.105 4 25V7C4 5.895 4.895 5 6 5ZM8 9V23H24V9H8ZM11 12H21V14H11V12ZM11 16H18V18H11V16ZM16 19L18 22L20 21V24L18 23L16 24V19Z",
  },
    {
      id: 4,
      title: "Learning Quote",
      isQuote: true,
      description:
        '"Scores open doors, but consistent learning builds the journey."',
      svgPath:
        "M28 18.6668H26.6666V9.3335C26.6666 8.27263 26.2452 7.25521 25.4951 6.50507C24.7449 5.75492 23.7275 5.3335 22.6666 5.3335H9.33329C8.27243 5.3335 7.25501 5.75492 6.50487 6.50507C5.75472 7.25521 5.33329 8.27263 5.33329 9.3335V18.6668H3.99996C3.64634 18.6668 3.3072 18.8073 3.05715 19.0574C2.8071 19.3074 2.66663 19.6465 2.66663 20.0002V22.6668C2.66663 23.7277 3.08805 24.7451 3.8382 25.4953C4.58834 26.2454 5.60576 26.6668 6.66663 26.6668H25.3333C26.3942 26.6668 27.4116 26.2454 28.1617 25.4953C28.9119 24.7451 29.3333 23.7277 29.3333 22.6668V20.0002C29.3333 19.6465 29.1928 19.3074 28.9428 19.0574C28.6927 18.8073 28.3536 18.6668 28 18.6668ZM7.99996 9.3335C7.99996 8.97987 8.14044 8.64074 8.39048 8.39069C8.64053 8.14064 8.97967 8.00016 9.33329 8.00016H22.6666C23.0202 8.00016 23.3594 8.14064 23.6094 8.39069C23.8595 8.64074 24 8.97987 24 9.3335V18.6668H7.99996V9.3335ZM26.6666 22.6668C26.6666 23.0205 26.5262 23.3596 26.2761 23.6096C26.0261 23.8597 25.6869 24.0002 25.3333 24.0002H6.66663C6.313 24.0002 5.97387 23.8597 5.72382 23.6096C5.47377 23.3596 5.33329 23.0205 5.33329 22.6668V21.3335H26.6666V22.6668Z",
    },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Education Details</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          A quick overview of my academic journey across school and undergraduate
          education, including key qualifications and years studied.
        </p>
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          This section highlights HSC, SSLC, and B.Tech IT achievements in a
          clear and structured format.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          const quoteCardStyle =
            data.id === 4
              ? "bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 border border-orange-200 ring-1 ring-amber-200 min-h-72 sm:min-h-80"
              : "bg-white";

          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 aspect-auto sm:max-w-78 ${quoteCardStyle} ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
