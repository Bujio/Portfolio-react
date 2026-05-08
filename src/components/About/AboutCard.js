import React from "react";
import Card from "react-bootstrap/Card";
import { ImPacman, ImDownload, ImBasecamp } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "rgba(241,245,249,0.75)", lineHeight: 1.8 }}>
            Hola a todos, soy{" "}
            <span className="green">Javier Vivas</span> de{" "}
            <span className="green">Madrid, España.</span>
            <br />
            Actualmente trabajo como Digital E-commerce Merchandiser en{" "}
            <span className="green">El Corte Inglés</span>.
            <br />
            <br />
            He completado el{" "}
            <strong className="green">Bootcamp Web Developer Full Stack</strong>{" "}
            en Ironhack, así como cursos superiores de{" "}
            <strong className="green">Marketing Online y Social Media</strong> y
            consultor SAP SD.
            <br />
            <br />
            Además de poseer una licenciatura en Antropología Social y Cultural,
            que me ha permitido hacer análisis sobre pautas de comportamiento.
          </p>

          <p
            style={{
              color: "rgba(241,245,249,0.5)",
              fontSize: "0.9em",
              marginTop: "1.2rem",
              marginBottom: "0.5rem",
            }}
          >
            Aparte de programar, ¡hay otras actividades que me encanta hacer!
          </p>

          <ul style={{ paddingLeft: 0 }}>
            <li className="about-activity">
              <ImPacman style={{ color: "var(--color-primary)", marginRight: 8 }} />
              Videojuegos
            </li>
            <li className="about-activity">
              <ImDownload style={{ color: "var(--color-secondary)", marginRight: 8 }} />
              Tecnología
            </li>
            <li className="about-activity">
              <ImBasecamp style={{ color: "var(--color-accent)", marginRight: 8 }} />
              Trekking
            </li>
          </ul>

          <p
            style={{
              background: "linear-gradient(135deg, #c084fc, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontStyle: "italic",
              marginTop: "1.5rem",
              fontSize: "1.05em",
            }}
          >
            "Esforzándome por adquirir nuevos conocimientos para ponerlos en práctica."
          </p>
          <footer
            className="blockquote-footer"
            style={{ marginTop: "0.3rem" }}
          >
            Javier Vivas
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
