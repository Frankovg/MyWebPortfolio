import React from "react";

//Components
import ListGroup from "react-bootstrap/ListGroup";

export const Cv = () => {
  const downloadLinks = [
    {
      id: "0",
      href: "https://drive.google.com/file/d/1NqNxNdIdMGxJu0e-mBCYpAudMmikRE7t/view?usp=share_link",
      seen: false,
      title: "Curriculum Vitae - SPANISH",
    },
    {
      id: "1",
      href: "https://drive.google.com/file/d/1A1fiQ9RvR7K9lRpmFcUQMMhMPpz8X9Sa/view?usp=drive_link",
      seen: false,
      title: "Curriculum Vitae - ENGLISH",
    },
    {
      id: "2",
      href: "https://drive.google.com/file/d/19sCWPKeUKf-_3QqMk4a49C9fzWdKyz72/view?usp=sharing",
      seen: false,
      title: "Portfolio - ENGLISH",
    },
  ];

  // const downloadFiles = [
  //   {
  //     id: "0",
  //     href: cv,
  //     seen: false,
  //     name: "franco_amoroso_cv_2022_en",
  //     title: "Curriculum Vitae - ENGLISH",
  //   },
  //   {
  //     id: "1",
  //     href: portfolio,
  //     seen: false,
  //     name: "franco_amoroso_portfolio_2022_en",
  //     title: "Portfolio - ENGLISH",
  //   },
  // ];

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
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        {/* <div className="ms-2 me-auto d-flex flex-column">
          <div className="fw-bold mb-2">Download</div>
          {downloadFiles.map((file, idx) => {
            return (
              <a
                key={idx}
                target="_blank"
                rel="noreferrer"
                href={file.href}
                className={`mb-1 cv-link`}
                download={file.name}
              >
                {file.title}
              </a>
            );
          })}
        </div> */}
      </ListGroup.Item>
    </ListGroup>
  );
};
