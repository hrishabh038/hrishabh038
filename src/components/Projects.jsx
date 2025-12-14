import React from "react";
import { Section } from "./components";
import { metadata } from "../metadata";
import { twMerge } from "tailwind-merge";
import { HiOutlineLink } from "react-icons/hi";
import { GoProjectSymlink } from "react-icons/go";

const Projects = () => {
  return (
    <Section title={"Projects"}>
      <div className="flex flex-col gap-14">
        {metadata.projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </Section>
  );
};

const Project = ({ title, description, link }) => {
  if (link) {
    return (
      <a
        href={link}
        className={twMerge(
          " rounded hover:bg-neutral-800/40 cursor-pointe"
        )}
      >
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <div
              className={twMerge(
                "w-fit p-2 bg-neutral-800 border-2 border-neutral-500 text-neutral-400 rounded"
              )}
            >
              <GoProjectSymlink className="text-xl" />
            </div>
            <p className="flex items-center gap-1 text-lg font-semibold">
              {title} <HiOutlineLink className="text-sm text-purple-400" />
            </p>
          </div>
          <div>
            <p className=" text-neutral-300">{description}</p>
          </div>
        </div>
      </a>
    );
  }
  return (
    <div
      className={twMerge(
        " rounded hover:bg-neutral-800/40 cursor-pointe"
      )}
    >
      <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <div
              className={twMerge(
                "w-fit p-2 bg-neutral-800 border-2 border-neutral-500 text-neutral-400 rounded"
              )}
            >
              <GoProjectSymlink className="text-xl" />
            </div>
            <p className="flex items-center gap-1 text-lg font-semibold">
              {title} <HiOutlineLink className="text-sm text-purple-400" />
            </p>
          </div>
          <div>
            <p className=" text-neutral-300">{description}</p>
          </div>
        </div>
    </div>
  );
};

export default Projects;
