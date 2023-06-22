import "./Home.scss";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import Slide from "../Slide/Slide";
import Footer from "../Footer/Footer";

import customer from "../../assets/images/customer.png";
import business from "../../assets/images/business.png";
import collaborators from "../../assets/images/collaborators.png";
import blogger from "../../assets/images/blogger.png";
import brand from "../../assets/images/brand.png";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <Slide />
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
      </div>
      <Footer />
    </div>
  );
}

export default Home;
