import React from 'react';
import "../style.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Offer() {
  const productList = [
    {
      id: 1,
      title: 'Torty musowe',
      description: 'Opis',
      img: require ('../images/tortMaliny.jpg')
    },
    {
      id: 2,
      title: 'Torty biszkoptowe',
      description: 'Opis',
      img: require ('../images/trotyStol.jpeg')
    },
    {
      id: 3,
      title: 'Bufet słodki',
      description: 'Opis',
      img: require ('../images/slodkiStol.jpeg')
    },
    {
      id: 4,
      title: 'Ciasta',
      description: 'Opis',
      img: require ('../images/pralinyOwoce.jpg')
    },
    {
      id: 5,
      title: 'Praliny',
      description: 'Opis',
      img: require ('../images/pralinyNiebieskie.jpg')
    },
    {
      id: 6,
      title: 'Czekolady',
      description: 'Opis',
      img: require ('../images/lody.jpg')
    }
  ]
  
  return (
    <section className="offer">
        <h1 className="offerTitle"> Oferta </h1>
    <Row xs={1} md={2} className="g-4">
    {productList.map((list) => (
      <Col key={list.id}>
        <Card className="bg-dark text-white">
          <Card.Img variant="top" src={list.img} Alt={list.title} />
          <Card.ImgOverlay>
            <Card.Title>{list.title}</Card.Title>
            <Card.Text>
              {list.description}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Col>
    ))}
  </Row>
  </section>
);
}

