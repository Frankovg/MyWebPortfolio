import React, { useState, createContext } from "react";

export const LinkContext = createContext();

export const LinkProvider = (props) => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <LinkContext.Provider value={{ activeLink, setActiveLink }}>
      {props.children}
    </LinkContext.Provider>
  );
};
