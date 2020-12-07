import React, { useEffect, useState } from "react";
import "./Cover.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const Cover = ({ onsubmit, value, onchange }) => {
  /*
  <form onSubmit={getSearch} className='Search-form'>
        <input
          className='Search-bar'
          type='text'
          placeholder='Find a Recipe. Ex: Chiken Tikka, Picadillo Tacos'
          value={search}
          onChange={updatechange}
        />
        <button className='Search-button' type='submit'>
          Search
        </button>
      </form>

  */
  /*
  const APP_ID = "c17facff";
  const APP_KEY = "f8292451b8e367b3203fdc9c5a42df3e";

  //const ExampleReqest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // create state

  //const [counter, setCounter] = useState(0);

  const [recipes, setRecipescover] = useState([]);
  const [search2, setSearch2] = useState("");
  const [sub2, setSub2] = useState("soda");

  useEffect(() => {
    getRecipescover();
  }, [sub2]);

  const getRecipescover = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${sub2}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipescover(data.hits);
    console.log(data.hits);
  };

  const updatechange2 = (e) => {
    setSearch2(e.target.value);
  };

  const getSearch2 = (e) => {
    e.preventDefault();
    setSub2(search2);
    setSearch2("");
  };
  */

  function gotomenu() {
    window.location.href = "#searchsection";
  }
  return (
    <section className='cover overlay' id='home'>
      <div className='content'>
        <div>
          <form onSubmit={onsubmit} className='boxform Search-form2'>
            <div className='search'>
              <input
                type='text'
                className='form-control input-sm Search-bar2'
                maxLength='64'
                placeholder='Find a Recipe. Ex: Chiken'
                value={value}
                onChange={onchange}
              />
              <button
                onClick={gotomenu}
                type='submit'
                className='btn1 Search-button2'>
                <BsSearch className='iconser' />
              </button>
            </div>
          </form>
        </div>

        <h2> Alwayes Choose Good</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          necessitatibus amet quia unde sunt odit, officiis doloribus commodi,
          esse, in ipsa doloremque obcaecati quam? Numquam fugiat delectus et
          odio quo.
        </p>
        <a href='#menu' className='btn'>
          Our Menu
        </a>
      </div>
    </section>
  );
};

export default Cover;
