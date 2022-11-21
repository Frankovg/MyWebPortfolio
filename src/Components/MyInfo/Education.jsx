import React from "react";
import { Col, Row } from "react-bootstrap";

export const Education = () => {
  return (
    <Row>
      <Col sm={6} lg={4} className="pb-4 study-bx">
        <div className="text-center">
          <h5>Full-stack Web Developer</h5>
          <h6>Socratech</h6>
          <p className="where">2022, Malaga, Spain</p>
        </div>
        <div>
          <p>
            An intense 16 weeks (630 hours) long bootcamp where I gained a solid
            base of programming with JavaScript and how to develop Web
            Applications. Training with the most demanded technologies of the
            market like React.js, Node.js, Bootstrap, MySQL among others. Also,
            it put me in a real tech environment developing a project for a real
            company.
          </p>
        </div>
      </Col>
      <Col sm={6} lg={4} xxl={2} className="pb-4 study-bx">
        <div className="text-center">
          <h5>UX/UI Designer</h5>
          <h6>Google</h6>
          <p className="where">2022, Malaga, Spain</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            vero aliquid dolore alias illo quasi!
          </p>
        </div>
      </Col>
      <Col sm={6} lg={4} xxl={2} className="pb-4 study-bx">
        <div className="text-center">
          <h5>Computer Science</h5>
          <h6>HarvardX</h6>
          <p className="where">2022, Malaga, Spain</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            vero aliquid dolore alias illo quasi!
          </p>
        </div>
      </Col>
      <Col sm={6} xxl={2} className="pb-4 study-bx">
        <div className="text-center">
          <h5>Industrial Designer</h5>
          <h6>UNMDP</h6>
          <p className="where">2014, Mar del Plata, Argentina</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            vero aliquid dolore alias illo quasi!
          </p>
        </div>
      </Col>
      <Col sm={6} xxl={2} className="pb-4 study-bx">
        <div className="text-center">
          <h5>Economics</h5>
          <h6>Anna Böttger</h6>
          <p className="where">2007, Villa Gesell, Argentina</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            vero aliquid dolore alias illo quasi!
          </p>
        </div>
      </Col>
    </Row>
  );
};
