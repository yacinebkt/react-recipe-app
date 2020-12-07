import React from "react";
import "./Testrec.css";

const Testrecpice = ({ titel, calories, image, ingredients }) => {
  /**
   
const size = 3;

   */

  return (
    <div className='recipeelem'>
      <div
        className='col  cards-service-item  h-100 wow zoomInRight'
        data-wow-delay='0.6s'>
        <div className='card h-100'>
          <img className='card-img-top' src={image} alt='' />

          <div className='card-body'>
            <h5 className='card-title'> {titel}</h5>
            <p className='card-text'> {calories} </p>

            <ul>
              {ingredients.slice(0, 9).map((ingredients) => (
                <li>{ingredients.text}</li>
              ))}
            </ul>
          </div>

          <div className='card-footer bg-transparent '>
            <button href='#' className='btn btn-danger'>
              Lire la suite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testrecpice;
