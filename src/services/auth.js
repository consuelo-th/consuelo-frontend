import axios from "axios";
import http from "./http";
import { useNavigate } from "react-router-dom";



const apiUrl = import.meta.env.VITE_APP_API_URL;

const logIn = async (user) => {
  const response = await http.post(`${apiUrl}/login`, user);
  const { token } = response.data;
  localStorage.setItem("token", token)
 
};

const signUp = async (user) => {
  const response = await http.post(`${apiUrl}/signup`, user);
  const { token } = await response.data;
  localStorage.setItem("token", token);
  

};

const logout = async () => {
  localStorage.removeItem("token");
  navigate("/auth")
}

export { logIn, signUp, logout };
