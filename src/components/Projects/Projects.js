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
                imgPath="https://www.91-cdn.com/hub/wp-content/uploads/2023/08/Netflix-features.jpg"
              //isBlog={false}
              title="Netflix Clone"
              // description=""
              link="https://test-netflix-clone-react.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.codingnepalweb.com/wp-content/uploads/2023/07/How-to-Create-An-Amazon-Clone-in-HTML-and-CSS.jpg"
              //isBlog={false}
              title="Amazon Clone App"
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://reactjsexample.com/content/images/2023/03/Code-2023-17-07-36.jpg"
              //isBlog={false}
              title="Google Keep Clone"
              //description=""
              link="https://ankitborgohain.github.io/test_Keep_App//"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.devopsschool.com/blog/wp-content/uploads/2023/12/image-168.png"
              //isBlog={false}
              title="SpringBoot CRUD App"
              //description=""
              link="https://github.com/ankitBorgohain/crudStudent"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.geeksforgeeks.org/wp-content/uploads/20230518223324/Screenshot-from-2023-05-18-22-33-11.png"
              //isBlog={false}
              title="TODO App"
              //description=""
              link="https://github.com/ankitborgohain/"
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
