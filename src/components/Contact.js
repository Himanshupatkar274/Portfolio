import React from "react";
import "../CSS/main.css";
export default function Contact() {
  return (
    <>
      <section className="container contact text-center p-5">
        <h1 className="profile-name m-auto my-4">
          <strong>ALSO CONTACT ME </strong>
        </h1>
        <span className="pt-3">
          I would love to hear from you <br />
          <strong className="thank">Thank You</strong>
        </span>

        <div className="container py-3">
          <ul className="nav justify-content-center pt-3">
            <li className="nav-item">
              <a className="nav-link linkdin active" aria-current="page" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/himanshu-patkar-008001227">
                <h1><i className="fa-brands fa-linkedin-in"></i></h1>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link email" href="mailto: himanshupatkar274@gmail.com" rel="noreferrer" target="_blank">
              <h1><i className="fa-solid fa-envelope"></i></h1>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link github" href="https://github.com/Himanshupatkar274" rel="noreferrer" target="_blank">
              <h1><i className="fa-brands fa-github"></i></h1>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://leetcode.com/himanshu2306" target="_blank" rel="noreferrer">
               <img loading="lazy" className="leetcode" src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="dvddg" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
