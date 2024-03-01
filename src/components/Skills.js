import React from "react";
import "../CSS/main.css";
export default function Skills() {
  return (
    <>
      <section>
        <div className="text-center mt-5">
          <h1 className="profile-name m-auto my-4">
            <strong>SKILLS</strong>
          </h1>
          <div>
            <div className="container">
              {/* font-end skills */}
              <div className="text-start">
                <h4 className="highlight m-auto mx-3">
                  <strong>Front-end Tech</strong>
                </h4>
                <div className="row">
                  <div className="col-md-12">
                  <div className="skills-tab">
                  <ul className="nav">
                    <li className="nav-item">
                      <strong>HTML</strong>
                      <img className="skills-img" src="https://cdn.iconscout.com/icon/free/png-256/free-html-3628838-3030115.png" alt="html" />
                    </li>
                    <li className="nav-item">
                      <strong>CSS</strong>
                      <img className="skills-img" src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" alt="CSS" />
                    </li>
                    <li className="nav-item">
                      <strong>JavaScript</strong>
                      <img className="skills-img" src="https://static.vecteezy.com/system/resources/thumbnails/012/697/298/small_2x/3d-javascript-logo-design-free-png.png" alt="" />
                    </li>
                    <li className="nav-item">
                      <strong>Angular</strong>
                      <img className="skills-img" src="https://w7.pngwing.com/pngs/752/651/png-transparent-angularjs-vue-js-others-angle-rectangle-triangle-thumbnail.png" alt="" />
                    </li>
                    <li className="nav-item">
                      <strong>React.Js</strong>
                      <img className="skills-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                    </li>
                  </ul>
                </div>
                  </div>
                </div>
              </div>
              {/* Design System skills */}
              <div className="text-start mt-4">
                <h4 className="highlight m-auto mx-3">
                  <strong>Design System</strong>
                </h4>
                <div className="row">
                  <div className="col-md-12">
                  <div className="skills-tab">
                  <ul className="nav">
                    <li className="nav-item">
                      <strong>Material</strong>
                      <img className="skills-img" src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" alt="" />
                    </li>
                    <li className="nav-item">
                      <strong>Bootstrap</strong>
                      <img className="skills-img" src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" alt="" />
                    </li>
                    <li className="nav-item">
                      <strong>Ng-Bootstrap</strong>
                      <img className="skills-img" src="https://ng-bootstrap.github.io/img/logo-stack.svg" alt="" />
                    </li>
                  </ul>
                </div>
                  </div>
                </div>
              </div>
              {/* Backend skills */}
              <div className="text-start mt-4">
                <h4 className="highlight m-auto mx-3">
                  <strong>Back-end Tech</strong>
                </h4>
                <div className="row">
                  <div className="col-md-12">
                  <div className="skills-tab">
                  <ul className="nav">
                    <li className="nav-item">
                      <strong>Node.js (Express.js)</strong>
                      <img className="skills-img" src="https://miro.medium.com/v2/resize:fit:374/1*Yhe1R94CIotr2se7Wf6TQQ.png" alt="" />
                    </li>
                  </ul>
                </div>
                  </div>
                </div>
              </div>
              {/* Others skills */}
              <div className="text-start mt-4">
                <h4 className="highlight m-auto mx-3">
                  <strong>Others</strong>
                </h4>
                <div className="row">
                  <div className="col-md-12">
                  <div className="skills-tab">
                  <ul className="nav">
                    <li className="nav-item">
                      <strong>REST API</strong>
                      <img className="skills-img" src="https://miro.medium.com/v2/resize:fit:1200/1*J3G3akaMpUOLegw0p0qthA.png" alt="" />
                    </li>
                    <li className="nav-item">
                      <strong>Git</strong>
                      <img className="skills-img" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
                    </li>
                    {/* <li className="nav-item">
                      <strong>AWS</strong>
                      <img className="skills-img" src="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png" alt="" />
                    </li> */}
                    <li className="nav-item">
                      <strong>Postman</strong>
                      <img className="skills-img" src="https://cdn.worldvectorlogo.com/logos/postman.svg" alt="" />
                    </li>
                    <li className="nav-item">
                      <strong>Figma</strong>
                      <img className="skills-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="" />
                    </li>
                    <li className="nav-item">
                      <strong>ADO(Azure DevOps)</strong>
                      <img className="skills-img" src="https://cdn.iconscout.com/icon/free/png-256/free-azure-devops-3628645-3029870.png?f=webp" alt="" />
                    </li>
                  </ul>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
