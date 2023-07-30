import "./SideBar.scss";
import { useTranslation } from "react-i18next";

import logoBlue from "../../../assets/images/logo-blue.png";
import logoIcon from "../../../assets/images/logo-icon.png";
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { showSideBar } from "../../../_redux/dispatch/sidebar";

function SideBar() {
  const { t } = useTranslation();
  const currentPage = useSelector((state: any) => state.sidebar.sidebar?.currentPage);

  //Handle showing or hiding the sidebar
  const isShowSideBar = useSelector((state: any) => state.sidebar.sidebar?.isShowSideBar);
  const [isShow, setIsShow] = useState(isShowSideBar);
  const dispatch = useDispatch();

  useEffect(() => {
    showSideBar(isShow, dispatch);
  }, [isShow]);

  //handle CSS and images when showing or hiding the sidebar
  const style = isShow
    ? {
        sidebarContainerStyle: { width: "300px" },
        sidebarMenuStyle: { top: "7px", right: "10px" },
        sidebarLogoImg: logoBlue,
        sidebarLogoImgStyle: { width: "150px", height: "50px", marginBottom: "35px" },
        sidebarItemListItemStyle: { padding: "0 0 0 40px" },
        sidebarItemListItemIconStyle: { marginRight: "10px" },
      }
    : {
        sidebarContainerStyle: { width: "60px" },
        sidebarMenuStyle: { top: "16px", right: "18px" },
        sidebarLogoImg: logoIcon,
        sidebarLogoImgStyle: { width: "28px", height: "28px", margin: "44px 0 12px" },
        sidebarItemListItemStyle: { padding: "0 20px" },
        sidebarItemListItemIconStyle: { marginRight: "0" },
      };

  return (
    <div className='sidebar-container' style={style.sidebarContainerStyle}>
      <div className='sidebar-menu' onClick={() => setIsShow(!isShow)} style={style.sidebarMenuStyle}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <a href='/' className='sidebar-logo'>
        <img src={style.sidebarLogoImg} alt='' style={style.sidebarLogoImgStyle} />
      </a>
      <Link to='/home/landing-page' className={`sidebar-item ${currentPage === "sidebar_1" ? "active" : ""}`}>
        <img className='sidebar-item-icon' src={landingPage} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.landing_title")}</p>
      </Link>
      <Link to='/home/bio' className={`sidebar-item ${currentPage === "sidebar_2" ? "active" : ""}`}>
        <img className='sidebar-item-icon' src={bio} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.bio_title")}</p>
      </Link>
      <Link to='/home/qrcode' className={`sidebar-item ${currentPage === "sidebar_3" ? "active" : ""}`}>
        <img className='sidebar-item-icon' src={qrcode} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.qrcode_title")}</p>
      </Link>
      <Link to='/home/page-ai' className={`sidebar-item ${currentPage === "sidebar_4" ? "active" : ""}`}>
        <img className='sidebar-item-icon' src={pageAi} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.page_ai_title")}</p>
      </Link>
      <Link to='/home/guilde' className={`sidebar-item ${currentPage === "sidebar_5" ? "active" : ""}`}>
        <img className='sidebar-item-icon' src={guilde} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.guilde_title")}</p>
      </Link>
      <Link to='/home/news' className={`sidebar-item ${currentPage === "sidebar_6" ? "active" : ""}`}>
        <img className='sidebar-item-icon' src={news} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.news_title")}</p>
      </Link>
      <div className='sidebar-item'>
        <img className='sidebar-item-icon' src={manage} alt='' />
        <p className='sidebar-item-title'>{t("home_sidebar.manage_title")}</p>
        <FontAwesomeIcon className='sidebar-item-arrows' icon={faChevronDown} />
      </div>
      <div className='sidebar-item-list'>
        <Link
          to='/home/user'
          className={`sidebar-item-list-item ${currentPage === "sidebar_7" ? "active" : ""}`}
          style={style.sidebarItemListItemStyle}>
          <img className='sidebar-item-list-item-icon' src={user} alt='' style={style.sidebarItemListItemIconStyle} />
          <p className='sidebar-item-list-item-title'>{t("home_sidebar.user_title")}</p>
        </Link>
        <Link
          to='/home/site-management'
          className={`sidebar-item-list-item ${currentPage === "sidebar_8" ? "active" : ""}`}
          style={style.sidebarItemListItemStyle}>
          <img
            className='sidebar-item-list-item-icon'
            src={setting}
            alt=''
            style={style.sidebarItemListItemIconStyle}
          />
          <p className='sidebar-item-list-item-title'>{t("home_sidebar.setting_title")}</p>
        </Link>
        <Link
          to='/home/account'
          className={`sidebar-item-list-item ${currentPage === "sidebar_9" ? "active" : ""}`}
          style={style.sidebarItemListItemStyle}>
          <img
            className='sidebar-item-list-item-icon'
            src={upLevel}
            alt=''
            style={style.sidebarItemListItemIconStyle}
          />
          <p className='sidebar-item-list-item-title'>{t("home_sidebar.up_level_title")}</p>
        </Link>
        <Link
          to='/home/transaction-history'
          className={`sidebar-item-list-item ${currentPage === "sidebar_10" ? "active" : ""}`}
          style={style.sidebarItemListItemStyle}>
          <FontAwesomeIcon
            className='sidebar-item-list-item-icon'
            icon={faClockRotateLeft}
            style={style.sidebarItemListItemIconStyle}
          />
          <p className='sidebar-item-list-item-title'>{t("home_sidebar.history_title")}</p>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
