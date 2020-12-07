import React from "react";
import "./Titel.css";

const Titel = ({ titelheader }) => {
  return (
    <div className='Aligner mt-2'>
      <div className='Aligner-item  my-5 px-5'>
        <h3 className='text-center name-rest'>{titelheader}</h3>
      </div>
    </div>
  );
};

export default Titel;
