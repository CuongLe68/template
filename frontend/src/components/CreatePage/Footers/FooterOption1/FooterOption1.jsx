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
      <footer>
        <p>
          Bản quyền © 2023 Website E-commerce. Đã đăng ký. Bảo lưu mọi quyền.
        </p>
      </footer>
    </div>
  );
}

export default FooterOption1;
