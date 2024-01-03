import { getAlphabet, getMonth } from "../service/Const";

const months = getMonth();

export function sortArray(users) {
  users.sort(function(a, b) {
    var nameA = a.lastName.toLowerCase(),
      nameB = b.lastName.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  return users;
}

export function userByAlpha(data, usersByAlpha, setUserByAlpha) {
  getAlphabet().forEach((letter, index) => {
    usersByAlpha[index] = sortArray(
      data.filter(user => user.lastName.toUpperCase().startsWith(letter))
    );
  });
  setUserByAlpha([...usersByAlpha]);
}

export function userByMonths(users) {
  users = sortArray(users);
  const usersByMonth = [];
  months.forEach((month, index) => {
    usersByMonth[index] = users.filter(
      user => new Date(user.dob).getMonth() === index
    );
  });
  return usersByMonth;
}

export function stringInfoUser(user) {
  return `${user.lastName} ${user.firstName} - 
    ${new Date(user.dob).getDate()} 
    ${months[new Date(user.dob).getMonth()]} 
    ${new Date(user.dob).getFullYear()} year`;
}