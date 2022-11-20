import React, { useState } from "react";
import "./nav.css";
import { FiHome, FiUser } from "react-icons/fi";
import { BiBook, BiMessageSquareDots } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { IoCodeSlashSharp } from "react-icons/io5";
import { IoInformation } from "react-icons/io5";
import { IoMusicalNotesSharp } from "react-icons/io5";
import {RiRoadMapLine} from 'react-icons/ri'

const Nav = () => {
  const [isActiveNav, setIsActiveNav] = useState("#");
  const [onMusic, setOnMusic] = useState(false);

  const handlePlayMusic = () => {
    setOnMusic(!onMusic);
    if (onMusic === false) return document.querySelector("audio").play();
    else {
      return document.querySelector("audio").pause();
    }
  };
  console.log(onMusic);
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setIsActiveNav("#");
        }}
        className={isActiveNav === "#" ? "active" : ""}
      >
        <FiHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setIsActiveNav("#about");
        }}
        className={isActiveNav === "#about" ? "active" : ""}
      >
        <FiUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setIsActiveNav("#experience");
        }}
        className={isActiveNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => {
          setIsActiveNav("#services");
        }}
        className={isActiveNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => {
          setIsActiveNav("#portfolio");
        }}
        className={isActiveNav === "#portfolio" ? "active" : ""}
      >
        <IoCodeSlashSharp />
      </a>
      <a id="nav_road"
        href="#road"
        onClick={() => {
          setIsActiveNav("#road");
        }}
        className={isActiveNav === "#road" ? "active" : ""}
      >
        <RiRoadMapLine />
      </a>
      <a
        href="#Cv"
        onClick={() => {
          setIsActiveNav("#Cv");
        }}
        className={isActiveNav === "#Cv" ? "active" : ""}
      >
        <IoInformation />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setIsActiveNav("#contact");
        }}
        className={isActiveNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDots />
      </a>
      <a
        onClick={() => {
          setIsActiveNav("#music");
          // document.querySelector("audio").play();
          handlePlayMusic();
        }}
        className={isActiveNav === "#music" ? "active" : ""}
      >
        <IoMusicalNotesSharp />
      </a>
    </nav>
  );
};

export default Nav;
