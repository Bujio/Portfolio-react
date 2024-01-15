import React from "react";
import Card from "react-bootstrap/Card";
import {
  ImAmazon,
  ImBasecamp,
  ImBinoculars,
  ImCommand,
  ImDownload,
  ImNpm,
  ImPacman,
  ImPointRight,
  ImPower,
  ImWindows,
} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="green">Javier Vivas</span> de{" "}
            <span className="green">Madrid, España.</span>
            <br />
            Actualmente trabajo como Digital E-commerce Merchandiser en El Corte
            Inglés.
            <br />
            He completado el{" "}
            <strong className="green">
              Bootcamp Web Developer Full Stack
            </strong>{" "}
            en Ironhack, así como cursos superiores de
            <strong className="green">
              {" "}
              Marketing Online y Social Media.
            </strong>{" "} y consultor SAP SD.
            <br />
            Además de poseer una licenciatura en Antropología Social y Cultural,
            que me ha permitido poder hacer análisis sociales sobre pautas de
            comportamiento.
            <br />
            <br />
            Aparte de programar, ¡hay otras actividades que me encanta hacer!
          </p>

          <ul>
            <li className="about-activity">
              <ImPacman /> Videojuegos
            </li>
            <li className="about-activity">
              <ImDownload /> Tecnología
            </li>
            <li className="about-activity">
              <ImBasecamp /> Trekking
            </li>
          </ul>

          <p style={{ color: "rgb(130, 180, 140) " }}>
            "Esforzándome por adquirir nuevos conocimientos para ponerlos en
            práctica."{" "}
          </p>
          <footer className="blockquote-footer">Javier Vivas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
