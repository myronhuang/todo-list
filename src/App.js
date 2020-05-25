import React, { Component } from 'react';
import TodoList from './TodoList.js';
import './App.css';

class App extends Component {
  render() {

    const date = new Date();
    const today = date.toLocaleString('default', {weekday: 'long', month: 'long', day: 'numeric'});

    return (
      <div className="App">
        <p className="today">{today}</p>
        <TodoList />
      </div>
    )
  }
}

export default App;
