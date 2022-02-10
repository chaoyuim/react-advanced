import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("random title");
  const clickHandler = () => {
    if (text === "random title") {
      setText("Hello Worlds");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={clickHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
