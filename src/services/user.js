import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWY3ZTMxMjY5NTMxOTUwYzU4YzlhOCIsImVtYWlsIjoiYmFzaWNAY29uc3VlbG8uY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY3OTk1NzA2OX0.-TlKyUnymyzb1-O63fyrQuMWk-IlV0V_iFxUSC3zm2k";

function getUser () {
  let user = null;

  if (token) {
    try {
      user = jwtDecode(token);

    } catch (err) {
      localStorage.removeItem("token");
      user = null;

    }

  } else {
    user = null;

  }

return user;

  
}
export default getUser;
