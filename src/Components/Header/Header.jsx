import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import ship from "../../assets/ship/ship.svg";
import arrowDown from "../../assets/icons/arrow_down.svg";
import "animate.css";
import "./header.scss";

export const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Front-end Developer",
    "UX/UI Designer",
    "Full-Stack Web Dev",
    "Industrial Designer",
    "Web Developer",
  ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} lg={7}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Universe</span>
                  <h1>
                    {`Hi, I'm Franco`} <br />
                    <span
                      className="txt-rotate"
                      data-period={period}
                      data-rotate={toRotate}
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    My current focus is developing web apps especially on the
                    Front-end. My background is an Industrial Designer and I
                    have a solid expertise working for big companies around the
                    world. <br /> I hope you enjoy this trip I have made for you
                    and feel free to contact me.
                  </p>
                  <a className="toConnect" href="#connect">
                    Let's connect <ArrowRightCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} sm={12} lg={5} className="ship-container">
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img className="ship" src={ship} alt="Header img" />
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} sm={12} className="arrow-down">
            <a href="#tech-stack">
              <img src={arrowDown} alt="Arrow pointing down" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
