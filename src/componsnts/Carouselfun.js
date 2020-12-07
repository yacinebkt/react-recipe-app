//import React from "react";

import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./Carousel.css";
import rec2 from "./images/rec1.jpg";
import rec3 from "./images/rec2.jpg";

export default class Carouselfun extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item interval={2500}>
          <img
            className='carouselimage d-block w-100'
            src={rec3}
            alt='First slide'
          />

          <div className='hero flowhero d-flex d-flex flex-row align-items-center justify-content-center p-5'>
            <div className='cenver'>
              <hgroup>
                <h2>Y@Mi recipe </h2>
                <h3>Recipes ideas the you will love</h3>
              </hgroup>
              <br />
              <footer className='footerhero'>
                <a href='#services' className='btn btn-danger btn-lg btn1'>
                  {" "}
                  Commencer
                </a>
              </footer>
            </div>
          </div>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className='carouselimage d-block w-100'
            src={rec3}
            alt='Third slide'
          />

          <div className='hero flowhero d-flex d-flex flex-row align-items-center justify-content-center p-5'>
            <div className='cenver'>
              <hgroup>
                <h2>Y@Mi recipe </h2>
                <h3>Recipes ideas the you will love</h3>
              </hgroup>
              <br />
              <footer className='footerhero'>
                <a href='#services' className='btn btn-danger btn-lg btn1'>
                  {" "}
                  Commencer
                </a>
              </footer>
            </div>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
