import React from "react";
import "./Titelsec.css";

const Titelsec = ({ titel, letter }) => {
  return (
    <div className='titel-menu'>
      <h2>
        <span>{letter}</span>
        {titel}
      </h2>
    </div>
  );
};

export default Titelsec;
