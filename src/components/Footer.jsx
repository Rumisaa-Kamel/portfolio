import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
// import logo from "../assets/logo.jpeg"; // ✅ ضيفي صورة اللوجو
import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* ✅ Logo + Terms/Privacy (Right) */}
        <div className="footer-left">
          {/* <img src={logo} alt="Logo" className="footer-logo-img" /> */}

          <div className="footer-policies">
            <a href="#terms">Terms & Conditions</a>
            <span>|</span>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>

        {/* ✅ Social Icons (Center) */}
        <div className="footer-socials">
           <a href="https://wa.me/201282917996" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
           <a href="https://www.linkedin.com/in/rumisaa-kamel-008664371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
           <a href="https://www.facebook.com/share/1Ch9TM88bC/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
           <a href="https://github.com/Rumisaa-Kamel" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    
        </div>

        {/* ✅ Footer Text (Left) */}
        <div className="footer-bottom">
          © 2025 <span className="footer-name">Al-Rumisaa Kamel</span>. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
