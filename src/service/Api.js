import axios from "axios";

export async function getUsers() {
  let res;
  try {
    res = await axios(
      "https://link.com/api/users"
    );
  } catch (e) {
    console.log(e);
  }
  return res;
}