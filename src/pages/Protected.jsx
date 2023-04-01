import getUser from "../services/user";
import { Navigate } from "react-router-dom";

const Protected = ({children}) => {
    const user = getUser();

    if (!user.id) {
        return <Navigate to="/auth" replace />
    }
    return  children;
}
 
export default Protected;