import Header from "./Header/Header";
import LadingPage from "./LadingPage/LadingPage";
import SideBar from "./SideBar/SideBar";
import "./HomeUser.scss";
import User from "./User/User";

function HomeUser() {
  return (
    <div className='home-user-container'>
      <SideBar />
      <div className='home-user-container-right'>
        <Header />
        <LadingPage />
      </div>
    </div>
  );
}

export default HomeUser;
