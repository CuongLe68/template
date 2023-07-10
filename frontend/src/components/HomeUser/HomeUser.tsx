import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import "./HomeUser.scss";
import User from "./User/User";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import useHandlePageBar from "../../_helper/useHandlePageBar";
import { useSelector } from "react-redux";

function HomeUser() {
  useHandlePageBar("sidebar_0");

  //get isShowSideBar for processing margin class home-user-container-right
  const isShowSideBar = useSelector((state: any) => state.sidebar.sidebar?.isShowSideBar);

  return (
    <div className='home-user-container'>
      <SideBar />
      <div className='home-user-container-right' style={{ marginLeft: `${isShowSideBar ? "300px" : "60px"}` }}>
        <Header />
        <div className='home-user-container-right-content'>
          <Routes>
            <Route path='landing-page' element={<LandingPage />} />
            <Route path='user' element={<User />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default HomeUser;
