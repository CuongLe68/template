import "./Login.scss";
import { useTranslation } from "react-i18next";

import bannerLogin from "../../assets/images/banner-login.png";
import eye from "../../assets/images/eye.png";
import google from "../../assets/images/google-icon.png";
import facebook from "../../assets/images/facebook-icon.png";
import email from "../../assets/images/email-icon.png";
import phone from "../../assets/images/phone-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Notification from "../../_common/Notification/Notification";

function Login() {
  const [formLogin, setFormLogin] = useState("email");
  const [showEye, setShowEye] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const { t } = useTranslation();

  const handleEye = () => {
    setShowEye(!showEye);
    const inputPassword = document.querySelector(".login-right-item-password");
    if (showEye) {
      inputPassword?.setAttribute("type", "password");
    } else {
      inputPassword?.setAttribute("type", "text");
    }
  };

  const handleGetCodePhone = () => {
    alert("Lấy mã qua số điện thoại!");
  };

  const handleLogin = () => {
    setShowNotification(true);
  };

  return (
    <>
      {showNotification ? (
        <Notification result={true} messages={t("notification.success_description")} navigate='/' />
      ) : (
        ""
      )}
      <div className='login-container'>
        <div className='login-wrapper'>
          <div className='login-left'>
            <img className='banner' src={bannerLogin} alt='' />
          </div>
          <div className='login-right'>
            <div className='login-right-register'>
              <p>{t("login.not_member")}</p>
              <Link to='/register'>{t("login.register_now")}</Link>
            </div>
            <h2 className='login-right-title'>{t("login.title")}</h2>
            <p className='login-right-description'>{t("login.description")}</p>
            {formLogin === "email" ? (
              <div className='login-right-content'>
                <div className='login-right-item'>
                  <input className='error' type='email' placeholder={t("login.email") || ""} />
                  {true ? <span>*{t("login.email_description")}</span> : ""}
                </div>
                <div className='login-right-item'>
                  <input
                    type='password'
                    placeholder={t("login.password") || ""}
                    className='login-right-item-password'
                    style={{ paddingRight: "60px" }}
                  />
                  <div className='login-right-item-eye' onClick={(e) => handleEye()}>
                    <img src={eye} alt='' />
                    {showEye ? <div className='login-right-item-line'></div> : ""}
                  </div>
                  {false ? <span>*{t("login.password_description")}</span> : ""}
                </div>
                <div className='login-right-navigate'>
                  <Link className='login-right-navigate-text' to='/login/forgot-password'>
                    {t("login.forgot_password")}
                  </Link>
                </div>
                <div className='login-right-btn' onClick={(e) => handleLogin()}>
                  {t("login.login")}
                </div>
                <div className='login-right-other'>
                  <div className='login-right-other-line'></div>
                  <p>{t("login.login_other")}</p>
                  <div className='login-right-other-line'></div>
                </div>
                <div className='login-right-lists'>
                  <div className='login-right-list-img'>
                    <img src={google} alt='' />
                  </div>
                  <div className='login-right-list-img'>
                    <img src={facebook} alt='' />
                  </div>
                  <div className='login-right-list-img'>
                    <img src={email} alt='' />
                  </div>
                  <div className='login-right-list-img' onClick={(e) => setFormLogin("phone")}>
                    <img src={phone} alt='' />
                  </div>
                </div>
              </div>
            ) : (
              <div className='login-right-content'>
                <div className='login-right-item'>
                  <input className='error' type='number' placeholder={t("login.phone") || ""} />
                  {true ? <span>*{t("login.phone_description")}</span> : ""}
                </div>
                <div className='login-right-item'>
                  <input type='number' placeholder={t("login.code") || ""} style={{ paddingRight: "150px" }} />
                  <div className='login-right-item-get-code' onClick={(e) => handleGetCodePhone()}>
                    {t("login.get_code")}
                  </div>
                  {false ? <span>*{t("login.code_description")}</span> : ""}
                </div>

                <div className='login-right-navigate'>
                  <Link className='login-right-navigate-text' to='/login/forgot-password'>
                    {t("login.forgot_password")}
                  </Link>
                </div>
                <div className='login-right-btn' onClick={(e) => handleLogin()}>
                  {t("login.login")}
                </div>
                <div className='login-right-other'>
                  <div className='login-right-other-line'></div>
                  <p>{t("login.login_other")}</p>
                  <div className='login-right-other-line'></div>
                </div>
                <div className='login-right-lists'>
                  <div className='login-right-list-img'>
                    <img src={google} alt='' />
                  </div>
                  <div className='login-right-list-img'>
                    <img src={facebook} alt='' />
                  </div>
                  <div className='login-right-list-img' onClick={(e) => setFormLogin("email")}>
                    <img src={email} alt='' />
                  </div>
                  <div className='login-right-list-img'>
                    <img src={phone} alt='' />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
