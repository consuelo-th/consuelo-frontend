import { useLocation } from "react-router-dom";

const path = () => {
    return useLocation().pathname;
}

export default path;