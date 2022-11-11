import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './components/detail/detail';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes> 
      <Route path="https://github.com/Dhruv218/Filis-Cattus.git" element={<App />} />
      <Route path="https://github.com/Dhruv218/Filis-Cattus.git/detail" element={<Detail />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
