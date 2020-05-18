import React, { Component } from "react";
import "bootstrap/scss/bootstrap.scss";
import { BsPlus } from "react-icons/bs";
import TodoList from "./TodoList";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    let itemName = event.target.name;
    let itemValue = event.target.value;
    this.setState({ [itemName]: itemValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.info("In the fucking handlesubmit methoddd!!");
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  };

  render() {
    const { user, todos } = this.props;
    console.info(
      `Burasi home component i bu anasini siktigim de todos ${todos}`
    );
    return (
      <div className="text-center align-self-center p-4 mx-auto">
        <h1 className="mt-4 mb-5 p-2">Welcome {user !== null && user}</h1>
        <form className="p-2" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a Todo"
            name="todo"
            className="form-control-sm"
            value={this.state.todo}
            onChange={this.handleChange}
          ></input>
          <button className="btn btn-success rounded-circle ml-2">
            <BsPlus />
          </button>
        </form>
        <div className="col-11 col-md-6 text-center">
          <div className="card border-top-0">
            {todos && todos.length ? (
              <div className="card-body py-2">
                <h4 className="card-title font-weight-light m-0"> Todo List</h4>
              </div>
            ) : null}
            {todos && (
              <div className="list-group list-group-flush">
                <TodoList todoList={todos} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
