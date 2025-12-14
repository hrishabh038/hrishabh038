import React from "react";
import { Section } from "./components";
import { metadata } from "../metadata";
import { FaBookOpenReader } from "react-icons/fa6";

const Education = () => {
  return (
    <Section title={"Education"}>
      <div className="flex flex-col gap-12">
        {metadata.education.map((edu, index) => (
          <Edu
            key={index}
            degree={edu.degree}
            institute={edu.institution}
            start={edu.start}
            end={edu.end}
            location={edu.location}
          />
        ))}
      </div>
    </Section>
  );
};

const Edu = ({ degree, institute, start, end, location }) => {
  return (
    <div className="flex flex-col items-start gap-4 rounded hover:bg-neutral-800/40 cursor-pointer">
      <div className="flex gap-4 items-start">
        <div className="w-fit p-2 bg-neutral-800 border-2 border-neutral-500 text-neutral-400 rounded">
          <FaBookOpenReader className="text-2xl" />
        </div>
        <div className="flex flex-col font-semibold">
          <div className="flex gap-2 items-center text-neutral-400 text-xs italic">
            <p>{start}</p>
            <p>-</p>
            <p>{end}</p>
          </div>
          <p className="text-xl">{degree}</p>
          <div className=" flex items-center gap-2">
            <p className="text-neutral-500">@</p>{" "}
            <p className="text-neutral-300">{institute}</p>
          </div>
          <p className=" text-sm text-neutral-400">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
