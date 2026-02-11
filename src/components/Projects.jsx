
// import React from "react";
// import "./Projects.css";
// import {
//   FaReact,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaGithub,
// } from "react-icons/fa";

// export default function Projects() {
//   const projects = [
//     {
//       title: "E-commerce Website",
//       desc: "A complete online store with product filtering, cart management, and localStorage.",
//       image: "/projects/ecom1.png",
//       tech: [
//         { icon: <FaReact />, name: "React" },
//         { icon: <FaJs />, name: "JavaScript" },
//         { icon: <FaHtml5 />, name: "HTML" },
//         { icon: <FaCss3Alt />, name: "CSS" },
//       ],
//     },
//     {
//       title: "Portfolio Website",
//       desc: "Personal portfolio showcasing skills, projects and contact form.",
//       image: "/projects/port1.png",
//       tech: [
//         { icon: <FaHtml5 />, name: "HTML" },
//         { icon: <FaCss3Alt />, name: "CSS" },
//         { icon: <FaJs />, name: "JavaScript" },
//         { icon: <FaGithub />, name: "GitHub" },
//       ],
//     },
//     {
//       title: "Dashboard App",
//       desc: "Admin dashboard with charts, tables and API integration.",
//       image: "/projects/dash1.png",
//       tech: [
//         { icon: <FaReact />, name: "React" },
//         { icon: <FaJs />, name: "JavaScript" },
//         { icon: <FaGithub />, name: "GitHub" },
//       ],
//     },
//   ];

//   return (
//     <section className="projects-section">
//       <h2 className="projects-title">My Projects</h2>

//       <div className="projects-container">
//         {projects.map((p, index) => (
//           <div className="project-card" key={index}>
//             <h3 className="project-name">{p.title}</h3>

//             <div className="project-tech">
//               {p.tech.map((t, i) => (
//                 <div key={i} className="tech-item">
//                   <span className="tech-icon">{t.icon}</span>
//                   <span className="tech-name">{t.name}</span>
//                 </div>
//               ))}
//             </div>

//             <p className="project-desc">{p.desc}</p>

//             <div className="project-image">
//               <img src={p.image} alt={p.title} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






// import React from "react";
// import "./Projects.css";
// import {
//   FaReact,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt
// } from "react-icons/fa";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Nursing Profile Website",
//       desc: "A professional profile for a nursing specialist featuring socials, skills, projects, contact form, and footer.",
//       images: ["/src/assets/nurse1.png", "/src/assets/nurse2.png"],
//       tech: [<FaHtml5 />, <FaCss3Alt />],
//     },
//     {
//       title: "Restaurant Landing Page",
//       desc: "Stylish restaurant landing page with chef intro, gallery, available dishes, and about section.",
//       images: ["/src/assets/restaurant.png", "/src/assets/Restaurant L.jpeg"],
//       tech: [<FaHtml5 />, <FaCss3Alt />],
//     },
//     {
//       title: "Digital Library App",
//       desc: "Add books with title, author, cover image & PDF file — displayed as editable cards with preview.",
//       images: ["/src/assets/Book.png"],
//       tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
//     },
//     {
//       title: "University Registration System",
//       desc: "Homepage, about page & student registration with add/edit/save/delete features.",
//       images: ["/src/assets/School L.jpeg", "/src/assets/signup school.png"],
//       tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
//     },
//     {
//       title: "CRUD System",
//       desc: "Create, Read, Update and Delete operations simulated like a database.",
//       images: ["/src/assets/CRUD.jpeg"],
//       tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
//     },
//     {
//       title: "Furniture E-Commerce Website",
//       desc: "Full website with categories, wishlist, cart, login/signup, dashboard, feedback, offers, related products & services.",
//       images: ["/src/assets/furniture home.png", "/src/assets/SignUp error1.png", "/src/assets/Login.png", "/src/assets/Dadlboord L.jpeg", "/src/assets/furniture productes.png", "/src/assets/furniture categury1.png", "/src/assets/furniture services.png", "/src/assets/furnitur service.png"],
//       tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
//     },
//     {
//       title: "Personal Portfolio Website",
//       desc: "Portfolio with home, about, skills, projects, contact & theme toggle.",
//       images: ["/projects/port1.png", "/projects/port2.png"],
//       tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
//     },
//   ];

//   return (
//     <section className="projects-section">
//       <h2 className="projects-title">My Projects</h2>

//       <div className="projects-container">
//         {projects.map((p, index) => (
//           <div className="project-card" key={index}>
//             <h3 className="project-name">{p.title}</h3>

//             <div className="project-tech">
//               {p.tech.map((icon, i) => (
//                 <span className="tech-icon" key={i}>{icon}</span>
//               ))}
//             </div>

//             <p className="project-desc">{p.desc}</p>

//             <div className="project-images">
//               {p.images.map((img, i) => (
//                 <img key={i} src={img} alt={p.title} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }









// --------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import "./Projects.css";
// import {
//   FaReact,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt
// } from "react-icons/fa";

// import { SiNextdotjs, SiTailwindcss} from "react-icons/si";


// export default function Projects() {
//   const projects = [
//     {
//       title: "Nursing Profile Website",
//       desc: "A professional profile for a nursing specialist featuring socials, skills, projects, contact form, and footer.",
//       images: ["/assets/nurse1.png", "/src/assets/nurse2.png"],
//       tech: [<FaHtml5 />, <FaCss3Alt />],
//     },
//     {
//       title: "Restaurant Landing Page",
//       desc: "Stylish restaurant landing page with chef intro, gallery, available dishes, and about section.",
//       images: ["/src/assets/restaurant.png", "/src/assets/Restaurant L.jpeg"],
//       tech: [<FaHtml5 />, <FaCss3Alt />],
//     },
//     {
//       title: "Digital Library App",
//       desc: "Add books with title, author, cover image & PDF file — displayed as editable cards with preview.",
//       images: ["/src/assets/Book.png"],
//       tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
//     },
//     {
//       title: "University Registration System",
//       desc: "Homepage, about page & student registration with add/edit/save/delete features.",
//       images: ["/src/assets/School L.jpeg", "/src/assets/signup school.png"],
//       tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
//     },
//     {
//       title: "CRUD System",
//       desc: "Create, Read, Update and Delete operations simulated like a database.",
//       images: ["/src/assets/CRUD.jpeg"],
//       tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
//     },
//     {
//       title: "Furniture E-Commerce Website",
//       desc: "Full website with categories, wishlist, cart, login/signup, dashboard, feedback, offers, related products & services.",
//       images: [
//         "/src/assets/furniture home.png",
//         "/src/assets/SignUp error1.png",
//         "/src/assets/Login.png",
//         "/src/assets/Dadlboord L.jpeg",
//         "/src/assets/furniture productes.png",
//         "/src/assets/furniture categury1.png",
//         "/src/assets/furniture services.png",
//         "/src/assets/furnitur service.png"
//       ],
//       tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />, <SiTailwindcss />, <SiNextdotjs />],
//     },
//     {
//       title: "Personal Portfolio Website",
//       desc: "Portfolio with home, about, skills, projects, contact & theme toggle.",
//       images: ["/src/assets/portfo1.png", "/src/assets/portfo2.png", "/src/assets/portfo3.png", "/src/assets/portfo4.jpeg", "/src/assets/portfo5.jpeg", "/src/assets/portfo6.jpeg", "/src/assets/portfo11.png", "/src/assets/portfo22.jpeg", "/src/assets/portfo33.jpeg"],
//       tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
//     },
//   ];

//   return (
//     <section id="projects" className="projects-section">
//       <h2 className="projects-title">My Projects</h2>

//       <div className="projects-container">
//         {projects.map((p, index) => (
//           <ProjectCard key={index} project={p} />
//         ))}
//       </div>
//     </section>
//   );
// }

// // ✅ الكارت + السلايدر
// function ProjectCard({ project }) {
//   const { images } = project;
//   const [index, setIndex] = useState(0);

//   // ✅ Auto slider
//   useEffect(() => {
//     if (images.length <= 1) return;
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="project-card">
//       <h3 className="project-name">{project.title}</h3>

//       <div className="project-tech">
//         {project.tech.map((icon, i) => (
//           <span className="tech-icon" key={i}>{icon}</span>
//         ))}
//       </div>

//       <p className="project-desc">{project.desc}</p>

//       {/* ✅ Slider container */}
//       <div className="project-images slider-container">
//         {images.map((img, i) => (
//           <img
//             key={i}
//             src={img}
//             alt={project.title}
//             className={`slide ${i === index ? "active" : ""}`}
//           />
//         ))}

//         {/* ✅ Dots */}
//         {images.length > 1 && (
//           <div className="dots">
//             {images.map((_, i) => (
//               <span
//                 key={i}
//                 className={`dot ${i === index ? "active-dot" : ""}`}
//                 onClick={() => setIndex(i)}
//               ></span>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }











// المسارات الصح عشان github

import React, { useState, useEffect } from "react";
import "./Projects.css";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Nursing Profile Website",
      desc: "A professional profile for a nursing specialist featuring socials, skills, projects, contact form, and footer.",
      images: ["/portfolio/assets/nurse1.png", "/portfolio/assets/nurse2.png"],
      tech: [<FaHtml5 />, <FaCss3Alt />],
    },
    {
      title: "Restaurant Landing Page",
      desc: "Stylish restaurant landing page with chef intro, gallery, available dishes, and about section.",
      images: ["/portfolio/assets/restaurant.png", "/portfolio/assets/Restaurant L.jpeg"],
      tech: [<FaHtml5 />, <FaCss3Alt />],
    },
    {
      title: "Digital Library App",
      desc: "Add books with title, author, cover image & PDF file — displayed as editable cards with preview.",
      images: ["/portfolio/assets/Book.png"],
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    },
    {
      title: "University Registration System",
      desc: "Homepage, about page & student registration with add/edit/save/delete features.",
      images: ["/portfolio/assets/School L.jpeg", "/portfolio/assets/signup school.png"],
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    },
    {
      title: "CRUD System",
      desc: "Create, Read, Update and Delete operations simulated like a database.",
      images: ["/portfolio/assets/CRUD.jpeg"],
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    },
    {
      title: "Furniture E-Commerce Website",
      desc: "Full website with categories, wishlist, cart, login/signup, dashboard, feedback, offers, related products & services.",
      images: [
        "/portfolio/assets/furniture home.png",
        "/portfolio/assets/SignUp error1.png",
        "/portfolio/assets/Login.png",
        "/portfolio/assets/Dadlboord L.jpeg",
        "/portfolio/assets/furniture productes.png",
        "/portfolio/assets/furniture categury1.png",
        "/portfolio/assets/furniture services.png",
        "/portfolio/assets/furnitur service.png"
      ],
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />, <SiTailwindcss />, <SiNextdotjs />],
    },
    {
      title: "Personal Portfolio Website",
      desc: "Portfolio with home, about, skills, projects, contact & theme toggle.",
      images: [
        "/portfolio/assets/portfo1.png",
        "/portfolio/assets/portfo2.png",
        "/portfolio/assets/portfo3.png",
        "/portfolio/assets/portfo4.jpeg",
        "/portfolio/assets/portfo5.jpeg",
        "/portfolio/assets/portfo6.jpeg",
        "/portfolio/assets/portfo11.png",
        "/portfolio/assets/portfo22.jpeg",
        "/portfolio/assets/portfo33.jpeg"
      ],
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((p, index) => (
          <ProjectCard key={index} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { images } = project;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="project-card">
      <h3 className="project-name">{project.title}</h3>

      <div className="project-tech">
        {project.tech.map((icon, i) => (
          <span className="tech-icon" key={i}>{icon}</span>
        ))}
      </div>

      <p className="project-desc">{project.desc}</p>

      <div className="project-images slider-container">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={project.title}
            className={`slide ${i === index ? "active" : ""}`}
          />
        ))}

        {images.length > 1 && (
          <div className="dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? "active-dot" : ""}`}
                onClick={() => setIndex(i)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
