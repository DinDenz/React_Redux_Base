import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentReducer } from "./commentReducer";
import { spinReducer } from "./spinReducer";

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentReducer,
  spinReducer
});

//корневой редьюсер. в него импортированы редьюсеры для разных компонентов. в каждом из них свои
//методы и инишлслэйт(аналогия - срез)
