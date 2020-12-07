import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <div className='titel-menu my-5'>
              <h2>
                <span>C</span>
                ontact Us
              </h2>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <form name='sentMessage' id='contactForm' noValidate=''>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Your Name'
                      id='name'
                      required=''
                      data-validation-required-message='Please enter your name.'
                      aria-invalid='false'
                    />
                    <p className='help-block text-danger'></p>
                  </div>

                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Your Email *'
                      id='email'
                      required=''
                      data-validation-required-message='Please enter your email address.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>

                  <div className='form-group'>
                    <input
                      type='tel'
                      className='form-control'
                      placeholder='Your Phone *'
                      id='phone'
                      required=''
                      data-validation-required-message='Please enter your phone number.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      placeholder='Your Message *'
                      id='message'
                      required=''
                      data-validation-required-message='Please enter a message.'
                      aria-invalid='false'></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='clearfix'></div>
                <div className='col-lg-12 text-center'>
                  <div id='success'></div>
                  <button type='submit' className='contactbtn btn-xl'>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
