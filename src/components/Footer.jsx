import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto" style={{ margin: "50px 0px" }}>
      <div className="text-xs text-neutral-500 tracking-wider leading-5 w-full ">
        Loosely designed in <span className=" text-neutral-400">Figma</span> and coded
        in <span className=" text-neutral-400">Visual Studio Code</span> by yours
        truly. Built with{" "}
        <span className=" text-neutral-400">React.js, Tailwind CSS</span>, deployed
        with Vercel. All text is set in the{" "}
        <span className=" text-neutral-400">Helvetica</span> typeface.
      </div>
    </div>
  );
};

export default Footer;
