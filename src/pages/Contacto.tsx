import marcariLogo from "../assets/marcari-logo.jpeg";
import "../css/Contacto.css";

export default function Contacto() {
  return (
    <div className="contacto">
      <img
        src={marcariLogo}
        alt="MARCARI-LOGO"
        className="contacto-marcari-logo"
      />

      <p className="contacto-text">
        CA MARCARI ESPAÑA 2017 S.L. <br /> <br />
        Ramon de Moncada 14 – 3F <br /> <br />
        (07181) Calviá – Is. Baleares – ESPAÑA
      </p>
    </div>
  );
}
