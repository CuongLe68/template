import "./Header.scss";
import { useTranslation } from "react-i18next";

import logoIcon from "../../assets/images/logo-icon.png";

function Header() {
  const { t } = useTranslation();
  return (
    <div className='header-container'>
      header page
    </div>
  );
}

export default Header;
