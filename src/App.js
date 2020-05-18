import React from "react";
import { Router, navigate } from "@reach/router";
import "bootstrap/scss/bootstrap.scss";
import firebase from "./Firebase";
//Files
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Register from "./Register";
import Login from "./Login";
//Styles
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      username: null,
      userID: null,
      todos: "",
      countTodos: null,
    };
  }
  //Whenever page reloads rriggers this method.
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({
          user: user,
          username: user.displayName,
          userID: user.uid,
        });

        const todoRef = firebase.database().ref("todo/" + user.uid);
        todoRef.on("value", (snapshot) => {
          const todos = snapshot.val();
          const todoList = [];
          for (let item in todos) {
            todoList.push({
              todoID: item,
              todo: todos[item].todo,
            });
          }
          this.setState({
            todos: todoList,
            countTodos: todoList.length,
          });
        });
      } else {
        // No user is signed in.
        this.setState({ user: null });
      }
    });
  }
  logoutUser = (e) => {
    e.preventDefault();
    this.setState({
      user: null,
      username: null,
      userID: null,
    });
    firebase.auth().signOut();
    navigate("/");
  };
  registerUsername = (username) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.info("User is fetched");
        user
          .updateProfile({
            displayName: username,
            // photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
          .then(() => {
            this.setState({
              user: user,
              username: user.displayName,
              userID: user.uid,
            });
            navigate("/");
          })
          .catch((err) => console.info(`error while setting state ${err}`));
      } else {
        console.info("User is not fetched");
      }
    });
  };
  addTodo = (todo) => {
    console.info(`In the todo function biatchhh ${todo}`);
    const ref = firebase.database().ref(`todo/${this.state.user.uid}`);
    ref.push({ todo });
  };
  render() {
    return (
      <>
        <Navigation logoutUser={this.logoutUser} user={this.state.user} />
        <Router>
          <Home
            path="/"
            user={this.state.username}
            addTodo={this.addTodo}
            todos={this.state.todos}
          />
          <About path="/about" />
          <Contact path="/contact" />
          <Register path="/register" registerUsername={this.registerUsername} />
          <Login path="/login" />
        </Router>
      </>
    );
  }
}

export default App;
