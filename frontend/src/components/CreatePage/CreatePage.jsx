import { useState } from "react";
import "./CreatePage.scss";
import TextItem from "./TextItems/TextItemOption1/TextItemOption1";
import NavbarOftion1 from "./Navbars/NavbarOftion1/NavbarOftion1";
import Sidebar from "./Slidebars/FooterOption1/FooterOption1";
import Footer from "./Footers/FooterOption1/FooterOption1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import BodyOptions2 from "./Bodys/BodyOptions2/BodyOptions2";
import BodyOptions1 from "./Bodys/BodyOptions1/BodyOptions1";

function CreatePage() {
  const [buttonName, setButtonName] = useState("Preview");

  const [draggedItem, setDraggedItem] = useState(null); //lấy item
  const [draggedWrap, setDraggedWrap] = useState(null); //cột chứa item
  const [dropItem, setDropItem] = useState(null); //item của cột muốn thả
  const [dropdWrap, setDropWrap] = useState(null); //cột muốn thả

  const [numCol, setnumCol] = useState(1);
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [gapCol, setGapCol] = useState(0);

  const [listItem, setListItem] = useState([]); // danh sách tất cả item

  // tạo thanh mô tả vị trí thả item vào
  const boxOver = document.createElement("div");
  boxOver.classList.add("over-box");

  // Bắt đầu lấy item từ sidebar
  const handleDragStart = (e, item) => {
    //Nếu như ở content đã có item này rồi thì không cần copy node mới
    if (item.className === "textItem-wrapper append-content") {
      setDraggedWrap(item.parentElement);
      setDraggedItem(item);
    } else {
      setDraggedItem(item.cloneNode(true));
    }
  };

  //xử lý over vào
  const handleDragOver = (e, item) => {
    e.preventDefault();

    const overLine = document.querySelector(".over-box");
    if (!overLine) {
      e.target.appendChild(boxOver);
    }
    if (draggedItem.className.split(" ")[1] !== "append-content") {
      draggedItem.classList.add("append-content");
    } else {
      if (item.childNodes[0].className === "over-box") {
        setDropItem(item.childNodes[1]);
        setDropWrap(item);
      } else {
        setDropItem(item);
        setDropWrap(item.parentElement);
      }
    }
  };

  //xử lý xóa thanh mô tả vị trí
  const handleDragLeave = (e, item) => {
    const overLine = document.querySelector(".over-box");
    if (overLine) {
      item.removeChild(overLine);
    }
  };

  //thả item vào box
  const handleDrop = (e, item) => {
    e.preventDefault();

    handleDragLeave(e, item);

    if (draggedWrap) {
      if (dropItem) {
        draggedWrap.appendChild(dropItem);
      }
      dropdWrap.appendChild(draggedItem);
    } else {
      e.target.appendChild(draggedItem);
    }

    setDraggedItem(null);
    setDraggedWrap(null);
    setDropItem(null);
    setDropWrap(null);
  };

  //show form
  const handleShowForm = () => {
    document.querySelector(".form").style.display = "flex";
  };

  //Hủy tạo form mới
  const handleCancelForm = () => {
    document.querySelector(".form").style.display = "none";
  };

  //tạo form
  const handleCreateForm = (e) => {
    if (numCol < 1 || numCol > 30) {
      alert(`ERROR: Số cột không hợp lệ (1 - 30)`);
      setnumCol(1);
    } else if (top < 0 || top > 5000) {
      alert(`ERROR: khoảng cách trên không hợp lệ (0 - 5000)`);
      setTop(0);
    } else if (bottom < 0 || bottom > 5000) {
      alert(`ERROR: khoảng cách dưới không hợp lệ (0 - 5000)`);
      setBottom(0);
    } else if (left < 0 || left > 500) {
      alert(`ERROR: khoảng cách trái không hợp lệ (0 - 500)`);
      setLeft(0);
    } else if (right < 0 || right > 500) {
      alert(`ERROR: khoảng cách phải không hợp lệ (0 - 500)`);
      setRight(0);
    } else if (gapCol < 0 || gapCol > 1000) {
      alert(`ERROR: khoảng cách giữa các cột không hợp lệ (0 - 1000)`);
      setGapCol(0);
    } else {
      const listRow = [];
      for (let i = 1; i <= numCol; i++) {
        listRow.push(i); //đẩy các thuộc tính con của các cột ở trong hàng, ví dụ
      }
      setListItem([
        ...listItem,
        {
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          gapCol: gapCol,
          listRow: listRow,
        },
      ]);

      setDraggedItem(null);
      setnumCol(1);
      setTop(0);
      setBottom(0);
      setLeft(0);
      setRight(0);
      setGapCol(0);
      document.querySelector(".form").style.display = "none"; // ẩn form
    }
  };

  //Lưu file
  const handleSave = () => {
    const template = document.querySelector(".content");
    console.log(template);
    alert("Lưu");
  };

  //Hiển thị web thực
  const handlePreview = () => {
    const listWrapper = document.querySelectorAll(".content .wrapper");
    const listIcon = document.querySelectorAll(".list-icon");
    const listDraggable = document.querySelectorAll(".content .textItem-wrapper");
    const btnAdd = document.querySelector(".add");

    if (buttonName === "Preview") {
      setButtonName("Edit");
      btnAdd.style.display = "none";
      document.querySelector(".sidebar").style.display = "none";
      document.querySelector(".body").style.paddingLeft = "0";

      for (let i = 0; i < listIcon.length; i++) {
        listIcon[i].style.display = "none";
      }

      for (let i = 0; i < listWrapper.length; i++) {
        listWrapper[i].style.border = "none";
        listDraggable[i].removeAttribute("draggable");
        listDraggable[i].style.cursor = "default";
        listDraggable[i].classList.remove('append-content')
      }
    } else {
      setButtonName("Preview");
      btnAdd.style.display = "flex";
      document.querySelector(".sidebar").style.display = "block";
      document.querySelector(".body").style.paddingLeft = "22%";

      for (let i = 0; i < listIcon.length; i++) {
        listIcon[i].style.display = "flex";
      }

      for (let i = 0; i < listWrapper.length; i++) {
        listWrapper[i].style.border = "0.4px dashed #e6d0de";
        listDraggable[i].setAttribute("draggable", true);
        listDraggable[i].style.cursor = "grab";
        listDraggable[i].classList.add('append-content')
      }
    }
  };

  //Chỉnh sửa row
  const handleEditItem = (e, item) => {
    const currentElement = item.parentElement.parentElement;
    const colElement = currentElement.parentElement;
    console.log(colElement);
  };

  //Xóa row
  const handleDeleteItem = (e, item) => {
    const currentElement = item.parentElement.parentElement;
    const colElement = currentElement.parentElement;
    colElement.remove();
  };

  return (
    <div className='CreatePage-container'>
      <div className='form'>
        <div className='container'>
          <h3 className='title'>Nhập thông tin</h3>
          <div className='form-wrapper'>
            <div className='col'>
              <div className='left'>Số cột</div>
              <input
                type='number'
                className='value'
                min='1'
                max='30'
                value={numCol}
                onChange={(e) => setnumCol(e.target.value)}
              />
            </div>
            <div className='col'>
              <div className='left'>Cách trái</div>
              <input
                type='number'
                min='0'
                max='500'
                className='value'
                value={left}
                onChange={(e) => setLeft(e.target.value)}
              />
            </div>
            <div className='col'>
              <div className='left'>Cách phải</div>
              <input
                type='number'
                min='0'
                max='500'
                className='value'
                value={right}
                onChange={(e) => setRight(e.target.value)}
              />
            </div>
            <div className='col'>
              <div className='left'>Cách trên</div>
              <input
                type='number'
                min='0'
                max='5000'
                className='value'
                value={top}
                onChange={(e) => setTop(e.target.value)}
              />
            </div>
            <div className='col'>
              <div className='left'>Cách dưới</div>
              <input
                type='number'
                min='0'
                max='5000'
                className='value'
                value={bottom}
                onChange={(e) => setBottom(e.target.value)}
              />
            </div>
            <div className='col'>
              <div className='left'>Khoảng cách giữa các cột</div>
              <input
                type='number'
                min='0'
                max='1000'
                className='value'
                value={gapCol}
                onChange={(e) => setGapCol(e.target.value)}
              />
            </div>
          </div>
          <div className='btn'>
            <button onClick={handleCreateForm}>Tạo mới</button>
            <button onClick={handleCancelForm}>Hùy</button>
          </div>
        </div>
      </div>
      <div className='sidebar'>
        <div className='select'>
          <div className='item' onDragStart={(e) => handleDragStart(e, e.target)}>
            <TextItem
              text='item 1'
              img='https://thumbs.dreamstime.com/b/cartoon-smart-panda-programmer-work-laptop-notebook-netbook-smart-panda-programmer-work-laptop-notebook-netbook-186739906.jpg'
            />
          </div>
          <div className='item' onDragStart={(e) => handleDragStart(e, e.target)}>
            <TextItem
              text='item 2'
              img='https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg'
            />
          </div>
          <div className='item' onDragStart={(e) => handleDragStart(e, e.target)}>
            <TextItem
              text='item 3'
              img='https://img.freepik.com/free-vector/cute-bad-cat-wearing-suit-sunglasses-with-baseball-bat-cartoon-icon-illustration-animal-fashion-icon-concept-isolated-flat-cartoon-style_138676-2170.jpg?w=2000'
            />
          </div>
          <div className='item' onDragStart={(e) => handleDragStart(e, e.target)}>
            <Sidebar />
          </div>
          <div className='item' onDragStart={(e) => handleDragStart(e, e.target)}>
            <NavbarOftion1
              width='100%'
              img='https://thumbs.dreamstime.com/b/cartoon-smart-panda-programmer-work-laptop-notebook-netbook-smart-panda-programmer-work-laptop-notebook-netbook-186739906.jpg'
              backgroundColor='blue'
            />
          </div>
          <div className='item' onDragStart={(e) => handleDragStart(e, e.target)}>
            <BodyOptions2
              width='100%'
              img='https://thumbs.dreamstime.com/b/cartoon-smart-panda-programmer-work-laptop-notebook-netbook-smart-panda-programmer-work-laptop-notebook-netbook-186739906.jpg'
              backgroundColor='blue'
            />
          </div>
          <div className='item' onDragStart={(e) => handleDragStart(e, e.target)}>
            <BodyOptions1
              width='100%'
              img='https://thumbs.dreamstime.com/b/cartoon-smart-panda-programmer-work-laptop-notebook-netbook-smart-panda-programmer-work-laptop-notebook-netbook-186739906.jpg'
              backgroundColor='blue'
            />
          </div>
          <div className='item' onDragStart={(e) => handleDragStart(e, e.target)}>
            <Footer
              width='100%'
              img='https://thumbs.dreamstime.com/b/cartoon-smart-panda-programmer-work-laptop-notebook-netbook-smart-panda-programmer-work-laptop-notebook-netbook-186739906.jpg'
              backgroundColor='blue'
            />
          </div>
        </div>
      </div>
      <div className='body'>
        <div className='content'>
          {listItem?.map((items) => {
            return (
              <div
                className='col col-2'
                style={{
                  margin: `${items.top}px 0px ${items.bottom}px`,
                  padding: `0px ${items.right}px 0px ${items.left}px`,
                  gap: `${items.gapCol}px`,
                }}>
                <div className='list-icon'>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className='icon icon-18'
                    onClick={(e) => handleEditItem(e, e.target)}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className='icon icon-18'
                    onClick={(e) => handleDeleteItem(e, e.target)}
                  />
                </div>
                {items.listRow?.map((item) => {
                  return (
                    <div
                      className='wrapper wrapper-1'
                      onDragStart={(e) => handleDragStart(e, e.target)}
                      onDragOver={(e) => handleDragOver(e, e.target)}
                      onDragLeave={(e) => handleDragLeave(e, e.target)}
                      onDrop={(e) => handleDrop(e, e.target)}></div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className='new-item'>
          <button className='btn save' onClick={handleSave}>
            Lưu
          </button>
          <button className='btn add' style={{ marginLeft: "20px" }} onClick={handleShowForm}>
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "6px" }} />
            Thêm
          </button>
          <button className='btn' style={{ marginLeft: "20px" }} onClick={handlePreview}>
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
