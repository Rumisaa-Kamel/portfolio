
// import React from "react";
// import "./Hero.css";
// import { Download, Mail } from "lucide-react";
// import { FaWhatsapp, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa"; // ✅ اضافه الايقونات
// import heroImg from "../assets/hero.jpeg"; // ✅ غيرها لصورتك

// export default function Hero() {
//   return (
//     <section id="home" className="hero">
//       <div className="hero-container">

//         {/* Left Content */}
//         <div className="hero-text">
//           <p className="hello">Hello!</p>
//           <h1 className="hero-title">
//             I'm Rumaysa Kamel, <span>a Frontend Developer</span>
//           </h1>
//           <h2 className="hero-role">Front-End Developer & UI/UX Designer</h2>
//           <p className="hero-desc">
//             I craft beautiful, responsive, and modern websites.
//             Turning ideas into elegant products with a blend
//             of creativity, clean code, and top-tier design.
//           </p>

//           <div className="hero-buttons">
//             <a className="cv-btn" href="/RumissaCV.pdf" download>
//               <Download size={18} /> Download CV
//             </a>

//             <a className="contact-btn" href="#contact">
//               <Mail size={18} /> Contact Me
//             </a>
//           </div>

//           {/* Social Icons */}
//           <div className="hero-social">
//             <a href="https://wa.me/20123456789" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//           </div>
//         </div>

//         {/* Hero Image */}
//         <div className="hero-img">
//           <div className="glow"></div>
//           <img src={heroImg} alt="Rumissa" />
//         </div>

//       </div>
//     </section>
//   );
// }




import React from "react";
import "./Hero.css";
import { Download, Mail } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa"; // ✅ اضافه الايقونات
import heroImg from "/assets/hero6.jpg";


export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-text">
          <p className="hello">
            Hello! <span className="wave">👋</span>
          </p>
          <h1 className="hero-title">
            I'm Rumisaa Kamel, <span className="typing">a Frontend Developer</span>
          </h1>
          <h2 className="hero-role">passionate about creating seamless and engaging user interfaces.</h2>
          <p className="hero-desc">
           After completing a comprehensive Frontend Development course and gaining practical experience in a company, I have expertise in transforming ideas into professional and functional websites and web applications.
          </p>

           {/* Social Icons */}
          <div className="hero-social">
            <a href="https://wa.me/201282917996" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/in/rumisaa-kamel-008664371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com/share/1Ch9TM88bC/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://github.com/Rumisaa-Kamel" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>

          <div className="hero-buttons">
            <a className="cv-btn" href="/RumissaCV.pdf" download>
              <Download size={18} /> Download CV
            </a>

            <a className="contact-btn" href="#contact">
              <Mail size={18} /> Contact Me
            </a>
          </div>

         
        </div>

        {/* Hero Image */}
        <div className="hero-img">
          <div className="glow"></div>
          <img src={heroImg} alt="Rumissa" />
        </div>

      </div>
    </section>
  );
}


