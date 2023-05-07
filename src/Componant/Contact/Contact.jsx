import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact py-5">
        <div className="container mt-5">
          <div className="content position-relative pb-4 mb-5">
            <h2 className=" text-center fw-bold">CONTACT ME</h2>
            <i className=' fas fa-star fa-2xl position-absolute start-50 translate-middle-x'></i>
            <div className="line1 position-absolute start-50 translate-middle-x bottom-0  rounded-4"></div>
            <div className="line2 position-absolute start-50 bottom-0  translate-middle-x"></div>
          </div>
          <div className="row">
            <div className="frm w-75 mx-auto">
              <div className="form-group py-4">
                <label className="" htmlFor="name">Name</label>
                <input type="text" id="name" onChange={hideLabel}  placeholder="Name" className="form-control fs-4"/>
              </div>
              <div className="form-group py-4">
                <label className="" htmlFor="email">Email</label>
                <input type="text" id="email" onChange={hideLabel}  placeholder="Email Address" className="form-control fs-4"/>
              </div>
              <div className="form-group py-4">
                <label className="" htmlFor="phone">Phone</label>
                <input type="text" id="phone" onChange={hideLabel}  placeholder="Phone Number" className="form-control fs-4"/>
              </div>
              <div className="form-group py-4">
                <label className="" htmlFor="msg">Message</label>
                <textarea name="" id="msg" onChange={hideLabel} cols="30" rows="4" placeholder="Message" className="form-control fs-4"></textarea>
              </div>
              <div className="btns py-4">
                <button className="btn py-3 px-4 text-white fs-5">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );


  function hideLabel(){
      document.querySelectorAll(".contact .form-group input , .contact .form-group textarea ").forEach((inpt)=>{
        console.log(inpt);
          if(inpt.value.length > 0){
            document.querySelectorAll(".contact .form-group label").forEach((e)=>{
              console.log(e);
              if(inpt.getAttribute("id") === e.getAttribute("for")){
                console.log(e);
                e.classList.add("target");
              } 
            });
          }else{
            document.querySelectorAll(".contact .form-group label").forEach((e)=>{
              if(inpt.getAttribute("id") === e.getAttribute("for")){
                e.classList.remove("target");
              } 
            });
          }
        })
  }

}
