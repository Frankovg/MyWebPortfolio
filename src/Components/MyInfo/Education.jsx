import React from "react";
import { Col, Row } from "react-bootstrap";

const education = [
  {
    title: "Full-stack Web Developer",
    academy: "Socratech",
    when: "2022, Malaga, Spain",
    paragraphs: [
      "An immersive 16-week (630-hour) bootcamp during which I acquired a robust foundation in JavaScript programming and honed my skills in web application development.",
      "Receiving training in the industry's most demanded technologies, including React.js, Node.js, HTML, CSS, MySQL, and more, the program also immersed me in an authentic tech ecosystem. This hands-on experience involved developing a project for an actual company, providing invaluable exposure to a real-world tech environment.",
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
      "I acquired comprehensive knowledge of the entire design process, covering every stage from inception to completion. This encompassed user empathy, identification of user pain points, crafting wireframes, mockups, and prototypes, rigorous testing through usability studies, and iterative refinement.",
    ],
  },
  {
    title: "Industrial Designer",
    academy: "Mar del Plata University",
    when: "2014, Mar del Plata, Argentina",
    paragraphs: [
      "A six-year-long and multifaceted journey that led me through the intricate interplay of technology, art, engineering, and industry.",
      "Throughout the design process, the industrial design engineer adeptly employs a wide array of techniques encompassing ideation, invention, visualization, calculation, management, and the meticulous specification of industrial intricacies that ultimately shape the form of an engineering product. Concurrently, this discipline seamlessly marries market analysis with an innovative outlook, thereby infusing the proposal with a visionary perspective.",
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
