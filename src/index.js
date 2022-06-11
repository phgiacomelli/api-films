import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Genre from './components/Genres';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/details/:id" element={<Details />}></Route>
      <Route path="/genero/:id" element={<Genre />}></Route>
    </Routes>
  </BrowserRouter>
);

