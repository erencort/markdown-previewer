import React from "react";
import { useDispatch } from "react-redux";
import { toggleExapmle } from "../../redux/markdownSlice";

function ExampleButton() {
  const example = `Heading
  =======
  
  Sub-heading
  -----------
  
  ### Another deeper heading
  
  Paragraphs are separated
  by a blank line.
  
  Leave 2 spaces at the end of a line to do a
  line break
  
  Text attributes *italic*, **bold**,
  \`monospace\`, ~~strikethrough~~ .
  
  Shopping list:
  
    * apples
    * oranges
    * pears
  
  Numbered list:
  
    1. apples
    2. oranges
    3. pears
  
  The rain---not the reign---in
  Spain.
  
   *[Eren Çört](https://github.com/erencort)*`;

  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(toggleExapmle(example));
      }}
    >
      ExampleButton
    </button>
  );
}

export default ExampleButton;
