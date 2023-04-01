import axios from "axios";


const token = localStorage.getItem("token") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWY3ZTMxMjY5NTMxOTUwYzU4YzlhOCIsImVtYWlsIjoiYmFzaWNAY29uc3VlbG8uY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY3OTk1NzA2OX0.-TlKyUnymyzb1-O63fyrQuMWk-IlV0V_iFxUSC3zm2k";

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


export default ({
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
  })