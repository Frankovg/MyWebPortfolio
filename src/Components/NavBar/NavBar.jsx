import React, { useState, useEffect, useContext } from "react";
import { HashLink } from "react-router-hash-link";

//Components
import { Navbar, Container, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

//Icons
import logo from "../../assets/logo/logo.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";

//Context
import { LinkContext } from "../../Context/LinkContext";

//Styles
import "./navBar.scss";

const navBarLinks = [
  {
    name: "Home",
    href: "/#home",
    value: "home",
  },
  {
    name: "Tech stack",
    href: "/#tech-stack",
    value: "skills",
  },
  {
    name: "Projects",
    href: "/#project",
    value: "projects",
  },
];

const contentLinks = [
  {
    name: "Curriculum Vitae",
    href: "https://drive.google.com/file/d/1IOwsxqChdt0bWAtnU5dXfpqcK6L6ZKLG/view?usp=sharing",
  },
  {
    name: "Portfolio",
    href: "https://drive.google.com/file/d/14Hjmod8Uf0y7DHNt--0mgk51Y0WFbeCk/view?usp=sharing",
  },
];

const socialIcons = [
  {
    href: "https://www.linkedin.com/in/francoamoroso/",
    alt: "LinkedIn icon",
    icon: linkedin,
  },
  {
    href: "https://github.com/Frankovg",
    alt: "Github icon",
    icon: github,
  },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { activeLink, setActiveLink } = useContext(LinkContext);

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
            {navBarLinks.map((link, idx) => {
              return (
                <HashLink to={link.href} key={idx}>
                  <Nav
                    className={
                      activeLink === link.value
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onClick={() => onUpdateActiveLink(link.value)}
                  >
                    <span>{link.name}</span>
                  </Nav>
                </HashLink>
              );
            })}
            <NavDropdown title="Download" id="collasible-nav-dropdown">
              {contentLinks.map((download, idx) => {
                return (
                  <NavDropdown.Item
                    href={download.href}
                    key={idx}
                    target="_blank"
                  >
                    {download.name}
                  </NavDropdown.Item>
                );
              })}
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
              {socialIcons.map((social, idx) => {
                return (
                  <a
                    key={idx}
                    target="_blank"
                    rel="noreferrer"
                    href={social.href}
                  >
                    <img src={social.icon} alt={social.alt} />
                  </a>
                );
              })}
            </div>

            <HashLink to="#connect">
              <button id="toConnect" className="vvd">
                <span>Let's Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
