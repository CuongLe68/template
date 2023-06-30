import "./Header.scss";
import { useTranslation } from "react-i18next";

import userLogo from "../../../assets/images/person-2.png";

function Header() {
  const { t } = useTranslation();
  return (
    <div className='header-container'>
      <div className='header-container-user'>
        <div className='header-container-logo'>
          <img src={userLogo} alt='' />
        </div>
        <div className='header-container-info'>
          <h3 className='header-container-info-name'>Lê Hoàng Bảo Ngọc</h3>
          <p className='header-container-info-account'>{t("home_header.package_free")}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
