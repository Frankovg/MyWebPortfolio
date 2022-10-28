import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import planet from "../../assets/ship/planet.svg";
import SendCustomEmail from "../../SendCustomEmail";
import validator from "validator";
import "animate.css";
import "./contact.scss";

const formInitialDetails = {
  fullName: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });

    if (
      formDetails.fullName !== "" &&
      validator.isEmail(formDetails.email) === true &&
      formDetails.message !== ""
    ) {
      setStatus({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, message } = formDetails;

    if (
      fullName !== "" &&
      validator.isEmail(email) === true &&
      message !== ""
    ) {
      SendCustomEmail(email, fullName, message);
      setFormDetails(formInitialDetails);
      setStatus({
        success: true,
        message: "I will get back to you as soon as posible",
      });
    } else {
      setStatus({ success: false, message: "Please complete ALL items." });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col sm={4} xl={6}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={planet}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col sm={8} xl={6}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.fullName}
                          placeholder="*Full name"
                          onChange={(e) =>
                            onFormUpdate("fullName", e.target.value)
                          }
                        />
                      </Col>

                      <Col sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="*Email address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>

                      <Col sm={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="*Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                      </Col>

                      <Col sm={3} className="px-1">
                        {status.success !== true ? (
                          <button className="send-btn" type="submit">
                            <span>Send</span>
                          </button>
                        ) : (
                          <button className="thanks-btn">
                            <span>Thanks</span>
                          </button>
                        )}
                      </Col>

                      {status.message && (
                        <Col sm={9} className="d-flex align-items-end">
                          <p
                            className={`pb-3 ${
                              status.success !== true ? "please" : "light"
                            }`}
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
