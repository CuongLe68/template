import "./SingleSlide.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../../assets/images/banner.png";

function SingleSlide() {
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
    <div className='single-slide-container'>
      <Slider {...settings}>
        <img src={banner} alt='' />
        <img src={banner} alt='' />
        <img src={banner} alt='' />
      </Slider>
    </div>
  );
}

export default SingleSlide;
