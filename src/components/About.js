import React from "react";
import "../style.css";
import aboutImg from "../images/about.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
      
    <section className="about">
      <Container>
      <Row>
        <Col>   
        <h1 className="aboutTitle"> O NAS </h1>
       <p>
      W ANio nieustannie dążymy do tworzenia niezapomnianych doznań smakowych. Jesteśmy pasjonatami w dziedzinie
      produkcji tortów, pralin i czekolady, dbając o najdrobniejsze detale, aby
      zadowolić podniebienia naszych klientów. 
      </p>
      
      <p>Dedykacja do
      ręcznej pracy i sztuki cukierniczej czyni nas unikalnymi na rynku.
      Produkty ANio wyróżniają się nie tylko niepowtarzalnym smakiem, ale także
      estetycznym wykończeniem, które sprawia, że są one prawdziwymi dziełami
      sztuki. W swojej pracy używamy jedynie najwyższej jakości składników, starannie dobierając
      je, aby zapewnić naszym klientom pełną satysfakcję. 
      </p>
      
      <p>ANio powstało na bazie wieloletniego doświadczenia,
      jednak wciąż nieustannie poszerzamy swoje
      umiejętności i eksperymentujemy z nowymi smakami i kształtami. Stawiamy na
      innowacyjność i twórcze podejście, aby zaskakiwać naszych klientów
      oryginalnymi i nietuzinkowymi projektami. Chcemy dzielić się naszą miłością do słodkości z
      każdym, kto pragnie delektować się niezwykłymi smakami i pięknem naszych
      wyrobów cukierniczych. Dołącz do naszej podróży kulinarnej i pozwól nam
      stworzyć dla Ciebie coś wyjątkowego.
      </p>
        
        
        
        </Col>
        <Col>
        <img src={aboutImg} className="--aboutImg" alt="About Image"></img>
        </Col>
      </Row>
      
    </Container>  
    
    </section>
  );
}
