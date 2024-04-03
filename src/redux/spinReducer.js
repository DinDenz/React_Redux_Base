import { LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF } from "./types";

const initialState = {
  isLoading: false
};
export const spinReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        isLoading: true
      };
    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
