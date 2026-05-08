import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.4, 0, 0.2, 1] },
  }),
};

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
              style={{ fontSize: "2.6em" }}
            >
              Sobre{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c084fc, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                mí
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={1}
              className="home-about-body"
            >
              Como experto en e-commerce, mi principal role en los últimos años,
              he adquirido sólidos conocimientos en análisis y desarrollo web.
              <br />
              <br />
              Mi lenguaje de programación principal es{" "}
              <i>
                <b className="green"> Javascript</b>
              </i>
              , en el cual me siento cómodo y capaz de desarrollar soluciones
              efectivas. Mi área de interés está centrada en las nuevas
              tecnologías y productos web, así como áreas relacionadas con el
              comercio electrónico y el análisis del tráfico web.
              <br />
              <br />
              Creo en el{" "}
              <b className="green">aprendizaje continuo</b> como parte de la
              evolución profesional, donde pueda aplicar mis habilidades y
              conocimientos para impulsar el crecimiento en el ámbito tecnológico
              y empresarial.
              <br />
              <br />
              Cuando es posible, también aplico mi pasión por desarrollar
              proyectos personales con <b className="green">Node.js</b> y{" "}
              <i>
                <b className="green">
                  bibliotecas y frameworks modernos de JavaScript
                </b>
              </i>{" "}
              como puede ser{" "}
              <i>
                <b className="green">React.js</b>
              </i>
            </motion.p>
          </Col>

          <Col md={4} className="myAvtar">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              custom={0}
            >
              PUEDES ENCONTRARME EN
            </motion.h1>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              custom={1}
              className="home-about-social-links"
            >
              <li className="social-icons">
                <a
                  href="https://github.com/Bujio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/javier-vivas-avila/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </motion.ul>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              custom={2}
              style={{ color: "rgba(241,245,249,0.55)", marginTop: "1rem" }}
            >
              Será un placer poder{" "}
              <span className="green">conversar</span> contigo 😉
            </motion.p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
