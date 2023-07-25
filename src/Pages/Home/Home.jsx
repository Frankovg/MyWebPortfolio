import React from "react";

//Components
import { Contact } from "../../Components/Contact/Contact";
import { Header } from "../../Components/Header/Header";
import { Projects } from "../../Components/Projects/Projects";
import { Tech } from "../../Components/Tech/Tech";

export const Home = () => {
  return (
    <>
      <Header />
      <Tech />
      <Projects />
      <Contact />
    </>
  );
};
