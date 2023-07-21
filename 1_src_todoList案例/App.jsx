import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    todos: [
      { id: "01", name: "吃饭", done: true },
      { id: "02", name: "睡觉", done: false },
      { id: "03", name: "coding", done: false },
    ],
  };

  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };

  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done };
      } else {
        return todoObj;
      }
    });
    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    this.setState({ todos: newTodos });
  };

  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      // return todoObj.done === false;
      return !todoObj.done;
    });
    this.setState({ todos: newTodos });
  };
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          ></List>
          <Footer
            todos={this.state.todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          ></Footer>
        </div>
      </div>
    );
  }
}
