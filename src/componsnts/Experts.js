import React from "react";

import "./Experts.css";
import { Card, Container, Row, Col } from "react-bootstrap";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Experts = ({ titel, image }) => {
  /* Variant='top' */
  return (
    <Col className='expert-item mt-5'>
      <Card className='expert-border-item p-3'>
        <Card.Img className='expert-img-box ' src={image} alt='' />

        <Card.Body className='expert-content'>
          <h3 className='expert-titel'>
            <a href='#'> {titel} </a>
          </h3>
          <p className=' '> Lorem amet consectetur!</p>
        </Card.Body>

        <ul className='expert-social'>
          <li>
            <a className='faicon-facebook rounded-circle' href='#'>
              <FaFacebook />
            </a>
          </li>

          <li>
            <a className='faicon-twitter rounded-circle' href='#'>
              <FaTwitter />
            </a>
          </li>

          <li>
            <a className='faicon-instagram rounded-circle' href='#'>
              <FaInstagram />
            </a>
          </li>

          <li>
            <a className='faicon-linkedin rounded-circle' href='#'>
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </Card>
    </Col>
  );
};

export default Experts;
