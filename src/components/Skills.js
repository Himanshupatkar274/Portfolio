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
                        <img loading="lazy" className="skills-img" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%2024%2024%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpolygon%20fill%3D%22%23E44D26%22%20points%3D%223.345%2021.601%201.419%200%2022.581%200%2020.653%2021.598%2011.987%2024%203.345%2021.601%22%2F%3E%3Cpolygon%20fill%3D%22%23F16529%22%20points%3D%2212%2022.164%2019.002%2020.222%2020.65%201.766%2012%201.766%22%2F%3E%3Cpath%20fill%3D%22%23EBEBEB%22%20d%3D%22M12%2C9.778H8.495L8.252%2C7.065H12v-2.65H5.357l0.063%2C0.711l0.651%2C7.3H12V9.778L12%2C9.778z%20M12%2C16.658l-0.012%2C0.003l-2.95-0.797l-0.189-2.113H6.19l0.371%2C4.16l5.427%2C1.507L12%2C19.414V16.658L12%2C16.658z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M11.991%2C9.778v2.649h3.263l-0.308%2C3.436l-2.955%2C0.797v2.756l5.431-1.505l0.04-0.448l0.623-6.974l0.064-0.712h-0.714H11.991L11.991%2C9.778z%20M11.991%2C4.415v2.65h6.399l0.053-0.596l0.121-1.343l0.063-0.711H11.991L11.991%2C4.415z%22%2F%3E%3Cpolygon%20fill%3D%22%23DEDEDE%22%20points%3D%2212%2023.996%2011.987%2024%2012%2024%2012%2023.996%22%2F%3E%3Cpath%20fill%3D%22%23C64321%22%20d%3D%22M12%2C7.065L12%2C7.065H8.252l0.242%2C2.713h3.496H12V7.065L12%2C7.065z%20M12%2C0H1.419l1.926%2C21.601L11.987%2C24L12%2C23.996v-4.582v0l-0.012%2C0.004l-5.427-1.507l-0.371-4.16h2.659l0.189%2C2.113l2.95%2C0.797l0.003-0.001v0L12%2C16.658v-4.231H6.071l-0.651-7.3L5.357%2C4.415h6.634H12V0L12%2C0z%22%2F%3E%3Cpath%20fill%3D%22%23CDCDCD%22%20d%3D%22M8.849%2C13.751H6.19l0.371%2C4.16l5.427%2C1.507L12%2C19.414v0l-0.009%2C0.002v-2.756l-0.003%2C0.001l-2.95-0.797L8.849%2C13.751L8.849%2C13.751z%20M11.991%2C4.415H5.357l0.063%2C0.711l0.651%2C7.3H12h-0.009V9.778H8.495L8.252%2C7.065H12h-0.009V4.415L11.991%2C4.415z%22%2F%3E%3Cpath%20fill%3D%22%23DEDEDE%22%20d%3D%22M12%2C16.658l-0.009%2C0.002v0v2.756L12%2C19.414V16.658L12%2C16.658z%20M12%2C9.778h-0.009v2.649H12V9.778L12%2C9.778z%20M12%2C4.415h-0.009v2.65H12V4.415L12%2C4.415z%22%2F%3E%3C%2Fsvg%3E" alt="html" />
                      </li>
                      <li className="nav-item">
                        <strong>CSS</strong>
                        <img loading="lazy" className="skills-img" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22%232196F3%22%20d%3D%22m1%200%201.275%2014.4L8%2016l5.723-1.599L15%200z%22%2F%3E%3Cpath%20fill%3D%22%23FAFAFA%22%20d%3D%22m12.274%204.709-.161%201.809-.486%205.423L8%2012.944l-.003.001-3.625-1.004-.253-2.836h1.776l.132%201.471%201.971.532.001-.001%201.974-.532.269-2.451-6.208.017-.176-1.676%206.533-.077.132-1.794-6.84.019-.115-1.669h8.864z%22%2F%3E%3C%2Fsvg%3E" alt="CSS" />
                      </li>
                      <li className="nav-item">
                        <strong>JavaScript</strong>
                        <img loading="lazy" className="skills-img" src="https://static.vecteezy.com/system/resources/thumbnails/012/697/298/small_2x/3d-javascript-logo-design-free-png.png" alt="" />
                      </li>
                      <li className="nav-item">
                        <strong>Angular</strong>
                        <img loading="lazy" className="skills-img" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20preserveAspectRatio%3D%22xMidYMid%22%20viewBox%3D%220%200%20256%20272%22%3E%3Cpath%20fill%3D%22%23E23237%22%20d%3D%22M.1%2045.522L125.908.697l129.196%2044.028-20.919%20166.45-108.277%2059.966-106.583-59.169L.1%2045.522z%22%2F%3E%3Cpath%20fill%3D%22%23B52E31%22%20d%3D%22M255.104%2044.725L125.908.697v270.444l108.277-59.866%2020.919-166.55z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M126.107%2032.274L47.714%20206.693l29.285-.498%2015.739-39.347h70.325l17.233%2039.845%2027.99.498-82.179-174.917zm.2%2055.882l26.496%2055.383h-49.806l23.31-55.383z%22%2F%3E%3C%2Fsvg%3E" alt="" />
                      </li>
                      <li className="nav-item">
                        <strong>React.Js</strong>
                        <img loading="lazy" className="skills-img" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%20128%20128%22%20viewBox%3D%220%200%20128%20128%22%3E%3Cg%20fill%3D%22%2361DAFB%22%3E%3Ccircle%20cx%3D%2264%22%20cy%3D%2264%22%20r%3D%2211.4%22%2F%3E%3Cpath%20d%3D%22M107.3%2045.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4%201.1-4.8%201.5-7.1%202.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7%200-15.9%205.2-24.9%2013.9-9-8.7-17.9-13.9-24.9-13.9-2.4%200-4.5.5-6.4%201.6-6.4%203.7-8.7%2013-6.6%2026.1.4%202.3.9%204.7%201.5%207.1-2.4.7-4.7%201.4-6.9%202.3-12.5%204.8-19.3%2011.4-19.3%2018.8s6.9%2014%2019.3%2018.8c2.2.8%204.5%201.6%206.9%202.3-.6%202.4-1.1%204.8-1.5%207.1-2.1%2013.2.2%2022.5%206.6%2026.1%201.9%201.1%204%201.6%206.4%201.6%207.1%200%2016-5.2%2024.9-13.9%209%208.7%2017.9%2013.9%2024.9%2013.9%202.4%200%204.5-.5%206.4-1.6%206.4-3.7%208.7-13%206.6-26.1-.4-2.3-.9-4.7-1.5-7.1%202.4-.7%204.7-1.4%206.9-2.3%2012.5-4.8%2019.3-11.4%2019.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1%202.4%205.5%209.8%203.8%2020.3-.3%202.1-.8%204.3-1.4%206.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13%207.4-7.3%2014.9-12.3%2021-12.3%201.3%200%202.5.3%203.5.9zm-11.2%2059.3c-1.8%203.2-3.9%206.4-6.1%209.6-3.7.3-7.4.4-11.2.4-3.9%200-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10%201.6-3.3%203.4-6.7%205.3-10%201.8-3.2%203.9-6.4%206.1-9.6%203.7-.3%207.4-.4%2011.2-.4%203.9%200%207.6.1%2011.2.4%202.2%203.2%204.2%206.4%206%209.6%201.9%203.3%203.7%206.7%205.3%2010-1.7%203.3-3.4%206.6-5.3%2010zm8.3-3.3c1.5%203.5%202.7%206.9%203.8%2010.3-3.4.8-7%201.4-10.8%201.9%201.2-1.9%202.5-3.9%203.6-6%201.2-2.1%202.3-4.2%203.4-6.2zm-25.6%2027.1c-2.4-2.6-4.7-5.4-6.9-8.3%202.3.1%204.6.2%206.9.2%202.3%200%204.6-.1%206.9-.2-2.2%202.9-4.5%205.7-6.9%208.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9%201.1-3.3%202.3-6.8%203.8-10.3%201.1%202%202.2%204.1%203.4%206.1%201.2%202.2%202.4%204.1%203.6%206.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3%203.4-.8%207-1.4%2010.8-1.9-1.2%201.9-2.5%203.9-3.6%206-1.2%202.1-2.3%204.2-3.4%206.2zm25.6-27.1c2.4%202.6%204.7%205.4%206.9%208.3-2.3-.1-4.6-.2-6.9-.2-2.3%200-4.6.1-6.9.2%202.2-2.9%204.5-5.7%206.9-8.3zm22.2%2021l-3.6-6c3.8.5%207.4%201.1%2010.8%201.9-1.1%203.3-2.3%206.8-3.8%2010.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9%203.8-20.3%201-.6%202.2-.9%203.5-.9%206%200%2013.5%204.9%2021%2012.3-3.5%203.8-7%208.2-10.4%2013-5.8.5-11.3%201.4-16.5%202.5-.6-2.3-1-4.5-1.4-6.6zm-24.7%2029c0-4.7%205.7-9.7%2015.7-13.4%202-.8%204.2-1.5%206.4-2.1%201.6%205%203.6%2010.3%206%2015.6-2.4%205.3-4.5%2010.5-6%2015.5-13.8-4-22.1-10-22.1-15.6zm28.5%2049.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3%201.4-6.6%205.2%201.2%2010.7%202%2016.5%202.5%203.4%204.8%206.9%209.1%2010.4%2013-7.4%207.3-14.9%2012.3-21%2012.3-1.3%200-2.5-.3-3.5-.9zm60.8-20.3c1.7%2010.5.3%2017.9-3.8%2020.3-1%20.6-2.2.9-3.5.9-6%200-13.5-4.9-21-12.3%203.5-3.8%207-8.2%2010.4-13%205.8-.5%2011.3-1.4%2016.5-2.5.6%202.3%201%204.5%201.4%206.6zm9-15.6c-2%20.8-4.2%201.5-6.4%202.1-1.6-5-3.6-10.3-6-15.6%202.4-5.3%204.5-10.5%206-15.5%2013.8%204%2022.1%2010%2022.1%2015.6%200%204.7-5.8%209.7-15.7%2013.4z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="" />
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
                        <img loading="lazy" className="skills-img" src="https://static-00.iconduck.com/assets.00/material-ui-icon-512x406-fhnu85xg.png" alt="" />
                      </li>
                      <li className="nav-item">
                        <strong>Bootstrap</strong>
                        <img loading="lazy" className="skills-img" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="" />
                      </li>
                      <li className="nav-item">
                        <strong>Ng-Bootstrap</strong>
                        <img loading="lazy" className="skills-img" src="https://ng-bootstrap.github.io/img/logo-stack.svg" alt="" />
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
                        <img loading="lazy" className="skills-img" src="https://miro.medium.com/v2/resize:fit:374/1*Yhe1R94CIotr2se7Wf6TQQ.png" alt="" />
                      </li>
                      <li className="nav-item">
                        <strong>Mongo DB</strong>
                        <img loading="lazy" className="skills-img" src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
                      </li>
                      {/* <li className="nav-item">
                        <strong>PostgreSQL</strong>
                        <img loading="lazy" className="skills-img" src="https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png" alt="" />
                      </li> */}
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
                        <img loading="lazy" className="skills-img" src="https://miro.medium.com/v2/resize:fit:1200/1*J3G3akaMpUOLegw0p0qthA.png" alt="" />
                      </li>
                      <li className="nav-item">
                        <strong>Git</strong>
                        <img loading="lazy" className="skills-img" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
                      </li>
                      {/* <li className="nav-item">
                        <strong>AWS</strong>
                        <img loading="lazy" className="skills-img" src="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png" alt="" />
                      </li> */}
                      <li className="nav-item">
                        <strong>Postman</strong>
                        <img loading="lazy" className="skills-img" src="https://cdn.worldvectorlogo.com/logos/postman.svg" alt="" />
                      </li>
                      <li className="nav-item">
                        <strong>Figma</strong>
                        <img loading="lazy" className="skills-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="" />
                      </li>
                      <li className="nav-item">
                        <strong>ADO(Azure DevOps)</strong>
                        <img loading="lazy" className="skills-img" src="https://cdn.iconscout.com/icon/free/png-256/free-azure-devops-3628645-3029870.png?f=webp" alt="" />
                      </li>
                      <li className="nav-item">
                        <strong>AWS(Amazon Web Service)</strong>
                        <img loading="lazy" className="skills-img" src="https://www.pngmart.com/files/23/Aws-Logo-PNG-Image.png" alt="" />
                      </li>
                      <li className="nav-item">
                        <strong>Firebase</strong>
                        <img loading="lazy" className="skills-img" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23FFA000%22%20d%3D%22m14.714%208.669-2.4%202.235-2.228-4.496%201.151-2.585c.291-.516.767-.522%201.058%200l2.419%204.846z%22%2F%3E%3Cpath%20fill%3D%22%23F57F17%22%20d%3D%22m12.314%2010.903-8.979%208.351%206.751-12.846%202.228%204.495z%22%2F%3E%3Cpath%20fill%3D%22%23FFCA28%22%20d%3D%22M17.346%205.251c.43-.41.873-.271.985.31l2.334%2013.58-7.742%204.648c-.272.152-.992.211-.992.211s-.655-.08-.906-.218l-7.689-4.528%2014.01-14.003z%22%2F%3E%3Cpath%20fill%3D%22%23FFA000%22%20d%3D%22m10.086%206.408-6.75%2012.846L6.344.477c.113-.582.443-.641.74-.126l3.002%206.057z%22%2F%3E%3C%2Fsvg%3E" alt="" />
                      
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
