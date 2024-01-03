import "./UserList.css"
import React from "react";
import PropTypes from "prop-types";

const UserList = ({ setActiveUsers, users = [], activeUsers }) => {
  const [checked] = React.useState([]);
  const check = () => {
    users.forEach((user) => {
      checked[user.id] = (activeUsers.filter( activUser => activUser.id === user.id).length===1)
    });
  }
  check();

  if (users.length === 0) {
    return <div>---</div>;
  } else {
    return (
      <div className="user-list__list">
        {users.map(user => (
          <div className="user-list__item" key={user.id}>
            {user.lastName} {user.firstName}
            <input
              type="checkbox"
              onChange={() => {
                setActiveUsers(user.id);
                checked[user.id] = !checked[user.id];
              }}
              checked={checked[user.id]}
              id={user.id}
            />
          </div>
        ))}
      </div>
    );
  }
};

UserList.propTypes = {
  users: PropTypes.array,
  setActiveUsers: PropTypes.func
};

export default UserList;