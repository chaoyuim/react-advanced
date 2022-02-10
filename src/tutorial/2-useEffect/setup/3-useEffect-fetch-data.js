import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="container">
        <h3>GitHub User</h3>
        <ul className="users">
          {users.map((usr) => {
            const { id, login, avatar_url, html_url } = usr;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>Profile</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default UseEffectFetchData;
