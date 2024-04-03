import {
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_ON,
  ERROR_OFF
} from "./types";

const initialState = {
  isLoading: false,
  error: null
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
    case ERROR_ON:
      return {
        ...state,
        error: action.message
      };
    case ERROR_OFF:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};
