import React from 'react';
import "../style.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from "../images/about.jpg"
import CardImg2 from "../images/about.jpg"
import CardImg3 from "../images/about.jpg"
import CardImg4 from "../images/about.jpg"

export default function Offer() {
  return (
    <section className="offer">
        <h1 className="offerTitle"> Oferta </h1>
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 6 }).map((_, idx) => (
      <Col key={idx}>
        <Card>
          <Card.Img variant="top" src={CardImg} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  </section>
);
}

