import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

//Components
import Accordion from "react-bootstrap/Accordion";
import { Cv } from "./Cv";
import { Education } from "./Education";
import { Hobbies } from "./Hobbies";
import "./myInfo.scss";
import { Clients } from "./Clients";
import { Jobs } from "./Jobs";
import { Why } from "./Why";
import { Recommendation } from "./Recommendation";

export const MyInfo = () => {
  return (
    <section className="faq" id="faq">
      <Container>
        <Fade>
          <Row>
            <Col className="text-center">
              <h2>FAQ's</h2>
              <p>
                I've taken the initiative to provide you with a few insights
                that could give you a better understanding of who I am. If
                you're interested in reaching out, feel free to use the contact
                form located below to send me a message.
              </p>
            </Col>
          </Row>
          <Row className="faq-content">
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Companies I've collaborated with
                  </Accordion.Header>
                  <Accordion.Body>
                    <Jobs />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Clients I've collaborated with
                  </Accordion.Header>
                  <Accordion.Body>
                    <Clients />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    About my degrees and education
                  </Accordion.Header>
                  <Accordion.Body>
                    <Education />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Why did I make the move to software development?
                  </Accordion.Header>
                  <Accordion.Body>
                    <Why />
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
                    <Recommendation />
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
