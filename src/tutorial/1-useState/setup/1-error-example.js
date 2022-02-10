import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const onClickHandler = (e) => {
    title = "hello world";
    console.log(e.target);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={onClickHandler}>
        Click to Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
