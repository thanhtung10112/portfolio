import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { CgWorkAlt } from "react-icons/cg";
import { BsCode } from "react-icons/bs";
import { VscProject } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>ABOUT ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me " />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <CgWorkAlt className="about__icon" />
              <h5>Experience</h5>
              <small>
                Completing the CyberSoft's fullstack web programming course
              </small>
            </article>
            <article className="about__card">
              <BsCode className="about__icon" />
              <h5>Programming languages and libraries</h5>
              <small>
                Programming languages: HTML, CSS, Javascript, Python.
                <br /> Framework and libraries: React, Bootstrap, TailwindCSS...
              </small>
            </article>
            <article className="about__card">
              <VscProject className="about__icon" />
              <h5>Demo Projects</h5>
              <small>
                HDTicket, HDMuvi, Weather miniBOT, RealEstate Villa
                landing page, Adventure travel landing page, SpotifyHD music website...
              </small>
            </article>
          </div>
          <p>
            My full name is Truong Hoang Dung. I graduated from Ho Chi Minh City
            University of Economics in 2019 majoring in planned economics, GPA
            3.12/4. After that, I worked at the Institute for Policy Research on
            Agriculture and Health, University of Economics Ho Chi Minh City for
            more than 2 years. This job requires me to go to many places, visit
            many websites to collect and process information and data of
            agencies, ministries, and press news, but in general it is quite
            bad... <br></br> <br></br> With passion about visual arts as well as many other
            questions, I decided to learn
            more about cybersoft's fullstack website program from the end of 2021. My future
            direction is to become a Fullstack website developer with financial freedom and connection expansion.
          </p>
          <a className="btn btn-primary" href="#contact">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
