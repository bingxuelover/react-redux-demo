import React, { Component } from 'react';
import { TodoPropTypes } from '../utils/PropTypes';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage = () => {
    this.props.submitNewMessage(this.state.input)
    this.setState({
      input: '',
    });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.handleChange}/> 
        <button onClick={this.submitMessage}>Submit</button>
      </div>
    );
  }
}

Todo.propTypes = TodoPropTypes;

export default Todo;
