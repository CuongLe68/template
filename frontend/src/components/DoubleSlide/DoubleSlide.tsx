import "./DoubleSlide.scss";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from "../../assets/images/person-1.png";

function DoubleSlide() {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    height: 496,
  };

  return (
    <div className='double-slide-container'>
      <Slider {...settings}>
        <div className="wrapper">
          <img className="user-image" src={person1} alt='' />
          <div className="user-content">
            <h3 className="user-name">@{t("home.feedback_name")}</h3>
            <p className="position">{t("home.feedback_position")}</p>
            <p className="comment">“{t("home.feedback_comment")}”</p>
          </div>
        </div>
        <div className="wrapper">
          <img className="user-image" src={person1} alt='' />
          <div className="user-content">
            <h3 className="user-name">@{t("home.feedback_name")}</h3>
            <p className="position">{t("home.feedback_position")}</p>
            <p className="comment">“{t("home.feedback_comment")}”</p>
          </div>
        </div>
        <div className="wrapper">
          <img className="user-image" src={person1} alt='' />
          <div className="user-content">
            <h3 className="user-name">@{t("home.feedback_name")}</h3>
            <p className="position">{t("home.feedback_position")}</p>
            <p className="comment">“{t("home.feedback_comment")}”</p>
          </div>
        </div>
        <div className="wrapper">
          <img className="user-image" src={person1} alt='' />
          <div className="user-content">
            <h3 className="user-name">@{t("home.feedback_name")}</h3>
            <p className="position">{t("home.feedback_position")}</p>
            <p className="comment">“{t("home.feedback_comment")}”</p>
          </div>
        </div>
        <div className="wrapper">
          <img className="user-image" src={person1} alt='' />
          <div className="user-content">
            <h3 className="user-name">@{t("home.feedback_name")}</h3>
            <p className="position">{t("home.feedback_position")}</p>
            <p className="comment">“{t("home.feedback_comment")}”</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default DoubleSlide;
