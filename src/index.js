import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/details/:id" element={<Details />}></Route>
    </Routes>
  </BrowserRouter>
);

