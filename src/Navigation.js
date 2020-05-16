import React, { Component } from "react";
import "bootstrap/scss/bootstrap.scss";
import { Link } from "@reach/router";
class Navigation extends Component {
  render() {
    let { logoutUser, user } = this.props;
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
            </ul>
            <ul class="navbar-nav ml-auto">
              {user ? (
                <li className="nav-item p-1 ml-1 justify-content-end mr-auto">
                  <Link
                    className="nav-link text-white"
                    to="/"
                    onClick={(e) => logoutUser(e)}
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item p-1 ml-1 justify-content-end mr-auto">
                    <Link className="nav-link text-white" to="/register">
                      Register
                    </Link>
                  </li>

                  <li className="nav-item p-1 ml-1 justify-content-end mr-auto">
                    <Link
                      className="nav-link text-white"
                      to="/login"
                      // onClick={(e) => logoutUser(e)}
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
