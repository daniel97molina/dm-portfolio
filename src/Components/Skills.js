import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <>
      <h1 id="skills">Skills</h1>
      <p>
        As an Information Systems Engineer, I learned a wide set of skills, all
        the way from server management to coding and UI/UX. I've specialized in
        development. I never stop learning, this list will change soon.
      </p>

      <div className="flex-container">
        <Skill title="Database & data Access">
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>SQLite</li>
          <li>JPA, JPQL</li>
          <li>Spring data</li>
        </Skill>

        <Skill title="Backend" className="ml">
          <li>Java</li>
          <li>Spring boot</li>
          <li>Rest API</li>
          <li>JWT Authentication</li>
          <li>JUnit</li>
          <li>Android</li>
          <li>JasperReports</li>
        </Skill>

        <Skill title="Frontend" className="ml">
          <li>React</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
        </Skill>
      </div>

      <div className="flex-container">
        <Skill title="Technical Skills">
          <li>Git</li>
          <li>Docker & Docker swarm</li>
          <li>CD/CI: Jenkins & Azure DevOps</li>
          <li>TDD</li>
          <li>Linux</li>
        </Skill>
        <Skill title="Other Skills" className="ml">
          <a href="#models">
            <li>3D modelling: Blender & Cinema 4D</li>
          </a>
          <li>Intermediate Photoshop & GIMP</li>
          <li>I speak Spanish and English</li>
        </Skill>
      </div>
    </>
  );
};

export default Skills;
