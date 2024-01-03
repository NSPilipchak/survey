import "./UserListByMonth.css";
import React from "react";
import PropTypes from "prop-types";
import { stringInfoUser, userByMonths } from "../helpers/Helpers";
import { getMonth } from "../service/Const";

const UserListByMonth = ({ users = [] }) => {
  localStorage.setItem("users", JSON.stringify(users));
  const months = getMonth();

  const usersByMonth = userByMonths(users);

  return users.length === 0 ? (
    <div>No selected employees</div>
  ) : (
    <div className="user-list-by-month__list vLine">
      <hr />
      {months.map((month, index) => {
        return (
          usersByMonth[index].length > 0 && (
            <div key={month}>
              <p>{month}</p>
              <ul>
                {usersByMonth[index].map(user => (
                  <li className="user-list-by-month__item" key={user.id}>
                    {stringInfoUser(user)}
                  </li>
                ))}
              </ul>
            </div>
          )
        );
      })}
    </div>
  );
};

UserListByMonth.propTypes = {
  users: PropTypes.array,
  months: PropTypes.array
};

export default UserListByMonth;