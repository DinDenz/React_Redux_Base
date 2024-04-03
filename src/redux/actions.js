import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD
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
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10"
    );
    const jsonData = await response.json();
    dispatch({
      type: COMMENTS_LOAD,
      data: jsonData
    });
  };
}
