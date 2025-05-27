import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import recepie from "../../Assets/Projects/recepie.png";
import myntra from "../../Assets/Projects/myntra.png";
import AboutCard from "./achevement";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recepie}
              isBlog={false}
              title="Recepie finder"
              description="Built a Web Application using HTML, CSS, JavaScript, and SQL to allow users to input ingredients and find matching recipes instantly"
              ghLink="https://github.com/VineethaDevavarapu/Recepie-finder.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Loaner Application"
              description="Developed a ServiceNow app to automate loaner item requests, with real-time tracking and role-based access.
and used client scripts and business rules for order assignment, date validation, and user-specific views."
              ghLink="https://github.com/VineethaDevavarapu/Loaner-application.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myntra}
              isBlog={false}
              title="Myntra StyleBuddiespage"
              description="Developed Myntra stylebuddies Page, a React-based community feature, enabling users to post curated outfits,
access a camera page,and engage in a leaderboard with rewards. Focused on a responsive UI with interactive
elements, excluding backend development."
                      
            />
          </Col>
          
        </Row>
      </Container>
      <h1 className="project-heading">
          <strong className="purple">Achievements</strong>
        </h1>
        <AboutCard />


    </Container>
  );
}

export default Projects;
