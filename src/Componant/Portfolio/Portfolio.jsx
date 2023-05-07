import React, { useState } from "react";
import img1 from "./imgs/cabin.png";
import img2 from "./imgs/cake.png";
import img3 from "./imgs/circus.png";
import img4 from "./imgs/game.png";
import img5 from "./imgs/safe.png";
import img6 from "./imgs/submarine.png";
import "./portfolio.css";
// e.target.getAttribute("data-name")
export default function Portfolio() {
  let [ nameHeader , setName] = useState("");
  let [ img , setImg] = useState("");
  let showDetails = (e)=>{
  setName(e.target.getAttribute("data-name"));
  setImg(e.target.previousSibling.getAttribute("src"));
  
}
  return (
    <>
      <div className="portfolio position-relative w-100 bg-white py-5">
        <div className="container mt-5">

          <div className="content position-relative pb-4 mb-5 ">
            <h2 className=" text-center fw-bold">PORTFOLIO</h2>
            <i className=" fas fa-star fa-2xl position-absolute start-50 translate-middle-x"></i>
            <div className="line1 position-absolute start-50 translate-middle-x bottom-0 bg-white rounded-4"></div>
            <div className="line2 position-absolute start-50 bottom-0  translate-middle-x"></div>
          </div>

          <div className="row gy-4">
            <div className="col-md-4">
              <div className="imgs w-100 overflow-hidden position-relative">
                <img src={img1} alt="" className="  w-100 rounded-4"/>
                <div onClick={showDetails} data-name= "LOG CABIN"  data-bs-toggle="modal" data-bs-target="#exampleModal" className="overLay d-flex rounded-4 justify-content-center align-items-center position-absolute start-0 end-0 top-0 bottom-0">
                  <i className=" fas fa-plus fw-bold fa-2x text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="imgs w-100 overflow-hidden position-relative">
                <img src={img2} alt="" className="  w-100 rounded-4" />
                <div onClick={showDetails} data-name= "TASTY CAKE"  data-bs-toggle="modal" data-bs-target="#exampleModal" className="overLay d-flex rounded-4 justify-content-center align-items-center position-absolute start-0 end-0 top-0 bottom-0">
                  <i className=" fas fa-plus fw-bold fa-2x text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="imgs w-100 overflow-hidden position-relative">
                <img src={img3} alt="" className="  w-100 rounded-4" />
                <div onClick={showDetails} data-name= "CIRCUS TENT"  data-bs-toggle="modal" data-bs-target="#exampleModal" className="overLay d-flex rounded-4 justify-content-center align-items-center position-absolute start-0 end-0 top-0 bottom-0">
                  <i className=" fas fa-plus fw-bold fa-2x text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="imgs w-100 overflow-hidden position-relative">
                <img src={img4} alt="" className="  w-100 rounded-4" />
                <div onClick={showDetails} data-name= "CONTROLLER" data-bs-toggle="modal" data-bs-target="#exampleModal" className="overLay d-flex rounded-4 justify-content-center align-items-center position-absolute start-0 end-0 top-0 bottom-0">
                  <i className=" fas fa-plus fw-bold fa-2x text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="imgs w-100 overflow-hidden position-relative">
                <img src={img5} alt="" className="  w-100 rounded-4" />
                <div onClick={showDetails} data-name= "LOCKED SAFE" data-bs-toggle="modal" data-bs-target="#exampleModal" className="overLay d-flex rounded-4 justify-content-center align-items-center position-absolute start-0 end-0 top-0 bottom-0">
                  <i className=" fas fa-plus fw-bold fa-2x text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="imgs w-100 overflow-hidden position-relative">
                <img src={img6} alt="" className="  w-100 rounded-4" />
                <div onClick={showDetails} data-name= "SUBMARINE" data-bs-toggle="modal" data-bs-target="#exampleModal" className="overLay d-flex rounded-4 justify-content-center align-items-center position-absolute start-0 end-0 top-0 bottom-0">
                  <i className=" fas fa-plus fw-bold fa-2x text-white"></i>
                </div>
              </div>
            </div>
          </div>

          {/* start modal  */}
            {/*  Modal  */}
            <div className="modal fade modal-dialog-scrollable min-vh-100" id="exampleModal" tabndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

              <div className="modal-dialog mw-100 w-75">

                <div className="modal-content">

                  {/* header  */}
                  <div className="modal-header">

                    <div className="content position-relative pb-4 my-3 ">
                      <h1 className="modal-title text-center fw-bold" id="exampleModalLabel">{nameHeader}</h1>
                      <i className=" fas fa-star fa-2xl position-absolute start-50 translate-middle-x"></i>
                      <div className="line1 position-absolute start-50 translate-middle-x bottom-0 bg-white rounded-4"></div>
                      <div className="line2 position-absolute start-50 bottom-0  translate-middle-x"></div>
                    </div>
                    <button type="button" className=" close bg-transparent position-absolute w-0 h-0" data-bs-dismiss="modal" aria-label="Close">
                      <i className="fas fa-close fa-3x fw-bold"></i>
                    </button>
                  </div>
                  {/* body  */}
                  <div className="modal-body">
                    <div className="img-body w-75 m-auto d-flex justify-content-center">
                      <img className=" rounded-4 w-100" src={img} alt="" />
                    </div>
                    <div className="myP w-75 m-auto my-5">
                      <p className="text-center lh-2"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident libero ipsum sapiente quo, consectetur perferendis non sit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic praesentium ipsum consequuntur fuga ducimus saepe recusandae illo atque alias eos! Quae, soluta aut nihil temporibus eligendi, quas modi commodi dolorum fugiat nam odit.</p>
                    </div>
                  </div>
                  {/* footer  */}
                  <div className="modal-footer mb-5 d-flex justify-content-center">
                    <button type="button" class="btn d-flex align-items-center" data-bs-dismiss="modal">
                      <i className="fas fa-close fa-1x me-2 fw-bold"></i>
                       Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/* end modal  */}
        </div>
      </div>
    </>
  );
}




