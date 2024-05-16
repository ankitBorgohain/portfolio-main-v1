import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import algo from "../../Assets/Projects/algo.png";
// import plant from "../../Assets/Projects/plant.jpeg";

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
                imgPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZ62WeSzL2eaS_lZGtIZKJqcjIqMNzhrMddNk_KjNDQ&s"
              //isBlog={false}
              title="Travell App"
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1200px-Netflix_logo.svg.png"
              //isBlog={false}
              title="Netflix UI Clone"
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b2/6a/84/b26a848e-ff64-6e9e-b87b-d51db000093a/logo_tasks_color-0-1x_U007emarketing-0-6-0-85-220-0.png/1200x630wa.png"
              //isBlog={false}
              title="Google To-Do"
              //description=""
              link="https://tasksboard.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz5MNWMDghIqfahwp_B4UYxc_oBwIYgXdJwaWnx8haZA&s"
              //isBlog={false}
              title="Basic Google Keep Clone"
              //description=""
              link="https://ankitborgohain.github.io/test_Keep_App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZ62WeSzL2eaS_lZGtIZKJqcjIqMNzhrMddNk_KjNDQ&s"
              //isBlog={false}
              title="Amazon UI Clone"
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
