import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import SendCustomEmail from "../../SendCustomEmail";
import validator from "validator";

//Components
import planet from "../../assets/ship/planet.svg";
import { Success } from "../Modals/Success";

//Styles
import "./contact.scss";

const formInitialDetails = {
  fullName: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({});
  const [openModal, setOpenModal] = useState(false);

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
      setOpenModal(true);
    } else {
      setStatus({ success: false, message: "Please complete ALL items." });
    }
  };

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col sm={4} xl={6}>
              <TrackVisibility partialVisibility>
                <Zoom triggerOnce={true}>
                  <div className="station">
                    <img src={planet} alt="Contact Us" />
                  </div>
                </Zoom>
              </TrackVisibility>
            </Col>
            <Col sm={8} xl={6}>
              <TrackVisibility partialVisibility>
                <Fade>
                  <div>
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
                            placeholder="*Message - También puedes escribirme en español."
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
                </Fade>
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>

      <Success onHide={() => setOpenModal(false)} show={openModal} />
    </>
  );
};
