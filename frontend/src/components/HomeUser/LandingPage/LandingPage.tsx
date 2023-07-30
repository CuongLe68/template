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

function LandingPage() {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  //Cập nhật page cho navbar
  useHandlePageBar("sidebar_1");

  return (
    <div>
      <div className='landingPage-popup-category' style={{ display: `${!showPopup ? "none" : "flex"}` }}>
        <div className='container'>
          <h2 className='title'>Danh mục</h2>
          <div className='body'>
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
            <button className='cancel' onClick={(e) => setShowPopup(false)}>
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
      <div className='landingPage-container'>
        <div className='wrap'>
          <div className='head'>
            <div className='left'>
              <div className='search'>
                <input type='text' placeholder='Nhập tên mẫu template' />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div className='category' onClick={(e) => setShowPopup(true)}>
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
            <div className='create-page'>
              <FontAwesomeIcon icon={faPlus} />
              <p>Tạo trang mới</p>
            </div>
          </div>
          <div className='body'>
            <div className='product'>
              <div className='image'>
                <img src={product3} alt='' />
              </div>
              <p className='description'>Bán hàng #3: Bán whey protein</p>
              <div className='product-buttons'>
                <button className='btn-blue'>Xem trước</button>
                <button className='btn-red'>Sử dụng</button>
              </div>
            </div>
            <div className='product'>
              <div className='image'>
                <img src={product4} alt='' />
              </div>
              <p className='description'>
                Bán hàng #1: Website bán máy pha coffee giá rẻ nhất thị trường, nhập khẩu từ Nhật bản
              </p>
              <div className='product-buttons'>
                <button className='btn-blue'>Xem trước</button>
                <button className='btn-red'>Sử dụng</button>
              </div>
            </div>
            <div className='product'>
              <div className='image'>
                <img src={product2} alt='' />
              </div>
              <p className='description'>Bán hàng #3: Bán whey protein</p>
              <div className='product-buttons'>
                <button className='btn-blue'>Xem trước</button>
                <button className='btn-red'>Sử dụng</button>
              </div>
            </div>
            <div className='product'>
              <div className='image'>
                <img src={product1} alt='' />
              </div>
              <p className='description'>Bán hàng #1: Bán hàng thương gia</p>
              <div className='product-buttons'>
                <button className='btn-blue'>Xem trước</button>
                <button className='btn-red'>Sử dụng</button>
              </div>
            </div>
            <div className='product'>
              <div className='image'>
                <img src={product5} alt='' />
              </div>
              <p className='description'>Bán hàng #3: Bán whey protein</p>
              <div className='product-buttons'>
                <button className='btn-blue'>Xem trước</button>
                <button className='btn-red'>Sử dụng</button>
              </div>
            </div>
            <div className='product'>
              <div className='image'>
                <img src={product1} alt='' />
              </div>
              <p className='description'>Bán hàng #1: Bán hàng thương gia</p>
              <div className='product-buttons'>
                <button className='btn-blue'>Xem trước</button>
                <button className='btn-red'>Sử dụng</button>
              </div>
            </div>
            <div className='product'>
              <div className='image'>
                <img src={product4} alt='' />
              </div>
              <p className='description'>Bán hàng #3: Bán whey protein</p>
              <div className='product-buttons'>
                <button className='btn-blue'>Xem trước</button>
                <button className='btn-red'>Sử dụng</button>
              </div>
            </div>
            <div className='product'>
              <div className='image'>
                <img src={product2} alt='' />
              </div>
              <p className='description'>Bán hàng #1: Bán hàng thương gia</p>
              <div className='product-buttons'>
                <button className='btn-blue'>Xem trước</button>
                <button className='btn-red'>Sử dụng</button>
              </div>
            </div>
          </div>
          <div className='bottom'>
            <FontAwesomeIcon className="icon icon-left" icon={faChevronLeft} />
            <span className="num">1</span>
            <span className="num">...</span>
            <span className="num active">11</span>
            <span className="num">12</span>
            <span className="num">13</span>
            <span className="num">14</span>
            <span className="num">...</span>
            <span className="num">58</span>
            <FontAwesomeIcon className="icon icon-right" icon={faChevronRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
