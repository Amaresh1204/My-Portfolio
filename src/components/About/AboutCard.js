import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amaresh Kambhampati </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am currently studying Btech Computer Science Engineering at Dayananda Sagar University.
            <br />
            I have completed my Full Stack Web Devolepment in Udemy.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Seeing Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amaresh Kambhampati</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
