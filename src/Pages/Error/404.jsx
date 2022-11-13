import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { useNavigate } from "react-router-dom";
import lost from "../../assets/ship/lost.svg";
import "./errorPage.scss";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="errorPage">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} lg={7}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate_animated animate_fadeIn" : ""}
                >
                  <div className="lost-text">
                    <div className="text-center">
                      <h1>Lost in space!</h1>
                      <h2>
                        Code <span>404</span> Page not found
                      </h2>
                      <Button type="button" onClick={() => navigate("/")}>
                        Restart!
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} sm={12} lg={5} className="lost-container">
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate_animated animate_zoomIn" : ""}
                >
                  <img className="lost" src={lost} alt="Lost in space" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
