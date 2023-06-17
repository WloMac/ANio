import React from "react";
import "../style.css";
import HeroImage from "../images/Hero22.jpg"
import Image from 'react-bootstrap/Image';

export default function Hero(){
    return( 
        <section>
             <Image src={HeroImage} fluid />;
            
        </section>

    );

}