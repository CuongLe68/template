import "./Home.scss";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import SingleSlide from "../Slides/SingleSlide/SingleSlide";
import DoubleSlide from "../Slides/DoubleSlide/DoubleSlide";
import Footer from "../Footer/Footer";

import customer from "../../assets/images/customer.png";
import business from "../../assets/images/business.png";
import collaborators from "../../assets/images/collaborators.png";
import blogger from "../../assets/images/blogger.png";
import brand from "../../assets/images/brand.png";
import design from "../../assets/images/design.png";
import exp1 from "../../assets/images/exp-1.png";
import exp2 from "../../assets/images/exp-2.png";
import exp3 from "../../assets/images/exp-3.png";
import message from "../../assets/images/message.png";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <SingleSlide />
      <div className='home-container'>
        <section className='home-customer'>
          <div className='home-container-header'>
            <img className='home-container-header-icon' src={customer} alt='' />
            <h2 className='home-container-header-title'>{t("home.customer_service")}</h2>
          </div>
          <div className='home-customer-content'>
            <div className='home-customer-content-item'>
              <img src={business} alt='' />
              <h3>{t("home.business")}</h3>
              <p>{t("home.business_description")}</p>
            </div>
            <div className='home-customer-content-item'>
              <img src={collaborators} alt='' />
              <h3>{t("home.collaborator")}</h3>
              <p>{t("home.collaborator_description")}</p>
            </div>
            <div className='home-customer-content-item'>
              <img src={blogger} alt='' />
              <h3>{t("home.blogger")}</h3>
              <p>{t("home.blogger_description")}</p>
            </div>
            <div className='home-customer-content-item'>
              <img src={brand} alt='' />
              <h3>{t("home.personal_brand")}</h3>
              <p>{t("home.personal_brand_description")}</p>
            </div>
          </div>
        </section>
        <section className='home-design'>
          <div className='home-container-header' style={{ padding: 0 }}>
            <img className='home-container-header-icon' src={design} alt='' />
            <h2 className='home-container-header-title' style={{ padding: "0 0 14px 8px" }}>
              {t("home.design_website_title")}
            </h2>
          </div>
          <div className='home-design-content'>
            <div className='home-design-content-item'>
              <img src={exp1} alt='' />
              <h3>{t("home.create_step1")}</h3>
              <p>{t("home.create_step1_description")}</p>
            </div>
            <div className='home-design-content-item'>
              <img src={exp2} alt='' />
              <h3>{t("home.create_step2")}</h3>
              <p>{t("home.create_step2_description")}</p>
            </div>
            <div className='home-design-content-item'>
              <img src={exp3} alt='' />
              <h3>{t("home.create_step3")}</h3>
              <p>{t("home.create_step3_description")}</p>
            </div>
          </div>
        </section>
        <section className='home-feedback'>
          <div className='home-container-header' style={{ padding: 0 }}>
            <img className='home-container-header-icon' src={message} alt='' />
            <h2 className='home-container-header-title' style={{ padding: "0 0 14px 8px" }}>
              {t("home.feedback_title")}
            </h2>
          </div>
          <div className='home-feedback-content'>
            <div style={{ width: "854px", height: "246px" }}>
              <DoubleSlide />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
