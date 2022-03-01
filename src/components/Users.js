import React, { useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { useContext } from "react";

const jess = {
  username: "jessjelly",
  avatar_url:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
};
export const Users = () => {
  const [users, setUsers] = useState({});
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    setUsers(jess);
  }, []);

  const logIn = (newUser) => {
    setLoggedInUser(newUser);
  };

  return (
    <main>
      <h2>Users</h2>
      <ul className="Users__List">
        {users.map((user) => {
          return (
            <li key={user.username} className="User__profile">
              <h3>{user.username}</h3>
              <img
                className="Nav_avatar"
                src={loggedInUser.avatar_url}
                alt="sfdg"
              ></img>
              <button onClick={() => logIn(user)}>Log Me in</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Users;
