import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {decrementLikes} from "./redux/actions";
import {incrementLikes} from "./redux/actions";

export default function Likes() {

  const dispatch = useDispatch();
  const likes = useSelector(state => {
    const {likesReducer} = state;
    return likesReducer.likes
  })

  const handleIncrementLikes = () => {
    dispatch(incrementLikes());
  };
  const handleDecrementLikes = () => {
    dispatch(decrementLikes());
  }

  
  return (
    <div className="button-controls">
      <button onClick={handleIncrementLikes}> ❤ {likes}</button>
      <button onClick={handleDecrementLikes}>Dislike</button>
    </div>
  );
}