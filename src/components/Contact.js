import React, { useRef } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faMessage, faAt } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook,faSquareInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';







export default function Cantact(){

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pcpyuwa', 'template_twmvbra', form.current, 'FhlLJ06ZMP2-MuzuI')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    };
    return(
    <section className="contact">
        <Container>
            <Row>
                <Col>
                <h1 style={{textAlign:"center"}}>Kontakt</h1><br/>
                </Col>
            </Row>
            <Row>
                <Col className='contactForm'>
                    <form className='formContainer' ref={form} onSubmit={sendEmail}>
                        <label><FontAwesomeIcon icon={faUser}/> Imię i nazwisko</label>
                        <input type="text" name="user_name" placeholder="Jan Kowalski" />
                        <label><FontAwesomeIcon icon={faAt}/> E-mail</label>
                        <input type="email" name="user_email" placeholder="Email@serwis.pl" />
                        <label><FontAwesomeIcon icon={faMessage}/> Twoja wiadomość:</label>
                        <textarea className='contactTextarea' name="message" placeholder="Zacznij pisać..." />
                        <input type="submit" value="Wyślij" />
                    </form>
                </Col>
                <Col className='contactDetails'>
                <h1 className='h1ContactDetails anioFont '>ANio</h1>
                <h2 className='h2ContactDetails'>Pracowania Czekolady</h2>
                <h3 className='h3ContactDetails'>ul. __________</h3>
                <h3 className='h3ContactDetails'>Czarnocin</h3>
                <h3 className='h3ContactDetails'> <FontAwesomeIcon icon={faPhone}/> +48 609 824 429</h3>                
                  <div className="socialIcons">
                    <FontAwesomeIcon icon={faSquareFacebook} /> 
                    <FontAwesomeIcon icon={faSquareInstagram} />  
                    <FontAwesomeIcon icon={faTiktok} /> 
                  </div>

                </Col>
            </Row>
        </Container>




    </section>
 );
}