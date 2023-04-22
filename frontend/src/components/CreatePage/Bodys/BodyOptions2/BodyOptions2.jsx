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
      <section id="banner">
        <h2>Chào mừng đến với website E-commerce</h2>
        <p>Hàng nghìn sản phẩm đang chờ bạn khám phá</p>
        <a href="http://localhost:3000/create-page" class="btn">
          Xem ngay
        </a>
      </section>
      <section id="products">
        <div class="product">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8i6Qq-pMI5cZu1SG7SJxoFsoWibvBa1cJg&usqp=CAU"
            alt="Sản phẩm 1"
          />
          <h3>Sản phẩm 1</h3>
          <p>Giá: $100</p>
          <a href="http://localhost:3000/create-page" class="btn">
            Thêm vào giỏ hàng
          </a>
        </div>
        <div class="product">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzCROvBy10xzAcdfQsKUymzP-LV97xhGPNA&usqp=CAU"
            alt="Sản phẩm 2"
          />
          <h3>Sản phẩm 2</h3>
          <p>Giá: $200</p>
          <a href="http://localhost:3000/create-page" class="btn">
            Thêm vào giỏ hàng
          </a>
        </div>
        <div class="product">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8i6Qq-pMI5cZu1SG7SJxoFsoWibvBa1cJg&usqp=CAU"
            alt="Sản phẩm 3"
          />
          <h3>Sản phẩm 3</h3>
          <p>Giá: $150</p>
          <a href="http://localhost:3000/create-page" class="btn">
            Thêm vào giỏ hàng
          </a>
        </div>
        <div class="product">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8i6Qq-pMI5cZu1SG7SJxoFsoWibvBa1cJg&usqp=CAU"
            alt="Sản phẩm 1"
          />
          <h3>Sản phẩm 1</h3>
          <p>Giá: $100</p>
          <a href="http://localhost:3000/create-page" class="btn">
            Thêm vào giỏ hàng
          </a>
        </div>
        <div class="product">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzCROvBy10xzAcdfQsKUymzP-LV97xhGPNA&usqp=CAU"
            alt="Sản phẩm 2"
          />
          <h3>Sản phẩm 2</h3>
          <p>Giá: $200</p>
          <a href="http://localhost:3000/create-page" class="btn">
            Thêm vào giỏ hàng
          </a>
        </div>
        <div class="product">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8i6Qq-pMI5cZu1SG7SJxoFsoWibvBa1cJg&usqp=CAU"
            alt="Sản phẩm 3"
          />
          <h3>Sản phẩm 3</h3>
          <p>Giá: $150</p>
          <a href="http://localhost:3000/create-page" class="btn">
            Thêm vào giỏ hàng
          </a>
        </div>
      </section>
    </div>
  );
}

export default BodyOptions2;
