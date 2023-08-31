import React from "react";

//Components
import ListGroup from "react-bootstrap/ListGroup";

export const Cv = () => {
  const downloadLinks = [
    {
      id: "0",
      href: "https://drive.google.com/file/d/1FGozNknUfIg9lZNG4SldekJVEy1KFL7J/view?usp=sharing",
      seen: false,
      title: "Curriculum Vitae - SPANISH",
    },
    {
      id: "1",
      href: "https://drive.google.com/file/d/1IOwsxqChdt0bWAtnU5dXfpqcK6L6ZKLG/view?usp=sharing",
      seen: false,
      title: "Curriculum Vitae - ENGLISH",
    },
    {
      id: "2",
      href: "https://drive.google.com/file/d/14Hjmod8Uf0y7DHNt--0mgk51Y0WFbeCk/view?usp=sharing",
      seen: false,
      title: "Portfolio - ENGLISH",
    },
  ];

  return (
    <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto d-flex flex-column">
          <div className="fw-bold mb-2">Google Drive</div>
          {downloadLinks.map((link, idx) => {
            return (
              <a
                key={idx}
                target="_blank"
                rel="noreferrer"
                href={link.href}
                className={`mb-1 cv-link`}
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};
