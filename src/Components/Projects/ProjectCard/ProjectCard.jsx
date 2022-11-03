import React, { useState } from "react";
import "./projectCard.scss";
import { Button, Col } from "react-bootstrap";
import { ProjectModal } from "../../Modals/ProjectModal/ProjectModal";

export const ProjectCard = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);

  const { type, title, description, imgUrl } = project;

  return (
    <>
      <Col xs={12} sm={12} lg={6} xl={4}>
        <div className={`proj-imgbx ${type}`}>
          <img src={imgUrl} alt="Project poster" />
          <div className="proj-txtx d-flex flex-column align-items-center">
            <h4>{title}</h4>
            <span>{description}</span>
            <Button type="button" onClick={() => setOpenModal(true)}>
              +
            </Button>
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
