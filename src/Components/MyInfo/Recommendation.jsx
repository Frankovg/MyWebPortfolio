import React from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Recommendation = () => {
  return (
    <>
      <a
        className="toRecomm"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/francoamoroso/details/recommendations/?detailScreenTabIndex=0"
      >
        To my LinkedIn <ArrowRightCircle size={25} />
      </a>
      <br />
      Don't be shy and send me a contact request 😉.
    </>
  );
};
