import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rel1 from "../images/Rel_1.jpg";
import Rel2 from "../images/Rel_2.jpg";
import Rel3 from "../images/Rel_3.jpg";
import Rel4 from "../images/Rel_4.jpg";
import Rel5 from "../images/Rel_5.jpg";
import Rel6 from "../images/Rel_6.jpg";

export default function Rel() {
  return (
    <section className="rel" id='rel'>
      <Container className="relContainer" fluid="true">
        <Row >
          <Col>
            <h2 className="relTitle"> Realizacje </h2>
          </Col>
        </Row>
        <Row xs={1} md={3}>
          <Col className="mt-4">
            <img className="galleryItem" src={Rel1} alt="ANio Chocolate" />
          </Col>
          <Col className="mt-4">
            <img className="galleryItem" src={Rel2} alt="ANio Chocolate" />
          </Col>
          <Col className="mt-4">
            <img className="galleryItem" src={Rel3} alt="ANio Chocolate" />
          </Col>
          </Row>
          <Row className="mt-4" xs={1} md={3}>
          <Col className="mt-4">
            <img className="galleryItem" src={Rel4} alt="ANio Chocolate" />
          </Col>
          <Col className="mt-4">
            <img className="galleryItem" src={Rel5} alt="ANio Chocolate" />
          </Col>
          <Col className="mt-4">
            <img className="galleryItem" src={Rel6} alt="ANio Chocolate" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
