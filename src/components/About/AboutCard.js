import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vineetha Devavarapu </span>
            from <span className="purple"> Tuni, India.</span>
            <br />
            I am graduate student from Aditya College of Engineering.
            <br />
            I have completed Bachelors Degree in the stream of ComputerScience
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Explore more and gain Knowledge!"{" "}
          </p>
          <footer className="blockquote-footer">Vineetha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
