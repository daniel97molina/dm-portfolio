import React from "react";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section>
      <h1 id="experience">{t("header.experience")}</h1>
      <div className="landpage-description">
      {t("experience.jobs", { returnObjects: true }).map( (val, index)=>
        <div key={index}>
          <h2>{val.tittle}</h2>
          <ul className="experiencelist">
              {val.li.map(text=><li>{text}</li>)}
          </ul>
          {val.description.map( (val, index)=> 
          <p key={index}>{val}</p>
          )}
        </div>
      )}
      </div>
    </section>
  );
}
