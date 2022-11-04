import React from "react";
import { Contact } from "../../Components/Contact/Contact";
import { Header } from "../../Components/Header/Header";
import { Projects } from "../../Components/Projects/Projects";
import { Tech } from "../../Components/Tech/Tech";
import { Helmet } from "react-helmet-async";
import "./home.scss";

export const Home = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>FRAN Web Dev</title>
        <meta
          name="description"
          content="Full Stack Web Developer | React + Node + MySQL || UX & Industrial Designer"
        />
      </Helmet>
      <Header />
      <Tech />
      <Projects />
      <Contact />
    </>
  );
};
