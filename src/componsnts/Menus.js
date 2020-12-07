import React from "react";
import "./Menus.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Container, Row, Col } from "react-bootstrap";

const Menus = ({ titel, calories, image, ingredients }) => {
  //<img className="rounded-circle " src="img/bakhti logo.png" />
  /*Variant='top' */
  return (
    <Col className='colhieght'>
      <Card className='card'>
        <Card.Img className='card-img-top' src={image} alt='' />

        <Card.Body className='height'>
          <h3 className='menu-titel'>
            <a href='#'> {titel} </a>
          </h3>

          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card.Body>

        <Card.Footer className='card-footer'>
          <button className='btn d-flex flex-row justify-content-center'>
            <a href='#'> See more !</a>
          </button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Menus;
