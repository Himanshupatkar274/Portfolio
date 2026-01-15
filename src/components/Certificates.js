import React from "react";
import "../CSS/main.css";
import AngularCLI from "../downloads/Angular CLi.png";
import webDevelopment from "../downloads/web development.jpg";
import NodeJSCertificate from "../downloads/Node js.png";
import AngularCertificate from "../downloads/Angular.png";
import AWSEventCertificate from "../downloads/AWS-Designing-Event-Architecture-Course.png";

export default function Certificates() {
  return (
    <>
      <section>
        <div className="text-center mt-5">
          <h1 className="profile-name m-auto my-4">
            <strong>ACHIEVEMENTS</strong>
          </h1>
          <div>
            <p className="intro">
              This section showcases some of my achievements in the field of
              programming. I have earned various certificates and badges from
              reputable online platforms that demonstrate my skills and
              knowledge in programming and technologies.
            </p>

            {/* Web Development */}
            <hr className="m-auto w-25" />
            <div className="row py-5 project-Box">
              <div className="col-md-6 project-des">
                <span className="mb-2 fs-6">
                  The Web Development Bootcamp 2022 – Udemy
                </span>
                <div>
                  <p className="text-start mt-3 fs-6">
                    <strong>Description</strong>: Successfully completed The Web
                    Development Bootcamp 2022, a comprehensive full-stack web
                    development course on Udemy. The course covered modern web
                    technologies such as{" "}
                    <strong>
                      HTML5, CSS3, JavaScript (ES6+), DOM manipulation, Git &
                      GitHub, Node.js, Express.js, MongoDB, RESTful APIs, and
                      authentication.
                    </strong>{" "}
                    Developed multiple hands-on projects emphasizing responsive
                    UI, clean code, and real-world application architecture.
                  </p>
                  <br />

                  <h5 className="link-icon mt-2 ">
                    <a
                      href="https://www.udemy.com/certificate/UC-24819291-b5b3-4f06-8cdd-1841f99be50e/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-solid fa-link"></i>
                    </a>
                  </h5>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  loading="lazy"
                  className="certificate-img"
                  src={webDevelopment}
                  alt="Cows and Bulls Game"
                />
              </div>
            </div>

            {/* Angular – TestDome */}
            <hr className="m-auto w-25" />
            <div className="row py-5 project-Box">
              <div className="col-md-6">
                <img
                  loading="lazy"
                  className="certificate-img"
                  src={AngularCertificate}
                  alt=""
                />
              </div>
              <div className="col-md-6 project-des">
                <span className="mb-2 fs-5">Angular – TestDome</span>
                <p className="text-start mt-3 fs-6">
                  <strong>Description</strong>: Successfully completed the
                  Angular Certificate from TestDome, demonstrating strong
                  proficiency in{" "}
                  <strong>
                    Angular fundamentals, component-based architecture, data
                    binding, dependency injection, routing, services, and RxJS
                  </strong>
                  . The certification validates my ability to build scalable,
                  maintainable, and high-performance web applications using
                  Angular best practices.
                </p>
                <h5 className="link-icon mt-3">
                  <a
                    href={AngularCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-solid fa-link"></i>
                  </a>
                </h5>
              </div>
            </div>

            {/* The Complete Node.js Developer Course – Udemy */}
            <hr className="m-auto w-25" />
            <div className="row py-5 project-Box">
              <div className="col-md-6 project-des">
                <span className="mb-2 fs-6">
                  The Complete Node.js Developer Course – Udemy
                </span>
                <div>
                  <p className="text-start mt-3 fs-6">
                    <strong>Description</strong>: Successfully completed The
                    Complete Node.js Developer Course from Udemy, focusing on
                    real-world backend development. The course covered core{" "}
                    Node.js concepts, asynchronous programming, REST API
                    creation using{" "}
                    <strong>
                      Express.js, MongoDB integration with Mongoose,
                      authentication & authorization, error handling,{" "}
                    </strong>
                    and deployment-ready backend architecture. Strengthened
                    skills in building secure, scalable, and
                    performance-optimized server-side applications.
                    <p className="mt-2">
                      <strong>Skills Gained:</strong>{" "}
                      <ol>
                        <li>Node.js & JavaScript (ES6+)</li>
                        <li>Express.js</li>
                        <li>MongoDB & Mongoose</li>
                        <li>Authentication & Authorization (JWT)</li>
                        <li>Async/Await & Promises</li>
                        <li>Backend Architecture & Best Practices</li>
                      </ol>
                    </p>
                  </p>
                  <br />

                  <h5 className="link-icon mt-2 ">
                    <a
                      href="https://www.udemy.com/certificate/UC-537da4ee-ee49-4f52-998e-62af3e29b096/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-solid fa-link"></i>
                    </a>
                  </h5>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  loading="lazy"
                  className="certificate-img"
                  src={NodeJSCertificate}
                  alt="Cows and Bulls Game"
                />
              </div>
            </div>

            {/* Angular CLI – Pluralsight */}
            <hr className="m-auto w-25" />
            <div className="row py-5 project-Box">
              <div className="col-md-6">
                <img
                  loading="lazy"
                  className="certificate-img"
                  src={AngularCLI}
                  alt=""
                />
              </div>
              <div className="col-md-6 project-des">
                <span className="mb-2 fs-5">
                  Angular CLI – Pluralsight Certificate
                </span>
                <p className="text-start mt-3 fs-6">
                  <strong>Description</strong>: Successfully completed the
                  Angular CLI course on Pluralsight, gaining hands-on experience
                  with building, managing, and optimizing Angular applications
                  using Angular CLI. Learned how to scaffold projects, generate
                  components and services, manage environments, configure
                  builds, and optimize applications for production. This
                  certification strengthened my understanding of Angular project
                  structure, best practices, and efficient development
                  workflows.
                  <p className="mt-2">
                    <strong>Skills Gained:</strong>{" "}
                    <ol>
                      <li>Angular CLI commands & project scaffolding</li>
                      <li>Component, module, service & routing generation</li>
                      <li>Environment configuration (dev/prod)</li>
                      <li>Build optimization & production deployment</li>
                      <li>Angular best practices & workflow efficiency</li>
                    </ol>
                  </p>
                </p>
                <h5 className="link-icon mt-3">
                  <a
                    href={AngularCLI}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-solid fa-link"></i>
                  </a>
                </h5>
              </div>
            </div>

            {/* AWS Designing Event Architecture Course – Udemy */}
            <hr className="m-auto w-25" />
            <div className="row py-5 project-Box">
              <div className="col-md-6 project-des">
                <span className="mb-2 fs-6">
                  Designing Event-Driven Architectures – AWS Training &
                  Certification
                </span>
                <div>
                  <p className="text-start mt-3 fs-6">
                    <strong>Description</strong>: Successfully completed the
                    Designing Event-Driven Architectures certification from AWS
                    Training & Certification, gaining hands-on knowledge of
                    building scalable, loosely coupled, and resilient systems on
                    AWS.
                    <br /> <br />
                    <p>
                      Developed expertise in designing event-driven solutions
                      using managed AWS services, implementing serverless
                      patterns, and enabling real-time data processing for
                      modern cloud applications.
                    </p>
                    <p className="mt-2">
                      <strong>Skills Gained:</strong>{" "}
                      <ol>
                        <li>Amazon EventBridge, SNS, and SQS for event routing and messaging</li>
                        <li>AWS Lambda and serverless architectural patterns</li>
                        <li>MongoDB & Mongoose</li>
                        <li>Event-driven system design and real-time streaming using Amazon Kinesis</li>
                      </ol>
                    </p>
                  </p>
                  <br />

                  <h5 className="link-icon mt-2 ">
                    <a
                      href={AWSEventCertificate}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-solid fa-link"></i>
                    </a>
                  </h5>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  loading="lazy"
                  className="certificate-img"
                  src={AWSEventCertificate}
                  alt="Cows and Bulls Game"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
