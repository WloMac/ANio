import React from "react";
import "../style.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


export default function Offer() {
  const productList = [
    {
      id: 1,
      title: "Torty musowe",
      description: "Opis",
      img: require("../images/tortMaliny.jpg"),
    },
    {
      id: 2,
      title: "Torty biszkoptowe",
      description: "Opis",
      img: require("../images/trotyStol.jpeg"),
    },
    {
      id: 3,
      title: "Bufet słodki",
      description: "Opis",
      img: require("../images/slodkiStol.jpeg"),
    },
    {
      id: 4,
      title: "Ciasta",
      description: "Opis",
      img: require("../images/pralinyOwoce.jpg"),
    },
    {
      id: 5,
      title: "Praliny",
      description: "Opis",
      img: require("../images/pralinyNiebieskie.jpg"),
    },
    {
      id: 6,
      title: "Czekolady",
      description: "Opis",
      img: require("../images/lody.jpg"),
    },
  ];

  return (
    <section className="offer" id='offer'>
      <h1 className="offerTitle"> OFERTA </h1>
      <Row xs={1} className="g-4">
        {productList.map((list) => (
          <Col key={list.id}>
      <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey={list.id}><h3>{list.title}</h3><img className ='offerImg' src={list.img}/></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={list.id}>
          <Card.Body>{list.description}</Card.Body>
        </Accordion.Collapse>
      </Card>      
    </Accordion>
  
      </Col>
       ))}
      </Row>
      
    </section>
  );
}

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('Click'),
  );

  return (
    <button
      className='offerBtn'
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}