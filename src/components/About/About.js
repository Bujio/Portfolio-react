import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

function SectionHeading({ children }) {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      className="project-heading"
      style={{ marginBottom: "1rem" }}
    >
      {children}
    </motion.h1>
  );
}

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}
          >
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              style={{ fontSize: "2.2em", paddingBottom: "20px", fontWeight: 700 }}
            >
              ¿Quién{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c084fc, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                soy?
              </span>
            </motion.h1>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
            >
              <Aboutcard />
            </motion.div>
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <motion.img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              style={{ borderRadius: "var(--radius-lg)" }}
            />
          </Col>
        </Row>

        <SectionHeading>
          Conocimientos{" "}
          <strong className="green">Profesionales</strong>
        </SectionHeading>
        <Techstack />

        <SectionHeading>
          <strong className="green">Herramientas</strong> que uso
        </SectionHeading>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
