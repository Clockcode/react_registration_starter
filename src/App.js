import React from "react";
import { Router } from "@reach/router";
import "bootstrap/scss/bootstrap.scss";
import firebase from "./Firebase";
//Files
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Form from "./Form";
//Styles
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  //Whenever page reloads rriggers this method.
  componentDidMount() {
    let ref = firebase.database().ref("user");
    ref.on("value", (snapshot) => {
      let snapUser = snapshot.val();
      this.setState({ user: snapUser });
    });
  }
  render() {
    return (
      <>
        <Navigation />
        <Router>
          <Home path="/" user={this.state.user} />
          <About path="/about" />
          <Contact path="/contact" />
          <Form path="/form" />
        </Router>
      </>
    );
  }
}

export default App;
