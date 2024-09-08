import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Privacy Encryptor"
              description="This project will be the Text to Emoji coversion and an Language Converter which is included in it. Encryption of the text to emoji will be done in the encryption part which user can add a password to it. Decrption part contain emoji which are needed to be encrypted along with the password which the sender has been set. User Friendly to access. Language Converter is adder for user convenience to change in their comfortable language."
              ghLink="https://github.com/Amaresh1204/Privacy-Encryptor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Student Monitoring System Using NFC"
              description="Parent Student Monitoring system using Nfc inbuilt in the id cards. When student enter in the bus from the school the parent gets the notification of that child has entered the bus and will be arrived shortly to the location. When dropping at the location again scans the card the again a notification sent to the parent that child arrived the location."
              ghLink="https://github.com/Amaresh1204/Student-Monitoring-System-Using-NFC"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Smart Meter"
              description="Smart Electricity meter which the power consumption and its cost can be monitered continously real time through Ip Address from any device."
              ghLink="https://github.com/Amaresh1204/Smart-Meter"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Decentralized Voting System Using BlockChain"
              description="Can use the local Host by using hardhat. Creating the local ethereum for testing and use remix for checking the functionality. Link Meta Mask Account to it."
              ghLink="https://github.com/Amaresh1204/Decentralized-Voting-System-Using-BlockChain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chrome Extension"
              description="This Chrome Extension is based on the Light Mode-Dark Mode.Which Changes Made from dark mode to light mode [or] light mode to dark mode with the help of the button."
              ghLink="https://github.com/Amaresh1204/Light-Dark-Theme-Chrome-Extension"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Intermediate Code Generator"
              description="Conversion of the high level language to low level in understandable machine code.Using Quaduples, Triples and Indirect Triples."
              ghLink="https://github.com/Amaresh1204/Intermediate-Code-Generator-Three-Address-Code"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
