import React from "react";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();
  return (
    <section className="">
      <h1 id="education">{t("header.education")}</h1>
      <div className="landpage-description">
      <h2>{t("education.informationSystems")}</h2>
            <ul>
              <li>{t("education.informationSystemsList.0")}</li>
              <li>{t("education.informationSystemsList.1")}</li>
            </ul>
            <h2>{t("education.aws")}</h2>
            <ul>
              <li>{t("education.awsList.0")}</li>
              <li><a href="https://www.credly.com/badges/4ff8043b-5e8a-433c-b269-e1dfc25b5f2b" target="blank">{t("education.awsList.1")}</a></li>
            </ul>
      </div>
    </section>
  );
};

export default Education;
