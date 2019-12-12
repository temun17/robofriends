import { CHANGE_SEARCHFIELD } from "./constants";

const initialState = {
  searchField: ""
};

export const searchRobots = (state = initialState, action = {}) => {
  console.log(action.type);
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
