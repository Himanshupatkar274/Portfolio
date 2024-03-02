import React from "react";
import "../CSS/main.css";
import surveyImage from '../downloads/Survey.jpg'
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
            <img
              className="project-img"
              src={surveyImage}
              alt=""
            />
          </div>
          <div className="col-md-6 project-des">
            <span>Opinion-Edge (Share Your Opinion and earn rewards)</span>
            <p>
              In this project we provide the survey to the user. In the returns
              of the we give the royalty point and voucher to the user . Also user can redeem theese vouchers.
            </p>
            <h5 className="link-icon">
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
      </section>
    </>
  );
}
