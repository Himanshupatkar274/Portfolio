import React from "react";
import "../CSS/main.css";
import ExamplePdf from "../downloads/Himanshu_Angular_Developer.pdf";
import HimanshuImg from "../downloads/DP.jpg";
export default function Home() {
  return (
    <>
      <section>
        <div className="text-center mt-5">
          <div className="profile-image m-auto my-4">
            <img loading="lazy" src={HimanshuImg} alt="" />
          </div>
          <h1 className="profile-name m-auto my-4">
            <strong>Himanshu Patkar</strong>
          </h1>
          <div>
            <h5 className="profile-paragraph my-3">
              Hello and welcome to my website!
            </h5>
            <p className="intro">
              I specialize in front-end development with 3+ years of
              experience, possessing a strong command of modern web
              technologies. My expertise in{" "}
              <strong className="highlight">Angular</strong>, along with HTML5,
              CSS3, JavaScript, Bootstrap, REST APIs, Git, Angular Material, and
              React.js, enables me to create intuitive, responsive, and visually
              appealing user interfaces. I prioritize user experience and
              design, ensuring that every project I undertake is engaging and
              impactful. Throughout my projects, I have gained experience in API
              integration and have also developed server-side applications using{" "}
              <strong>Node.js</strong>, <strong>Express.js</strong>, and
              databases like <strong>MongoDB</strong> and{" "}
              <strong>PostgreSQL</strong>. Additionally, I have a understanding
              of <strong>Figma, PostMan, VS Code</strong> and <strong>Azure DevOps (ADO)</strong>.
            </p>

            <p className="intro text-start py-2">
              <ul>
                <li>
                  Working experience with Angular v8 and above Material
                  UI/Bootstrap 5
                </li>
                <li>
                  Strong knowledge of Angular 15 with RxJS and knowledge of
                  React.js.
                </li>
                <li>
                  knowledge of Node.js, Express.js, and databases like MongoDB
                  and PostgreSQL for creating server-side applications.
                </li>
                <li>Strong understanding of CSS & SCSS and CSS animations</li>
                <li>
                  Core Expertise in Typescript, and JavaScript with ES6
                  concepts.
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
