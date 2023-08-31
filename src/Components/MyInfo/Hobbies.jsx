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
      "I'm a die-hard PC gamer, and I don't see that changing anytime soon! Whether I'm teaming up with friends in online games or getting lost in open-world adventures with epic stories, gaming is my jam. I'm all about competitive shooters, RPGs, exciting adventures, and immersive simulators – they're my go-to genres!",
  },
  {
    icon: sport,
    alt: "Extreme sports",
    description:
      "I'm all about skateboarding and mountain biking – they're my top picks when it comes to sports. But honestly, I'm a fan of pretty much any extreme sport out there. The mix of adrenaline, speed, and the whole culture around these sports just gets me hooked!",
  },
  {
    icon: outdoor,
    alt: "Outdoor activities",
    description:
      "My ideal getaways? Camping out in the middle of nowhere. I'm a nature enthusiast who thrives on soaking up stunning landscapes. Weekends are all about venturing to mountains, hills, forests, or offbeat beaches with my partner.",
  },
  {
    icon: rock,
    alt: "Rock/Metal concerts",
    description: `"Music is my lifeline – I can't imagine living without it! One of my absolute favorite things to do is attend live concerts. While heavy metal is my jam, I'm a rock enthusiast at heart and appreciate every genre within the rock spectrum."`,
  },
  {
    icon: airsoft,
    alt: "Airsoft",
    description:
      "Airsoft, my beloved pastime (or rather, a cherished hobby). It's an exhilarating fusion of teamwork, agility, adrenaline, and the great outdoors. Stepping onto the field transports me into a world of camaraderie, where collaborating with fellow enthusiasts to achieve objectives becomes a captivating adventure.",
  },
  {
    icon: computer,
    alt: "Computers and hardware",
    description:
      "What truly excites me are custom-built computers. Keeping abreast of the latest technological advancements and PC components, I'm always hands-on in crafting my setups from scratch.",
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
