import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{ height: "100%" }}
    >
      <Card className="project-card-view">
        <div style={{ overflow: "hidden" }}>
          <Card.Img variant="top" src={props.imgPath} alt={props.title} />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {!props.isBlog && props.demoLink && (
              <Button variant="primary" href={props.demoLink} target="_blank">
                <CgWebsite /> &nbsp;Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;
