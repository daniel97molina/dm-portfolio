import React from "react";
import { useTranslation } from "react-i18next";

const Project = (props) => {
  const { t } = useTranslation();
  return (
    <div className="flex-container mb bordered" id={props.id}>
      <div className={props.right ? "flex-content-left" : "flex-content-left flex-content"}>
        <h2>{props.title}</h2>
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
      </div>
      {props.right && <div className="flex-content-right">{props.right}</div>}
    </div>
  );
};

export default Project;
