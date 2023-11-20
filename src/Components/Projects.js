import React from "react";
import Project from "./Project";
import Carousel from "@brainhubeu/react-carousel";
import w4a1 from "../images/w4a1.jpg";
import w4a2 from "../images/w4a2.jpg";
import w4a3 from "../images/w4a3.jpg";
import w4a from "../images/w4a.mp4";
import portfolio from "../images/portfolio.jpg";
import biblioteca from "../images/biblioteca.mp4";
import model1 from "../images/3d1.jpg";
import model2 from "../images/3d2.jpg";
import model3 from "../images/3d3.jpg";
import model4 from "../images/3d4.jpg";
import model5 from "../images/3d5.jpg";
import wimouseimg from "../images/wimouse.jpg";
import compilation from "../images/compilationwide.jpg";
import wimouseserver from "../images/wimouseserver.jpg";
import wimousewebsite from "../images/wimousewebsite.jpg";
import { useTranslation } from "react-i18next";
import "@brainhubeu/react-carousel/lib/style.css";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h1 id="projects" className="">
        {t("header.projects")}
      </h1>

      <div className="projects-summary">
        <div className="projects-summary-description">
          <p>
            {t('projects.visitMyPortfolio')+" "}
            <a href="https://danielmolina.surge.sh" target="blank">
              https://danielmolina.surge.sh
            </a>
          </p>

           {t("projects.summary", { returnObjects: true }).map(
                (val, index) => (
                  <p key={index}>
                    {val}
                  </p>
                )
              )}
        </div>

        <img alt="see online" src={compilation}></img>
      </div>

      <div className="flex-container projects-wrapper">
        <div className="half">
          <div className="flex-container bordered" id="biblioteca-container">
            <div className="flex-content" id="biblioteca-description-container">
              <h2>{t("projects.list.0.title")}</h2>
              <video
                autoPlay={true}
                loop={true}
                src={biblioteca}
                alt="biblioteca"
                muted={true}
                loading="lazy"
              />
              {t("projects.list.0.ps", { returnObjects: true }).map(
                (val, index) => (
                  <p className="projectDescription" key={index}>
                    {val}
                  </p>
                )
              )}
              <h4>{t("projects.technologiesUsed")}</h4>
              <ul>
                <li>ReactJS</li>
                <li>Rest API</li>
                <li>JWT Authentication</li>
                <li>Spring boot</li>
                <li>Spring data</li>
                <li>JasperReports</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>

          {/* WI MOUSE WEBSITE */}
          <Project
            title={t("projects.list.3.title")}
            links={[
              {
                link: "https://wimouse.web.app/",
              },
              {
                label: t("projects.sourceCode"),
                link: "https://github.com/daniel97molina/wimouse-website",
              },
            ]}
            technologies={["ReactJS", "CSS", "Javascript"]}
            right={<img src={wimousewebsite}></img>}
          >
            {t("projects.list.3.ps", { returnObjects: true }).map(
              (val, index) => (
                <p className="projectDescription" key={index}>
                  {val}
                </p>
              )
            )}
          </Project>

          {/* WI MOUSE SERVER */}
          <Project
            title={t("projects.list.4.title")}
            technologies={["NodeJS", "WebSockets", "Electron"]}
            right={<img src={wimouseserver}></img>}
          >
            {t("projects.list.4.ps", { returnObjects: true }).map(
              (val, index) => (
                <p className="projectDescription" key={index}>
                  {val}
                </p>
              )
            )}
          </Project>

          <Project
            id="models"
            title={t("projects.list.7.title")}
            links={[
              {
                label: t("projects.list.7.seeOnTS"),
                link: "https://www.turbosquid.com/Search/Artists/3-D-W-o-r-l-d",
              },
            ]}
          >
            {t("projects.list.7.ps", { returnObjects: true }).map(
              (val, index) => (
                <p className="projectDescription" key={index}>
                  {val}
                </p>
              )
            )}
            <Carousel
              autoPlay={3000}
              slidesPerPage={2}
              centered={true}
              animationSpeed={600}
              infinite
              breakpoints={{
                640: {
                  slidesPerPage: 1,
                },
              }}
            >
              <img src={model3} alt="webcam4all screenshot" loading="lazy" />
              <img src={model5} alt="webcam4all screenshot" loading="lazy" />
              <img src={model4} alt="webcam4all screenshot" loading="lazy" />
              <img src={model1} alt="webcam4all screenshot" loading="lazy" />
              <img src={model2} alt="webcam4all screenshot" loading="lazy" />
            </Carousel>
            <br></br>
          </Project>
        </div>

        <div className="half border-right">
          {/* WIMOUSE */}
          <Project
            title={t("projects.list.1.title")}
            links={[
              {
                label: t("projects.seeOnGooglePlay"),
                link: "https://play.google.com/store/apps/details?id=dev.studios503.wimouse",
              },
              {
                label: t("projects.seeOnAppStore"),
                link: "https://apps.apple.com/us/app/wimouse-remote-control/id1583106552",
              },
            ]}
            technologies={["React Native", "Websocket"]}
            right={<img src={wimouseimg}></img>}
          >
            {t("projects.list.1.ps", { returnObjects: true }).map(
              (val, index) => (
                <p className="projectDescription" key={index}>
                  {val}
                </p>
              )
            )}
          </Project>

          {/* WEBCAM4ALL */}
          <Project
            title={t("projects.list.2.title")}
            links={[
              {
                label: t("projects.seeOnGooglePlay"),
                link: "https://play.google.com/store/apps/details?id=dm.camera.webcamxipcamera",
              },
            ]}
            technologies={["Android"]}
            right={
              <Carousel autoPlay={3000} animationSpeed={600} infinite>
                <img src={w4a1} alt="webcam4all screenshot" loading="lazy" />
                <img src={w4a2} alt="webcam4all screenshot" loading="lazy" />
                <img src={w4a3} alt="webcam4all screenshot" loading="lazy" />
              </Carousel>
            }
          >
            {t("projects.list.2.ps", { returnObjects: true }).map(
              (val, index) => (
                <p className="projectDescription" key={index}>
                  {val}
                </p>
              )
            )}
          </Project>

          {/* WEBCAM4ALL WEBSITE */}
          <Project
            title={t("projects.list.5.title")}
            links={[
              {
                link: "https://webcam4all.surge.sh/",
              },
              {
                label: t("projects.sourceCode"),
                link: "https://github.com/daniel97molina/webcam4allSite",
              },
            ]}
            technologies={["ReactJS", "CSS", "Javascript"]}
            right={
              <video
                src={w4a}
                autoPlay={true}
                loop={true}
                alt="website"
                muted={true}
                loading="lazy"
              />
            }
          >
            {t("projects.list.5.ps", { returnObjects: true }).map(
              (val, index) => (
                <p className="projectDescription" key={index}>
                  {val}
                </p>
              )
            )}
          </Project>

          {/* PORTFOLIO */}
          {/*not using Project because of different behaviour when printing*/}
          <div className="flex-container bordered">
            <div className="flex-content">
              <h2 className="print-only">{t("projects.list.6.printTitle")}</h2>
              <h2 className="not-printed">{t("projects.list.6.title")}</h2>
              <img src={portfolio} alt="this website" loading="lazy" />

              <p className="print-only projectDescription">
                {t("projects.list.6.printDescription")}
              </p>
              <p className="not-printed projectDescription">
                {t("projects.list.6.description")}
              </p>
              <h4 className="tec-used">{t("projects.technologiesUsed")}</h4>
              <ul>
                <li>ReactJS</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
              <a
                href="https://github.com/daniel97molina/dm-portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("projects.sourceCode")}
              </a>
              <a
                href="https://danielmolina.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="print-only"
              >
                {t("projects.seeOnline")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
