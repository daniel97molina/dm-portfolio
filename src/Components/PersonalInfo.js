import React from "react";
import { useTranslation } from "react-i18next";

const PersonalInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 id="info">{t("header.personalInfo")}</h1>
      <div className="landpage-description">
        <h2>{t("aboutMe.languages")}</h2>
        <ul>
          <li>{t("aboutMe.languagesList.0")}</li>
          <li>{t("aboutMe.languagesList.1")}</li>
        </ul>
        <br />
        <h2>{t("aboutMe.location")}</h2>
        <ul>
          <li>{t("aboutMe.locationList.0")}</li>
          <li>{t("aboutMe.locationList.1")}</li>
        </ul>
        <br />
        <h2>{t("aboutMe.education")}</h2>
        <ul>
          <li>
            {t("aboutMe.informationSystems")}
            <ul>
              <li>{t("aboutMe.informationSystemsList.0")}</li>
              <li>{t("aboutMe.informationSystemsList.1")}</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PersonalInfo;
