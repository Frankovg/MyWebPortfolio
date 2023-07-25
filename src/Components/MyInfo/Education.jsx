import React from "react";
import { Col, Row } from "react-bootstrap";

const education = [
  {
    title: "Full-stack Web Developer",
    academy: "Socratech",
    when: "2022, Malaga, Spain",
    paragraphs: [
      "An intense 16 weeks (630 hours) bootcamp where I gained a solid base of programming with JavaScript and how to develop Web Applications.",
      "Training with the most demanded technologies of the market like React.js, Node.js, HTML, CSS, MySQL among others. Also, it put me in a real tech environment developing a project for a real company.",
    ],
  },
  {
    title: "Computer Science",
    academy: "HarvardX",
    when: "2022, Malaga, Spain",
    paragraphs: [
      "The CS50 is a 200 hours introduction to the intellectual enterprises of computer science and the art of programming.",
      "Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include C, Python, SQL, and JavaScript plus CSS and HTML.",
    ],
  },
  {
    title: "UX/UI Designer",
    academy: "Google Career Certificate",
    when: "2022, Malaga, Spain",
    paragraphs: [
      "“Focus on the user and all else will follow.” It is a 200 hours course, plus a lot of reading and video support material.",
      "I learned how to complete the design process from beginning to end, including: Empathizing with users; Defining user pain points; Creating wireframes, mockups, and prototypes; and Testing designs through usability studies and Iterating.",
    ],
  },
  {
    title: "Industrial Designer",
    academy: "Mar del Plata University",
    when: "2014, Mar del Plata, Argentina",
    paragraphs: [
      "A six years long and very complex career where I learned about technologies, art, engineering and industry.",
      "The industrial design engineer, during the design process, makes use of the necessary techniques in ideation, invention, visualization, calculation, management, design and specification of industrial details that determine the form of an engineering product. At the same time, it combines market analysis with the innovative vision of the proposal made.",
    ],
  },
];

export const Education = () => {
  return (
    <Row>
      {education.map((elem, idx) => {
        return (
          <Col key={idx} sm={6} lg={4} xxl={3} className="pb-4 study-bx">
            <div className="text-center">
              <h5>{elem.title}</h5>
              <h6>{elem.academy}</h6>
              <p className="where">{elem.when}</p>
            </div>
            <div>
              {elem.paragraphs.map((p, idx) => {
                return <p key={idx}>{p}</p>;
              })}
            </div>
          </Col>
        );
      })}
    </Row>
  );
};
