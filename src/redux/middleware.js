import { COMMENT_CREATE } from "./types";
import { errorOn } from "./actions";

const badWords = ["пидор", "хуила", "ебанько", "соси"];

export const spamFilter = (store) => (next) => (action) => {
  if (action.type === COMMENT_CREATE) {
    //console.log("spamfilter", action.data.comment);
    const hasBadWords = badWords.some((word) =>
      action.data.comment.includes(word)
    );

    if (hasBadWords) {
      store.dispatch(errorOn("Уважай людей, мразота"));
      return;
    }
  }
  return next(action);
};
//мидлвар это прослойка между экшеном и редьюсером. В данном случает прослойка срабатывает на тип события COMMENT_CREATE
//тут если написанный коммент прошел проверку на плохие слова
// происходит return next(action) - это позволяет перейти к исполнению редьюсера и добавлению коммента
//если проверка не пройдена, то вернется сообщение и return. В таком случае перход на редьюсер не произойдет и
//коммент не добавится
