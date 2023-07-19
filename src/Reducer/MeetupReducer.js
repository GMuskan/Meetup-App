import { meetups } from "../data/data";

export const initialState = {
  meetups: meetups,
  filterBy: "Online",
  search: ""
};
export const MeetupReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filterBy: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
