import React, { Component } from "react";
import Item from "../Item";
import PropType from "prop-types";
import "./index.css";

export default class List extends Component {
  static propTypes = {
    todos: PropType.array.isRequired,
    updateTodo: PropType.func.isRequired,
    deleteTodo: PropType.func.isRequired,
  };

  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            ></Item>
          );
        })}
      </ul>
    );
  }
}
