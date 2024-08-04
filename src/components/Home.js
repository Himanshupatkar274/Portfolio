import React from "react";
import "../CSS/main.css";
import ExamplePdf from "../downloads/Himanshu_Angular Developer.pdf";
import HimanshuImg from "../downloads/Himanshu.png";
export default function Home() {
  return (
    <>
      <section>
        <div className="text-center mt-5">
          <div className="profile-image m-auto my-4">
            <img
              src={HimanshuImg}
              alt=""
            />
          </div>
          <h1 className="profile-name m-auto my-4">
            <strong>Himanshu Patkar</strong>
          </h1>
          <div>
            <h5 className="profile-paragraph my-3">
              Hello and welcome to my website!
            </h5>
            <p className="intro">
              I specialize in front-end development with 1.10 years of
              experience, with a strong command of modern web technologies. My
              proficiency in <strong className="highlight">Angular</strong>, along with HTML5, CSS3,
              JavaScript, Bootstrap, Rest API, Git and Angular Material, React.Js allows
              me to craft intuitive, responsive, and visually stunning user
              interfaces. I prioritize user experience and design aesthetics,
              ensuring that every project I undertake captivates and engages
              users effectively. I have gone through api integration process
              during my projects. I also have Basic understanding of figma and
              ADO (Azure DevOps) Software .<br />
            </p>
            <p className="intro text-start py-2">
              <ul>
                <li>
                  Working experience Angular v8 and above Material UI/Bootstrap
                  5
                </li>
                <li>Strong knowledge of Angular 15 with RxJS and also knowledge of React.js.</li>
                <li>Strong understanding of CSS & SCSS and CSS animations</li>
                <li>
                  Core Expertise in Typescript, Javascript with ES6 concepts.
                </li>
              </ul>
            </p>
            <div className="my-5 cursor-pointer download-icon">
              <a
                href={ExamplePdf}
                download="Himanshu_Angular_Developer"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                title="Download CV"
              >
                <h1>
                  <i className="fa-solid fa-download"></i>
                </h1>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
