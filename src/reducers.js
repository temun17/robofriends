import {
  CHANGE_SEARCHFIELD,
  ROBOTS_REQUEST_FAILED,
  ROBOTS_REQUEST_SUCCESS,
  ROBOTS_REQUEST_PENDING
} from "./constants";

const initialStateSearch = {
  searchField: ""
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  console.log(action.type);
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRequest = {
  isPending: false,
  error: "",
  robots: []
};

export const requestRobots = (state = initialStateRequest, action = {}) => {
  switch (action.type) {
    case ROBOTS_REQUEST_FAILED:
      return { ...state, error: action.payload, isPending: false };
    case ROBOTS_REQUEST_PENDING:
      return Object.assign({}, state, { isPending: true });
    case ROBOTS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false
      });
    default:
      return state;
  }
};
