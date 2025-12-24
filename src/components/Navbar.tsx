import { Link } from "react-router-dom";
import burgerMenu from "../assets/burger-menu-svgrepo-com (1).svg";
import marcariLogo from "../assets/marcari-logo.jpeg";
import { useState } from "react";
import "../css/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <img src={marcariLogo} alt="marcari-logo" className="logo" />
      <button onClick={toggleMenu} className="toggle-menu">
        <img src={burgerMenu} alt="Burger Menu" className="burger-menu" />
      </button>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/quienes-somos">QUIENES SOMOS</Link>
          </li>
          <li>
            <Link to="/productos">PRODUCTOS</Link>
          </li>
          <li>
            <Link to="/servicios">SERVICIO</Link>
          </li>
          <li>
            <Link to="/contacto">CONTACTO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
