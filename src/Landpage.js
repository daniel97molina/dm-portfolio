import React from "react";
import "./Landpage.css";
import w4a1 from "./images/w4a1.jpg";
import w4a2 from "./images/w4a2.jpg";
import w4a3 from "./images/w4a3.jpg";
import w4agif from "./images/w4a.gif";
import biblioteca from "./images/biblioteca.gif";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Landpage = () => {
  return (
    <div className="landpage">
      <h1>Skills</h1>
      <p>
        As an Information Systems Engineer, I learned a wide set of skills, all
        the way from server management to coding and UI/UX. I've specialized in
        development. I never stop learning, this list will change soon.
      </p>
      <div className="flex-container">
        <div className="content-wrapper bordered">
          <h2>Database & data Access</h2>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>SQLite</li>
            <li>JPA, JPQL</li>
            <li>Spring data</li>
          </ul>
        </div>

        <div className="content-wrapper ml bordered">
          <h2>Backend</h2>
          <ul>
            <li>Java</li>
            <li>Spring boot</li>
            <li>Rest API</li>
            <li>JWT Authentication</li>
            <li>JUnit</li>
            <li>Android</li>
            <li>JasperReports</li>
          </ul>
        </div>

        <div className="content-wrapper ml bordered">
          <h2>Frontend</h2>
          <ul>
            <li>React</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>

      <div className="flex-container">
        <div className="content-wrapper bordered">
          <h2>Technical Skills</h2>
          <ul>
            <li>Git</li>
            <li>Docker & Docker swarm</li>
            <li>CD/CI: Jenkins & Azure DevOps</li>
            <li>TDD</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className="content-wrapper ml bordered">
          <h2>Other Skills</h2>
          <ul>
            <li>3D modelling: Blender & Cinema 4D</li>
            <li>Intermediate Photoshop & GIMP</li>
            <li>I speak Spanish and English</li>
          </ul>
        </div>
      </div>

      <h1>My Projects</h1>

      <div
        className="flex-container mb bordered"
        style={{ flexDirection: "row-reverse" }}
      >
        <div className="flex-content-right" id="biblioteca-gif-container">
          <img src={biblioteca} alt="biblioteca" />
          <span>Hover to zoom</span>
        </div>
        <div
          className="flex-content-left"
          id="biblioteca-description-container"
        >
          <h2>ECO Library management</h2>
          <p>
            Developed to cover the specific needs of a recognized private
            school. Provides students the ability to search books with various
            filtering options and register media usage. Administrative users can
            manage books, authors, publishers, tags, register and manage book
            loans and access reports.
          </p>
          <p>
            One of the key elements in this project was keeping the user
            experience simple, so that the software was intuitive and easy to
            use for everybody, even the youngest students, without loosing
            functionality.
          </p>
          <h4>Technologies used</h4>
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

      <div className="flex-container mb bordered">
        <div className="flex-content-left">
          <h2>Webcam4all</h2>

          <a
            href="https://play.google.com/store/apps/details?id=dm.camera.webcamxipcamera"
            target="_blank"
            rel="noopener noreferrer"
          >
            See on Google Play
          </a>
          <p>
            This Android app allows you to use your phone as a webcam for your
            Windows or mac computer. It takes every frame from the camera,
            encodes it into JPEG, and sends it over http to the client.
          </p>
          <h4>Technologies used</h4>
          <ul>
            <li>Android</li>
          </ul>
        </div>
        <div className="flex-content-right">
          <Carousel autoPlay={3000} animationSpeed={600} infinite>
            <img src={w4a1} alt="webcam4all screenshot" />
            <img src={w4a2} alt="webcam4all screenshot" />
            <img src={w4a3} alt="webcam4all screenshot" />
          </Carousel>
        </div>
      </div>

      <div className="flex-container mb bordered">
        <div className="flex-content-left">
          <h2>Webcam4all Website</h2>

          <a
            href="https://webcam4all.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://webcam4all.surge.sh/
          </a>
          <br />
          <a
            href="https://webcam4all.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>
          <p>
            Created to showcase the app and how to configure and use it.
          </p>
          <h4 className="tec-used">Technologies used</h4>
          <ul>
            <li>ReactJS</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div className="flex-content-right">
          <img src={w4agif} alt="website" />
        </div>
      </div>
    </div>
  );
};

export default Landpage;
