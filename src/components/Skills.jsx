import React from "react";
import { Section } from "./components";
import { twMerge } from "tailwind-merge";
import { MdCode, MdStorage, MdBuild, MdWeb } from "react-icons/md";
import { metadata } from "../metadata";

const CATEGORY_META = {
  frontend: {
    label: "Frontend",
    icon: MdWeb,
  },
  backend: {
    label: "Backend",
    icon: MdCode,
  },
  database: {
    label: "Database",
    icon: MdStorage,
  },
  tools: {
    label: "Tools",
    icon: MdBuild,
  },
};

const Skills = () => {
  return (
    <Section title={"Skills"}>
      <div className="flex flex-col gap-12">
        {Object.entries(metadata.skills).map(([category, items]) => {
          if (!items?.length) return null;

          const meta = CATEGORY_META[category];
          return (
            <SkillCategory
              key={category}
              title={meta?.label ?? category}
              icon={meta?.icon}
              items={items}
            />
          );
        })}
      </div>
    </Section>
  );
};

const SkillCategory = ({ title, icon: Icon, items }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-4 rounded hover:bg-neutral-800/40 transition"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-neutral-800 border-2 border-neutral-500 rounded text-neutral-400">
          {Icon && <Icon className="text-xl" />}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <SkillBadge key={index} label={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillBadge = ({ label }) => {
  return (
    <span
      className={twMerge(
        "px-3 py-1 text-sm rounded",
        "bg-neutral-800 border border-neutral-700 text-neutral-300",
        "hover:border-purple-700 hover:text-purple-400 transition cursor-default"
      )}
    >
      {label}
    </span>
  );
};

export default Skills;
