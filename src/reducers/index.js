import { combineReducers } from 'redux';
import { SAMPLE_ACTION } from '../constants/action-types';

const initialShelves = {
  currentlyReading: [],
  wantToRead: [],
  read: []
};

function books(state = {}, action) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}

function results(state = [], action) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}

function shelves(state = initialShelves, action) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default combineReducers({
  books,
  shelves,
  results,
});