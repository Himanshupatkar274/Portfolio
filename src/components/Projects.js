import React from "react";
import "../CSS/main.css";
import surveyImage from "../downloads/Survey.jpg";
import gameImage from "../downloads/cows and bulls.png";
import eCommImage from "../downloads/fitimage.jpg";
import summry from "../downloads/summry.jpg";
export default function Projects() {
  
  return (
    <>
      <section className="container text-center">
        <div>
          <h1 className="profile-name m-auto my-4">
            <strong>PROJECTS </strong>
          </h1>
          <span className="pt-3">
            The projects section showcases some of the work that I have done in
            the present and past. It includes a brief description of each project, the
            technologies and skills that I used, and a link to the source code
            or live demo. They demonstrate my ability to solve problems, learn
            new tools, and collaborate with others.
          </span>
        </div>
        {/* Opinion-Edge  */}
        <div className="row py-5 project-Box">
          <div className="col-md-6">
            <img loading="lazy" className="project-img" src={surveyImage} alt="" />
          </div>
          <div className="col-md-6 project-des">
            <span className="mb-2">Opinion-Edge (Share Your Opinion and earn rewards)</span>
            <div>
            <h6 className="projectHeader">In Opinion Edge take surveys to earn rewards. Share your opinion on everyday products & services, and avail discounts and coupons across multiple platforms.</h6>
             
             <p className="text-start px-3 mt-3">
              <strong>Technologies Used</strong> : Angular, TypeScript, JavaScript, Git, Font Awesome, ng-bootstrap (Library of Angular), Ag-grid, Figma, and ADO(Azure DevOps), 
              </p>
            </div>
            <h5 className="link-icon mt-2">
              <a
                href="https://panel.opinion-edge.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-solid fa-link"></i>
              </a>
            </h5>
          </div>
        </div>

        {/* Cows and bulls Game  */}
        <hr className="m-auto w-25" />
        <div className="row py-5 project-Box">
          <div className="col-md-6 project-des">
            <span className="mb-2">Cows and Bulls Game</span>
            <div>
              <h6 className="projectHeader"> I created a Cows and Bulls game as a self-practice project to
              enhance my skills in full-stack development. This project
              showcases my ability to design and implement both single-player
              and multiplayer game features using modern web technologies.</h6>
              <br />
              <p className="text-start px-3">
              <strong>Technologies Used</strong> : Angular, Node.js and
              Express.js, MongoDB, Socket.IO (Real-Time Communication)
              </p>
            <p className="text-start px-3">
            <strong>How to Play:</strong> Guess
              the secret 4-digit number. Cows indicate correct digits in the
              wrong position; Bulls indicate correct digits in the correct
              position. First to guess wins!
            </p>
            <h5 className="link-icon mt-2 ">
              <a
                href="https://cows-bulls-e9faf.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-solid fa-link"></i>
              </a>
            </h5>
            </div>
          </div>
          <div className="col-md-6">
            <img loading="lazy" className="project-img" src={gameImage}  alt="Cows and Bulls Game" />
          </div>
        </div>

        {/* E-Commerce Mockup */}
        <hr className="m-auto w-25" />
        <div className="row py-5 project-Box">
          <div className="col-md-6 project-des">
            <span className="mb-2">E-Commerce Mockup</span>
            <div>
              <h6 className="projectHeader">A full-stack e-commerce platform prototype featuring responsive UI, secure APIs, and robust database management. Key functionalities include Razorpay payment gateway integration and Google Login/Signup for seamless user authentication. Built using Angular, Node.js, Express.js, and PostgreSQL to showcase expertise in modern web development.</h6>
             <br />
              <p className="text-start px-3">
              <strong>Technologies Used:</strong>
                <ul>
                  <li><strong>Frontend:</strong> HTML, SCSS, TypeScript, Angular</li>
                  <li><strong>Backend:</strong> &nbsp;Node.js, Express.js</li>
                  <li><strong>Database:</strong> PostgreSQL</li>
                  <li><strong>Design System:</strong> Material UI</li>
                </ul>
              </p>
            <p className="text-start px-3">
            <strong>Project Highlights:</strong> 
              <ul>
                <li>Implemented responsive UI/UX with Angular and SCSS for seamless user experience.</li>
                <li>Created RESTful APIs using Express.js for secure and efficient data handling.</li>
                <li>Integrated Razorpay payment gateway for secure online transactions.</li>
                <li>Added Google Login and Signup functionality to enhance user authentication and accessibility.</li>
                <li>Leveraged PostgreSQL for database management to ensure scalability and reliability.</li>
              </ul>
              <strong>Note:</strong> This project is currently not hosted but demonstrates a comprehensive understanding of full-stack development.
            </p>
            {/* <h5 className="link-icon mt-2 ">
              <a
                href="https://cows-bulls-e9faf.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-solid fa-link"></i>
              </a>
            </h5> */}
            </div>
          </div>
          <div className="col-md-6">
            <img loading="lazy" className="project-img border-radius-unset" src={eCommImage}  alt="Cows and Bulls Game" />
          </div>
        </div>

        {/* Blog Summarizer Chrome Extension */}
        <hr className="m-auto w-25" />
        <div className="row py-5 project-Box">
          <div className="col-md-6 project-des">
            <span className="mb-2">Blog Summarizer Chrome Extension</span>
            <div>
              <h6 className="projectHeader">A Chrome extension designed to summarize blogs using the Google Gemini AI API. The extension fetches blog content, processes it through the AI API, and provides users with concise summaries for easy readability.</h6>
             <br />
            <p className="text-start px-3">
            <strong>Key Features:</strong> 
              <ul>
                <li><strong>AI-Powered Summaries:</strong> Utilizes the Google Gemini AI API to generate precise blog summaries.</li>
                <li><strong>User-Friendly Interface:</strong> Intuitive UI for users to input blog URLs or select on-page content.</li>
                <li><strong>Seamless Integration:</strong> Easily integrates into the Chrome browser for quick access.</li>
                
              </ul>
            </p>
            <p className="text-start px-3">
              <strong>Project Highlights:</strong>
                <ul>
                  <li><strong>Codebase Availability:</strong> The complete source code is available on <a href="https://github.com/Himanshupatkar274/Blog-Summarizer-Chrome-Extension" target="_blank" className="git-url">Github</a></li>
                </ul>
            </p>
            <p className="text-start px-3">
              <strong>Technologies Used:</strong>
                <ul>
                  <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
                  <li><strong>API Integration:</strong> Fetch API, Google Gemini AI API</li>
                </ul>
            </p>

            <p className="text-start px-3">
              <strong>Challenges & Solutions:</strong>
                <ul>
                  <li>
                    <div><strong>Challenge:</strong> Integrating Google Gemini AI API for fetching summaries.</div> 
                    <div><strong>Solution:</strong> Implemented robust error handling and optimized API requests for performance.</div> 
                  </li>
                </ul>
              </p>
            {/* <h5 className="link-icon mt-2 ">
              <a
                href="https://cows-bulls-e9faf.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-solid fa-link"></i>
              </a>
            </h5> */}
            </div>
          </div>
          <div className="col-md-6">
            <img loading="lazy" className="project-img" src={summry}  alt="Cows and Bulls Game" />
          </div>
        </div>
      </section>
    </>
  );
}
