import React, { useState } from "react";
import { Col } from "react-bootstrap";

//Components
import { ProjectModal } from "../../Modals/ProjectModal/ProjectModal";

//Styles
import "./projectCard.scss";

export const ProjectCard = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);

  const { type, title, description, imgUrl } = project;

  return (
    <>
      <Col xs={12} sm={12} lg={6} xl={4}>
        <div
          className={`proj-imgbx ${type}`}
          onClick={() => setOpenModal(true)}
        >
          <img src={imgUrl} alt="Project poster" />
          <div className="proj-txtx d-flex flex-column align-items-center">
            <h4>{title}</h4>
            <span>{description}</span>
            <p type="button">+</p>
          </div>
        </div>
      </Col>

      <ProjectModal
        onHide={() => setOpenModal(false)}
        show={openModal}
        project={project}
      />
    </>
  );
};
