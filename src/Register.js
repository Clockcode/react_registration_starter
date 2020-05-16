import React, { Component } from "react";
import firebase from "./Firebase";
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      passwordCheck: "",
      errorMessage: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    let itemName = event.target.name;
    let itemValue = event.target.value;
    this.setState(
      {
        [itemName]: itemValue,
      },
      () => {
        this.state.password !== this.state.passwordCheck
          ? this.setState({ errorMessage: "Passwords Don't match" })
          : this.setState({ errorMessage: null });
      }
    );
  };

  handleSubmit = (event) => {
    const submittedFormInfo = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        submittedFormInfo.email,
        submittedFormInfo.password
      )
      .then(this.props.registerUsername(submittedFormInfo.username))
      .catch((error) => {
        error.message
          ? this.setState({ errorMessage: error.message })
          : this.setState({ errorMessage: null });
      });
  };

  render() {
    const {
      email,
      username,
      password,
      passwordCheck,
      errorMessage,
    } = this.state;
    return (
      <div className="container">
        <div className="row mt-4 bg-gray-600">
          <form className="mx-auto" onSubmit={this.handleSubmit}>
            <h1 className="text-info">Form Page</h1>
            <div className="form-group">
              <label
                className="font-weight-bold p-1 col-form-label"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={email}
                required
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label
                className="font-weight-bold p-1 col-form-label"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="form-control"
                type="text"
                name="username"
                value={username}
                required
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label
                className="font-weight-bold p-1 col-form-label"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={password}
                required
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label
                className="font-weight-bold p-1 col-form-label"
                htmlFor="passwordCheck"
              >
                Password Again
              </label>
              <input
                className="form-control"
                type="password"
                name="passwordCheck"
                value={passwordCheck}
                required
                onChange={this.handleChange}
              ></input>
            </div>
            {errorMessage && (
              <div className="alert-danger p-2 mb-4">{errorMessage}</div>
            )}
            <button className="btn btn-outline-info">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;
