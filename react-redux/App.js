import React, { Component } from 'react';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import AddTodo from "./containers/AddTodo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListContainer/>
        <AddTodo/>
      </div>
    );
  }
}

export default App;
