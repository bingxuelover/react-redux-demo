import { connect } from "react-redux"
import { addMessage } from '../actions/actions';
import Todo from '../components/Todo';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const TodoShow = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoShow;
