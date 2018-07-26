import PropTypes from 'prop-types';

export const TodoPropTypes = PropTypes.shape({
  submitNewMessage: PropTypes.func
})

export const ListPropTypes = PropTypes.shape({
  messages: PropTypes.array
})
