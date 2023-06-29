import "./LadingPage.scss";
import { useTranslation } from "react-i18next";

import logoIcon from "../../assets/images/logo-icon.png";

function LadingPage() {  
  const { t } = useTranslation();
  return (
    <div className='ladingPage-container'>
      trang lading page
    </div>
  );
}

export default LadingPage;
