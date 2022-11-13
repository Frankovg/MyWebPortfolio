import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import cv from "../../assets/cv/Franco_Amoroso_cv_2022_en.pdf";
import portfolio from "../../assets/portfolio/amoroso_franco_portfolio22_desktop.pdf";
import "./myInfo.scss";

export const MyInfo = () => {
  const [done1, setDone1] = useState("");
  const [done2, setDone2] = useState("");
  const [done3, setDone3] = useState("");
  const [done4, setDone4] = useState("");
  const [done5, setDone5] = useState("");

  const handleDone = (type) => {
    const done = "done";

    if (type === "on-cv-sp") {
      setDone1(done);
    } else if (type === "on-cv-en") {
      setDone2(done);
    } else if (type === "on-pf") {
      setDone3(done);
    } else if (type === "dl-cv-en") {
      setDone4(done);
    } else if (type === "dl-pf") {
      setDone5(done);
    }
  };

  return (
    <section className="faq" id="faq">
      <Container>
        <Fade>
          <Row>
            <Col className="text-center">
              <h2>FAQ</h2>
              <p>
                The following technologies are the most demanded at the moment.
                I like to be updated and keep growing and learning.
              </p>
            </Col>
          </Row>
          <Row className="faq-content">
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Companies I've worked for</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Clients I've worked with</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    About my degree and education
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col sm={6} lg={4} className="pb-4 study-bx">
                        <div className="text-center">
                          <h5>Full-stack Web Developer</h5>
                          <h6>Socratech</h6>
                          <p>2022, Malaga, Spain</p>
                        </div>
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates vero aliquid dolore alias illo
                            quasi!
                          </p>
                        </div>
                      </Col>
                      <Col sm={6} lg={4} xxl={2} className="pb-4 study-bx">
                        <div className="text-center">
                          <h5>UX/UI Designer</h5>
                          <h6>Google</h6>
                          <p>2022, Malaga, Spain</p>
                        </div>
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates vero aliquid dolore alias illo
                            quasi!
                          </p>
                        </div>
                      </Col>
                      <Col sm={6} lg={4} xxl={2} className="pb-4 study-bx">
                        <div className="text-center">
                          <h5>Computer Science</h5>
                          <h6>HarvardX</h6>
                          <p>2022, Malaga, Spain</p>
                        </div>
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates vero aliquid dolore alias illo
                            quasi!
                          </p>
                        </div>
                      </Col>
                      <Col sm={6} xxl={2} className="pb-4 study-bx">
                        <div className="text-center">
                          <h5>Industrial Designer</h5>
                          <h6>UNMDP</h6>
                          <p>2014, Mar del Plata, Argentina</p>
                        </div>
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates vero aliquid dolore alias illo
                            quasi!
                          </p>
                        </div>
                      </Col>
                      <Col sm={6} xxl={2} className="pb-4 study-bx">
                        <div className="text-center">
                          <h5>Economics</h5>
                          <h6>Anna Böttger</h6>
                          <p>2007, Villa Gesell, Argentina</p>
                        </div>
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates vero aliquid dolore alias illo
                            quasi!
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Why did I move to software development?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>My hobbies and activities</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>My Curriculum Vitae</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto d-flex flex-column">
                          <div className="fw-bold mb-2">Google Drive</div>

                          <a
                            onClick={() => handleDone("on-cv-sp")}
                            target="_blank"
                            rel="noreferrer"
                            href="https://drive.google.com/file/d/1uk60yd1C5uLzKCiOG6LEsb413DLPV_l_/view?usp=share_link"
                            className={`mb-1 cv-link ${done1}`}
                          >
                            Curriculum Vitae - SPANISH
                          </a>

                          <a
                            onClick={() => handleDone("on-cv-en")}
                            target="_blank"
                            rel="noreferrer"
                            href="https://drive.google.com/file/d/1HVtHa43eL8E94e4DB7IwMfvXwVNjH1zt/view?usp=share_link"
                            className={`mb-1 cv-link ${done2}`}
                          >
                            Curriculum Vitae - ENGLISH
                          </a>
                          <a
                            onClick={() => handleDone("on-pf")}
                            target="_blank"
                            rel="noreferrer"
                            href="https://drive.google.com/file/d/1VKtBB-k9EU19sKomBrv7-Tn5CQBbmVh5/view?usp=sharing"
                            className={`mb-1 cv-link ${done3}`}
                          >
                            Portfolio - ENGLISH
                          </a>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto  d-flex flex-column">
                          <div className="fw-bold mb-2">Download</div>
                          <a
                            onClick={() => handleDone("dl-cv-en")}
                            target="_blank"
                            rel="noreferrer"
                            href={cv}
                            className={`mb-1 cv-link ${done4}`}
                            download="franco_amoroso_cv_2022_en"
                          >
                            Curriculum Vitae - ENGLISH
                          </a>
                          <a
                            onClick={() => handleDone("dl-pf")}
                            target="_blank"
                            rel="noreferrer"
                            href={portfolio}
                            className={`mb-1 cv-link ${done5}`}
                            download="franco_amoroso_portfolio_2022_en"
                          >
                            Portfolio - ENGLISH
                          </a>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/francoamoroso/details/recommendations/?detailScreenTabIndex=0"
                    >
                      LinkedIn recommendations (external)
                    </a>
                  </Accordion.Header>
                  <Accordion.Body>
                    Don't be shy and send me a contact request 😉.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};
