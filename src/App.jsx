import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Kontaktua from "./pages/Kontaktua";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Laliga from "./pages/Laliga";
import Premier from "./pages/Premier";
import Bundesliga from "./pages/Bundesliga.jsx";
import SerieA from "./pages/SerieA.jsx";
import Ligue1 from "./pages/Ligue1.jsx";
import Predikzioa from "./pages/Predikzioa.jsx";
import Erregistroa from "./pages/Erregistroa";


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        
        <Route path="/" element={<Main />} />
        <Route path="/kontaktua" element={<Kontaktua />} />
        <Route path="/laliga" element={<Laliga />} />
        <Route path="/premier" element={<Premier />} />
        <Route path="/bundesliga" element={<Bundesliga />} />
        <Route path="/serieA" element={<SerieA />} />
        <Route path="/ligue1" element={<Ligue1 />} />
        <Route path="/erregistroa" element={<Erregistroa />} />
        <Route path="/predikzioa" element={<Predikzioa />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
