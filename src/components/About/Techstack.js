import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiCss3,
  DiHtml5,
  DiPhp,
} from "react-icons/di";
import {
  SiBootstrap,
  SiGoogleanalytics,
  SiGulp,
  SiMysql,
  SiPostgresql,
  SiSass,
} from "react-icons/si";

const techs = [
  { icon: <DiHtml5 />, name: "HTML5" },
  { icon: <DiCss3 />, name: "CSS3" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiPhp />, name: "PHP" },
  { icon: <DiReact />, name: "React.js" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiSass />, name: "Sass" },
  { icon: <SiGulp />, name: "Gulp" },
  { icon: <SiGoogleanalytics />, name: "Analytics" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
};

function Techstack() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techs.map(({ icon, name }) => (
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

export default Techstack;
