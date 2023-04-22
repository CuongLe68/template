import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./components/Page/Page";
import CreatePage from "./components/CreatePage/CreatePage";

function App() {
  const page = window.location.pathname
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-page" element={<CreatePage />} />
          <Route path={`${page}`} element={<Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
