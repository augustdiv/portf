import React from "react"
import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = (props) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q6cgr3v', 'template_le61ugo', form.current, {
        publicKey: '3qSMpbiloeYs8dHOK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };

  return (<section id="contactId">
    <div className="main-contact-container">
        <div className="contact-title">
          <h5>Get in Touch</h5>
          <h1>Contact</h1>
        </div>
      <div className="contact-container">
       <div className="article_container">
          <div className="article_card">
          <MdMailOutline className="article_card_icon" />
          <a href="mailto:gowilliams92@gmail.com" target="blank"><h5>gowilliams92@gmail.com</h5></a>
          </div>
          
          <div className="article_card">
        
          <FaWhatsapp className="article_card_icon"/>
          <a href="https://wa.me/+2348061679125">+234 8061679125</a>
          </div>
        
          <div className="article_card">
          <MdLocationPin className="article_card_icon"/>
          <h5>Abuja Nigeria</h5>
          </div>
       </div>
       <div className="contact_divider"></div>

       {/*End of article card  */}

       <form ref={form} onSubmit={sendEmail}>
          <input type="name" name="name" placeholder="Full Name" required />
          <input type="email" name="email"  placeholder="Your Email" required/>
          <textarea name="message"  placeholder="your message" cols="20" rows="6" required></textarea>
          <button type="submit">Send Message</button>
       </form>
      </div>
    </div></section>
  )
};

export default Contact;
