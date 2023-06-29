import Header from "./Header/Header";
import LadingPage from "./LadingPage/LadingPage";
import SideBar from "./SideBar/SideBar";
import "./HomeUser.scss";
import User from "./User/User";
import { Route, Routes } from "react-router-dom";

function HomeUser() {
  return (
    <div className='home-user-container'>
      <SideBar />
      <div className='home-user-container-right'>
        <Header />
        <Routes>
          <Route path='lading-page' element={<LadingPage />} />
          <Route path='user' element={<User />} />
        </Routes>
      </div>
    </div>
  );
}

export default HomeUser;
