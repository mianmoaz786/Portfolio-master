import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textUtilsImg from "../../Assets/textutils.jpg"; // Ensure this image is correctly placed in the Assets folder
import responsiveImg from "../../Assets/responsive.jpg"; // Ensure this image is correctly placed in the Assets folder
import portfolioImg from "../../Assets/home-main.svg"; // Ensure this image is correctly placed in the Assets folder

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
              imgPath={responsiveImg}
              title="Responsive Template"
              description="A responsive web template designed to adapt to various screen sizes and devices. It features a clean and modern design, built using HTML, CSS, and JavaScript. The template includes various sections such as a homepage, about page, services, portfolio, and contact form. "
              ghLink="https://github.com/mianmoaz786/mianmoaz786.github.io"
              demoLink="https://mianmoaz786.github.io/" // Optional
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              title="Personal portfolio "
              description="A personal portfolio website showcasing my projects, skills, and experience. The portfolio is built using React, CSS, and JavaScript, and features a responsive design that looks great on both desktop and mobile devices."
              ghLink="https://github.com/mianmoaz786/Portfolio-master"
              demoLink="https://moaz-portfolio-personal.netlify.app/" // Optional
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
