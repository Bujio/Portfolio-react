import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import todo from "../../Assets/Projects/app-todo.png";
import lemon from "../../Assets/Projects/little-lemon.png";
import beat from "../../Assets/Projects/beat.png";
import cafe from "../../Assets/Projects/cafe2.png";
import clinica from "../../Assets/Projects/clinica.png";
import store from "../../Assets/Projects/store-front.png";
import blackjack from "../../Assets/Projects/blackjack.png";
import festival from "../../Assets/Projects/festival-rock.png";
import apartamentos from "../../Assets/Projects/apartamentos.png";

const projects = [
  {
    img: lemon,
    title: "Reserve a Table",
    description:
      "Proyecto creado desde cero con wireframe en Figma, prototipo y desarrollo en React.js. Profundización en UX/UI, Hooks principales y React Router.",
    ghLink: "https://github.com/Bujio/coursera-little-lemon",
    demoLink: "https://coursera-lemon-restaurant.netlify.app/",
  },
  {
    img: clinica,
    title: "Clínica React",
    description:
      "App de seguimiento de pacientes con Vite, Hooks de React, localStorage y CRUD completo. Diseño responsive.",
    ghLink: "https://github.com/Bujio/citas-react",
    demoLink: "https://veterinaria-seguimiento-pacientes.netlify.app/",
  },
  {
    img: cafe,
    title: "Performance Web",
    description:
      "HTML y CSS con optimización de carga de imágenes según navegador y preferencias del usuario. Metodología BEM en CSS.",
    ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
    demoLink: "https://blog-de-cafe-dev.netlify.app/",
  },
  {
    img: apartamentos,
    title: "BienesRaices",
    description:
      "Web responsive con modo oscuro, MVC, base de datos relacional MySQL, Sass/CSS y automatización de imágenes.",
    ghLink: "https://github.com/Bujio/venta-apartamentos-php-MVC",
    demoLink: "https://sutgowu.nyc.dom.my.id/admin",
  },
  {
    img: store,
    title: "Documentación Frontend",
    description:
      "CSS y HTML con metodología BEM para código reutilizable. Consulta de documentaciones de desarrollo web desde un único sitio.",
    ghLink: "https://github.com/soumyajit4419/Plant_AI",
    demoLink: "https://documentacion-frontend.netlify.app/",
  },
  {
    img: blackjack,
    title: "Blackjack",
    description:
      "Lógica de juego de cartas, manipulación del DOM, eventos, mezcla de arrays e implementación de competidor.",
    ghLink: "https://github.com/Bujio/proyecto-blackjack",
    demoLink: "https://blackjack-bujio.netlify.app/",
  },
  {
    img: beat,
    title: "Beat the Beat",
    description:
      "App MERN que conecta clubes y DJs. Los usuarios descubren eventos, acceden a playlists y votan el orden de reproducción. APIs: Spotify, Cloudinary, MapBox.",
    ghLink: "https://github.com/orgs/proyecto-final-music-Ironhack/repositories",
    demoLink: "https://beat-the-beat-event-music.netlify.app/",
  },
  {
    img: todo,
    title: "AppToDo",
    description:
      "CRUD completo con Vite, LocalStorage y hooks: useState, useEffect, useContext.",
    ghLink: "https://github.com/Bujio/App-ToDos",
    demoLink: "https://bujio.github.io/App-ToDos/",
  },
  {
    img: festival,
    title: "Festival Rock & EDM",
    description:
      "Web con HTML, CSS, Sass, JavaScript y Gulp. Profundización en Sass y automatización de tareas.",
    ghLink: "https://github.com/Bujio/Festival-music",
    demoLink: "https://festival-music-bay.vercel.app/",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="project-heading">
            Mis <strong className="green">Proyectos</strong>
          </h1>
          <p style={{ color: "rgba(241,245,249,0.5)", marginBottom: "3rem" }}>
            Estos son algunos de los más recientes.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
        >
          <Row style={{ justifyContent: "center" }}>
            {projects.map((p) => (
              <Col
                key={p.title}
                md={4}
                className="project-card"
                as={motion.div}
                variants={cardVariants}
              >
                <ProjectCard
                  imgPath={p.img}
                  isBlog={false}
                  title={p.title}
                  description={p.description}
                  ghLink={p.ghLink}
                  demoLink={p.demoLink}
                />
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
