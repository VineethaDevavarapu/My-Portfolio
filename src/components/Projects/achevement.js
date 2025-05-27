import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <ul>
                    <li className="about-activity">
                      <ImPointRight /> Pre finalist in Myntra we for she Hackerramp 2024
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> International competitor in NASA space apps challenge Hackathon 2023
                    </li>
                  </ul>
        
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
