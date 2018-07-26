import React, { Component } from 'react';
import { ListPropTypes } from '../utils/PropTypes';

class List extends Component {

  render() {
    return (
      <ul>
        {this.props.messages.map( (message, idx) => {
            return (
               <li key={idx}>{message}</li>
            )
          })
        }
      </ul>
    );
  }
}

List.propTypes = ListPropTypes

export default List;
