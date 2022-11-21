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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta rem
          consequatur quod consequuntur, ipsa iusto dolores quidem eos
          accusantium non.
        </p>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="hobbie-bx">
        <img src={sport} alt="Extreme sports" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta rem
          consequatur quod consequuntur, ipsa iusto dolores quidem eos
          accusantium non.
        </p>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="hobbie-bx">
        <img src={outdoor} alt="Outdoor activities" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta rem
          consequatur quod consequuntur, ipsa iusto dolores quidem eos
          accusantium non.
        </p>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="hobbie-bx">
        <img src={rock} alt="Rock/Metal concerts" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta rem
          consequatur quod consequuntur, ipsa iusto dolores quidem eos
          accusantium non.
        </p>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="hobbie-bx">
        <img src={airsoft} alt="Airsoft" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta rem
          consequatur quod consequuntur, ipsa iusto dolores quidem eos
          accusantium non.
        </p>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="hobbie-bx">
        <img src={computer} alt="Computers and hardware" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta rem
          consequatur quod consequuntur, ipsa iusto dolores quidem eos
          accusantium non.
        </p>
      </Col>
    </Row>
  );
};
