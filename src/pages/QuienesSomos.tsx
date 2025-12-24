import sistemas from "../assets/quienes-somos/Sistemas Hidraulicos(1).jpg";
import uvaMesa from "../assets/quienes-somos/uva-mesa.jpg";
import "../css/QuienesSomos.css";

export default function QuienesSomos() {
  return (
    <div className="quienes-somos">
      <p className="quienes-somos-text">
        Estamos en el mercado para proporcionar soluciones a nuestros clientes
        con el diseño, la provisión de materiales, y la instalación de equipos y
        accesorios hidráulicos que les permitan la máxima optimización del
        abastecimiento de agua en escenarios agrícolas o civiles.
      </p>

      <div className="quienes-somos-middle-container">
        <div className="quienes-somos-list">
          <p>
            Contamos con la experiencia y el soporte técnico de firmas de 1er
            nivel nacional e internacional para:
          </p>

          <ul>
            <li>
              Desarrollo, Suministro e Instalación Sistemas de riego tecnificado
            </li>
            <li>Filtración de agua para una amplia gama de aplicaciones</li>
            <li>Reparación y Suministro de Bombas</li>
            <li>Reparación y Suministro de Partes Hidráulicas</li>
            <li>Fabricación de Cuadros eléctricos</li>
            <li>Desarrollo “llave en mano” de proyectos hidráulicos</li>
          </ul>

          <img src={uvaMesa} alt="Uva de Mesa" className="uva-mesa-img" />
        </div>

        <img
          src={sistemas}
          alt="Sistemas Hidráulicos"
          className="sistemas-hidraulicos-img"
        />
      </div>
    </div>
  );
}
