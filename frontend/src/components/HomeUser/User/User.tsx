import "./User.scss";
import { useTranslation } from "react-i18next";

import logoIcon from "../../assets/images/logo-icon.png";

function User() {
  const { t } = useTranslation();
  return (
    <div className='user-container'>
      trang user
    </div>
  );
}

export default User;
