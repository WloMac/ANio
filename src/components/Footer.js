import React, { useRef } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style.css";


export default function Footer(){
    
    return(
        <footer>
        <Row>
            <Col>
            <p className="copyright"> Copyright 2023 <a href='https://wlomac.github.io/React-portfolio/'><span id='greenTxt'>Wmac.webdev</span></a> All Rights Reserved. </p>
            <p className="credits">Thanks to <a href='https://unsplash.com'>Unsplash</a> creators for images. See details <a href='https://github.com/WloMac/ANio#readme'>here</a></p>
            </Col>
        </Row>
        </footer>
    )
}