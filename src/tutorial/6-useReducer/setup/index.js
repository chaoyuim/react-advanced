import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name) {
      showModal(true);
    } else {
      showModal(false);
    }
  };

  return (
    <>
      {showModal && <Modal></Modal>}
      <form onSubmit={onSubmitHandler} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit">+</button>
      </form>
    </>
  );
};

export default Index;
