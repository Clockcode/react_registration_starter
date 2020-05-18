import React, { Component } from "react";

export class TodoList extends Component {
  render() {
    const { todoList } = this.props;
    console.info(
      `Burasi todoList componenti aminakodymununccocu seni ${todoList}`
    );
    const myTodoList = todoList.map((todo) => {
      return (
        <div className="list-group-item d-flex" key={todo.todoID}>
          <section className="text-left align-self-center pl-3">
            {todo.todo}
          </section>
        </div>
      );
    });
    return <>{myTodoList}</>;
  }
}

export default TodoList;
