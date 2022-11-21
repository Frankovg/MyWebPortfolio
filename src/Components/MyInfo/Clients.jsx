import React from "react";
import { Col, Row } from "react-bootstrap";
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

export const Clients = () => {
  return (
    <Row className="clients">
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={amstel} alt="Amstel" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={axe} alt="Axe" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={cocacola} alt="Coca Cola" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={coty} alt="Coty" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={cruzcampo} alt="Cruz Campo" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={elaguila} alt="El Águila" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={garnier} alt="Garnier" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={gillette} alt="Gillette" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={johnsons} alt="Johnson & Johnson" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={loreal} alt="L'Oréal Paris" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={maybelline} alt="Maybelline" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={mondelez} alt="Mondeléz" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={movistar} alt="Movistar" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={nestle} alt="Nestlé" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={newbalance} alt="New Balance" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={pg} alt="P&G" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={pepsico} alt="Pepsico" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={refresco} alt="Refresco" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={rimmel} alt="Rimmel" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={sallyhansen} alt="Sally Hansen" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={unilever} alt="Unilever" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={viacelere} alt="Vía Célere" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={vichy} alt="Vichy" />
      </Col>
      <Col xs={4} sm={3} md={2} lg={1}>
        <img src={volkswagen} alt="Volkswagen" />
      </Col>
    </Row>
  );
};
