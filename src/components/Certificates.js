import React from "react";
import '../CSS/main.css'
import AngularCerti from '../downloads/Angular CLi.png'
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
            <div className="cartificates my-5">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://udemy-certificate.s3.amazonaws.com/image/UC-24819291-b5b3-4f06-8cdd-1841f99be50e.jpg?v=1660838223000"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={AngularCerti}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://udemy-certificate.s3.amazonaws.com/image/UC-537da4ee-ee49-4f52-998e-62af3e29b096.jpg?v=1694800296000"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon carousel-button"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon carousel-button"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
