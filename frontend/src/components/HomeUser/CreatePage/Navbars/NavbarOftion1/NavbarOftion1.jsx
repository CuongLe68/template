import "./NavbarOftion1.scss";

function NavbarOftion1(props) {
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
      <div class="navbar">
        <ul class="navbar-list">
          <li class="navbar-item">
            <a href="#home" class="navbar-link">
              Home
            </a>
          </li>
          <li class="navbar-item">
            <a href="#about" class="navbar-link">
              About
            </a>
          </li>
          <li class="navbar-item">
            <a href="#services" class="navbar-link">
              Services
            </a>
          </li>
          <li class="navbar-item">
            <a href="#contact" class="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarOftion1;
