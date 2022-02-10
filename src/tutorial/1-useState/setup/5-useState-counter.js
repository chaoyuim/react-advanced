import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const onClickResetHandler = () => {
    setValue(0);
  };
  const complexOnclickIncreaseHandler = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex conter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexOnclickIncreaseHandler}>
          Increase Later
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>regular conter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          -
        </button>
        <button className="btn" onClick={onClickResetHandler}>
          0
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
