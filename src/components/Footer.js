import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Row className="align-items-center">
          <Col md="4" className="footer-copywright">
            <h3>Designed &amp; Developed by Javier Vivas</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year}</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons" style={{ listStyle: "none", display: "flex", justifyContent: "center", gap: "4px", margin: 0 }}>
              <li className="social-icons">
                <a
                  href="https://github.com/Bujio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/javier-vivas-avila"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default Footer;
