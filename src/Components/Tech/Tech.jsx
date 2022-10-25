import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "animate.css";
import "./tech.scss";
import reactIcon from "../../assets/icons/react.svg";
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import nodeIcon from "../../assets/icons/node.svg";
import expressIcon from "../../assets/icons/express.svg";
import mysqlIcon from "../../assets/icons/mysql.svg";
import aiIcon from "../../assets/icons/ai.svg";
import bootstrapIcon from "../../assets/icons/bootstrap.svg";
import figmaIcon from "../../assets/icons/figma.svg";
import gitIcon from "../../assets/icons/git.svg";
import githubIcon from "../../assets/icons/github_big.svg";
import jsIcon from "../../assets/icons/js.svg";
import psIcon from "../../assets/icons/ps.svg";
import reduxIcon from "../../assets/icons/redux.svg";
import sassIcon from "../../assets/icons/sass.svg";
import scrumIcon from "../../assets/icons/scrum.svg";
import tsIcon from "../../assets/icons/ts.svg";

export const Tech = () => {
  const renderTooltipReact = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      A JavaScript library for building user interfaces.
    </Tooltip>
  );
  const renderTooltipHTML = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      It is a standard markup language for web page creation.
    </Tooltip>
  );
  const renderTooltipCSS = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is used to stylize elements written in HTML.
    </Tooltip>
  );
  const renderTooltipJs = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is the Programming Language for the Web.
    </Tooltip>
  );
  const renderTooltipTs = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is a syntactic superset of JavaScript which adds static typing.
    </Tooltip>
  );
  const renderTooltipBoot = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is the most popular CSS Framework.
    </Tooltip>
  );
  const renderTooltipSass = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is an extension of CSS.
    </Tooltip>
  );
  const renderTooltipRedux = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is a predictable state container for JavaScript apps.
    </Tooltip>
  );

  const renderTooltipNode = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is an open source server environment.
    </Tooltip>
  );
  const renderTooltipEx = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is a minimal and flexible Node.js web application framework.
    </Tooltip>
  );
  const renderTooltipSQL = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is a relational database management system.
    </Tooltip>
  );

  const renderTooltipPs = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      For image editing and photo retouching.
    </Tooltip>
  );
  const renderTooltipAi = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      For creating drawings, illustrations and artwork.
    </Tooltip>
  );
  const renderTooltipFigma = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is a web-based graphics editing and user interface design app.
    </Tooltip>
  );

  const renderTooltipGit = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is a version control system designed to handle everything.
    </Tooltip>
  );
  const renderTooltipGithub = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is a code hosting platform for collaboration and version control.
    </Tooltip>
  );
  const renderTooltipScrum = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is a process framework used to manage product development.
    </Tooltip>
  );

  return (
    <div className="tech-stack" id="tech-stack">
      <Container>
        <div className="tech-bx animate__animated animate__zoomIn">
          <Row>
            <Col className="text-center">
              <h2>Tech Stack</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias rem ipsum blanditiis eum quidem.<br></br> Lorem Ipsum
                has been the industry's standard dummy text.
              </p>
            </Col>
          </Row>

          <Row>
            {/* LEFT BLOCK ** DOWN-LG *****************************  */}
            <Col xs={12} lg={6}>
              <Row className="tech-group h-100 down-lg">
                <Col sm={12} className="text-center">
                  <h4>Front-end</h4>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipReact}
                  >
                    <img src={reactIcon} alt="React logo" className="reactH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipHTML}
                  >
                    <img src={htmlIcon} alt="HTML logo" className="htmlH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipCSS}
                  >
                    <img src={cssIcon} alt="CSS logo" className="cssH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipJs}
                  >
                    <img src={jsIcon} alt="JavaScript logo" className="jsH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipTs}
                  >
                    <img src={tsIcon} alt="TypeScript logo" className="tsH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipRedux}
                  >
                    <img src={reduxIcon} alt="Redux logo" className="reduxH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipSass}
                  >
                    <img src={sassIcon} alt="Sass logo" className="sassH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipBoot}
                  >
                    <img
                      src={bootstrapIcon}
                      alt="Bootstrap logo"
                      className="bootH"
                    />
                  </OverlayTrigger>
                </Col>
              </Row>

              {/* LEFT BLOCK ** UP-LG */}
              <Row className="tech-group up-lg top">
                <Col sm={12} className="text-center">
                  <h4>Front-end</h4>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipReact}
                  >
                    <img src={reactIcon} alt="React logo" className="reactH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipHTML}
                  >
                    <img src={htmlIcon} alt="HTML logo" className="htmlH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipCSS}
                  >
                    <img src={cssIcon} alt="CSS logo" className="cssH" />
                  </OverlayTrigger>
                </Col>
              </Row>

              <Row className="tech-group up-lg center">
                <Col sm={12} className="text-center">
                  <h4>&nbsp;</h4>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipJs}
                  >
                    <img src={jsIcon} alt="JavaScript logo" className="jsH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipTs}
                  >
                    <img src={tsIcon} alt="TypeScript logo" className="tsH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipRedux}
                  >
                    <img src={reduxIcon} alt="Redux logo" className="reduxH" />
                  </OverlayTrigger>
                </Col>
              </Row>

              <Row className="tech-group up-lg bottom">
                <Col sm={12} className="text-center">
                  <h4>&nbsp;</h4>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipSass}
                  >
                    <img src={sassIcon} alt="Sass logo" className="sassH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipBoot}
                  >
                    <img
                      src={bootstrapIcon}
                      alt="Bootstrap logo"
                      className="bootH"
                    />
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>

            {/* RIGHT BLOCK ***************************** */}
            <Col xs={12} lg={6}>
              <Row className="tech-group">
                <Col sm={12} className="text-center">
                  <h4>Back-end</h4>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipNode}
                  >
                    <img src={nodeIcon} alt="Node.js logo" className="nodeH" />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipEx}
                  >
                    <img
                      src={expressIcon}
                      alt="Express logo"
                      className="expH"
                    />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipSQL}
                  >
                    <img src={mysqlIcon} alt="MySQL logo" className="sqlH" />
                  </OverlayTrigger>
                </Col>
              </Row>

              <Row className="tech-group">
                <Col sm={12} className="text-center">
                  <h4>UX/UI Design</h4>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipPs}
                  >
                    <img
                      src={psIcon}
                      alt="Adobe Photoshop logo"
                      className="psH"
                    />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipAi}
                  >
                    <img
                      src={aiIcon}
                      alt="Adobe Illustrator logo"
                      className="aiH"
                    />
                  </OverlayTrigger>
                </Col>
                <Col sm={4}>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 100, hide: 100 }}
                    overlay={renderTooltipFigma}
                  >
                    <img src={figmaIcon} alt="Figma logo" className="figH" />
                  </OverlayTrigger>
                </Col>
              </Row>

              <Row>
                <Col sm={8}>
                  <Row className="tech-group  h-100">
                    <Col sm={12} className="text-center">
                      <h4>Version Control System</h4>
                    </Col>
                    <Col sm={6}>
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 100, hide: 100 }}
                        overlay={renderTooltipGit}
                      >
                        <img src={gitIcon} alt="Git logo" className="gitH" />
                      </OverlayTrigger>
                    </Col>
                    <Col sm={6}>
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 100, hide: 100 }}
                        overlay={renderTooltipGithub}
                      >
                        <img
                          src={githubIcon}
                          alt="Github logo"
                          className="githubH"
                        />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                </Col>

                <Col sm={4}>
                  <Row className="tech-group h-100">
                    <Col sm={12} className="text-center agile-title">
                      <h4>Agile Method</h4>
                    </Col>
                    <Col>
                      <OverlayTrigger
                        placement="left"
                        delay={{ show: 100, hide: 100 }}
                        overlay={renderTooltipScrum}
                      >
                        <img
                          src={scrumIcon}
                          alt="SCRUM icon"
                          className="scrumH"
                        />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
