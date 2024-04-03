import React from "react";
import SingleComment from "./SingleComment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate } from "./redux/actions";
import uniqeId from "uniqid";

export default function Comments() {
  const [textComment, setTextComment] = useState("");
  const dispatch = useDispatch();
  /* const comments = useSelector(state => {
         const {commentReducer} = state;
         return commentReducer.comments
    }) */
  const comments = useSelector((state) => state.commentReducer.comments); // state находит рутредьсер, поэтому деструктурировать не обязательно

  const handleInputChange = (e) => {
    setTextComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (textComment === "") {
      alert("пустые комменты не отправляются, кусок ты дерьма");
      return;
    }
    const id = uniqeId();
    dispatch(commentCreate(textComment, id));
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleFormSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInputChange} placeholder="твой коммент" />
        <input type="submit" />
      </form>
      {!!comments.length &&
        comments.map((comment) => (
          <SingleComment key={comment.id} data={comment} />
        ))}
    </div>
  );
}
