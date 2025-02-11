import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textUtilsImg from "../../Assets/textutils.jpg"; // Ensure this image is correctly placed in the Assets folder
import inkomokoImg from "../../Assets/inkomoko.PNG"; // Ensure this image is correctly placed in the Assets folder
import plixiImg from "../../Assets/plixi.png"; // Ensure this image is correctly placed in the Assets folder

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
         <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textUtilsImg}
              title="Textutils"
              description="A web-based text manipulation tool that allows users to perform operations such as converting text to uppercase, lowercase, clearing text, and analyzing text statistics like word count and character count."
              ghLink="https://github.com/mianmoaz786/textutils"
              demoLink="https://textutils-text-analyzer-app.netlify.app/" // Optional
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inkomokoImg}
              title="InkoMoko"
              description="The Inko-Moko Dashboard UI Template is a modern, responsive dashboard built with HTML, CSS,and JavaScript. It features a sleek, intuitive layout, customizable components, and interactiveelements like dynamic charts. "
              ghLink="https://github.com/mianmoaz786/inko-moko"
              demoLink="https://inko-moko-ui-template.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plixiImg}
              title="Plixi "
              description="The Plixi Website Clone is a fully responsive replica of the original Plixi website It accurately mirrors the design, layout, and interactive elements of the original site, showcasing
expertise in front-end development and attention to detail."
              ghLink="https://github.com/mianmoaz786/Plixi"
              demoLink="https://plixi-template.netlify.app/" // Optional
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
