import "./Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { Grid } from "../../_model/Grids";

var listFile:[] = []
var page = 1;
function Home() {
  const [load, setLoad] = useState(false);

  async function getAllPage(page:number) {
    const res = await axios.get(
      `http://localhost:8000/v1/products/allProduct/?sort=desc&limit&page=${page}&limitPage=2&sortBy`
    )
    //listFile = res.data.data;    
    //listFile = listFile[0];
    let data:Grid
    console.log(res.data);
    setLoad(true);
  }

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
    <div className="home-container">
      <div
        className="button"
        onClick={() => handleprev()}
        style={{ border: "2px solid #333", cursor: "pointer" }}
      >
        Previous
      </div>
      {listFile.length !== 0 ? (
        listFile.map((item) => {
          return (
            <a href={`http://localhost:3000/$item.router`}>
              item.name
            </a>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
      <div
        className="button"
        onClick={() => handleNext()}
        style={{ border: "2px solid #333", cursor: "pointer" }}
      >
        Next
      </div>

      <Link to='/create-page' style={{background: 'yellow', color: 'black'}}>Tạo page</Link>
    </div>
  );
}

export default Home;
