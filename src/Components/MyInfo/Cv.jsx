import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import cv from "../../assets/cv/Franco_Amoroso_cv_2022_en.pdf";
import portfolio from "../../assets/portfolio/amoroso_franco_portfolio22_desktop.pdf";

export const Cv = () => {
  const [done1, setDone1] = useState("");
  const [done2, setDone2] = useState("");
  const [done3, setDone3] = useState("");
  const [done4, setDone4] = useState("");
  const [done5, setDone5] = useState("");

  const handleDone = (type) => {
    const done = "done";

    if (type === "on-cv-sp") {
      setDone1(done);
    } else if (type === "on-cv-en") {
      setDone2(done);
    } else if (type === "on-pf") {
      setDone3(done);
    } else if (type === "dl-cv-en") {
      setDone4(done);
    } else if (type === "dl-pf") {
      setDone5(done);
    }
  };

  return (
    <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto d-flex flex-column">
          <div className="fw-bold mb-2">Google Drive</div>

          <a
            onClick={() => handleDone("on-cv-sp")}
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1uk60yd1C5uLzKCiOG6LEsb413DLPV_l_/view?usp=share_link"
            className={`mb-1 cv-link ${done1}`}
          >
            Curriculum Vitae - SPANISH
          </a>

          <a
            onClick={() => handleDone("on-cv-en")}
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1HVtHa43eL8E94e4DB7IwMfvXwVNjH1zt/view?usp=share_link"
            className={`mb-1 cv-link ${done2}`}
          >
            Curriculum Vitae - ENGLISH
          </a>
          <a
            onClick={() => handleDone("on-pf")}
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1VKtBB-k9EU19sKomBrv7-Tn5CQBbmVh5/view?usp=sharing"
            className={`mb-1 cv-link ${done3}`}
          >
            Portfolio - ENGLISH
          </a>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto  d-flex flex-column">
          <div className="fw-bold mb-2">Download</div>
          <a
            onClick={() => handleDone("dl-cv-en")}
            target="_blank"
            rel="noreferrer"
            href={cv}
            className={`mb-1 cv-link ${done4}`}
            download="franco_amoroso_cv_2022_en"
          >
            Curriculum Vitae - ENGLISH
          </a>
          <a
            onClick={() => handleDone("dl-pf")}
            target="_blank"
            rel="noreferrer"
            href={portfolio}
            className={`mb-1 cv-link ${done5}`}
            download="franco_amoroso_portfolio_2022_en"
          >
            Portfolio - ENGLISH
          </a>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};
