import React from "react";
import "./cv.css";
import ava1 from "../../assets/avatar1.jpg";
import ava2 from "../../assets/avatar2.jpg";
import ava3 from "../../assets/avatar3.jpg";
import ava4 from "../../assets/avatar4.jpg";
import ava5 from "../../assets/avatar5.jpg";
import ava6 from "../../assets/ava7.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay } from "swiper";

// const swipery = new Swiper('.swiper',{
//     autoplay:{
//         delay:5000,
//     }
// })

const Cv = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section id="Cv">
      <h5>Personal Details and Soft Skills</h5>
      <h2>Some interesting things</h2>
      <div className="cv-bubble"></div>
      <Swiper
        className="container cv__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="cv">
          <div className="cv__avatar">
            <img src={ava5} alt="" />
          </div>
          <h5>Outstanding achievements</h5>
          <small className="cv__content">
          Second prize in provincial math exam in 2013, 2014/ Graduated from Le Quy Don specialized school in math class, Binh Dinh/ University scholarship in 2019
          </small>
        </SwiperSlide>
        <SwiperSlide className="cv">
          <div className="cv__avatar">
            <img src={ava1} alt="" />
          </div>
          <h5>Hobbies</h5>
          <small className="cv__content">
          Traveling/ Watching horror movies/ Listening to lofi/ Coding website/ Playing football/ Play LoL/ Solve math/ Decor/ Make friends
          </small>
        </SwiperSlide>
        <SwiperSlide className="cv">
          <div className="cv__avatar">
            <img src={ava2} alt="" />
          </div>
          <h5>Talents</h5>
          <small className="cv__content">
          Painting / Singing/ Playing game (LOL)/ Taking pictures/ Solving math/ Learn quickly/ Present to the crowd/ Have crazy ideas

          </small>
        </SwiperSlide>
        <SwiperSlide className="cv">
          <div className="cv__avatar">
            <img src={ava3} alt="" />
          </div>
          <h5>Characters</h5>
          <small className="cv__content">
          Sociable/ Inquisitive/ Gentle/ Responsible at work/ Humorous/ Emotional/ Reasonable/ Adapt quickly/ Vulnerable/ Studious/ Ambitious
          </small>
        </SwiperSlide>
        <SwiperSlide className="cv">
          <div className="cv__avatar">
            <img src={ava4} alt="" />
          </div>
          <h5>Weakness</h5>
          <small className="cv__content">
          Don't have much real experience in this field/ English ability is still limited (TOEIC 595)/ Easily affected by negative arguments... but I'm improving better
          </small>
        </SwiperSlide>
        <SwiperSlide className="cv">
          <div className="cv__avatar">
            <img src={ava6} alt="" />
          </div>
          <h5>Economic projects</h5>
          <small className="cv__content">
          Evaluation of factors affecting buying behavior in HCM/ Digital transformation solutions in Vietnamese agriculture/ Planning for Soc Trang and Kien Giang provinces
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Cv;
