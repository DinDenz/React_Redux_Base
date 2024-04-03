import React from "react";
import { useState, useEffect } from "react";
import { commentUpdate, commentDelete } from "./redux/actions";
import { useDispatch } from "react-redux";

export default function SingleComment({ data }) {
  const { comment, id } = data;
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (comment) {
      setCommentText(comment);
    }
  }, [comment]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleUpdateComment = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText,id))
  };

  const handleDelete =(e) => {
    e.preventDefault();
    dispatch(commentDelete(id))
  }

  return (
    <form onSubmit={handleUpdateComment} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}
