import "../css/App.css";
import calculadoraRiego from "../assets/calculadora-de-rreigo-500x335.png";
import instalacion from "../assets/Instalacion.jpg";
import sistemaRiego from "../assets/Sistema-de-riego-por-goteo-automatizado.jpeg";
import valvulas from "../assets/Valvulas.jpg";

export default function App() {
  return (
    <div>
      <div className="main">
        <div className="images-container">
          <img
            src={calculadoraRiego}
            alt="calculadora de riego"
            className="image"
          />
          <img src={valvulas} alt="valvulas" className="image" />
          <img src={instalacion} alt="instalación" className="image" />
          <img src={sistemaRiego} alt="sistema de riego" className="image" />
        </div>

        <p className="main-page-text">
          Dedicados a productos y servicios para Obras Hidráulicas, Civiles y de
          Riego
        </p>
      </div>
    </div>
  );
}
