import axios from "axios";


const token = localStorage.getItem("token") || "1234567";

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;



function setJwt(token) {
    axios.defaults.headers.common['x-auth-token'] = token;
}

export default ({
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
    setJwt
  })