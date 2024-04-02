import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer
});

//корневой редьюсер. в него импортированы редьюсеры для разных компонентов. в каждом из них свои
//методы и инишлслэйт(аналогия - срез)
