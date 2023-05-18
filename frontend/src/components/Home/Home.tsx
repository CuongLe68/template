import "./Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "../../_model/Grids";
import {useTranslation} from "react-i18next"

var listFile: Grid = {
  statusCode: 0,
  message: '',
  data: [],
};
var page = 1;
function Home() {
  const {t} = useTranslation(); //cài đặt để sử dụng ngôn ngữ
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
    console.log('ở trong: ',listFile.data[0]);
    
    setLoad(true);
  }
  console.log('ở ngoài: ',listFile);

  const handleNext = () => {
    if (page < 4) {
      page++;
      console.log(page);
      
      getAllPage(page);
      setLoad(!load);
    }
  };

  const handleprev = () => {
    if (page > 1) {
      page--;
      console.log(page);

      getAllPage(page);
      setLoad(!load);
    }
  };

  useEffect(() => {    
    getAllPage(page);
  }, [load]);

  return (
    <div className='home-container'>
      {t('welcome')}
      <div className='button' onClick={() => handleprev()} style={{ border: "2px solid #333", cursor: "pointer" }}>
        Previous
      </div>
      {listFile.data.length !== 0 ? (
        listFile.data.map((item:any) => {
          return <a key={item._id} href={`http://localhost:3000/${item.router}`}>{item.name}</a>;
        })
      ) : (
        <div>Loading folder...</div>
      )}
      <div className='button' onClick={() => handleNext()} style={{ border: "2px solid #333", cursor: "pointer" }}>
        Next
      </div>

      <Link to='/create-page' style={{ background: "yellow", color: "black" }}>
        Tạo page
      </Link>
    </div>
  );
}

export default Home;
