import React from "react";
import "./Footer.css";

import footerlogo from "./img02/yamiilogo.png";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='px-5 pt-5' id='footerbody'>
      <footer className='row align-items-center justify-content-center'>
        <div className='col-md-3 pb-5' id='Contact'>
          <div className='logo-gahtani'>
            <a className='logo-gahtani-img ' href='#'>
              <img
                className=''
                src={footerlogo}
                width='60%'
                alt=''
                loading='lazy'
              />
            </a>
          </div>
        </div>

        <div className='col-md-3 pb-5 ' id='contact'>
          <h5 className='text-white '>You can reach us at:</h5>

          <ul className='listlinks contact'>
            <li>
              {" "}
              <i className='fa fa-map-marker'></i> Building n ° 177 &amp; 17DJ,
              <br />
              Djelfa - 17000
              <br /> Algeria
            </li>

            <li>
              {" "}
              <i className='fa fa-phone'></i> +213 7-96-11-67-91
            </li>
            <li>
              {" "}
              <i className='fa fa-envelope'></i> Yacinebakhti1mi@gmail.com
            </li>
          </ul>

          <ul className='d-flex social-icons '>
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
            <li>
              <a className='faicon-pinterest rounded-circle' href='#'>
                <FaPinterest />
              </a>
            </li>
          </ul>
        </div>

        <div className='col-md-3 text-white pb-5 '>
          <h5 className='text-white '>
            {" "}
            <a href='' className='text-white'>
              Latest news from our blog{" "}
            </a>
          </h5>

          <ul className='listlinks'>
            <li>
              <a href='' className='text-white'>
                About us
              </a>
            </li>

            <li>
              <a href='' className='text-white'>
                Privacy policy
              </a>
            </li>

            <li>
              <a href='' className='text-white'>
                {" "}
                TermEs & Conditions
              </a>
            </li>

            <li>
              <a href='' className='text-white'>
                {" "}
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        <div className='col-md-3 pb-5 footer-desc4 '>
          <h5 className='text-white '>Subscribe !</h5>

          <div className='input-sent py-5'>
            <input type='email' placeholder='Enter Your Email Address' />
            <a href=''>
              {" "}
              <i className='sent-icon fa fa-paper-plane'></i>
            </a>
          </div>
        </div>
      </footer>

      <div className=' mt-4' id='copyright'>
        <div
          className='d-flex justify-content-center wow shake'
          data-wow-delay='2.1s'>
          <p>
            Copyright &copy; 2020 - All Rights Reserved -{" "}
            <a href=' # '> Yacine-Bakhti</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
