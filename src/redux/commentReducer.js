import {
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD
} from "./types";

const initialState = {
  comments: []
};
export const commentReducer = (state = initialState, action) => {
  console.log("action reducer", action);
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data]
      };

    case COMMENTS_LOAD:
        const loadedComments = action.data.map((item) => {
            return {
                comment: item.name,
                id: item.id
            }
        })
      return {
        ...state,
        comments: loadedComments
      };

    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;
      //ищем индекс измененного комментария
      const indexOfUpdatedComment = comments.findIndex(
        (comment) => comment.id === data.id
      );
      //собираем новый массив: часть массива до измененного комментария + новый комментарий + оставшаяся часть массива(начиная со следующего элемента после измененного)
      const newComments = [
        ...comments.slice(0, indexOfUpdatedComment),
        data,
        ...comments.slice(indexOfUpdatedComment + 1)
      ];

      return {
        ...state,
        comments: newComments
      };

    case COMMENT_DELETE: //здесь написал через колбэк, так как линт ругается на повторное объявления, тут либо выносить их наверх, либо прятать в блок колбэка, в котором замкнется область видимости
      return (() => {
        const { id } = action;
        const { comments } = state;
        const filteredComments = comments.filter(
          (comment) => comment.id !== id
        );
        return {
          ...state,
          comments: filteredComments
        };
      })();

    default:
      return state;
  }
};
