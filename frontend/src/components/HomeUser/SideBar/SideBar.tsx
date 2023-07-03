import "./SideBar.scss";
import { useTranslation } from "react-i18next";

import logoIcon from "../../../assets/images/logo-blue.png";
import landingPage from "../../../assets/images/landing-page.png";
import bio from "../../../assets/images/bio.png";
import qrcode from "../../../assets/images/qrcode.png";
import pageAi from "../../../assets/images/page-ai.png";
import guilde from "../../../assets/images/guilde.png";
import news from "../../../assets/images/news.png";
import manage from "../../../assets/images/manage.png";
import user from "../../../assets/images/user.png";
import setting from "../../../assets/images/setting.png";
import upLevel from "../../../assets/images/up-level.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function SideBar() {
  const { t } = useTranslation();
  const currentPage = useSelector((state: any) => state.sidebar.sidebar?.currentPage);  

  return (
    <div className='sidebar-container'>
      <div className='sidebar-menu'>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <a href='/home' className='sidebar-logo'>
        <img src={logoIcon} alt='' />
      </a>
      <Link to='/home/landing-page' className={`sidebar-item ${currentPage === 'sidebar_1' ? 'active' : ''}`}>
        <img className='sidebar-item-icon' src={landingPage} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.landing_title")}</p>
      </Link>
      <Link to='/home/bio' className={`sidebar-item ${currentPage === 'sidebar_2' ? 'active' : ''}`}>
        <img className='sidebar-item-icon' src={bio} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.bio_title")}</p>
      </Link>
      <Link to='/home/qrcode' className={`sidebar-item ${currentPage === 'sidebar_3' ? 'active' : ''}`}>
        <img className='sidebar-item-icon' src={qrcode} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.qrcode_title")}</p>
      </Link>
      <Link to='/home/page-ai' className={`sidebar-item ${currentPage === 'sidebar_4' ? 'active' : ''}`}>
        <img className='sidebar-item-icon' src={pageAi} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.page_ai_title")}</p>
      </Link>
      <Link to='/home/guilde' className={`sidebar-item ${currentPage === 'sidebar_5' ? 'active' : ''}`}>
        <img className='sidebar-item-icon' src={guilde} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.guilde_title")}</p>
      </Link>
      <Link to='/home/news' className={`sidebar-item ${currentPage === 'sidebar_6' ? 'active' : ''}`}>
        <img className='sidebar-item-icon' src={news} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.news_title")}</p>
      </Link>
      <div className='sidebar-item'>
        <img className='sidebar-item-icon' src={manage} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.manage_title")}</p>
        <FontAwesomeIcon className='sidebar-item-arrows' icon={faChevronDown} />
      </div>
      <div className='sidebar-item-list'>
        <Link to='/home/user' className={`sidebar-item-list-item ${currentPage === 'sidebar_7' ? 'active' : ''}`}>
          <img className='sidebar-item-list-item-icon' src={user} alt='' />
          <p className='sidebar-item-list-item-title'>{t("home_sidebar.user_title")}</p>
        </Link>
        <Link to='/home/site-management' className={`sidebar-item-list-item ${currentPage === 'sidebar_8' ? 'active' : ''}`}>
          <img className='sidebar-item-list-item-icon' src={setting} alt='' />
          <p className='sidebar-item-list-item-title'>{t("home_sidebar.setting_title")}</p>
        </Link>
        <Link to='/home/account' className={`sidebar-item-list-item ${currentPage === 'sidebar_9' ? 'active' : ''}`}>
          <img className='sidebar-item-list-item-icon' src={upLevel} alt='' />
          <p className='sidebar-item-list-item-title'>{t("home_sidebar.up_level_title")}</p>
        </Link>
        <Link to='/home/transaction-history' className={`sidebar-item-list-item ${currentPage === 'sidebar_10' ? 'active' : ''}`}>
          <FontAwesomeIcon className='sidebar-item-list-item-icon' icon={faClockRotateLeft} />
          <p className='sidebar-item-list-item-title'>{t("home_sidebar.history_title")}</p>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;