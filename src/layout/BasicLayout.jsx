import { Outlet } from "react-router-dom";
import LandingPageHeader from "../pages/landingPages/LandingPageHeader"
import LandingPageFooter from "../pages/landingPages/LandingPageFooter"

const BasicLayout = () => {
  return (
    <>
        <LandingPageHeader />
        <Outlet />
        <LandingPageFooter />
    </>
  );
};

export default BasicLayout;
