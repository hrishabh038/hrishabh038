import React from "react";
import { metadata } from "../metadata";
import { Section } from "./components";
const About = () => {
  return (
    <Section title={"About"}>
      <p className="whitespace-pre-line">{metadata.aboutLong}</p>
    </Section>
  );
};

export default About;
