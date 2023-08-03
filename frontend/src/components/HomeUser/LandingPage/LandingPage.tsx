import "./LandingPage.scss";
import { useTranslation } from "react-i18next";

import product1 from "../../../assets/images/test-product-1.png";
import product2 from "../../../assets/images/test-product-2.png";
import product3 from "../../../assets/images/test-product-3.png";
import product4 from "../../../assets/images/test-product-4.png";
import product5 from "../../../assets/images/test-product-5.png";
import useHandlePageBar from "../../../_helper/useHandlePageBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [showCategory, setShowCategory] = useState(false);
  const [showCreateProject, setShowCreateProject] = useState("");
  const [currentProduct, setCurrentProduct] = useState(Object);
  const [nameProject, setNameProject] = useState("");

  //Cập nhật page cho navbar
  useHandlePageBar("sidebar_1");

  //Danh sách sản phẩm fake
  let listProduct = [
    {
      id: "1",
      title: "Bán hàng #3: Bán whey protein",
      image: product1,
    },
    {
      id: "2",
      title: "Bán hàng #1: Website bán máy pha coffee giá rẻ nhất thị trường, nhập khẩu từ Nhật bản",
      image: product2,
    },
    {
      id: "3",
      title: "Bán hàng #1: Bán hàng thương gia",
      image: product3,
    },
    {
      id: "4",
      title: "Bán hàng #3: shop bán hàng",
      image: product4,
    },
    {
      id: "5",
      title: "Bán hàng #3: shop bán hàng",
      image: product5,
    },
    {
      id: "6",
      title: "Bán hàng #3: Bán hàng thương gia",
      image: product3,
    },
    {
      id: "7",
      title: "Bán hàng #3: Website bán máy pha coffee giá rẻ nhất thị trường, nhập khẩu từ Nhật bản",
      image: product2,
    },
    {
      id: "8",
      title: "Bán hàng #3: Bán whey protein",
      image: product1,
    },
    {
      id: "9",
      title: "Bán hàng #3: Website bán máy pha coffee giá rẻ nhất thị trường, nhập khẩu từ Nhật bản",
      image: product2,
    },
    {
      id: "10",
      title: "Bán hàng #3: Bán whey protein",
      image: product1,
    },
    {
      id: "11",
      title: "Bán hàng #3: Bán whey protein",
      image: product1,
    },
    {
      id: "12",
      title: "Bán hàng #1: Website bán máy pha coffee giá rẻ nhất thị trường, nhập khẩu từ Nhật bản",
      image: product2,
    },
    {
      id: "13",
      title: "Bán hàng #1: Bán hàng thương gia",
      image: product3,
    },
    {
      id: "14",
      title: "Bán hàng #3: shop bán hàng",
      image: product4,
    },
    {
      id: "15",
      title: "Bán hàng #3: shop bán hàng",
      image: product5,
    },
    {
      id: "16",
      title: "Bán hàng #3: Bán hàng thương gia",
      image: product3,
    },
    {
      id: "17",
      title: "Bán hàng #3: Website bán máy pha coffee giá rẻ nhất thị trường, nhập khẩu từ Nhật bản",
      image: product2,
    },
    {
      id: "18",
      title: "Bán hàng #3: Bán whey protein",
      image: product1,
    },
    {
      id: "19",
      title: "Bán hàng #3: Bán whey protein",
      image: product1,
    },
    {
      id: "20",
      title: "Bán hàng #1: Website bán máy pha coffee giá rẻ nhất thị trường, nhập khẩu từ Nhật bản",
      image: product2,
    },
  ];

  //xử lý thông tin project
  const handleShowProject = (product: any) => {
    if (product === "" || product === "new project") {
      setShowCreateProject(product);
      setCurrentProduct({})
      setNameProject("")
    } else {
      setShowCreateProject("current project");
      setCurrentProduct(product);
    }
  };

  //Tạo dự án mới
  const handleCreateProject = () => {
    if(nameProject === '') {
      alert('Tên dự án không được để trống')
    } else {      
      let newProject = {
        name: nameProject.trim(),
        data: currentProduct,
      };
      console.log(newProject);

      if(currentProduct.id) {
        alert("Chuyển đến trang quản lí web có các chức năng như chỉnh sửa, xuất bản, quản lí sản phẩm,....")
      } else {
        navigate("/home/create-page")
      }
    }
  };

  return (
    <div>
      {/* -------Danh mục------- */}
      <div className='landingPage-popup' style={{ display: `${!showCategory ? "none" : "flex"}` }}>
        <div className='container'>
          <h2 className='title'>Danh mục</h2>
          <div className='body-category'>
            <div className='item'>
              <input type='checkbox' name='' id='' />
              <p>Phổ biến</p>
            </div>
            <div className='item'>
              <input type='checkbox' name='' id='' />
              <p>Công nghệ & game</p>
            </div>
            <div className='item'>
              <input type='checkbox' name='' id='' />
              <p>Mẹ & bé</p>
            </div>
            <div className='item'>
              <input type='checkbox' name='' id='' />
              <p>Ô tô & xe máy</p>
            </div>
            <div className='item'>
              <input type='checkbox' name='' id='' />
              <p>Bất động sản</p>
            </div>
            <div className='item'>
              <input type='checkbox' name='' id='' />
              <p>Nhà hàng</p>
            </div>
            <div className='item'>
              <input type='checkbox' name='' id='' />
              <p>Mỹ phẩm</p>
            </div>
            <div className='item'>
              <input type='checkbox' name='' id='' />
              <p>Portfolio</p>
            </div>
          </div>
          <div className='buttons'>
            <button className='choose'>Chọn</button>
            <button className='cancel' onClick={(e) => setShowCategory(false)}>
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
      {/* -------Tạo project------- */}
      <div className='landingPage-popup' style={{ display: `${showCreateProject === "" ? "none" : "flex"}` }}>
        <div className='container'>
          <h2 className='title'>Tạo dự án</h2>
          <div className='body-project'>
            {showCreateProject === "current project" ? (
              <div className='project-item'>
                <h3 className='project-title'>Giao diện sử dụng</h3>
                <span className='project-description'>{currentProduct.title}</span>
              </div>
            ) : (
              ""
            )}
            <div className='project-item'>
              <h3 className='project-title'>Tên dự án</h3>
              <input
                className='project-name'
                type='text'
                placeholder='Nhập tên dự án...'
                onChange={(e) => setNameProject(e.target.value)}
                value={nameProject}
              />
            </div>
          </div>
          <div className='buttons' style={{ border: "0" }}>
            <button className='choose' onClick={handleCreateProject}>
              Tạo
            </button>
            <button className='cancel' onClick={(e) => handleShowProject("")}>
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
      {/* -------Nội dung page------- */}
      <div className='landingPage-container'>
        <div className='wrap'>
          <div className='head'>
            <div className='left'>
              <div className='search'>
                <input type='text' placeholder='Nhập tên mẫu template' />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div className='category' onClick={(e) => setShowCategory(true)}>
                Danh mục
              </div>
              <select className='list' name='option' id=''>
                <option value='1' selected>
                  Mới nhất
                </option>
                <option value='2'>Sử dụng nhiều</option>
                <option value='3'>Đánh giá tốt nhất</option>
              </select>
            </div>
            <div className='create-page' onClick={(e) => handleShowProject("new project")}>
              <FontAwesomeIcon icon={faPlus} />
              <p>Tạo trang mới</p>
            </div>
          </div>
          <div className='body'>
            {listProduct?.length ? (
              listProduct.map((product) => {
                return (
                  <div className='product' key={product.id}>
                    <div className='image'>
                      <img src={product.image} alt='' />
                    </div>
                    <p className='description'>{product.title}</p>
                    <div className='product-buttons'>
                      <button className='btn-blue'>Xem trước</button>
                      <button className='btn-red' onClick={(e) => handleShowProject(product)}>
                        Sử dụng
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Không có sản phẩm</div>
            )}
          </div>
          <div className='bottom'>
            <FontAwesomeIcon className='icon icon-left' icon={faChevronLeft} />
            <span className='num'>1</span>
            <span className='num'>...</span>
            <span className='num active'>11</span>
            <span className='num'>12</span>
            <span className='num'>13</span>
            <span className='num'>14</span>
            <span className='num'>...</span>
            <span className='num'>58</span>
            <FontAwesomeIcon className='icon icon-right' icon={faChevronRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
