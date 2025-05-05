import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  console.log("form", form.current)

  const sendEmail = (e) => {
    console.log("here")
    e.preventDefault();

    emailjs.sendForm('shailender', 'template_45l0for', form.current, 'ODx4ztS5lrdzy7a9Q')
      .then((result) => {
          alert('Message sent!');
      }, (error) => {
          alert('Failed to send message.');
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 