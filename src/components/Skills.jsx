
import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiRedux, SiTypescript, SiFigma } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiFigma />, name: "Figma" },
  ];

  return (
    <section id="skills" className="skills">
      <h3 className="skills-subtitle">My Skills</h3>
      <h2 className="skills-title">Here are the tools and technologies I use :</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}




