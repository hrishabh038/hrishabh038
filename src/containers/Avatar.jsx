import React from "react";
import { metadata } from "../metadata";

const Avatar = () => {
  return (
    <div className="h-screen lg:fixed top-0 bottom-0 p-4 flex flex-col gap-6 items-center justify-center w-full lg:w-[325px] text-center lg:text-start">
      <img
        src={metadata.img}
        alt="Avatar"
        fetchPriority="high"
        loading="lazy"
        decoding="async"
        className="w-[250px] sm:w-[325px] lg:rounded rounded-full  cursor-pointer"
      />
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-3xl font-bold">{metadata.name}</p>
          <p className="text-xl text-neutral-300">{metadata.title}</p>
        </div>
        <div className=" text-neutral-300 flex flex-col gap-2 italic">
          <p className="text-purple-400">{metadata.aboutShort}</p>
          <p>{metadata.tagline}</p>
        </div>
        <ul className="flex items-center justify-center lg:justify-start gap-4 w-full">
          {metadata.links.map((link, index) => (
            <li>
              <a href={link.url} target="_blank">
                <link.icon className="text-3xl cursor-pointer hover:text-purple-400" />
              </a>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Avatar;
