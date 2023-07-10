import "./LandingPage.scss";
import { useTranslation } from "react-i18next";

import logoIcon from "../../assets/images/logo-icon.png";
import useHandlePageBar from "../../../_helper/useHandlePageBar";

function LandingPage() {
  const { t } = useTranslation();

  //Cập nhật page cho navbar
  useHandlePageBar("sidebar_1");

  return <div className='landingPage-container'>
    <div className="left">
      left 1
    </div>
    <div className="right">right</div>
  </div>;
}

export default LandingPage;
