import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePage from './components/CreatePage/CreatePage';
import Page from './components/Page/Page';
import Home from './components/Home/Home';
import './assets/i18n/i18n';

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
