import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import logo from "../../assets/logo/logo.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
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

  const renderTooltipDownload = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Work in progress!
    </Tooltip>
  );

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
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#tech-stack"
              className={
                activeLink === "Skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Tech stack
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "Projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 100, hide: 100 }}
              overlay={renderTooltipDownload}
            >
              <Nav.Link
                className={
                  activeLink === "Projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
              >
                Downloads
              </Nav.Link>
            </OverlayTrigger>
          </Nav>

          <span className="navbar-text">
            <Nav>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltipDownload}
              >
                <Nav.Link
                  className={`aboutMe ${
                    activeLink === "Projects"
                      ? "active navbar-link"
                      : "navbar-link"
                  }`}
                >
                  About me
                </Nav.Link>
              </OverlayTrigger>
            </Nav>
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
