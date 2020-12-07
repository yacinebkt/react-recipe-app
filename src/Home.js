import React, { useEffect, useState } from "react";

import Menus from "./componsnts/Menus";

import Header02 from "./componsnts/Header02";
import Cover from "./componsnts/Cover";

import Slider from "react-slick";

import "./App.css";
import About from "./componsnts/About";
import Titelsec from "./componsnts/Titelsec";
import Experts from "./componsnts/Experts";
import experti1 from "./componsnts/img02/cheff01.jpg";
import experti2 from "./componsnts/img02/cheff04.jpg";
import experti3 from "./componsnts/img02/cheff03.jpg";

import Contact from "./componsnts/Contact";

import Footer from "./componsnts/Footer";

function Home() {
  const APP_ID = "c17facff";
  const APP_KEY = "f8292451b8e367b3203fdc9c5a42df3e";

  //const ExampleReqest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // create state

  //const [counter, setCounter] = useState(0);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [sub, setSub] = useState("");

  // start work

  // Lunch
  const [recipesdiner, setRecipesdiner] = useState([]);
  const [sub2, setSub2] = useState("Lunch");

  const getRecipes2 = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${sub2}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipesdiner(data.hits);
  };

  //Dinner

  const [recipesdiner3, setRecipesdiner3] = useState([]);
  const [sub3, setSub3] = useState("dinner");

  const getRecipes3 = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${sub3}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipesdiner3(data.hits);
  };

  //Dessert

  const [recipesdiner4, setRecipesdiner4] = useState([]);
  const [sub4, setSub4] = useState("dessert");

  const getRecipes4 = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${sub4}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipesdiner4(data.hits);
  };

  // end work

  // , [] for not repeat the request every seconds / only when the page is refreshed

  useEffect(() => {
    getRecipes();
    getRecipes2();
    getRecipes3();
    getRecipes4();
  }, [sub]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${sub}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updatechange = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setSub(search);
    setSearch("");
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    /* adaptiveHeight: true,*/
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  /**
    <Navtop />
      <Navbar />

   */

  return (
    <div className='Home'>
      <Cover onsubmit={getSearch} value={search} onchange={updatechange} />

      <Header02 />
      <About />

      <div className='Menusback Menumargin' id='menu'>
        <Titelsec titel='Ur Menus' letter='O' />
        <div className='Menuswid  searcera'>
          <div className='categorie-name'>
            <h2>lunch recipes</h2>
          </div>
          <Slider className='slide' {...settings}>
            {recipesdiner.map((element) => (
              // <Recipes
              <Menus
                key={Math.random() * 10}
                titel={element.recipe.label}
                calories={element.recipe.calories}
                image={element.recipe.image}
                ingredients={element.recipe.ingredients}
              />
            ))}
          </Slider>
          <br /> <br />
        </div>

        <div className='Menuswid'>
          <div className='categorie-name'>
            <h2>dinner recipes</h2>
          </div>
          <Slider className='slide' {...settings}>
            {recipesdiner3.map((element) => (
              // <Recipes
              <Menus
                key={Math.random() * 10}
                titel={element.recipe.label}
                calories={element.recipe.calories}
                image={element.recipe.image}
                ingredients={element.recipe.ingredients}
              />
            ))}
          </Slider>
          <br /> <br />
        </div>

        <div className='Menuswid'>
          <div className='categorie-name'>
            <h2>Dessert Recipes</h2>
          </div>
          <Slider className='slide' {...settings}>
            {recipesdiner4.map((element) => (
              // <Recipes
              <Menus
                key={Math.random() * 10}
                titel={element.recipe.label}
                calories={element.recipe.calories}
                image={element.recipe.image}
                ingredients={element.recipe.ingredients}
              />
            ))}
          </Slider>
          <br /> <br />
        </div>
      </div>

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

      <div id='searchsection' className='Menusback Menumargin'>
        <Titelsec titel='earch' letter='S' />
        <div className='Menuswid '>
          <div className='categorie-name'>
            <h2>Resault</h2>
          </div>
          <Slider className='slide' {...settings}>
            {recipes.map((element) => (
              // <Recipes
              <Menus
                key={Math.random() * 10}
                titel={element.recipe.label}
                calories={element.recipe.calories}
                image={element.recipe.image}
                ingredients={element.recipe.ingredients}
              />
            ))}
          </Slider>
          <br /> <br />
        </div>
      </div>

      <div className='expertwid Menumargin ' id='expert'>
        <Titelsec titel='Ur Experts' letter='O' />

        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 flex-expert expert-items '>
          <Experts titel='Chef Br-02' image={experti1} />
          <Experts titel='Chef Mm2' image={experti2} />
          <Experts titel='Chef ft-A2' image={experti3} />
        </div>
      </div>

      <div className='contact-section'>
        <Contact />
      </div>

      <div className='footer-section'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
