
import React from "react";
import "./Contact.css";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
     

      <div className="contact-card">
        
        {/* Glow layer */}
        <div className="contact-glow"></div>

         <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtext">
        Let’s build something amazing together 🚀  
        Feel free to reach out anytime
      </p>

        <form className="contact-form">
          
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="Your Full Name" required />
          <label htmlFor="email"> Email Address</label>
          <input type="email" placeholder="your@email.com" required />
          <label htmlFor="message">Your Message</label>
          <textarea placeholder="Share Your Message" rows="5" required></textarea>

          <button type="submit" className="send-btn">
  <span>Send Message</span>
  <svg className="send-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13"></path>
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22L11 13L2 9L22 2Z"></path>
  </svg>
</button>

        </form>

      
      </div>
    </section>
  );
}

