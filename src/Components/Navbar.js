import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Меню будет скрыто на мобильных устройствах
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      {isMobile ? (
        <button
          className="burger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Переключаем состояние открытия меню
        >
          ☰
        </button>
      ) : (
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/My-experience">My experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}

      {isMobile && isMenuOpen && (
        <div className="popup-menu">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/My-experience" onClick={() => setIsMenuOpen(false)}>
            My experience
          </Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
