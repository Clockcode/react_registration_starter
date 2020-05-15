import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      passwordCheck: "",
    };
  }
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handlePasswordCheck = (event) => {
    this.setState({
      passwordCheck: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert();
  };

  render() {
    const { email, username, password, passwordCheck } = this.state;
    return (
      <form className="mx-auto mt-4">
        <div className="container">
          <div className="row justify-content-center">
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
                onChange={this.handleEmail}
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
                onChange={this.handleUsername}
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
                onChange={this.handlePassword}
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
                onChange={this.handlePasswordCheck}
              ></input>
            </div>
            <button
              onSubmit={this.handleSubmit}
              className="btn btn-outline-info"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default Form;
