import React from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import "./projects.scss";
import TrackVisibility from "react-on-screen";
import webProjects from "./DB/WebProjects";

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility offset={500}>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    A short exploration of my present as a Web Developer and my
                    past as a Designer.
                  </p>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
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

              <TrackVisibility offset={1000} partialVisibility>
                {({ isVisible }) => (
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {webProjects.map((project, index) => {
                          return <ProjectCard key={index} project={project} />;
                        })}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      {" "}
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque quam, quod neque provident velit, rem explicabo
                        excepturi id illo molestiae blanditiis, eligendi dicta
                        officiis asperiores delectus quasi inventore debitis
                        quo.
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      {" "}
                      <p>
                        Portfolio 2022 - Actualización. Mismo portfolio, con
                        nuevas cosillas y perfil actualizado. Saludos y buen fin
                        de semana! #fullstackdeveloper #frontend #react
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                )}
              </TrackVisibility>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
