import React from "react";
import { Col, Row } from "react-bootstrap";
import airsoft from "../../assets/icons/airsoft.svg";
import computer from "../../assets/icons/computer.svg";
import outdoor from "../../assets/icons/outdoor.svg";
import rock from "../../assets/icons/rock.svg";
import sport from "../../assets/icons/sport.svg";
import videogame from "../../assets/icons/videogame.svg";

export const Hobbies = () => {
  return (
    <Row>
      <Col xs={12} sm={12} md={6} lg={4} className="hobbie-bx">
        <img src={videogame} alt="Videogames" />
        <p>
          I'm a PC gamer and I reckon I will be forever!. I play online games
          with friends but I also enjoy open world games with amazing stories.
          My favorite genres are competitive shooters, rol, adventures and
          simulators.
        </p>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="hobbie-bx">
        <img src={sport} alt="Extreme sports" />
        <p>
          My favourite sports are skateboarding and mountain biking. But I love
          in general every kind of extreme sport. I like adrenaline and speed,
          but also I like the culture behind of these sports.
        </p>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="hobbie-bx">
        <img src={outdoor} alt="Outdoor activities" />
        <p>
          "The best holidays for me are in a tent in the middle of nowhere". I
          love nature and spending time in amazing landscapes. I enjoy going to
          mountains, hills, forests or non-popular beaches with my partner on
          weekends.{" "}
        </p>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="hobbie-bx">
        <img src={rock} alt="Rock/Metal concerts" />
        <p>
          "I can't live without music!". Going to live concerts is one of my
          favorite activities. Actually, I like heavy metal but I enjoy every
          kind of rock style.
        </p>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="hobbie-bx">
        <img src={airsoft} alt="Airsoft" />
        <p>
          Airsoft, my lovely freak sport (or more like a hobby). It combines
          teamwork, agility, adrenaline and outdoor adventure.
        </p>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="hobbie-bx">
        <img src={computer} alt="Computers and hardware" />
        <p>
          What I really like are custom computers. Staying up to date with new
          technology and pc components and, of course, I always build my setups.
        </p>
      </Col>
    </Row>
  );
};
