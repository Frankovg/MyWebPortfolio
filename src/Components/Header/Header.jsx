import React, { useState, useEffect, useContext, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import { Zoom } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

//Context
import { LinkContext } from "../../Context/LinkContext";

//Components
import ship from "../../assets/ship/ship.svg";
import arrowDown from "../../assets/icons/arrow_down.svg";

//Hooks
import useIntersectionObserver from "../../Hooks/useIntersectionObserver";

//Styles
import "./header.scss";

export const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const { setActiveLink } = useContext(LinkContext);

  const headerRef = useRef(null);
  const entry = useIntersectionObserver(headerRef, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) setActiveLink("home");
  }, [isVisible]);

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
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <header className="banner" id="home" ref={headerRef}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} lg={7}>
            <TrackVisibility once>
              <Fade>
                <div>
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
                    As a dedicated Front-End Developer, I'm immersed in the
                    world of web app development. With a background in
                    Industrial Design, I bring a unique perspective to my work,
                    honed through collaborations with major global corporations.
                    <br />
                    This space is all about my journey. Enjoy your time here,
                    and hit me up if you've got questions or want to team up.
                  </p>
                  <a className="toConnect" href="#connect">
                    Let's connect <ArrowRightCircle size={25} />
                  </a>
                </div>
              </Fade>
            </TrackVisibility>
          </Col>

          <Col xs={12} sm={12} lg={5} className="ship-container">
            <TrackVisibility once>
              <Zoom triggerOnce={true}>
                <div>
                  <img className="ship" src={ship} alt="Header img" />
                </div>
              </Zoom>
            </TrackVisibility>
          </Col>

          <Col xs={12} sm={12} className="arrow-down">
            <a href="#tech-stack" onClick={() => setActiveLink("skills")}>
              <img src={arrowDown} alt="Arrow pointing down" />
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
