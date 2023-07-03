import "./User.scss";
import { useTranslation } from "react-i18next";

import logoIcon from "../../assets/images/logo-icon.png";
import useHandlePageBar from "../../../_helper/useHandlePageBar";

function User() {
  const { t } = useTranslation();
  
  //Cập nhật page cho navbar
  useHandlePageBar('sidebar_7')

  return (
    <div className='user-container'>
      trang user
    </div>
  );
}

export default User;
