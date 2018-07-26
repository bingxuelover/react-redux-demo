import { connect } from "react-redux"
import List from '../components/List';

const mapStateToProps = (state) => {
  return { messages: state }
};

const ListShow = connect(mapStateToProps)(List);

export default ListShow;
