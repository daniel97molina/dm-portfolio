import React from "react";
import Skill from "./Skill";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 id="skills">{t("header.skills")}</h1>
      <p className="landpage-description">{t("skills.description")}</p>

      <div className="flex-container">
        <Skill title={t("skills.database")}>
          <li>PostgreSQL</li>
          <li>SQLite</li>
          <li>JPA, JPQL</li>
          <li>Spring data (Spring data jpa, Spring data rest)</li>
          <li>MongoDB ({t("skills.beginner")})</li>
        </Skill>

        <Skill title="Backend" className="ml">
          <li>Java</li>
          <li>Spring boot</li>
          <li>Rest API</li>
          <li>JUnit</li>
          <li>{t("skills.jwtAuthentication")}</li>
          <li>JasperReports</li>
          <li>Android</li>
        </Skill>

        <Skill title="Frontend" className="ml">
          <li>React</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Responsive design</li>
        </Skill>
      </div>

      <div className="flex-container">
        <Skill title={t("skills.technicalSkills")}>
          <li>Git</li>
          <li>Docker & Docker swarm</li>
          <li>CD/CI: Jenkins & Azure DevOps ({t("skills.beginner")})</li>
          <li>TDD</li>
          <li>{t("skills.oop")}</li>
          <li>Linux</li>
        </Skill>
        <Skill title={t("skills.otherSkills")} className="ml">
          <li>{t("skills.languages")}</li>
          <a href="#models">
            <li>{t("skills.3d")}</li>
          </a>
          <li>{t("skills.photoshop")}</li>
        </Skill>
      </div>
    </>
  );
};

export default Skills;
