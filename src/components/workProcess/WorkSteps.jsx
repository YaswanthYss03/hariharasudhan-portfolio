import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  const isQuoteCard = data?.isQuote;

  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 ease-out duration-1000  ${
        style && style
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {!isQuoteCard && (
        <div
          className={`w-11 h-11 sm:w-18 sm:h-18 ${
            hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"
          } text-center center rounded-md`}
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-sm:p-2 sm:w-8 sm:h-8"
          >
            <path d={data?.svgPath} fill={`${hover ? "#FFFFFF" : "#A53DFF"}`} />
          </svg>
        </div>
      )}
      <div
        className={
          isQuoteCard
            ? "mt-0 h-full flex flex-col justify-between"
            : "mt-3 xs:mt-4 sm:mt-8"
        }
      >
        {isQuoteCard ? (
          <>
            <div>
              <p className="font-semibold text-xl text-[#2A1D14]">{data?.title}</p>
              <p className="text-6xl leading-none text-orange-300 font-serif mt-4">"</p>
              <p className="-mt-4 text-[17px] leading-8 italic text-[#6B4B30]">
                {data?.description?.replace(/^"|"$/g, "")}
              </p>
            </div>
            <p className="mt-6 text-xs tracking-[0.2em] uppercase text-orange-500">
              Keep Learning
            </p>
          </>
        ) : (
          <>
            <p className="font-semibold sm:text-xl">{`${data?.id}. ${data?.title}`}</p>
            <p className="mt-3 text-[13px] sm:text-[16px] text-[#697482]">
              {data?.description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkSteps;
