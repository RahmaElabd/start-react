import React from 'react'
import { createHashRouter, RouterProvider } from "react-router-dom";
import NotFound from './Componant/NotFound/NotFound';
import Portfolio from './Componant/Portfolio/Portfolio';
import About from './Componant/About/About';
import Contact from './Componant/Contact/Contact';
import Home from './Componant/Home/Home';
import LayOut from './Componant/LayOut/LayOut';

const routres = createHashRouter([
  {path:"/" , element: <LayOut act = {Active} /> , children:[
    {index:true , element:<Home/>},
    {path:"portfolio" , element:<Portfolio/>},
    {path:"about" , element:<About/>},
    {path:"contact" , element:<Contact/>},
    {path:"*" , element: <NotFound/>}
  ]}

]);
export default function App() {
  return <>
    
    <RouterProvider router={routres}/>
  
  </>
}


function Active(ele){
  console.log(document.querySelectorAll("nav ul li a"));;

}

Active()




