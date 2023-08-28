import React, { useRef } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "../style.css";


export default function Footer(){
    
    return(
        <footer>
        <Row>
            <Col>
            <ul>            
                <li><Nav.Link href="#offer">Oferta</Nav.Link></li>
                <li><Nav.Link href="#about">O nas</Nav.Link></li>
                <li><Nav.Link href="#rel">Realizacje</Nav.Link></li>
                <li><Nav.Link href="#contact">Kontakt</Nav.Link></li>           
            </ul>
            <vl></vl>
            </Col>
        </Row>
        </footer>
    )
}