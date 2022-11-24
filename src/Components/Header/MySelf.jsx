import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import mySelf from "../../assets/ship/yo.svg";
import arrowDown from "../../assets/icons/arrow_down.svg";
import { Zoom } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import "./header.scss";

export const MySelf = () => {
  return (
    <header className="banner" id="aboutme">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} lg={7}>
            <TrackVisibility once>
              <Fade>
                <div>
                  <span className="tagline">Hello everyone! I'm</span>
                  <h1>Franco Gabriel Amoroso</h1>
                  <p>
                    My relationship with technology started when I was a child
                    and it has been my passion since then. That's because my
                    father used to have a computer store in the 90's, so I grew
                    up surrounded by old computers. In those years that was
                    really cool! Plus, it was the new era of the internet.{" "}
                    <br /> The universe of software and hardware have always
                    felt natural to me and, of course, it is my favorite hobby
                    and tool. That's why I have always dedicated my professional
                    life around technology.
                  </p>
                </div>
              </Fade>
            </TrackVisibility>
          </Col>

          <Col xs={12} sm={12} lg={5} className="ship-container">
            <TrackVisibility once>
              <Zoom>
                <div>
                  <img className="ship" src={mySelf} alt="Header img" />
                </div>
              </Zoom>
            </TrackVisibility>
          </Col>

          <Col xs={12} sm={12} className="arrow-down">
            <a href="#faq">
              <img src={arrowDown} alt="Arrow pointing down" />
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
