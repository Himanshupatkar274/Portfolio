import React from "react";
import "../CSS/main.css";
import surveyImage from "../downloads/Survey.jpg";
import gameImage from "../downloads/cows and bulls.png";
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
            the past. It includes a brief description of each project, the
            technologies and skills that I used, and a link to the source code
            or live demo. They demonstrate my ability to solve problems, learn
            new tools, and collaborate with others.
          </span>
        </div>
        <div className="row py-5 project-Box">
          <div className="col-md-6">
            <img className="project-img" src={surveyImage} alt="" />
          </div>
          <div className="col-md-6 project-des">
            <span className="mb-2">Opinion-Edge (Share Your Opinion and earn rewards)</span>
            <div>
              In this project we provide the survey to the user. In the returns
              of the we give the royalty point and voucher to the user . Also
              user can redeem theese vouchers.
            </div>
            <h5 className="link-icon mt-3">
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
        <hr className="m-auto w-25" />
        <div className="row py-5 project-Box">
          <div className="col-md-6 project-des">
            <span className="mb-2">Cows and Bulls Game</span>
            <div>
              I created a Cows and Bulls game as a self-practice project to
              enhance my skills in full-stack development. This project
              showcases my ability to design and implement both single-player
              and multiplayer game features using modern web technologies. <br /> <br />
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
            <img className="project-img" src={gameImage}  alt="Cows and Bulls Game" />
          </div>
        </div>
        <hr className="m-auto w-25" />
      </section>
    </>
  );
}
