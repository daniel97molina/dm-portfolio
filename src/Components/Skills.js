import React from "react";
import Skill from "./Skill";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h1 id="skills">{t("header.skills")}</h1>

      <div className="flex-container">
        <Skill title={t("skills.database")}>
          <li>Oracle</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>JPA, JPQL</li>
          <li>Spring data</li>
          <li>MongoDB</li>
        </Skill>

        <Skill title="Backend">
          <li>Java</li>
          <li>Java Streams & parallel programming</li>
          <li>Java EE</li>
          <li>Spring Framework</li>
          <li>REST & SOAP API</li>
          <li>JUnit, Mockito</li>
        </Skill>

        <Skill title="Frontend">
          <li>ReactJS</li>
          <li>React Native</li>
          <li>Javascript, HTML, CSS</li>
        </Skill>
      </div>

      <div className="flex-container">
        <Skill title={t("skills.technicalSkills")}>
          <li>AWS - Amazon Web Services</li>
          <li>Docker & Linux</li>
          <li>Microservices</li>
          <li>{t("skills.oop")}</li>
          <li>Git & Github</li>
          <li>Jira</li>
        </Skill>
        <Skill title={t("skills.otherSkills")}>
          <li>Native Spanish</li>
          <li>English C2 - <a href="https://www.efset.org/cert/E6ZjBV">View certificate</a></li>
          <a href="#models">
            <li>{t("skills.3d")}</li>
          </a>
          <li>{t("skills.photoshop")}</li>
        </Skill>
      </div>
    </section>
  );
};

export default Skills;
