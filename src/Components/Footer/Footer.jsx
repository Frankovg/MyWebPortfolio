import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/logo/logo.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={12} className="d-flex justify-content-center">
            <img className="logo-footer" src={logo} alt="Logo" />
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

          <Col sm={12} className="d-flex justify-content-center">
            <p>This is a React App developed by Franco Gabriel Amoroso.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
