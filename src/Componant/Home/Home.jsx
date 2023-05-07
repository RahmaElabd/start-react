import React from 'react';
import '../../App.css';
import './Home.css';
import img1 from './avataaars.svg';

export default function Home() {
  return <>
      <section className="home w-100 pt-5">
        <div className="imgs mx-auto mt-5">
          <img src={img1} alt=""  className="img-fluid"/>
        </div>
        <div className="content position-relative pb-4">
          <h1 className='mt-4 text-white fw-bolder text-center'>START REACT</h1>
          <i className=' fas fa-star fa-2xl text-white position-absolute start-50 translate-middle-x'></i>
          <div className="line1 position-absolute start-50 translate-middle-x bottom-0 bg-white rounded-4"></div>
          <div className="line2 position-absolute start-50 bottom-0  translate-middle-x"></div>
        </div>
        <p className='text-center my-5 text-white fs-4'>Graphic Artist - Web Designer - Illustrator</p>
      </section>

  </>
}
