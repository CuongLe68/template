import "./Navbar.scss";
import logo from "../../assets/images/logo-white.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className='navbar-container'>
      <a href='/'>
        <img className='navbar-logo' src={logo} alt='logo' />
      </a>
      <div className='navbar-menu'>
        <Link to="/" className='navbar-menu-title'>{t("navbar.home")}</Link>
        <div className='navbar-menu-title'>{t("navbar.interface_repository")}</div>
        <div className='navbar-menu-title'>{t("navbar.price_list")}</div>
        <div className='navbar-menu-title'>{t("navbar.instructions")}</div>
        <div className='navbar-menu-title'>{t("navbar.news")}</div>
      </div>
      <div className='navbar-right'>
        <Link to='/register' className='navbar-right-btn btn-register'>{t("navbar.register")}</Link>
        <Link to='/login' className='navbar-right-btn btn-login'>{t("navbar.login")}</Link>
      </div>
    </div>
  );
}

export default Navbar;
