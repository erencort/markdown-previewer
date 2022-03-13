import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onInputChange } from "../../redux/markdownSlice";

function UserInput() {
  const inputValue = useSelector((state) => state.markdown.inputText);
  const isDisabled = useSelector((state) => state.markdown.isDisabled);
  const dispatch = useDispatch();

  return (
    <textarea
      disabled={isDisabled}
      value={inputValue}
      onChange={(e) => dispatch(onInputChange(e.target.value))}
      type="text"
    />
  );
}

export default UserInput;
