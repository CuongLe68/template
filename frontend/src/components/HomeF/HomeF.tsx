import "./HomeF.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "../../_model/Grids";
import { useTranslation } from "react-i18next";

var listFile: Grid = {
  statusCode: 0,
  message: "",
  data: [],
};
var page = 1;
function HomeF() {
  const { t, i18n } = useTranslation(); //cài đặt để sử dụng ngôn ngữ
  const [load, setLoad] = useState(false);

  async function getAllPage(page: number) {
    const res = await axios.get(
      `http://localhost:8000/v1/products/allProduct/?sort=desc&limit&page=${page}&limitPage=2&sortBy`
    );

    listFile = {
      statusCode: res.data.statusCode,
      message: res.data.message,
      data: res.data.data,
    };

    setLoad(true);
  }

  const handleNext = () => {
    if (page < 4) {
      page++;
      getAllPage(page);
      setLoad(!load);
    }
  };

  const handleprev = () => {
    if (page > 1) {
      page--;
      getAllPage(page);
      setLoad(!load);
    }
  };

  const changeLanguge = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    getAllPage(page);
  }, [load]);

  return (
    <div className='homeF-container'>
      <div style={{ margin: "0 10px" }}>
        <div
          className='button'
          style={{ border: "2px solid #333", cursor: "pointer" }}
          onClick={() => changeLanguge("vi")}>
          Tiếng Việt
        </div>
        <div
          className='button'
          style={{ border: "2px solid #333", cursor: "pointer" }}
          onClick={() => changeLanguge("en")}>
          Tiếng Anh
        </div>
      </div>

      <div className='button' onClick={() => handleprev()} style={{ border: "2px solid #333", cursor: "pointer" }}>
        {t("home.btn-previous-page")}
      </div>
      {listFile.data.length !== 0 ? (
        listFile.data.map((item: any) => {
          return (
            <a key={item._id} href={`http://localhost:3000/${item.router}`}>
              {item.name}
            </a>
          );
        })
      ) : (
        <div>{t("home.loading-data")}</div>
      )}
      <div className='button' onClick={() => handleNext()} style={{ border: "2px solid #333", cursor: "pointer" }}>
        {t("home.btn-next-page")}
      </div>

      <Link to='/home/create-page' style={{ background: "yellow", color: "black" }}>
        {t("home.create-page")}
      </Link>
    </div>
  );
}

export default HomeF;
