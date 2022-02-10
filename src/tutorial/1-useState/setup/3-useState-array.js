import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const onClickHandler = (id) => {
    const copyPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(copyPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h3>{name}</h3>
            <button
              className="btn"
              onClick={() => {
                onClickHandler(id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Remove All
      </button>
    </>
  );
};

export default UseStateArray;
