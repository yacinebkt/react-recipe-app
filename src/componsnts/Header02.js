import React from "react";
import "./Header02.css";
import { BsSearch } from "react-icons/bs";

const Header02 = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".headersc");
    header.classList.toggle("fixednav", window.scrollY > 0);
  });

  //

  // Toggle NavBar
  const navigation = document.querySelector(".navigation");

  function toggelmenu() {
    const togllem = document.querySelector(".toggel");
    togllem.classList.toggle("active");

    navigation.classList.toggle("active");

    /*navigation.stopPropagation(); */ // This is the preferred method.
  }

  // close hamburger menu after click a

  const elements = document.querySelectorAll(".navigation li a");

  elements.forEach((a) => {
    a.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  });

  //

  return (
    <header className='headersc'>
      <a href='#' className='logo'>
        Yamii <span>.</span>
      </a>

      <div className='toggel' onClick={toggelmenu}></div>

      <ul className='navigation'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#menu'>Menu</a>
        </li>

        <li>
          <a href='#expert'>Expert</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header02;
