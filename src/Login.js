import React, { Component } from "react";
import { navigate } from "@reach/router";
import firebase from "./Firebase";
export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errorMessage: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    let itemName = event.target.name;
    let itemValue = event.target.value;
    this.setState({
      [itemName]: itemValue,
    });
  };

  handleSubmit = (event) => {
    const submittedFormInfo = {
      email: this.state.email,
      password: this.state.password,
    };
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(
        submittedFormInfo.email,
        submittedFormInfo.password
      )
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        error.message
          ? this.setState({ errorMessage: error.message })
          : this.setState({ errorMessage: null });
      });
  };

  render() {
    return (
      <div className="column">
        <div className="row mx-auto justify-content-center my-4 col-12">
          <h1 className="text-primary font-weight-bold text-align-center">
            Login
          </h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-control-sm col-10 my-2 mx-3 px-1"
              onChange={this.handleChange}
              value={this.state.username}
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="form-control-sm col-10 my-2 mx-3 px-1"
              onChange={this.handleChange}
              value={this.state.password}
            ></input>
            <div className="alert-danger col-10">{this.errorMessage}</div>
            <button className="col-10 btn btn-outline-info my-2 mx-3">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
