import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <>
      <nav className="navbar position-fixed w-100 navbar-expand-lg py-3">
        <div className="container">
          <Link
            className="navbar-brand text-white fs-3 fw-bold"
            onClick={function () {
              document.querySelectorAll("nav ul li a").forEach((el) => {
                el.classList.remove("active");
              });
            }}
            to="/"
          >
            START REACT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars fa-xl text-white"></i>

          </button>
          <div className="collapse navbar-collapse mt-5 mt-md-0" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  onClick={addActive}
                  className="nav-link ps-2 rounded-3 py-3 mx-3 text-white fw-bold"
                  aria-current="page"
                  to="portfolio"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link rounded-3 ps-2 mx-3 py-3 text-white fw-bold"
                  onClick={addActive}
                  to="about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link ps-2 rounded-3 mx-3 py-3 text-white fw-bold"
                  onClick={addActive}
                  to="contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );

  function addActive(e) {
    document.querySelectorAll("nav ul li a").forEach((a) => {
      a.classList.remove("active");
    });
    e.target.classList.add("active");
  }
}
