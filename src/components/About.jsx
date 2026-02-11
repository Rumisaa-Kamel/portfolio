
// import React from "react";
// import "./About.css";
// // import aboutImg from "../assets/about.jpeg";
// const aboutImg = "/public/assets/about.jpeg";


// export default function About() {
//   return (
//     <section id="about" className="about">
//       <div className="about-container">

//         {/* Left — Image */}
//         <div className="about-img">
//           <div className="about-glow"></div>
//           <img src={aboutImg} alt="About" />
//         </div>

//         {/* Right — Text */}
//         <div className="about-content">
//           <h2 className="about-title">About Me</h2>
//           <p className="about-text">
//             I'm a front-end developer with a passion for design and user experience. I enjoy writing clean, organized code that delivers a seamless user experience. Throughout my career, I've learned to work with HTML, CSS, JavaScript, and React to build responsive and fast websites and applications. I have practical experience through an internship at a company where I participated in developing real-world projects, giving me strong expertise in translating designs into functional and effective interfaces.
//           </p>

//           <a href="#services" className="view-more">
//             View More ↓
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }






// مسارات ال github

import React from "react";
import "./About.css";

const aboutImg = "/portfolio/assets/about.jpeg";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-img">
          <div className="about-glow"></div>
          <img src={aboutImg} alt="About" />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I'm a front-end developer with a passion for design and user experience...
          </p>

          <a href="#services" className="view-more">
            View More ↓
          </a>
        </div>
      </div>
    </section>
  );
}
