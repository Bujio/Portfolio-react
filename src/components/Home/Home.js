import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.h1
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                style={{ paddingBottom: 15 }}
                className="heading"
              >
                Hola!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="heading-name"
              >
                Soy
                <strong className="main-name"> Javier Vivas</strong>
              </motion.h1>

              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                style={{ padding: 50, textAlign: "left" }}
              >
                <Type />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
