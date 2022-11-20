import React from "react";
import "./experience.css";
import { FaCode } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Knowledge</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCode className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <FaCode className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <FaCode className="experience__details-icon" />
              <h4>JAVASCRIPT</h4>
            </article>
            <article className="experience__details">
              <FaCode className="experience__details-icon" />
              <h4>REACTJS</h4>
            </article>
            <article className="experience__details">
              <FaCode className="experience__details-icon" />
              <h4>ANGULAR</h4>
            </article>
            <article className="experience__details">
              <FaCode className="experience__details-icon" />
              <h4>BOOTSTRAP</h4>
            </article>
            <article className="experience__details">
              <FaCode className="experience__details-icon" />
              <h4>TAILWINDCSS</h4>
            </article>
            <article className="experience__details">
              <FaCode className="experience__details-icon" />
              <h4>MATERIAL UI</h4>
            </article>
            <article className="experience__details">
              <FaCode className="experience__details-icon" />
              <h4>FIREBASE</h4>
            </article>
            <article className="experience__details">
              <FaCode className="experience__details-icon" />
              <h4>FIGMA</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {/* <article className="experience__details">
                            <FaCode className='experience__details-icon'/>
                            <h4>MySQL</h4>
                        </article>
                        <article className="experience__details">
                            <FaCode className='experience__details-icon'/>
                            <h4>Python</h4>
                        </article> */}
            <small className="text-light">Upcoming...</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
