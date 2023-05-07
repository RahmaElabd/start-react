import React from 'react';
import './footer.css';
// import { Link } from 'react-router-dom';

export default function Footer() {
  return<>
            {/* start footer  */}
            <footer className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <h3 className="text-white fw-bold text-center mb-3">LOCATION</h3>
                    <p className="text-center text-white fs-5 px-5">2215 John Daniel Drive Clark, MO 65243</p>
                  </div>
                  <div className="col-md-4">
                    <h3 className="text-white fw-bold text-center">AROUND THE WEB</h3>
                    <div className="icons my-4 text-center">
                        <i className=" fa-brands  fa-facebook-f me-2 btn btn-outline-light fa-xl rounded-circle  text-white "></i>
                        <i className=" fa-brands fa-twitter me-2 fa-xl btn btn-outline-light  rounded-circle  text-white "></i>
                        <i className=" fa-brands fa-linkedin-in me-2 fa-xl btn btn-outline-light  rounded-circle  text-white "></i>
                        <i className=" fa-brands fa-google me-2 fa-xl btn btn-outline-light  rounded-circle  text-white "></i>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className='text-white text-center fw-bold mb-3'>ABOUT FREELANCER</h3>
                    <p className='text-center text-white fs-5  lh-2 px-3'>Freelance is a free to use, MIT licensed Bootstrap theme created 2023 by Eng / Mohamed Elbana</p>
                  </div>
                </div>
              </div>
            </footer>
          {/* start footer  */}
  
  
  
  
  </>
}
