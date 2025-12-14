import React from "react";

const Section = ({ title, children }) => {
  return (
    <section className="flex flex-col gap-6 ">
      <p className="text-sm italic font-semibold bg-neutral-800/50 py-2 px-4 text-neutral-400 rounded text-center w-full">{title.toUpperCase()}</p>
      <div>{children}</div>
    </section>
  );
};

export default Section;
