import React from "react";
import { useTranslation } from "react-i18next";

const PersonalInfo = () => {
  const { t } = useTranslation();
  return (
    <section className="fixed">
      <h1 id="info">{t("header.personalInfo")}</h1>
      <div className="landpage-description">
      
        <h2>{t("aboutMe.languages")}</h2>
        <ul>
          <li>{t("aboutMe.languagesList.0")}</li>
          <a href="https://www.efset.org/cert/E6ZjBV" target="blank"><li>{t("aboutMe.languagesList.1")}</li></a>
        </ul>
        <h2>{t("aboutMe.location")}</h2>
        <ul>
          <li>{t("aboutMe.locationList.0")}</li>
          <li>{t("aboutMe.locationList.1")}</li>
        </ul>
        <br />
      </div>
    </section>
  );
};

export default PersonalInfo;
