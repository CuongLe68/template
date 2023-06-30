import "./LandingPage.scss";
import { useTranslation } from "react-i18next";

import logoIcon from "../../assets/images/logo-icon.png";

function LandingPage() {  
  const { t } = useTranslation();
  return (
    <div className='landingPage-container'>
      trang landing page
    </div>
  );
}

export default LandingPage;
