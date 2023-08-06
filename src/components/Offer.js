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
      description: ["Tort mleczna czekolada / orzech laskowy / konfitura z czarnej porzeczki", "Tort kokos malibu / frużelina z mango i cytryną", "Tort z białą czekoladą / malinami", "Tort cappucino z amaretto / jagodami"],
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
      description: ["Sernik z białą czekoladą / prażynka", "Lody oreo zamknięte w mlecznej czekoladzie", "Mini tarta z kremem chantilly / owoce sezonowe", "Mini beza Pavlova / krem namelaka / frużelina mango / cytryna", "Monoporcja biała czekolada / malina / biszkop klasyczny / prażynka", "Monoporcja ciemna czekolda / wiśnia / biszkopt czekoladowy / prażynka", "Monoporcja mleczna czekolada / orzech laskowy / czarna pożeczka", "Monoporcja słony karmel / popcorn / malina"],        
      img: require("../images/slodkiStol.jpeg"),
    },
    {
      id: 4,
      title: "Ciasta",
      description: ["Bento Cake", "Sernik / Brownie z wiśniami", "Pavlova"],
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
      <h1 className="sectionTitle"> OFERTA </h1>
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