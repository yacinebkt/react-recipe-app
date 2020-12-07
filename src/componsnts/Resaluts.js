import React from "react";
import "./Resaluts.css";
import { useState, useEffect } from "react";

const Resaluts = () => {
  return (
    <Col className='resaluts-item mt-5'>
      <Card className='resaluts-border-item p-3'>
        <Card.Img className='resaluts-img-box ' src={image} alt='' />

        <Card.Body className='resaluts-content'>
          <h3 className='expert-titel'>
            <a href='#'> {titel} </a>
          </h3>
          <p className=' '> Lorem amet consectetur!</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Resaluts;
