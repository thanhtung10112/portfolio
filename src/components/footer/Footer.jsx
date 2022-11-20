import React, { Children, useState } from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Astro from "../../assets/footer-astro.png";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Footer = () => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (event) => {
    setCoords(event.target.getBoundingClientRect());
  };
  return (
    <footer>
      <img src={Astro} alt="" className="astro" />
      <a href="#" className="footer__logo">
        {hovered && <TooltipContent coords={coords}></TooltipContent>}
        <h1 ref={nodeRef} onMouseOver={handleHover}>
          {" "}
          HDung Portfolio
        </h1>
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#cv">CV</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/dung.hoangtruong.5/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/truonhoandun/"
          target="_blank"
          rel="noreferrer"
        >
          <RiInstagramFill />
        </a>
        <a
          href="https://github.com/thdungwithbugs"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ho%C3%A0ng-d%C5%A9ng-tr%C6%B0%C6%A1ng-a40a86185/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          {" "}
          A portfolio website coded by ReactJS by Hoang Dung &copy; 2022. Reference: Egator.{" "}
        </small>
      </div>
    </footer>
  );
};

function TooltipContent({ coords, children }) {
  console.log(coords);
  if (typeof document === "undefined") return;
  return ReactDOM.createPortal(
    <p
      style={{
        padding: "4px 7px",
        background: 'linear-gradient(45deg, #f64f59, #c471ed, #12c2e9)',
        color: "white",
        borderRadius: "8px",
        position: "absolute",
        display: "inline-block",
        top: coords.top - coords.height / 2 + window.scrollY,
        left: coords.left,
        // maxWidth:'200px',
        // transform: '-100%',
        transition: "all",
        opacity: 1,
      }}
    >
      _Thanks for your view and hope to connect with you...
    </p>,
    document.querySelector("body")
  );
}

export default Footer;
