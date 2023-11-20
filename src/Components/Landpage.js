import React from "react";
import "./Landpage.css";
import Skills from "./Skills";
import Projects from "./Projects";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";

const Landpage = () => {
  return (
    <div className="landpage">

      <Experience></Experience>

      <Education></Education>

      <Skills></Skills>

      <PersonalInfo></PersonalInfo>

      <Projects></Projects>
    </div>
  );
};

export default Landpage;
