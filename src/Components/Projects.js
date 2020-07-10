import React from "react";
import w4a1 from "../images/w4a1.jpg";
import w4a2 from "../images/w4a2.jpg";
import w4a3 from "../images/w4a3.jpg";
import w4a from "../images/w4a.mp4";
import recursion from "../images/recursion.jpg";
import biblioteca from "../images/biblioteca.mp4";
import model1 from "../images/3d1.jpg";
import model2 from "../images/3d2.jpg";
import model3 from "../images/3d3.jpg";
import model4 from "../images/3d4.jpg";
import model5 from "../images/3d5.jpg";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Projects = () => {
  return (
    <>
      <h1 id="projects">My Projects</h1>

      <div className="flex-container mb bordered" id="biblioteca-container">
        <div className="flex-content-right" id="biblioteca-gif-container">
          <video
            autoPlay={true}
            loop={true}
            src={biblioteca}
            alt="biblioteca"
            muted={true}
            loading="lazy"
          />
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
            <img src={w4a1} alt="webcam4all screenshot" loading="lazy" />
            <img src={w4a2} alt="webcam4all screenshot" loading="lazy" />
            <img src={w4a3} alt="webcam4all screenshot" loading="lazy" />
          </Carousel>
        </div>
      </div>

      <div className="flex-container mb bordered">
        <div className="flex-content-left">
          <h2>Webcam4all website</h2>

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
          <p>Created to showcase the app and how to configure and use it.</p>
          <h4 className="tec-used">Technologies used</h4>
          <ul>
            <li>ReactJS</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div className="flex-content-right">
          <video
            src={w4a}
            autoPlay={true}
            loop={true}
            alt="website"
            muted={true}
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex-container mb bordered">
        <div className="flex-content-left">
          <h2>This site</h2>
          <a
            href="https://webcam4all.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>
          <p>You know what this is about.</p>
          <h4 className="tec-used">Technologies used</h4>
          <ul>
            <li>ReactJS</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div className="flex-content-right">
          <img src={recursion} alt="this website" loading="lazy" />
        </div>
      </div>

      <div className="flex-container mb bordered" id="models">
        <div className="flex-content-left flex-content">
          <h2>3D models</h2>

          <a
            href="https://www.turbosquid.com/Search/Artists/3-D-W-o-r-l-d"
            target="_blank"
            rel="noopener noreferrer"
          >
            See on Turbosquid
          </a>
          <p>
            I create 3D models in my free time. They're available for purchase
            at Turbosquid. I use Blender for modelling and Substance Painter for
            texturing. I've also used Cinema 4D in the past.
          </p>

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
        </div>
      </div>
    </>
  );
};

export default Projects;
