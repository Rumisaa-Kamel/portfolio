
import React from "react";
import "./Services.css";
import { FaReact, FaFigma, FaLaptopCode, FaFileAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      desc: "I build responsive and interactive user interfaces using React.js, HTML, CSS, and JavaScript.",
    },
    {
      icon: <FaFigma />,
      title: "Convert UI Designs to Code",
      desc: "I convert Figma or Adobe XD designs into clean, pixel-perfect, and functional web pages using modern frontend tools.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Landing Page Development",
      desc: "I create fast, responsive, and SEO-friendly landing pages to promote products, apps, or businesses.",
    },
    {
      icon: <FaFileAlt />,
      title: "Personal Portfolio Websites",
      desc: "I build modern portfolio websites for developers, designers, and freelancers to showcase their skills and projects.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-header">
        <h3 className="services-subtitle">My Services</h3>
        <h2 className="services-title">Here are some of the services I offer :</h2>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            {/* <button className="service-btn">
              View More
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
}





