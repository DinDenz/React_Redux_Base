import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_ON,
  ERROR_OFF
} from "./types";

export function incrementLikes() {
  return {
    type: INCREMENT
  };
}

export function decrementLikes() {
  return {
    type: DECREMENT
  };
}
export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text: text
  };
}
export function commentCreate(textComment, id) {
  return {
    type: COMMENT_CREATE,
    data: { comment: textComment, id: id }
  };
}

export function commentUpdate(textComment, id) {
  return {
    type: COMMENT_UPDATE,
    data: { comment: textComment, id: id }
  };
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id: id
  };
}

export function commentsLoad() {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=10"
      );
      const jsonData = await response.json();
      setTimeout(() => {
        dispatch({
          type: COMMENTS_LOAD,
          data: jsonData
        });
        dispatch(loaderOff());
      }, 1000);
    } catch (err) {
      dispatch(errorOn("Произошла ошибка API"));
      dispatch(loaderOff());
    }
    /* dispatch({
      type: COMMENTS_LOAD,
      data: jsonData
    });
    dispatch(loaderOff()); */ //так должно быть, выше сделал имитацию медленного соединения, чтобы посмотреть на спиннер
  };
}
export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON
  };
}
export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF
  };
}
export function errorOn(errorMessage) {
  return (dispatch) => {
    dispatch({
      type: ERROR_ON,
      message: errorMessage
    });
    setTimeout(() => {
      dispatch(errorOff());
    }, 2000);
  };
}
export function errorOff() {
  return {
    type: ERROR_OFF
  };
}
