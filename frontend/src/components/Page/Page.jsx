import axios from "axios";
import { useEffect, useState } from "react";
import "./Page.scss";

function Page() {
  const [file, setFile] = useState();
  const page = window.location.pathname;

  useEffect(() => {
    async function handlePage() {
      const res = await axios.get(
        `http://localhost:8000/v1/products/get-page${page}`
      );
      setFile(res.data);
    }

    handlePage();

    if (file) {
      document.querySelector(".content").innerHTML = file;
    } else {
      document.querySelector(".content").innerHTML = "";
    }
    // eslint-disable-next-line
  }, [file]);

  return (
    <div className="page-container">
      {!file ? (
        <div className="content">loading...</div>
      ) : (
        <div>
          <div className="content"></div>
          <div className="page-container-header">
            <a href="http://localhost:3000/fake">Home</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
