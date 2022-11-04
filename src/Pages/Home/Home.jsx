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
      <Helmet>
        <title>FRAN Web Dev</title>
        <meta
          name="keywords"
          content="react, javascript, html, css, mysql, node, front-end, back-end, full-stack, web developer"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Header />
      <Tech />
      <Projects />
      <Contact />
    </>
  );
};
