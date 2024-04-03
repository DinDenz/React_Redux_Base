import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";

export default function Title(props) {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.inputReducer.text);

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input
          type="text"
          onChange={handleChange}
          placeholder="можно что-то написать"
        />
      </div>
      <p>{text}</p>
    </div>
  );
}
