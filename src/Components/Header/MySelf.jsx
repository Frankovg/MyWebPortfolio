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
                  <span className="tagline">Welcome to my Universe</span>
                  <h1>Holaaaaaaaaaaaaa</h1>
                  <p>
                    My current focus is on developing web apps especially on the
                    Front-end. My background is an Industrial Designer and I
                    have a solid expertise working for big companies around the
                    world. <br /> I hope you enjoy this trip I have made for you
                    and feel free to contact me.
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
