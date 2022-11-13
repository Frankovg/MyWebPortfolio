import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/logo/logo.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import { Fade } from "react-awesome-reveal";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Fade>
          <Row className="align-item-center">
            <Col sm={12} className="d-flex justify-content-center">
              <a href="/">
                <img className="logo-footer" src={logo} alt="Logo" />
              </a>
            </Col>

            <Col sm={12} className="d-flex justify-content-center mt-3">
              <div className="social-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/francoamoroso/"
                >
                  <img src={linkedin} alt="LinkedIn icon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Frankovg#"
                >
                  <img src={github} alt="Github icon" />
                </a>
              </div>
            </Col>

            <Col
              sm={12}
              className="d-flex justify-content-center text-center mod"
            >
              <p>Last modified: 11-04-2022</p>
            </Col>

            <Col
              sm={12}
              className="d-flex justify-content-center text-center credits"
            >
              <p>This is a React App developed by Franco Gabriel Amoroso.</p>
            </Col>
            <Col sm={12} className="d-flex justify-content-center">
              <p className="m-0">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.freepik.es/vector-gratis/nave-espacial-espacio-exterior-planetas-o-asteroides_8308810.htm#query=space%20ship&position=0&from_view=search&track=sph"
                >
                  Imagen de upklyak
                </a>{" "}
                en Freepik
              </p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </footer>
  );
};
