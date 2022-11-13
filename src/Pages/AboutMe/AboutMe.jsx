import React from "react";
import { Contact } from "../../Components/Contact/Contact";
import { MySelf } from "../../Components/Header/MySelf";
import { MyInfo } from "../../Components/MyInfo/MyInfo";

export const AboutMe = () => {
  return (
    <>
      <MySelf />
      <MyInfo />
      <Contact />
    </>
  );
};
