import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Product Validator",
      description: "Blockchain and Truffle",
      imgUrl: projImg1,
    },
    {
      title: "Food Delivery App",
      description: "MongoDB, Express.js, React.js, Node.js",
      imgUrl: projImg2,
    },
    {
      title: "Temperature Converter",
      description: "Javascript, CSS, HTML",
      imgUrl: projImg3,
    },
    {
      title: "Quiz Master",
      description: "Javascript, CSS, HTML",
      imgUrl: projImg1,
    },
    {
      title: "Rock-Paper-Scissor",
      description: "Javascript, CSS, HTML",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio",
      description: "React.js, Bootstrap v5, Tailwind CSS",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Embarked on my journey with blockchain exploration, I
                    transitioned to the dynamic world of React and web
                    development, gaining hands-on experience and a keen interest
                    in building innovative digital solutions. Excited about the
                    evolving landscape and the continuous learning adventure
                    ahead.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Majors</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Minors</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Future</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {/* Content for the second tab */}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  );
};
