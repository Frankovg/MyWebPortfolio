import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

//Components
import github from "../../../assets/icons/github.svg";
import youtube from "../../../assets/icons/youtube.svg";
import openBrowser from "../../../assets/icons/open.svg";

//Styles
import "./projectModal.scss";

export const ProjectModal = ({ project, show, onHide }) => {
  const {
    title,
    description,
    info,
    repo,
    video,
    test,
    pictures,
    client,
    company,
    stack,
  } = project;

  return (
    <Modal
      size="lg"
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
      bsPrefix="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="show-grid">
        <Container>
          <Row className="pb-2">
            <Col xs={12} sm={9} className="px-0 py-1">
              <p>{description}</p>
            </Col>
            {repo && repo !== "" ? (
              <Col xs={2} sm={1} className="px-0">
                <a href={repo} target="_blank" rel="noreferrer">
                  <img src={github} alt="Github icon" />
                </a>
              </Col>
            ) : (
              <></>
            )}
            {video && video !== "" ? (
              <Col xs={2} sm={1} className="px-0">
                <a href={video} target="_blank" rel="noreferrer">
                  <img src={youtube} alt="Youtube icon" />
                </a>
              </Col>
            ) : (
              <></>
            )}
            {test && test !== "" ? (
              <Col xs={2} sm={1} className="px-0">
                <a href={test} disabled target="_blank" rel="noreferrer">
                  <img src={openBrowser} alt="Youtube icon" />
                </a>
              </Col>
            ) : (
              <></>
            )}
          </Row>

          <Row>
            <Col>
              <Carousel fade>
                {pictures?.map((img, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={`./projects/${img}`}
                        alt="Slides with captures of the project"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className="py-3">
              <p className="info-text">{info}</p>
            </Col>
            {company && company !== "" ? (
              <Col sm={6} className="text-left">
                <p>Company: {company}</p>
              </Col>
            ) : (
              <></>
            )}
            {client && client !== "" ? (
              <Col sm={6} className="text-left">
                <p>Client: {client}</p>
              </Col>
            ) : (
              <></>
            )}
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <div className="span-bx">
          <span>{stack}</span>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
