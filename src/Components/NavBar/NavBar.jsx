import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo/logo.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import cv from "../../assets/cv/Franco_Amoroso_cv_2022_en.pdf";
import portfolio from "../../assets/portfolio/amoroso_franco_portfolio22_desktop.pdf";
import "./navBar.scss";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleAboutMe = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <HashLink to="/#home">
              <Nav
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                <span> Home</span>
              </Nav>
            </HashLink>
            <HashLink to="/#tech-stack">
              <Nav
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                <span> Tech stack</span>
              </Nav>
            </HashLink>
            <HashLink to="/#project">
              <Nav
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                <span>Projects</span>
              </Nav>
            </HashLink>
            <NavDropdown title="Download" id="collasible-nav-dropdown">
              <NavDropdown.Item href={cv} download="Franco_Amoroso_cv_2022_en">
                Curriculum Vitae
              </NavDropdown.Item>
              <NavDropdown.Item
                href={portfolio}
                download="franco_amoroso_portfolio_2022_en"
              >
                Portfolio
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>

          <span className="navbar-text">
            <HashLink to={{ pathname: "/aboutme/", hash: "#aboutme" }}>
              <Nav>
                <Nav
                  className={`aboutMe ${
                    activeLink === "about"
                      ? "active navbar-link"
                      : "navbar-link"
                  }`}
                  onClick={() => handleAboutMe("about")}
                >
                  <span> About me</span>
                </Nav>
              </Nav>
            </HashLink>
            <div className="social-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/francoamoroso/"
              >
                <img src={linkedin} alt="LinkedIn icon" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Frankovg"
              >
                <img src={github} alt="Github icon" />
              </a>
            </div>

            <HashLink to="#connect">
              <button
                id="toConnect"
                className="vvd"
                onClick={() => console.log("connect")}
              >
                <span>Let's Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
