import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // console.log(size);
  const checkSize = () => {
    setSize((oldSize) => {
      return {
        ...oldSize,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    });
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <>
      <h1>Window</h1>
      <h2>
        height: {size.height} width : {size.width}{" "}
      </h2>
    </>
  );
};

export default UseEffectCleanup;
