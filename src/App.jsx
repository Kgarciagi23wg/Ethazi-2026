// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Kontaktua from "./pages/Kontaktua";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        
        <Route path="/" element={<Main />} />
        <Route path="/kontaktua" element={<Kontaktua />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
