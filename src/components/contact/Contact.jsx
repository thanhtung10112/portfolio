import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FiSmartphone } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qennbdd', 'template_41w1jtu', form.current, 'AElM3897cMBm4SObt')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>truonghoangdung57@gmail.com</h5>
            <a
              href="mailto:truonghoangdung57@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Trương Hoàng Dũng</h5>
            <a
              href="https://m.me/dung.hoangtruong.5"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FiSmartphone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>0396 753 532</h5>
            <a href="tel:0396753532">Make a phone call</a>
          </article>
        </div>
        {/* Contact end part */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder="Your name" required className="input" />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary contact__btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
