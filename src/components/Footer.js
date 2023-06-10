import React from "react";
import {FaInstagram, FaEnvelope, FaFacebookSquare} from "react-icons/fa"
import "../style.css";


export default function Footer(){

    return(
        <footer>
        <div className="footerRow">
            <div className="footerLeft">
                <p>ANio</p>
                <p>Artur Nijakowski</p>
                <p>Czarnocin</p>

            </div>
            <div className="footerRight">
                <span>
                <a href="mailto:"></a><FaEnvelope />
                <a href="https://www.facebook.com/p/ANio-100028283605382/"><FaFacebookSquare /></a>
                <FaInstagram />
                </span>
            </div>
        
        </div>
        </footer>
    )
}