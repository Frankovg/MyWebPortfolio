import React from "react";
import { Col, Row } from "react-bootstrap";

// Icons
import airsoft from "../../assets/icons/airsoft.svg";
import computer from "../../assets/icons/computer.svg";
import outdoor from "../../assets/icons/outdoor.svg";
import rock from "../../assets/icons/rock.svg";
import sport from "../../assets/icons/sport.svg";
import videogame from "../../assets/icons/videogame.svg";

const hobbies = [
  {
    icon: videogame,
    alt: "Videogames",
    description:
      "I'm a PC gamer and I reckon I will be forever!. I play online games with friends but I also enjoy open world games with amazing stories. My favorite genres are competitive shooters, rol, adventures and simulators.",
  },
  {
    icon: sport,
    alt: "Extreme sports",
    description:
      "My favourite sports are skateboarding and mountain biking. But I love in general every kind of extreme sport. I like adrenaline and speed, but also I like the culture behind of these sports.",
  },
  {
    icon: outdoor,
    alt: "Outdoor activities",
    description:
      '"The best holidays for me are in a tent in the middle of nowhere". I love nature and spending time in amazing landscapes. I enjoy going to mountains, hills, forests or non-popular beaches with my partner on weekends.',
  },
  {
    icon: rock,
    alt: "Rock/Metal concerts",
    description: `"I can't live without music!". Going to live concerts is one of my favorite activities. Actually, I like heavy metal but I enjoy every kind of rock style.`,
  },
  {
    icon: airsoft,
    alt: "Airsoft",
    description:
      "Airsoft, my lovely freak sport (or more like a hobby). It combines teamwork, agility, adrenaline and outdoor adventure.",
  },
  {
    icon: computer,
    alt: "Computers and hardware",
    description:
      "What I really like are custom computers. Staying up to date with new technology and pc components and, of course, I always build my setups.",
  },
];

export const Hobbies = () => {
  return (
    <Row>
      {hobbies.map((hobby, idx) => {
        return (
          <Col key={idx} xs={12} sm={12} md={6} lg={4} className="hobbie-bx">
            <img src={hobby.icon} alt={hobby.alt} />
            <p>{hobby.description}</p>
          </Col>
        );
      })}
    </Row>
  );
};
