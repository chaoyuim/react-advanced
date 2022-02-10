import React from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "perter",
    age: 24,
    message: "random message",
  });
  const onClickHander = () => {
    setPerson({ ...person, message: "hello world" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      <button className="btn" onClick={onClickHander}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
