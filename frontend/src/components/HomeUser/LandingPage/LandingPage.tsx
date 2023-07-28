import "./LandingPage.scss";
import { useTranslation } from "react-i18next";

import logoIcon from "../../assets/images/logo-icon.png";
import useHandlePageBar from "../../../_helper/useHandlePageBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  const { t } = useTranslation();

  //Cập nhật page cho navbar
  useHandlePageBar("sidebar_1");

  return (
    <>
      <div className='poppup'>Thông báo</div>
      <div className='landingPage-container'>
        <div className='wrap'>
          <div className='head'>
            <div className='left'>
              <div className='search'>
                <input type='text' placeholder="Nhập tên mẫu template"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div className='category'>Danh mục</div>
              <select className="list" name='' id=''>
                <option value='1'>Mới nhất</option>
                <option value='2'>Sử dụng nhiều</option>
                <option value='3'>Đánh giá tốt nhất</option>
              </select>
            </div>
            <div className="create-page">
              <FontAwesomeIcon icon={faPlus} />
              <p>Tạo trang mới</p>
            </div>
          </div>
          <div className='body'>bo đỳ nè</div>
          <div className='bottom'>chuyển trang</div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
