import React from "react";
import { Col, Row } from "react-bootstrap";

//Images
import amstel from "../../assets/clients/amstel.svg";
import axe from "../../assets/clients/axe.svg";
import cocacola from "../../assets/clients/cocacola.svg";
import coty from "../../assets/clients/coty.svg";
import cruzcampo from "../../assets/clients/cruzcampo.svg";
import elaguila from "../../assets/clients/elaguila.svg";
import garnier from "../../assets/clients/garnier.svg";
import gillette from "../../assets/clients/gillette.svg";
import johnsons from "../../assets/clients/johnsons.svg";
import loreal from "../../assets/clients/loreal.svg";
import maybelline from "../../assets/clients/maybelline.svg";
import mondelez from "../../assets/clients/mondelez.svg";
import movistar from "../../assets/clients/movistar.svg";
import nestle from "../../assets/clients/nestle.svg";
import newbalance from "../../assets/clients/newbalance.svg";
import pg from "../../assets/clients/p&g.svg";
import pepsico from "../../assets/clients/pepsico.svg";
import refresco from "../../assets/clients/refresco.svg";
import rimmel from "../../assets/clients/rimmel.svg";
import sallyhansen from "../../assets/clients/sallyhansen.svg";
import unilever from "../../assets/clients/unilever.svg";
import viacelere from "../../assets/clients/viacelere.svg";
import vichy from "../../assets/clients/vichy.svg";
import volkswagen from "../../assets/clients/volkswagen.svg";

const logos = [
  {
    brand: "Amstel",
    img: amstel,
  },
  {
    brand: "AXE",
    img: axe,
  },
  {
    brand: "Coca-Cola",
    img: cocacola,
  },
  {
    brand: "Coty",
    img: coty,
  },
  {
    brand: "Cruz Campo",
    img: cruzcampo,
  },
  {
    brand: "El Águila",
    img: elaguila,
  },
  {
    brand: "Garnier",
    img: garnier,
  },
  {
    brand: "Gillete",
    img: gillette,
  },
  {
    brand: "Johnsons & Johnsons",
    img: johnsons,
  },
  {
    brand: "L'Oréal Paris",
    img: loreal,
  },
  {
    brand: "Maybelline",
    img: maybelline,
  },
  {
    brand: "Mondeléz",
    img: mondelez,
  },
  {
    brand: "Movistar",
    img: movistar,
  },
  {
    brand: "Nestlé",
    img: nestle,
  },
  {
    brand: "New Balance",
    img: newbalance,
  },
  {
    brand: "P&G",
    img: pg,
  },
  {
    brand: "Pepsico",
    img: pepsico,
  },
  {
    brand: "Refresco",
    img: refresco,
  },
  {
    brand: "Rimmel",
    img: rimmel,
  },
  {
    brand: "Sally Hansen",
    img: sallyhansen,
  },
  {
    brand: "Unilever",
    img: unilever,
  },
  {
    brand: "Via Célere",
    img: viacelere,
  },
  {
    brand: "Vichy",
    img: vichy,
  },
  {
    brand: "Volkswagen",
    img: volkswagen,
  },
];

export const Clients = () => {
  return (
    <Row className="clients">
      {logos.map((logo, idx) => {
        return (
          <Col key={idx} xs={4} sm={3} md={2} lg={1}>
            <img src={logo.img} alt={logo.brand} />
          </Col>
        );
      })}
    </Row>
  );
};
