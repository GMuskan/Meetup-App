import { createContext, useReducer } from "react";
import { initialState, MeetupReducer } from "../Reducer/MeetupReducer";
export const MeetupContext = createContext();

export const MeetupProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MeetupReducer, initialState);

  const filteredData =
    state?.filterBy === "Both"
      ? state?.meetups
      : state?.meetups?.filter((item) => item?.eventType === state?.filterBy);

  const searchedData =
    state?.search === ""
      ? filteredData
      : filteredData?.filter(
          (item) =>
            item?.title?.toLowerCase()?.includes(state?.search) ||
            item?.eventTags?.find((tag) =>
              tag?.toLowerCase()?.includes(state?.search)
            )
        );

  return (
    <MeetupContext.Provider value={{ state, dispatch, searchedData }}>
      {children}
    </MeetupContext.Provider>
  );
};
