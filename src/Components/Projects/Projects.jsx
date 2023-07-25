import React from "react";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import TrackVisibility from "react-on-screen";

//Components
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

//Projects
import webProjects from "./DB/WebProjects";
import graphicDesigns from "./DB/GraphicDesign";
import industrialDesigns from "./DB/IndustrialDesign";

//Styles
import "./projects.scss";

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility offset={500}>
              <Fade>
                <div>
                  <h2>Projects</h2>
                  <p>
                    A short exploration of my present as a Web Developer and my
                    past as a Designer.
                  </p>
                </div>
              </Fade>
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Fade>
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center alig-items-center"
                  id="pills-tab"
                >
                  {/* MOBILE */}
                  <Nav.Item className="yesMobile">
                    <Nav.Link eventKey="first">Web</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="yesMobile">
                    <Nav.Link eventKey="second">Graphic</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="yesMobile">
                    <Nav.Link eventKey="third">Industrial</Nav.Link>
                  </Nav.Item>

                  {/* DESKTOP */}
                  <Nav.Item className="noMobile">
                    <Nav.Link eventKey="first">Web Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="noMobile">
                    <Nav.Link eventKey="second">Graphic Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="noMobile">
                    <Nav.Link eventKey="third">Industrial Design</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Fade>

              <TrackVisibility offset={1000} partialVisibility>
                <Slide direction="up" triggerOnce={true}>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {webProjects.map((project, index) => {
                          return <ProjectCard key={index} project={project} />;
                        })}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row>
                        {graphicDesigns.map((project, index) => {
                          return <ProjectCard key={index} project={project} />;
                        })}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <Row>
                        {industrialDesigns.map((project, index) => {
                          return <ProjectCard key={index} project={project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Slide>
              </TrackVisibility>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
