import React, { Fragment, useContext, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Fade } from "react-awesome-reveal";

//Icons
import reactIcon from "../../assets/icons/react.svg";
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import nodeIcon from "../../assets/icons/node.svg";
import expressIcon from "../../assets/icons/express.svg";
import sqlIcon from "../../assets/icons/sql.svg";
import aiIcon from "../../assets/icons/ai.svg";
import tailwindIcon from "../../assets/icons/tailwind.svg";
import figmaIcon from "../../assets/icons/figma.svg";
import gitIcon from "../../assets/icons/git.svg";
import githubIcon from "../../assets/icons/github_big.svg";
import jsIcon from "../../assets/icons/js.svg";
import psIcon from "../../assets/icons/ps.svg";
import nextjsIcon from "../../assets/icons/nextjs.svg";
import turborepoIcon from "../../assets/icons/turborepo.svg";
import sassIcon from "../../assets/icons/sass.svg";
import gitlabIcon from "../../assets/icons/gitlab.svg";
import tsIcon from "../../assets/icons/ts.svg";

//Context
import { LinkContext } from "../../Context/LinkContext";

//hooks
import useIntersectionObserver from "../../Hooks/useIntersectionObserver";

//Styles
import "./tech.scss";

const frontend = [
  {
    id: 0,
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    position: "right",
    class: "reactH",
    icon: reactIcon,
  },
  {
    id: 1,
    name: "Next.js",
    description:
      "It is a React framework that gives you building blocks to create web applications.",
    position: "bottom",
    class: "nextjsH",
    icon: nextjsIcon,
  },
  {
    id: 2,
    name: "HTML",
    description: "A standard markup language for web page creation.",
    position: "left",
    class: "htmlH",
    icon: htmlIcon,
  },
  {
    id: 3,
    name: "JavaScript",
    description: "The programming language for the Web.",
    position: "right",
    class: "jsH",
    icon: jsIcon,
  },
  {
    id: 4,
    name: "TypeScript",
    description: "Syntactic superset of JavaScript which adds static typing.",
    position: "bottom",
    class: "tsH",
    icon: tsIcon,
  },
  {
    id: 5,
    name: "Turborepo",
    description:
      "It is a high-performance build system for Typescript and Javascript projects.",
    position: "left",
    class: "turborepoH",
    icon: turborepoIcon,
  },
  {
    id: 6,
    name: "Sass",
    description: "An extension of CSS.",
    position: "right",
    class: "sassH",
    icon: sassIcon,
  },
  {
    id: 7,
    name: "Tailwind",
    description:
      "It is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
    position: "bottom",
    class: "tailwindH",
    icon: tailwindIcon,
  },
  {
    id: 8,
    name: "CSS",
    description: "Used to stylize elements written in HTML.",
    position: "left",
    class: "cssH",
    icon: cssIcon,
  },
];

const backend = [
  {
    id: 0,
    name: "Node.js",
    description: "An open source server environment.",
    position: "right",
    class: "nodeH",
    icon: nodeIcon,
  },
  {
    id: 1,
    name: "Express.js",
    description: "A minimal and flexible Node.js web application framework.",
    position: "bottom",
    class: "expH",
    icon: expressIcon,
  },
  {
    id: 2,
    name: "SQL",
    description:
      "It is a standard language for database creation and manipulation.",
    position: "left",
    class: "sqlH",
    icon: sqlIcon,
  },
];

const uxui = [
  {
    id: 0,
    name: "Adobe Photoshop",
    description: "Image editing and photo retouching.",
    position: "right",
    class: "psH",
    icon: psIcon,
  },
  {
    id: 1,
    name: "Adobe Illustrator",
    description: "Creating drawings, illustrations and artwork.",
    position: "bottom",
    class: "aiH",
    icon: aiIcon,
  },
  {
    id: 2,
    name: "Figma",
    description: "A web-based graphics editing and user interface design app.",
    position: "left",
    class: "figH",
    icon: figmaIcon,
  },
];

const git = [
  {
    id: 0,
    name: "Git",
    description: "A version control system designed to handle everything.",
    position: "right",
    class: "gitH",
    icon: gitIcon,
  },
  {
    id: 1,
    name: "Github",
    description:
      "A code hosting platform for collaboration and version control.",
    position: "bottom",
    class: "githubH",
    icon: githubIcon,
  },
  {
    id: 1,
    name: "Gitlab",
    description:
      "A code hosting platform for collaboration and version control.",
    position: "bottom",
    class: "gitlabH",
    icon: gitlabIcon,
  },
];

export const Tech = () => {
  const { setActiveLink } = useContext(LinkContext);
  const techRef = useRef(null);
  const entry = useIntersectionObserver(techRef, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) setActiveLink("skills");
    else setActiveLink("");
  }, [isVisible]);

  const renderTooltip = (techDescription) => {
    return <Tooltip id="button-tooltip">{techDescription}</Tooltip>;
  };

  const delayOption = { show: 100, hide: 100 };

  return (
    <section className="tech-stack" id="tech-stack" ref={techRef}>
      <Container>
        <div className="tech-bx">
          <Fade>
            <Row>
              <Col className="text-center">
                <h2>Tech Stack</h2>
                <p>
                  The following technologies are the most demanded at the
                  moment. I like to be updated and keep growing and learning.
                </p>
              </Col>
            </Row>

            <Row>
              {/* LEFT BLOCK ** DOWN-LG *****************************  */}
              <Col xs={12} xl={6}>
                <Row className="tech-group down-lg">
                  <Col sm={12} className="text-center">
                    <h4>Front-end</h4>
                  </Col>
                  {frontend.map((fTech, idx) => (
                    <Fragment key={idx}>
                      <Col xs={4} sm={idx < 3 ? 4 : 2}>
                        <OverlayTrigger
                          placement={fTech.position}
                          delay={delayOption}
                          overlay={renderTooltip(fTech.description)}
                        >
                          <img
                            src={fTech.icon}
                            alt={`${fTech.name} logo`}
                            className={fTech.class}
                          />
                        </OverlayTrigger>
                      </Col>
                    </Fragment>
                  ))}
                </Row>

                {/* LEFT BLOCK ** UP-LG */}
                <Row className="tech-group up-lg top">
                  <Col sm={12} className="text-center">
                    <h4>Front-end</h4>
                  </Col>
                  {frontend.map((fTech, idx) => (
                    <Fragment key={idx}>
                      {idx < 3 && (
                        <Col lg={4}>
                          <OverlayTrigger
                            placement={fTech.position}
                            delay={delayOption}
                            overlay={renderTooltip(fTech.description)}
                          >
                            <img
                              src={fTech.icon}
                              alt={`${fTech.name} logo`}
                              className={fTech.class}
                            />
                          </OverlayTrigger>
                        </Col>
                      )}
                    </Fragment>
                  ))}
                </Row>

                <Row className="tech-group up-lg center">
                  <Col sm={12} className="text-center">
                    <h4>&nbsp;</h4>
                  </Col>
                  {frontend.map((fTech, idx) => (
                    <Fragment key={idx}>
                      {idx >= 3 && idx < 6 && (
                        <Col lg={4}>
                          <OverlayTrigger
                            placement={fTech.position}
                            delay={delayOption}
                            overlay={renderTooltip(fTech.description)}
                          >
                            <img
                              src={fTech.icon}
                              alt={`${fTech.name} logo`}
                              className={fTech.class}
                            />
                          </OverlayTrigger>
                        </Col>
                      )}
                    </Fragment>
                  ))}
                </Row>

                <Row className="tech-group up-lg bottom">
                  <Col sm={12} className="text-center">
                    <h4>&nbsp;</h4>
                  </Col>
                  {frontend.map((fTech, idx) => (
                    <Fragment key={idx}>
                      {idx >= 6 && idx < 9 && (
                        <Col lg={4}>
                          <OverlayTrigger
                            placement={fTech.position}
                            delay={delayOption}
                            overlay={renderTooltip(fTech.description)}
                          >
                            <img
                              src={fTech.icon}
                              alt={`${fTech.name} logo`}
                              className={fTech.class}
                            />
                          </OverlayTrigger>
                        </Col>
                      )}
                    </Fragment>
                  ))}
                </Row>
              </Col>

              {/* RIGHT BLOCK ***************************** */}
              <Col xs={12} xl={6}>
                <Row>
                  <Col>
                    <Row className="tech-group">
                      <Col sm={12} className="text-center">
                        <h4>Back-end</h4>
                      </Col>
                      {backend.map((bTech, idx) => (
                        <Col xs={4} sm={4} key={idx}>
                          <OverlayTrigger
                            placement={bTech.position}
                            delay={delayOption}
                            overlay={renderTooltip(bTech.description)}
                          >
                            <img
                              src={bTech.icon}
                              alt={`${bTech.name} logo`}
                              className={bTech.class}
                            />
                          </OverlayTrigger>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row className="tech-group">
                      <Col sm={12} className="text-center">
                        <h4>UX/UI Design</h4>
                      </Col>
                      {uxui.map((uTech, idx) => (
                        <Col xs={4} sm={4} key={idx}>
                          <OverlayTrigger
                            placement={uTech.position}
                            delay={delayOption}
                            overlay={renderTooltip(uTech.description)}
                          >
                            <img
                              src={uTech.icon}
                              alt={`${uTech.name} logo`}
                              className={uTech.class}
                            />
                          </OverlayTrigger>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Row className="tech-group">
                      <Col sm={12} className="text-center">
                        <h4>Version Control System and Git repository</h4>
                      </Col>
                      {git.map((gTech, idx) => (
                        <Col xs={4} sm={4} key={idx}>
                          <OverlayTrigger
                            placement={gTech.position}
                            delay={delayOption}
                            overlay={renderTooltip(gTech.description)}
                          >
                            <img
                              src={gTech.icon}
                              alt={`${gTech.name} logo`}
                              className={gTech.class}
                            />
                          </OverlayTrigger>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fade>
        </div>
      </Container>
    </section>
  );
};
