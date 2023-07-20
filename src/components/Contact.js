import React, { useRef } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from '@emailjs/browser';



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
                <Col>
                    <form className='formContainer' ref={form} onSubmit={sendEmail}>
                        <label>Imię i nazwisko</label>
                        <input type="text" name="user_name" />
                        <label>E-mail</label>
                        <input type="email" name="user_email" />
                        <label>Twoja wiadomość</label>
                        <textarea name="message" />
                        <input type="submit" value="Wyślij" />
                    </form>
                </Col>
            </Row>
        </Container>




    </section>
 );
}