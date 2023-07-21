import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked);
  };
  handleClearAll = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todos } = this.props;
    const doneTotal = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneTotal === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{doneTotal}</span>/ 全部{total}
        </span>
        <button onClick={this.handleClearAll} className="btn btn-danger">
          清除已完成的任务
        </button>
      </div>
    );
  }
}
