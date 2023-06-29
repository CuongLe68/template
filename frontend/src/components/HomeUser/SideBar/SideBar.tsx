import "./SideBar.scss";
import { useTranslation } from "react-i18next";

import logoIcon from "../../assets/images/logo-icon.png";
import { Link } from "react-router-dom";

function SideBar() {  
  const { t } = useTranslation();
  return (
    <div className='sidebar-container'>
      <Link className="lading-page" to='/home/lading-page'>lading Page</Link>
      <Link className="user" to='/home/user'>user</Link>
    </div>
  );
}

export default SideBar;
