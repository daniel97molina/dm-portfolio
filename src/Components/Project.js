import React from "react";
import { useTranslation } from "react-i18next";

const Project = (props) => {
  const { t } = useTranslation();
  return (
    <div className="flex-container bordered page-break" id={props.id}>
      <div className="flex-content">
        <h2>{props.title}</h2>
        {props.right && <div>{props.right}</div>}
        {props.children}
        {props.technologies && (
          <>
            <h4>{t("projects.technologiesUsed")}</h4>
            <ul>
              {props.technologies.map((t, index) => (
                <li key={index}>{t}</li>
              ))}
            </ul>
          </>
        )}
        {props.links &&
          props.links.map((l, index) => (
            <a
              href={l.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.label ? l.label : l.link}
            </a>
          ))}
      </div>
    </div>
  );
};

export default Project;
