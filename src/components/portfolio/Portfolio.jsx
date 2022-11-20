import React from "react";
import "./portfolio.css";
import portfolio from "../../assets/portfolio.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/music.png";
import portfolio4 from "../../assets/crypto.png";
import portfolio5 from "../../assets/pyscript2.png";
// import portfolio6 from "../../assets/portfolio6.png";
import portfolio7 from "../../assets/museum.png";
import portfoliomu from "../../assets/portfoliomu.png";
import myPortfolio from "../../assets/myportfolio.png";
import fig1 from "../../assets/portfoliovege.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Practical Projects</h5>
      <h2 style={{marginBottom:'0.5rem'}}>Portfolio</h2>
      <h5 style={{marginBottom:'3rem', fontSize:'1rem'}}>-- Sorry about some non-responsive projects --</h5>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>HDTicket : React, TailwindCSS, Antd</h3>
            <div className="portfolio__item-cta">
              <a
                // href="https://github.com/thdungwithbugs/travelhd_demo"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Private
              </a>
              <a
                href="https://hdticket.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfoliomu} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>Film Search : React, TailwindCSS, TMDB</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/HDMuvi"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://hdmovie-teal.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio2} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>RealEstate UI: React, Styled components</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/realestateHD_demo"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://realestate-hd-demo.vercel.app/"
                className="btn btn-primary"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={myPortfolio} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>HD Portfolio : React, CSS</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://thdungwithbugs.github.io/my-portfolio/"
                rel="noreferrer"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://github.com/thdungwithbugs/my-portfolio"
                rel="noreferrer"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio4} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>HDCrypto Search : React, Coingecko API</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/hdcrypto-searcher"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://hdcrypto-searcher.vercel.app/"
                rel="noreferrer"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={fig1} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>Food recipe search : React, Edamam</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/HDFood-recipe"
                rel="noreferrer"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://hdfood-recipe.vercel.app/"
                rel="noreferrer"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio7} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>HDArt Museum : React, Artic API</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/HDArt-museum"
                rel="noreferrer"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://hda-rt-museum.vercel.app/"
                rel="noreferrer"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio3} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>HDMusic : React, TailwindCSS</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/HDLofi"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://thdungwithbugs.github.io/HDLofi/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolio5} alt="portfolio pic" />
          </div>
          <div className="content">
            <h3>Explore something new : Pyscript</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/thdungwithbugs/Pyscript_Explore"
                rel="noreferrer"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://hdpyscript.vercel.app/"
                rel="noreferrer"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
