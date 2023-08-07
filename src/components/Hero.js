import React from "react";
import "../style.css";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Hero1 from "../images/Hero.jpg";
import Hero2 from "../images/Hero2.jpg";
import Hero3 from "../images/Hero3.jpg";

export default function Hero() {
  return (
    <section className="heroSection">
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={Hero1} alt="ANio Chocolate" />
            <Carousel.Caption className="mx-auto">
              <div className="slideContent">
                <h1 className="heroH1 anioFont">ANio</h1>
                <p className="heroP">Pracownia czekolady</p>
                <Button className="heroBtn" variant="outline-light" href="#offer">ZAPRASZAMY</Button>{' '}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={Hero2} alt="Second slide" />
            <Carousel.Caption className="top-0 mt-4">
              <div className="slideContent">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={Hero3} alt="Third slide" />
            <Carousel.Caption className="top-0 mt-4">
              <div className="slideContent">
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
