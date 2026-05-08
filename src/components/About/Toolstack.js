import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows11,
  SiNetlify,
  SiFigma,
  SiNotion,
  SiVercel,
} from "react-icons/si";

const tools = [
  { icon: <SiWindows11 />, name: "Windows 11" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiNotion />, name: "Notion" },
  { icon: <SiNetlify />, name: "Netlify" },
  { icon: <SiVercel />, name: "Vercel" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
};

function Toolstack() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map(({ icon, name }) => (
          <Col
            key={name}
            xs={4}
            md={2}
            className="tech-icons"
            as={motion.div}
            variants={itemVariants}
          >
            <span className="tech-icon-images">{icon}</span>
            <span className="tech-icon-label">{name}</span>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Toolstack;
