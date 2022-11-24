import React from "react";
import { Col, Row } from "react-bootstrap";

export const Education = () => {
  return (
    <Row>
      <Col sm={6} lg={4} xxl={3} className="pb-4 study-bx">
        <div className="text-center">
          <h5>Full-stack Web Developer</h5>
          <h6>Socratech</h6>
          <p className="where">2022, Malaga, Spain</p>
        </div>
        <div>
          <p>
            An intense 16 weeks (630 hours) bootcamp where I gained a solid base
            of programming with JavaScript and how to develop Web Applications.
          </p>
          <p>
            Training with the most demanded technologies of the market like
            React.js, Node.js, Bootstrap, MySQL among others. Also, it put me in
            a real tech environment developing a project for a real company.
          </p>
        </div>
      </Col>

      <Col sm={6} lg={4} xxl={3} className="pb-4 study-bx">
        <div className="text-center">
          <h5>Computer Science</h5>
          <h6>HarvardX</h6>
          <p className="where">2022, Malaga, Spain</p>
        </div>
        <div>
          <p>
            The CS50 is a 200 hours introduction to the intellectual enterprises
            of computer science and the art of programming.
          </p>
          <p>
            Topics include abstraction, algorithms, data structures,
            encapsulation, resource management, security, software engineering,
            and web development. Languages include C, Python, SQL, and
            JavaScript plus CSS and HTML.
          </p>
        </div>
      </Col>

      <Col sm={6} lg={4} xxl={3} className="pb-4 study-bx">
        <div className="text-center">
          <h5>UX/UI Designer</h5>
          <h6>Google Career Certificate</h6>
          <p className="where">2022, Malaga, Spain</p>
        </div>
        <div>
          <p>
            “Focus on the user and all else will follow.” It is a 200 hours
            course, plus a lot of reading and video support material.
          </p>
          <p>
            I learned how to complete the design process from beginning to end,
            including: Empathizing with users; Defining user pain points;
            Creating wireframes, mockups, and prototypes; and Testing designs
            through usability studies and Iterating.
          </p>
        </div>
      </Col>

      <Col sm={6} lg={4} xxl={3} className="pb-4 study-bx">
        <div className="text-center">
          <h5>Industrial Designer</h5>
          <h6>Mar del Plata University</h6>
          <p className="where">2014, Mar del Plata, Argentina</p>
        </div>
        <div>
          <p>
            A six years long and very complex career where I learned about
            technologies, art, engineering and industry.
          </p>
          <p>
            The industrial design engineer, during the design process, makes use
            of the necessary techniques in ideation, invention, visualization,
            calculation, management, design and specification of industrial
            details that determine the form of an engineering product. At the
            same time, it combines market analysis with the innovative vision of
            the proposal made.
          </p>
        </div>
      </Col>
    </Row>
  );
};
