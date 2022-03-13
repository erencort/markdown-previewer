import { marked } from "marked";
import React from "react";
import { useSelector } from "react-redux";

function UserOutput() {
  const outputValue = useSelector((state) => state.markdown.outputText);
  return (
    <div
      className="output"
      dangerouslySetInnerHTML={{ __html: marked(outputValue) }}
    ></div>
  );
}

export default UserOutput;
