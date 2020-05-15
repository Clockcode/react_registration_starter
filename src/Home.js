import React, { Component } from "react";
import "bootstrap/scss/bootstrap.scss";
import { BsSearch } from "react-icons/bs";
class Home extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="text-center align-self-center p-4 mx-auto">
        <h1>Welcome {user !== null && user}</h1>
        <div>
          <input type="text" placeholder="Ask for a topic"></input>
          <button>
            <BsSearch />
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
