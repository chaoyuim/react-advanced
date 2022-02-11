import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);
  const onChangeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    let name = e.target.name;
    let value = e.target.value;
    setPerson((person) => {
      return { ...person, [name]: value };
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().toTimeString() };
      setPeople((oldPeople) => {
        return [...oldPeople, newPerson];
      });
      setPerson({ firstName: "", email: "", age: "" });
    }
  };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={onChangeHandler}
            />
          </div>
          <button type="submit" onClick={onSubmitHandler}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
