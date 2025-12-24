import "../css/Servicio.css";
import armoire from "../assets/servicio/Armoire-elct.jpg";
import bomba from "../assets/servicio/bomba.jpg";
import sistema from "../assets/servicio/descarga.jpeg";
import tablero from "../assets/servicio/Tablero.jpg";
import irrigazione from "../assets/servicio/660ec9e6bea7d236867504-Irrigazione_goccia.jpg";
import fertiirrigacion from "../assets/servicio/IMG_20200407_160325_1.jpg";

export default function Servicio() {
  return (
    <div className="servicio">
      <p className="servicio-text">
        Nuestra empresa brinda a sus clientes el servicio integral de
        Desarrollo, Suministro e Instalación de Sistemas de Riego Tradicional o
        Inteligente y puesta a punto de estaciones de bombeo, así como sus
        componentes hidráulicos.
      </p>

      <div className="servicio-list-container">
        <p>
          Contamos con el apoyo de empresas con amplia experiencia e
          instalaciones para fabricación y reparación de equipos hidráulicos de
          alto caudal o bajo caudal.
        </p>

        <ul>
          <li>
            Diseño y Suministro con o sin Instalación de Sistemas de Riego
            Tradicional.
          </li>
          <li>
            Diseño y Suministro con o sin Instalación de Sistemas de Riego
            Inteligente / Fertiirrigación.
          </li>
          <li>Reparación y Suministro de bombas de superficie y sumergidas</li>
          <li>Reparación y Fabricación de partes hidráulicas.</li>
          <li>
            Fabricación de Cuadros Eléctricos para controles específicos de
            Sistemas de Riego y Estaciones de Bombeo.
          </li>
        </ul>
      </div>

      <div className="servicio-imgs-container">
        <div className="servicio-sistema-img-container">
          <p>
            <strong>Riego Tradicional</strong> con bombas para impulsar agua a
            través de una red de tuberías, que luego la distribuyen al campo.
          </p>
          <img src={sistema} alt="sistema" />
        </div>

        <div className="servicio-fertiirrigacion-img-container">
          <img src={fertiirrigacion} alt="fertiirrigacion" />
          <p>
            <strong>Riego Inteligente / Fertiirrigación</strong> gestión del
            riego de forma remota y optimizada usando datos climáticos y
            sensores para regar solo lo necesario combinado con la aplicación de
            nutrientes para optimizar el crecimiento de los cultivos
          </p>
        </div>

        <div className="bombas-img-container">
          <p>
            <strong>Reparación y suministro de bombas</strong> Reparamos bombas
            de superficie y sumergidas, ponemos a disposición de nuestros
            clientes la experiencia de más de 30 años en fabricación y
            reparación de equipos hidráulicos de grandes hasta bajos caudales.
          </p>
          <img src={irrigazione} alt="irrigazione" />
        </div>

        <div className="partes-hidraulicas-img-container">
          <img src={bomba} alt="bomba" />
          <p>
            <strong>Reparación y fabricación de partes hidráulicas</strong>{" "}
            Fabricamos y reconstruimos partes y piezas de equipos hidráulicos
            desde plano suministrados por los clientes o desde el personal
            técnico de nuestro taller técnico de soporte.
          </p>
        </div>

        <div className="cuadros-img-container">
          <p>
            <strong>Fabricación de cuadros eléctricos</strong> Fabricamos
            cuadros eléctricos de acuerdo a las exigencias técnicas de nuestros
            clientes para aplicaciones de protección y maniobra equipos de riego
            y estaciones de bombeo.
          </p>
          <img src={armoire} alt="armoire" />
        </div>
      </div>
    </div>
  );
}
