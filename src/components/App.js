import React, { Component } from 'react';
import Todo from '../containers/TodoAdd';
import List from '../containers/ListShow';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <h2 className="title">Type in a new Message:</h2>
        <Todo />
        <List />
      </div>
    );
  }
}

export default App;
