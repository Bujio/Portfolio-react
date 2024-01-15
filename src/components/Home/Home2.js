import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Sobre <span className="green"> mi </span>
            </h1>
            <p className="home-about-body">
              Como experto en e-commerce, mi principal role en los últimos años,
              he adquirido sólidos conocimientos en análisis y desarrollo web.
              <br />
              <br />
              Mi lenguaje de programación principal es
              <i>
                <b className="green"> Javascript </b>
              </i>
              , en el cual me siento cómodo y capaz de desarrollar soluciones
              efectivas. Mi área de interés está centrada en las nuevas
              tecnologías y productos web, así como áreas relacionadas con el
              comercio electrónico y el análisis del tráfico web.
              <br />

              
              <br />
              Creo en el <b className="green"> aprendizaje continuo</b> como
              parte de la evolución profesional, donde pueda aplicar mis
              habilidades y conocimientos para impulsar el crecimiento en el
              ámbito tecnológico y empresarial. 
              <br /><br/>
              Cuando es posible, también aplico mi pasión por desarrollar
              projectos personales con <b className="green">Node.js</b> y{" "}
              <i>
                <b className="green">
                  bibliotecas y frameworks modernos de JavaScript
                </b>
              </i>
              . &nbsp; como puede ser
              <i>
                <b className="green"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>PUEDES ENCONTRARME EN</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Bujio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/JavierVivasvil1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/javier-vivas-avila/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <p>
              Será un placer poder <span className="green">conversar </span>
              contigo 😉
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
