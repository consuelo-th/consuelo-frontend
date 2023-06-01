import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token");

function getUser () {
  let user = {};

  if (token) {
    try {
      user = jwtDecode(token);

    } catch (err) {
      localStorage.removeItem("token");
      user = {};

    }

  } else {
    user = {};

  }

return user;

  
}
export default getUser;
