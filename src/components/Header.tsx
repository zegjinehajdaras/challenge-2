import logo from "../assets/logo.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
const CreateHeader = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid ">
          <div className="logo">
            <a className="navbar-brand bikelogo" href="#">
              <img src={logo} alt="bikelogo" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item px-5">
                <a className="nav-link active text-uppercase  " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item px-3 ">
                <a className="nav-link text-uppercase" href="#">
                  Bikes
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-uppercase" href="#">
                  Gear
                </a>
              </li>{" "}
              <li className="nav-item px-3">
                <a className="nav-link text-uppercase" href="#">
                  Parts
                </a>
              </li>{" "}
              <li className="nav-item px-3 ">
                <a className="nav-link text-uppercase" href="#">
                  Tires
                </a>
              </li>{" "}
              <li className="nav-item px-3 ">
                <a className="nav-link text-uppercase" href="#">
                  Servis info
                </a>
              </li>{" "}
              <li className="nav-item px-3 ">
                <a className="nav-link text-uppercase" href="#">
                  Catalogue
                </a>
              </li>
              <li className="nav-item px-3 ">
                <a className="nav-link text-uppercase" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="icons d-flex px-5">
            <FontAwesomeIcon icon={faMagnifyingGlass}  className="px-4"/>
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
        </div>
      </nav>
      <hr />
    </div>

  );
};
export default CreateHeader;
