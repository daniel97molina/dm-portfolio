import React from "react";
import "./Landpage.css";
import Skills from "./Skills";
import Projects from "./Projects";
import PersonalInfo from "./PersonalInfo";

const Landpage = () => {
  return (
    <div className="landpage">
      
      <Skills></Skills>

      <Projects></Projects>

      <PersonalInfo></PersonalInfo>
      
    </div>
  );
};

export default Landpage;
