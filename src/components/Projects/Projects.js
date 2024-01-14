import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import todo from "../../Assets/Projects/app-todo.png";
import lemon from "../../Assets/Projects/little-lemon.png";
import beat from "../../Assets/Projects/beat.png";
import cafe from "../../Assets/Projects/cafe2.png";
import clinica from "../../Assets/Projects/clinica.png";
import store from "../../Assets/Projects/store-front.png";
import blackjack from "../../Assets/Projects/blackjack.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="green">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos son algunos de los más recientes.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lemon}
              isBlog={false}
              title="Reserve a table "
              description="Proyecto creado desde cero con un wireframe en Figma, para su posterior prototipo y finalmente realizado mediante React.js. Donde he aprendido a trabajar con herramientas de UX y UI, además de profundizar en el uso de los principales Hooks, así como de React Router."
              ghLink="https://github.com/Bujio/coursera-little-lemon"
              demoLink="https://coursera-lemon-restaurant.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clinica}
              isBlog={false}
              title="Clinica React"
              description="App para hacer seguimiento de pacientes en una clinica utilizando Vite, los principales Hooks de React, localStorage y un CRUD. Además de aplicar un diseño responsive. "
              ghLink="https://github.com/Bujio/citas-react"
              demoLink="https://veterinaria-seguimiento-pacientes.netlify.app/" //    <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cafe}
              isBlog={false}
              title="Performance Web"
              description="
Este proyecto ha sido creado utilizando HTML y CSS con el objetivo de aprender cómo optimizar la carga de imágenes según el navegador y las preferencias del usuario. A lo largo del proceso de desarrollo, he obtenido conocimientos sobre el uso de la metodología BEM en CSS, lo que ha mejorado la estructura y la mantenibilidad del código."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blog-de-cafe-dev.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="Documentación Frontend"
              description="Trabajo sobre CSS y HTML donde he aprendido a trabajar con la metodología BEM para crear un código reutilizable y organizado en mis proyectos futuros. Gracias a la metodología BEM se evita por ejemplo la colisión de nombres. Además esta web sirve para consultar las principales documentaciones de desarrollo web desde un mismo sitio."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://documentacion-frontend.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blackjack}
              isBlog={false}
              title="Blackjack"
              description="Trabajar con correcciones, mezclar valores de arrays, introducción a la manipulación del DOM, eventos, crear imágenes en la página e implementar la lógica para un competidor de cartas"
              ghLink="https://github.com/Bujio/proyecto-blackjack"
              demoLink="https://blackjack-bujio.netlify.app/" //    <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beat}
              isBlog={false}
              title="Beat the Beat"
              description="
Beat the Beat conecta clubes y DJs con el propósito de permitir a los usuarios descubrir qué fiestas están teniendo lugar en su ciudad. El club crea el evento que va a tener lugar, asocia a un DJ y el DJ es el encargado de seleccionar una lista de reproducción. El evento aparecerá en el mapa unos días antes de que suceda, y cuando comience, el usuario tendrá acceso para votar el orden de reproducción de la lista.

MVP (Producto Mínimo Viable)
El usuario hace check-in y tiene acceso a la lista de canciones que el DJ va a reproducir, pudiendo votar el orden de reproducción.

Construido con:
Node.js, Express.js, MongoDB
React.js, Axios
APIs: Spotify, Cloudinary, MapBox
Chakra UI"
              demoLink="https://beat-the-beat-event-music.netlify.app/" //<--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="AppToDo"
              description="App que hace un CRUD completo utilizando Vite, LocalStorage, y hooks como useState, UseEffect, useContext"
              ghLink="https://github.com/Bujio/App-ToDos"
              demoLink="https://bujio.github.io/App-ToDos/" //    <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
