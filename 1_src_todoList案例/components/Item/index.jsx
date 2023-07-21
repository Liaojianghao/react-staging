import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = {
    mouse: false,
  };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked);
    };
  };

  handleDelete = (id) => {
    if (window.confirm("确定删除吗？")) {
      this.props.deleteTodo(id);
    }
  };
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;

    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "#fff" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheck(id)}
            checked={done}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => this.handleDelete(id)}
          style={{ display: mouse ? "block" : "none" }}
          className="btn btn-danger"
        >
          删除
        </button>
      </li>
    );
  }
}
