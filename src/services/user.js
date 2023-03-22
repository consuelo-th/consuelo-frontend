import { user1, user2 } from "./auth";

const user = user2;
localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));



export default user;