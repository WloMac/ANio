import React, { useRef } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from '@emailjs/browser';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faMessage, faAt } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook,faSquareInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';







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
    <section className="contact" id='contact'>
        <Container>
            <Row>
                <Col>
                <h1 style={{textAlign:"center"}} className='sectionTitle whiteTxt' >Kontakt</h1><br/>
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
                        <Button variant="outline-light" as="input" type="submit" value="Wyślij" />{' '}
                       
                    </form>
                </Col>
                
                <Col className='contactDetails'>
                <h1 className='h1ContactDetails anioFont '>ANio</h1>
                <h2 className='h2ContactDetails'>Pracowania Czekolady</h2>
                <h3 className='h3ContactDetails'>Główna 154</h3>
                <h3 className='h3ContactDetails'>Czarnocin</h3>
                <h3 className='h3ContactDetails'> <FontAwesomeIcon icon={faPhone}/> +48 609 824 429</h3>                
                  <div className="socialIcons">
                    <a href='https://www.facebook.com/people/ANio/100028283605382/' className="linkStyle" ><FontAwesomeIcon icon={faSquareFacebook} />  </a>
                    <a href='https://www.facebook.com/people/ANio/100028283605382/' className="linkStyle" ><FontAwesomeIcon icon={faSquareInstagram} /> </a>
                    <a href='https://www.facebook.com/people/ANio/100028283605382/' className="linkStyle" ><FontAwesomeIcon icon={faTiktok} /> </a>
                  </div>

                </Col>
            </Row>
            <Row>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9912.73430439774!2d19.671784870725862!3d51.60152486820099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a292f2ec50f8d%3A0xbe13f7bc1929a054!2sG%C5%82%C3%B3wna%20154%2C%2097-318%20Czarnocin%2C%20Poland!5e0!3m2!1sen!2suk!4v1692719545518!5m2!1sen!2suk" width="1600" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Row>
        </Container>




    </section>
 );
}