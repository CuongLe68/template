import "./FooterOption1.scss";

function FooterOption1(props) {
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
      <div class="sidebar-item">
        <a href="#home">Trang chủ</a>
        <a href="#about">Giới thiệu</a>
        <a href="#services">Dịch vụ</a>
        <a href="#contact">Liên hệ</a>
      </div>
    </div>
  );
}

export default FooterOption1;
