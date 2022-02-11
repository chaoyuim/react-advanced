import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [data, setData] = useState({ firstName: "", email: "" });
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    data.id = new Date().getTime().toString();
    console.log(data);
    setPeople((people) => {
      return [...people, data];
    });
    setData({ firstName: "", email: "" });
  };
  const onChangeHandleFirstName = (e) => {
    setData({ ...data, firstName: e.target.value });
  };
  const onChangeHandleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={data.firstName}
              onChange={onChangeHandleFirstName}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              name="email"
              value={data.email}
              id="email"
              onChange={onChangeHandleEmail}
            />
          </div>
          <button type="submit" className="btn">
            Add Person
          </button>
        </form>
      </article>
      <ul>
        {people.map((person) => {
          const { firstName, email, id } = person;
          return (
            <li key={id} className="item">
              {person.firstName}
              <a href="#">{person.email}</a>
              <a href="#">{person.id}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ControlledInputs;
