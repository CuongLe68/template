import "./Notification.scss";
import { useTranslation } from "react-i18next";
import iconSuccess from "../../assets/images/icon-success.png";
import iconWarning from "../../assets/images/icon-warning.png";
import iconFailed from "../../assets/images/icon-failed.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NotificationProps {
  result: boolean; //kết quả, ví dụ true là thành công, false là thất bại
  messages: string; //nội dung thông báo, vd: đăng ký thành công,..
  navigate: string; //Kết thúc thông báo thì sẽ điều hướng theo naviate, vd: /login, /home,...
}

function Notification(props: NotificationProps) {
  const [display, setDisplay] = useState<boolean>(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClose = () => {
    setDisplay(true);
    navigate(props.navigate);
  };

  return (
    <div className={`notification-container ${display ? "hidden" : ""}`}>
      <div className='notification-container-wrapper'>
        <h2 className='notification-container-wrapper-title'>
          {props.result === true
            ? t("notification.success")
            : props.result === false
            ? t("notification.failed")
            : t("notification.warning")}
        </h2>
        <div className='notification-container-wrapper-image'>
          <img src={props.result === true ? iconSuccess : props.result === false ? iconFailed : iconWarning} alt='' />
        </div>
        <p className='notification-container-wrapper-description'>{props.messages}</p>
        <button className='notification-container-wrapper-button' onClick={handleClose}>
          {t("notification.close")}
        </button>
      </div>
    </div>
  );
}

export default Notification;
