import "./BodyOptions2.scss";

function BodyOptions2(props) {
  return (
    <div
      className="textItem-wrapper"
      draggable="true"
      style={{
        width: `${props.width}`,
        height: `url("${props.height}")`,
        backgroundColor: props.backgroundColor && "white",
        color: "white",
      }}
    >
      <div class="home-product">
        <a class="home-product-item" href="#x">
          <img
            class="home-product-item__img"
            src="https://petstoresaigon.com/wp-content/uploads/2021/06/banh-tron-1-dau-1-247x296.jpg"
            alt=""  
          ></img>
          <h4 class="home-product-item__name">
            Bóng đồ chơi cho chó - Dây thừng 3 đầu KITTEN
          </h4>
          <div class="home-product-item__price">
            <div class="home-product-item__price-current">100.000đ</div>
          </div>
          <div class="home-product-item__action">
            <span class="home-product-item__like home-product-item__like--liked">
              <i class="home-product-item__like-icon-empty fa-regular fa-heart"></i>
              <i class="home-product-item__like-icon-fill fa-solid fa-heart"></i>
            </span>
            <div class="home-product-item__rating">
              <i class="home-product-item__gold fa-solid fa-star"></i>
              <i class="home-product-item__gold fa-solid fa-star"></i>
              <i class="home-product-item__gold fa-solid fa-star"></i>
              <i class="home-product-item__gold fa-solid fa-star"></i>
              <i class="home-product-item__gold fa-solid fa-star"></i>
            </div>
            <div class="home-product-item__sold">8.7k đã bán</div>
          </div>
          <div class="home-product-item__origin">
            <span class="home-product-item__brand">Phụ kiện</span>
            <span class="home-product-item__orgin-title-name">Thái Lan</span>
          </div>
          <div class="home-product-item__favourite">
            <i class="fa-solid fa-check"></i>
            <span>Yêu thích</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default BodyOptions2;
