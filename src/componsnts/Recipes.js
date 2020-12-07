import React from "react";
import "./recipes.css";

const Recipes = ({ titel, calories, image, ingredients }) => {
  return (
    <div className='recipeelem'>
      <h1>{titel} </h1>
      <p> {calories}</p>
      <img className='image' src={image} alt='' />
      <ul>
        {ingredients.map((ingredients) => (
          <li>{ingredients.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
