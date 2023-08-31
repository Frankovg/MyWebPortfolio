import React from "react";
import { Col, Row } from "react-bootstrap";

//Icons
import alex from "../../assets/jobs/alex.svg";
import fix from "../../assets/jobs/fix.svg";
import grupoquiero from "../../assets/jobs/grupoquiero.svg";
import ikea from "../../assets/jobs/ikea.svg";
import norush from "../../assets/jobs/norush.svg";
import pubext from "../../assets/jobs/pubext.svg";
import micropack from "../../assets/jobs/micropack.svg";
import asafedigital from "../../assets/jobs/asafedigital.svg";

const companies = [
  {
    icon: fix,
    alt: "Estudio Fix",
  },
  {
    icon: micropack,
    alt: "Micropack",
  },
  {
    icon: grupoquiero,
    alt: "Grupo Quiero",
  },
  {
    icon: norush,
    alt: "noRush",
  },
  {
    icon: pubext,
    alt: "Pubext 2000",
  },
  {
    icon: ikea,
    alt: "Ikea",
  },
  {
    icon: alex,
    alt: "Rótulos Alex",
  },
  {
    icon: asafedigital,
    alt: "A-SAFE Digital",
  },
];

export const Jobs = () => {
  return (
    <Row className="jobs">
      {companies.map((company, idx) => {
        return (
          <Col key={idx}>
            <img src={company.icon} alt={company.alt} />
          </Col>
        );
      })}
    </Row>
  );
};
