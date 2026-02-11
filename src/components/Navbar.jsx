
// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { Moon, Sun } from "lucide-react";

// export default function Navbar() {
//   // ✅ حفظ الثيم في localStorage بحيث يفضل بعد التحديث
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//   const [active, setActive] = useState("home");

//   useEffect(() => {
//     // ✅ تطبيق الثيم على مستوى الـ document
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="navbar">
//       <div className="nav-container">

//         {/* Logo */}
//         <h1 className="logo">Portfolio<span>.</span></h1>

//         {/* Links */}
//         <ul className="nav-links">
//           {navLinks.map((link, i) => (
//             <li key={i}>
//               <a
//                 href={link.href}
//                 className={active === link.href ? "active" : ""}
//                 onClick={() => setActive(link.href)}
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Controls */}
//         <div className="nav-actions">
//           <button
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             className="theme-toggle"
//             aria-label="Toggle theme"
//           >
//             {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
//           </button>

//           <a href="#contact" className="talk-btn">Let's Talk</a>
//         </div>
//       </div>
//     </nav>
//   );
// }



// ---------------------------------------------------------------
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Moon, Sun } from "lucide-react";



export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  // ✅ تتبع القسم أثناء السكرول
  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = link.href;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Portfolio<span>.</span></h1>

        <ul className="nav-links">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.href}`}
                className={active === link.href ? "active" : ""}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="theme-toggle"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a href="#contact" className="talk-btn">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
}








// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { Moon, Sun } from "lucide-react";
// import { FaBars, FaTimes } from "react-icons/fa"; // ✅ أيقونات الهامبرغر والإغلاق

// export default function Navbar() {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//   const [active, setActive] = useState("home");
//   const [menuOpen, setMenuOpen] = useState(false); // ✅ قائمة الموبايل

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const navLinks = [
//     { name: "Home", href: "home" },
//     { name: "About", href: "about" },
//     { name: "Services", href: "services" },
//     { name: "Skills", href: "skills" },
//     { name: "Projects", href: "projects" },
//     { name: "Contact", href: "contact" },
//   ];

//   // ✅ تتبع القسم أثناء السكرول
//   useEffect(() => {
//     const handleScroll = () => {
//       let current = "";

//       navLinks.forEach((link) => {
//         const section = document.getElementById(link.href);
//         if (section) {
//           const rect = section.getBoundingClientRect();
//           if (rect.top <= 150 && rect.bottom >= 150) {
//             current = link.href;
//           }
//         }
//       });

//       setActive(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ إغلاق القائمة عند الضغط على رابط في الموبايل
//   const handleLinkClick = () => setMenuOpen(false);

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <h1 className="logo">Portfolio<span>.</span></h1>

//         {/* Links */}
//         <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//           {navLinks.map((link, i) => (
//             <li key={i}>
//               <a
//                 href={`#${link.href}`}
//                 className={active === link.href ? "active" : ""}
//                 onClick={handleLinkClick} // ✅ إغلاق القائمة عند الضغط
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger Icon */}
//         <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//         </div>

//         {/* Theme + Button */}
//         <div className="nav-actions">
//           <button
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             className="theme-toggle"
//           >
//             {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
//           </button>

//           <a href="#contact" className="talk-btn">Let's Talk</a>
//         </div>
//       </div>
//     </nav>
//   );
// }
