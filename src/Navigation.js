import React, { Component } from "react";
import "bootstrap/scss/bootstrap.scss";
import { Link } from "@reach/router";
class Navigation extends Component {
  render() {
    return (
      <div className="column">
        <div className="row">
          <nav className="navbar navbar-expand col-12 bg-info">
            <ul className="navbar-nav ">
              <li className="nav-item p-1 ml-1 ">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item p-1 ml-1 ">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item p-1 ml-1 ">
                <Link className="nav-link text-white" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item p-1 ml-1 ">
                <Link className="nav-link text-white" to="/form">
                  Form
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
