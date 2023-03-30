import axios from "axios";
import http from "./http";



const apiUrl = import.meta.env.VITE_APP_API_URL;

const logIn = async (email, password) => {
    
  try {
    const response = await http.post(`${apiUrl}/login`, { email, password });
    const { token } = response.data;
    localStorage.setItem("token", token);
    return true;

  } catch (err) {
    return false;

  }
};

const signUp = async (firstName, lastName, email, password) => {
  try {
    const response = await http.post(`${apiUrl}/signup`, { firstName, lastName, email, password });
    const { token } = response.data;
    localStorage.setItem("token", token);
    return true;

  } catch (err) {
    return false;

  }
};

export { logIn, signUp };
