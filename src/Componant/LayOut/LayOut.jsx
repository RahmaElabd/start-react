import React from 'react'
import NavBar from './../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import './LayOut.css';
import Footer from './../Footer/Footer';

export default function LayOut() {
  return <>
    <div className="layout w-100 vh-100">
      <NavBar/>
      <Outlet></Outlet>
      <Footer/>
    </div>

  
  </>
}
