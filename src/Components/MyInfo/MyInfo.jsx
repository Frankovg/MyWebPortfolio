import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Fade } from "react-awesome-reveal";
import { Cv } from "./Cv";
import { Education } from "./Education";
import { Hobbies } from "./Hobbies";
import "./myInfo.scss";
import { Clients } from "./Clients";
import { Jobs } from "./Jobs";

export const MyInfo = () => {
  return (
    <section className="faq" id="faq">
      <Container>
        <Fade>
          <Row>
            <Col className="text-center">
              <h2>FAQ</h2>
              <p>
                I've prepared a few answers so you can know me a bit better. If
                you would like to contact me, please find the contact form below
                and send me a message.
              </p>
            </Col>
          </Row>
          <Row className="faq-content">
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Companies I've worked for</Accordion.Header>
                  <Accordion.Body>
                    <Jobs />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Clients I've worked with</Accordion.Header>
                  <Accordion.Body>
                    <Clients />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    About my degree and education
                  </Accordion.Header>
                  <Accordion.Body>
                    <Education />
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
                    <Hobbies />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>My Curriculum Vitae</Accordion.Header>
                  <Accordion.Body>
                    <Cv />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>LinkedIn recommendations</Accordion.Header>
                  <Accordion.Body>
                    <a
                      className="toRecomm"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/francoamoroso/details/recommendations/?detailScreenTabIndex=0"
                    >
                      To my LinkedIn <ArrowRightCircle size={25} />
                    </a>
                    <br />
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
