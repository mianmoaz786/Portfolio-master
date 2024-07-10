import React from "react";
import { Card } from "react-bootstrap";

function ProjectCard({ imgPath, title, description, ghLink, demoLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img className="my-3" variant="top" src={imgPath} alt={title} />
      <Card.Body>
        <Card.Title >{title}</Card.Title>
        <Card.Text className="my-3">{description}</Card.Text>
        <Card.Link href={ghLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </Card.Link>
        {demoLink && (
          <Card.Link href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
