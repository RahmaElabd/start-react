import React from 'react';
import './about.css';

export default function About() {
  return <>
  
      <div className="about py-5">
        <div className="container py-5">
        <div className="content position-relative pb-4">
              <h2 className='text-center fw-bold text-white'>ABOUT</h2>
              <i className=' fas fa-star fa-2xl text-white position-absolute start-50 translate-middle-x'></i>

              <div className="line1 position-absolute start-50 translate-middle-x bottom-0 bg-white rounded-4"></div>
              <div className="line2 position-absolute start-50 bottom-0  translate-middle-x"></div>
            </div>
            <div className="about-content mt-5 w-75 mx-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="child">
                      <p className=' lh-lg fs-5 text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className=' lh-lg fs-5 text-white' >You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>

                  </div>
                </div>
            </div>
        </div>
      </div>
  
  
  </>
}
