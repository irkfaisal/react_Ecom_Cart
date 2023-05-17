import React from "react";
import "./App.css";
import Header from "./Componenets/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Componenets/Home/Home";
import Cart from "./Componenets/Cart";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App;
