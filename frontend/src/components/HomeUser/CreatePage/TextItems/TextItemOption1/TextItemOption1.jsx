import "./TextItemOption1.scss";

function TextItemOption1(props) {
  return (
    <div
      className="textItem-wrapper"
      draggable="true"
      style={{
        backgroundImage: `url("${props.img}")`,
      }}
    >
      {props.text}
    </div>
  );
}

export default TextItemOption1;
