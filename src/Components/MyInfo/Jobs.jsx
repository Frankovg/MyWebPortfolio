import React from "react";
import { Col, Row } from "react-bootstrap";
import alex from "../../assets/jobs/alex.svg";
import fix from "../../assets/jobs/fix.svg";
import grupoquiero from "../../assets/jobs/grupoquiero.svg";
import ikea from "../../assets/jobs/ikea.svg";
import norush from "../../assets/jobs/norush.svg";
import pubext from "../../assets/jobs/pubext.svg";
import micropack from "../../assets/jobs/micropack.svg";

export const Jobs = () => {
  return (
    <Row className="jobs">
      <Col>
        <img src={fix} alt="Estudio Fix" />
      </Col>
      <Col>
        <img src={micropack} alt="Micropack" />
      </Col>
      <Col>
        <img src={grupoquiero} alt="Grupo Quiero" />
      </Col>
      <Col>
        <img src={norush} alt="noRush" />
      </Col>
      <Col>
        <img src={pubext} alt="Pubext 2000" />
      </Col>
      <Col>
        <img src={ikea} alt="Ikea" />
      </Col>
      <Col>
        <img src={alex} alt="Rótulos Alex" />
      </Col>
    </Row>
  );
};
