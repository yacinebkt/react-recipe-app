import React from "react";
import "./About.css";
import aboutimg from "./img02/about.jpg";

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='d-flex row  flex-row justify-content-center align-items-center '>
        <div className='col-md-5  py-2 ' id='second-column'>
          <p className='font-xs'>SubTitel.</p>

          <h2 className='page-section-heading text-center text-uppercase text-secondary mb-3'>
            {" "}
            <span>A</span>bout Us
          </h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            delectus vitae fugiat sed laudantium architecto vero? At aperiam
            amet rerum! <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati, necessitatibus?
          </p>
          <p>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            molestiae cupiditate repellat!
          </p>
          <p>Lorem, ipsum dolor.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae
            error, vitae mollitia doloribus dolorem fuga temporibus. Mollitia,
            voluptate quos!
          </p>
          <footer>
            <a href='#'> Lire la suite &raquo;</a>
          </footer>
        </div>

        <div className='col-md-7 p-5 ' id='first-column'>
          <a href='#'>
            <img src={aboutimg} alt='' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
