import "./ForgotPassword.scss";
import { useTranslation } from "react-i18next";

import bannerLogin from "../../assets/images/banner-login.png";
import eye from "../../assets/images/eye.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
  const [showEye, setShowEye] = useState(false);
  const [showReEye, setShowReEye] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const { t } = useTranslation();

  const handleEye = () => {
    setShowEye(!showEye);
    const inputPassword = document.querySelector(".forgot-password-right-item-password.password");
    if (showEye) {
      inputPassword?.setAttribute("type", "password");
    } else {
      inputPassword?.setAttribute("type", "text");
    }
  };

  const handleReEye = () => {
    setShowReEye(!showReEye);
    const inputPassword = document.querySelector(".forgot-password-right-item-password.re-password");
    if (showReEye) {
      inputPassword?.setAttribute("type", "password");
    } else {
      inputPassword?.setAttribute("type", "text");
    }    
  };

  const handleGetCodeEmail = () => {
    alert("Lấy mã qua Email!");
  };

  const handleCheckCode = () => {
    setShowNewPass(true)
  }

  const handleForgotPassword = () => {
    alert("Hoàn thành");
  };

  return (
    <div className='forgot-password-container'>
      <div className='forgot-password-wrapper'>
        <div className='forgot-password-left'>
          <img className='banner' src={bannerLogin} alt='' />
        </div>
        <div className='forgot-password-right'>
          <div className='forgot-password-right-register'>
            <p>{t("login.not_member")}</p>
            <Link to='/register'>{t("login.register_now")}</Link>
          </div>
          <h2 className='forgot-password-right-title'>{t("login.title")}</h2>
          <p className='forgot-password-right-description'>{t("login.description")}</p>
          {showNewPass === false ? (
            <div className='forgot-password-right-content'>
              <div className='forgot-password-right-item'>
                <input className='error' type='email' placeholder={t("login.email") || ""} />
                {true ? <span>*{t("login.email_description")}</span> : ""}
              </div>
              <div className='forgot-password-right-item'>
                <input type='number' placeholder={t("login.code") || ""} style={{ paddingRight: "150px" }} />
                <div className='forgot-password-right-item-get-code' onClick={(e) => handleGetCodeEmail()}>
                  {t("login.get_code")}
                </div>
                {false ? <span>*{t("login.code_description")}</span> : ""}
              </div>

              <div className='forgot-password-right-navigate'>
                <Link className='forgot-password-right-navigate-text' to='/login'>
                  {t("login.back_login")}
                </Link>
              </div>
              <div className='forgot-password-right-btn' onClick={(e) => handleCheckCode()}>
                {t("login.continue")}
              </div>
              
            </div>
          ) : (
            <div className='forgot-password-right-content'>
              <div className='forgot-password-right-item'>
                <input
                  type='password'
                  placeholder={t("login.new_password") || ""}
                  className='forgot-password-right-item-password password'
                  style={{ paddingRight: "60px" }}
                />
                <div className='forgot-password-right-item-eye' onClick={(e) => handleEye()}>
                  <img src={eye} alt='' />
                  {showEye ? <div className='forgot-password-right-item-line'></div> : ""}
                </div>
                {true ? <span>*{t("login.new_password_description")}</span> : ""}
              </div>
              <div className='forgot-password-right-item'>
                <input
                  type='password'
                  placeholder={t("login.re_new_password") || ""}
                  className='forgot-password-right-item-password re-password error'
                  style={{ paddingRight: "60px" }}
                />
                <div className='forgot-password-right-item-eye' onClick={(e) => handleReEye()}>
                  <img src={eye} alt='' />
                  {showReEye ? <div className='forgot-password-right-item-line'></div> : ""}
                </div>
                {true ? <span>*{t("login.re_new_password_description")}</span> : ""}
              </div>

              <div className='forgot-password-right-navigate'>
                <Link className='forgot-password-right-navigate-text' to='/login'>
                  {t("login.back_login")}
                </Link>
              </div>
              <div className='forgot-password-right-btn' onClick={(e) => handleForgotPassword()}>
                {t("login.completed")}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
