import "./Footer.scss";
import { useTranslation } from "react-i18next";

import logoIcon from "../../assets/images/logo-icon.png";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className='footer-container'>
      <div className='col'>
        <div className='title'>
          <img src={logoIcon} alt='' />
          <h3>{t("footer.title")}</h3>
        </div>
        <p>{t("footer.phone")}</p>
        <p>{t("footer.email")}</p>
        <p>{t("footer.address")}</p>
      </div>
      <div className='col'>
        <div className='title'>
          <h3>{t("footer.about_us")}</h3>
        </div>
        <p>{t("footer.introduction")}</p>
        <p>{t("footer.contact")}</p>
        <p>{t("footer.conditions")}</p>
        <p>{t("footer.privacy_policy")}</p>
      </div>
      <div className='col'>
        <div className='title'>
          <h3>{t("footer.documents")}</h3>
        </div>
        <p>{t("footer.blog")}</p>
        <p>{t("footer.interface")}</p>
        <p>{t("footer.ebook")}</p>
        <p>{t("footer.fanpage_management")}</p>
      </div>
      <div className='col'>
        <div className='title'>
          <h3>{t("footer.name_company")}</h3>
        </div>
        <p>{t("footer.taxes")}</p>
        <p>{t("footer.founding_date")}</p>
        <p>{t("footer.industry")}</p>
      </div>
    </div>
  );
}

export default Footer;
