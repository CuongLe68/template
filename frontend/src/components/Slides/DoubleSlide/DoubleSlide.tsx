import "./DoubleSlide.scss";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from "../../../assets/images/person-1.png";
import person2 from "../../../assets/images/person-2.png";
import person3 from "../../../assets/images/person-3.png";
import person4 from "../../../assets/images/person-4.png";
import person5 from "../../../assets/images/person-5.png";

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
          <img className="user-image" src={person2} alt='' />
          <div className="user-content">
            <h3 className="user-name">@{t("home.feedback_name")}</h3>
            <p className="position">{t("home.feedback_position")}</p>
            <p className="comment">“{t("home.feedback_comment")}”</p>
          </div>
        </div>
        <div className="wrapper">
          <img className="user-image" src={person3} alt='' />
          <div className="user-content">
            <h3 className="user-name">@{t("home.feedback_name")}</h3>
            <p className="position">{t("home.feedback_position")}</p>
            <p className="comment">“{t("home.feedback_comment")}”</p>
          </div>
        </div>
        <div className="wrapper">
          <img className="user-image" src={person4} alt='' />
          <div className="user-content">
            <h3 className="user-name">@{t("home.feedback_name")}</h3>
            <p className="position">{t("home.feedback_position")}</p>
            <p className="comment">“{t("home.feedback_comment")}”</p>
          </div>
        </div>
        <div className="wrapper">
          <img className="user-image" src={person5} alt='' />
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
