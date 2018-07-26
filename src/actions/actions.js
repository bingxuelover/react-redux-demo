import { ADD } from '../utils/Constant';

export const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};
