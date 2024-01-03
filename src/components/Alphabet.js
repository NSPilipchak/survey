import React from "react";
import UserList from "./UserList";
import { getAlphabet } from "../service/Const";

const Alphabet = ({ usersByAlpha, activeUsers, setActiveUsers, rawData }) => {
  const handleSelectUser = id => {
    activeUsers.find(user => user.id === id)
      ? setActiveUsers(activeUsers.filter(user => user.id !== id))
      : setActiveUsers([...activeUsers, rawData.find(user => user.id === id)]);
  };

  return (
    <div className="column_user_list">
      {getAlphabet().map((letter, index) => (
        <div key={`letter_index${index}`}>
          <p className={`letter`}>{letter}</p>
          <UserList
            users={usersByAlpha[index]}
            activeUsers={activeUsers}
            setActiveUsers={handleSelectUser}
          />
        </div>
      ))}
    </div>
  );
};

export default Alphabet;