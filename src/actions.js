import {
  CHANGE_SEARCHFIELD,
  ROBOTS_REQUEST_FAILED,
  ROBOTS_REQUEST_SUCCESS,
  ROBOTS_REQUEST_PENDING
} from "./constants";

export const setSearchField = text => {
  return { type: CHANGE_SEARCHFIELD, payload: text };
};

export const requestRobots = dispatch => {
  dispatch({ type: ROBOTS_REQUEST_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => dispatch({ type: ROBOTS_REQUEST_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: ROBOTS_REQUEST_FAILED, payload: error }));
};
