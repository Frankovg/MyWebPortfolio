import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

//Styles
import "./ProjectModal/projectModal.scss";
import "./success.scss";

export const Success = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
      bsPrefix="modal"
      className="modal-centered"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4 className="title-success">Thank you!</h4>
        <p>Your message has been sent successfully.</p>
        <p>I will answer you as soon as possible.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button className="send-btn okay-btn" onClick={onHide}>
          <span>Okay</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
