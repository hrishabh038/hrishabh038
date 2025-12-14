import React from "react";
import { MdWork } from "react-icons/md";
import { Section } from "./components";
import { metadata } from "../metadata";
import { twMerge } from "tailwind-merge";

const WorkExperience = () => {
  return (
    <Section title={"Work Experience"}>
      <div className="flex flex-col gap-14">
        {metadata.experience.map((work, index) => (
          <Work
            key={index}
            role={work.role}
            company={work.company}
            start={work.start}
            end={work.end}
            description={work.description}
          />
        ))}
      </div>
    </Section>
  );
};

const Work = ({ role, company, start, end, description }) => {
  const active = end.toLowerCase() === "present";
  return (
    <div
      className={twMerge(
        "flex flex-col items-start gap-4 rounded hover:bg-neutral-800/40 cursor-pointer"
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={twMerge(
            "w-fit p-2 bg-neutral-800 border-2 border-neutral-500 text-neutral-400 rounded",
            active && "border-purple-800 text-purple-400 bg-purple-800/15"
          )}
        >
          <MdWork className="text-2xl" />
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-2 text-lg font-semibold">
            <p>{role}</p>
            <div className="flex items-center gap-2">
              <p className="text-neutral-500">@</p>{" "}
              <p className="text-neutral-300">{company}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center text-neutral-400 text-sm italic">
            <p>{start}</p>
            <p>-</p>
            <p>{end}</p>
          </div>
        </div>
      </div>

      <p className="">{description}</p>
    </div>
  );
};

export default WorkExperience;
