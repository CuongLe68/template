import "./Register.scss";
import { useTranslation } from "react-i18next";

import bannerLogin from "../../assets/images/banner-login.png";
import eye from "../../assets/images/eye.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [formRegister, setFormRegister] = useState("email");
  const [showEye, setShowEye] = useState(false);
  const { t } = useTranslation();

  const handleEye = () => {
    setShowEye(!showEye);
    const inputPassword = document.querySelector(".register-right-item-password");
    if (showEye) {
      inputPassword?.setAttribute("type", "password");
    } else {
      inputPassword?.setAttribute("type", "text");      
    }
    console.log(inputPassword);
  };

  const handleGetCodeEmail = () => {
    alert("Lấy mã qua email!");
  };

  const handleGetCodePhone = () => {
    alert("Lấy mã qua số điện thoại!");
  };

  const handleRegister = () => {
    alert("Đăng ký tài khoản");
  };

  return (
    <div className='register-container'>
      <div className='register-wrapper'>
        <div className='register-left'>
          <img className='banner' src={bannerLogin} alt='' />
        </div>
        <div className='register-right'>
          <h2 className='register-right-title'>{t("register.title")}</h2>
          <p className='register-right-description'>{t("register.description")}</p>
          {formRegister === "email" ? (
            <div className='register-right-content'>
              <div className='register-right-item'>
                <input className='error' type='email' placeholder={t("register.email") || ""} />
                {true ? <span>*{t("register.email_description")}</span> : ""}
              </div>
              <div className='register-right-item'>
                <input type='number' placeholder={t("register.code") || ""} style={{ paddingRight: "150px" }} />
                <div className='register-right-item-get-code' onClick={(e) => handleGetCodeEmail()}>
                  {t("register.get_code")}
                </div>
                {false ? <span>*{t("register.code_description")}</span> : ""}
              </div>
              <div className='register-right-item'>
                <input type='text' placeholder={t("register.full_name") || ""} />
                {false ? <span>*{t("register.full_name_description")}</span> : ""}
              </div>
              <div className='register-right-item'>
                <input
                  type='password'
                  placeholder={t("register.password") || ""}
                  className='register-right-item-password'
                  style={{ paddingRight: "60px" }}
                />
                <div className='register-right-item-eye' onClick={(e) => handleEye()}>
                  <img src={eye} alt='' />
                  {showEye ? <div className='register-right-item-line'></div> : ""}
                </div>
                {false ? <span>*{t("register.password_description")}</span> : ""}
              </div>
              <div className='register-right-navigate'>
                <div className='register-right-navigate-text' onClick={(e) => setFormRegister("phone")}>
                  {t("register.register_phone")}
                </div>
                <Link className='register-right-navigate-text' to='/login'>
                  {t("register.login")}
                </Link>
              </div>
              <div className='register-right-btn' onClick={(e) => handleRegister()}>
                {t("register.register")}
              </div>
            </div>
          ) : (
            <div className='register-right-content'>
              <div className='register-right-item'>
                <input type='text' placeholder={t("register.full_name") || ""} />
                {false ? <span>*{t("register.full_name_description")}</span> : ""}
              </div>
              <div className='register-right-item'>
                <input className='error' type='number' placeholder={t("register.phone") || ""} />
                {true ? <span>*{t("register.phone_description")}</span> : ""}
              </div>
              <div className='register-right-item'>
                <input type='number' placeholder={t("register.code") || ""} style={{ paddingRight: "150px" }} />
                <div className='register-right-item-get-code' onClick={(e) => handleGetCodePhone()}>
                  {t("register.get_code")}
                </div>
                {false ? <span>*{t("register.code_description")}</span> : ""}
              </div>
              <div className='register-right-navigate'>
                <div className='register-right-navigate-text' onClick={(e) => setFormRegister("email")}>
                  {t("register.register_email")}
                </div>
                <Link className='register-right-navigate-text' to='/login'>
                  {t("register.login")}
                </Link>
              </div>
              <div className='register-right-btn' onClick={(e) => handleRegister()}>
                {t("register.register")}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
