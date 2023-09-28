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
      description: ["Tort mleczna czekolada lub orzech laskowy lub konfitura z czarnej porzeczki", "Tort kokos-malibu lub frużelina z mango i cytryną", "Tort z białą czekoladą lub malinami", "Tort cappucino z amaretto lub jagodami"],
      img: require("../images/tortMaliny.jpg"),
    },
    {
      id: 2,
      title: "Torty biszkoptowe",
      description: ["Opis"],
      img: require("../images/trotyStol.jpeg"),
    },
    {
      id: 3,
      title: "Bufet słodki",
      description: ["Sernik z białą czekoladą (lub prażynka)", "Lody oreo zamknięte w mlecznej czekoladzie", "Mini tarta z kremem chantilly lub owoce sezonowe", "Mini beza Pavlova lub krem namelaka lub frużelina mango lub cytryna", "Monoporcja biała czekolada lub malina (na bazie biszkoptu klasycznego lub prażynka )", "Monoporcja ciemna czekolda lub wiśnia (na bazie biszkoptu czekoladowego lub prażynka)", "Monoporcja mleczna czekolada lub orzech laskowy lub czarna pożeczka", "Monoporcja słony karmel lub popcorn lub malina"],        
      img: require("../images/slodkiStol.jpeg"),
    },
    {
      id: 4,
      title: "Ciasta",
      description: ["Bento Cake", "Sernik lub Brownie z wiśniami", "Pavlova"],
      img: require("../images/pralinyOwoce.jpg"),
    },
    {
      id: 5,
      title: "Praliny",
      description: ["Opis"],
      img: require("../images/pralinyNiebieskie.jpg"),
    },
    {
      id: 6,
      title: "Czekolady",
      description: ["Opis"],
      img: require("../images/lody.jpg"),
    },
  ];

  return (
    <section className="offer">
      <h2 className="sectionTitle" id='offerTitle'> OFERTA </h2>
      {/* <Row xs={1} className="g-4"> */}
        {productList.map((list) => (
          <Col key={list.id}>
      <Accordion defaultActiveKey="0">
      
          <CustomToggle eventKey={list.id}><div className="offContainer"><h3 className="offHeader">{list.title}</h3><img className ='offerImg' src={list.img}/></div></CustomToggle>
        
        <Accordion.Collapse eventKey={list.id}>
          
          <Card.Body><ul className='offList'>{list.description.map((detail, index)=>(<li key={index}>{detail}</li>))}</ul></Card.Body>
        
        </Accordion.Collapse>
           
      </Accordion>  
      </Col>
       ))}
      {/* </Row> */}
      
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