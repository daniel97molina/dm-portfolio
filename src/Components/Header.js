import React from "react";
import LanguageSelector from "./LanguageSelector";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <LanguageSelector></LanguageSelector>
      <div className="triangleSmall3"></div>
      <div className="triangle triangleSmall"></div>
      <div className="triangle">
        <div className="triangleSmall2"></div>

        <div className="triangle-content">
          <h2>Kevin</h2>
          <h1 style={{ marginLeft: "15px" }}>Daniel</h1>
          <br />
          <h1>Molina</h1>
          <h2 style={{ marginLeft: "15px" }}>Ramírez</h2>

          <h3>{t("header.title")}</h3>
          {t("header.ps", { returnObjects: true }).map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </div>

      <nav>
        <a href="#skills">{t("header.skills")}</a>
        <a href="#projects">{t("header.projects")}</a>
        <a href="#info">{t("header.personalInfo")}</a>
      </nav>

      <div className="contact">
        <h3>{t("header.contactMe")}</h3>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: daniel.97.molin@gmail.com"
        >
          <span>daniel.97.molin@gmail.com</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
          </svg>
        </a>

        <a target="_blank" rel="noopener noreferrer" href="tel:+503 7400-7656" className="print-only">
          <span>+503 7400-7656</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
            </svg>
          </svg>
        </a>

        <a
          href="https://github.com/daniel97molina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>daniel97molina</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/DanielM9797"
        >
          <span>@DanielM9797</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/daniel-molina-bba002175/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
          </svg>
        </a>

        <a
          target="_blank"
          href="https://stackoverflow.com/users/13855020/daniel-molina"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.869 5.903l3.114 4.567-.975.665-3.115-4.567.976-.665zm-2.812 2.585l4.84 2.838-.6 1.017-4.842-2.838.602-1.017zm-1.276 2.724l5.413 1.521-.291 1.077-5.428-1.458.306-1.14zm-.588 2.461l5.687.569-.103 1.12-5.691-.513.107-1.176zm-.169 2.16h5.835v1.167h-5.835v-1.167zm7.976 3.167h-10v-6h1v5h8v-5h1v6zm.195-8.602l-.945-5.446 1.162-.202.947 5.446-1.164.202z" />
          </svg>
        </a>
      </div>

      <svg
        className="arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
      </svg>
    </header>
  );
};

export default Header;
