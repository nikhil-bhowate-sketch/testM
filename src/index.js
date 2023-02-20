import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signin from './Pages/Signin';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import Details from './Pages/MovieDetails';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='details' element={<Details/>}></Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
