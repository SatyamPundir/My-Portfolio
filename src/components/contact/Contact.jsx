import React, { useRef } from 'react';
import "./contact.css";
import { MdOutlineEmail } from 'react-icons/md';
import { RiInstagramLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4jx2q7b', 'template_n63t4fe', form.current, '59opG_geJZC8m1kY1')
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_icon_option'/>
            <h4>Email</h4>
            <h5 className='email_text'>satyampundir.works@gmail.com</h5>
            <a href="mailto:satyampundir.works@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact_option">
            <RiInstagramLine className='contact_icon_option'/>
            <h4>Instagram</h4>
            <h5>satyam_pundir_</h5>
            <a href="https://www.instagram.com/satyam_pundir_/" target='_blank'>Follow Me</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_icon_option'/>
            <h4>WhatsApp</h4>
            <h5>+91-77078XXXX9</h5>
            <a href="https://api.whatsapp.com/send?phone=7707833249" target='_blank'>Start a Conversation</a>
          </article>
        </div>
        {/* End of CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
