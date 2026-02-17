import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Testuinguruak
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Orriak
import Main from "./pages/Main.jsx";
import Kontaktua from "./pages/Kontaktua.jsx";
import Laliga from "./pages/Laliga.jsx";
import Premier from "./pages/Premier.jsx";
import Bundesliga from "./pages/Bundesliga.jsx";
import SerieA from "./pages/SerieA.jsx";
import Ligue1 from "./pages/Ligue1.jsx";
import Predikzioa from "./pages/Predikzioa.jsx";
import Erregistroa from "./pages/Erregistroa.jsx";
import Berriak from "./pages/Berriak.jsx";
import Panela from "./pages/Panela.jsx";
import PartiduakLaLiga from "./pages/PartiduakLaLiga.jsx";
import Perfil from "./pages/Perfil.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import EstadisticasPartido from "./pages/EstadisticasPartido.jsx";

// Konponenteak
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import NavbarSecondary from "./components/Navbar.jsx";
import NavbarAdmin from "./components/NavbarAdmin.jsx";

function AppContent() {
  const { user } = useAuth();

  return (
    <>
      <Header />

      {user && (
        user.rol === "admin"
          ? <NavbarAdmin />
          : <NavbarSecondary />
      )}

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
        <Route path="/berriak" element={<Berriak />} />
        <Route path="/panela" element={<Panela />} />
        <Route path="/partiduakLaliga" element={<PartiduakLaLiga />} />
        <Route path="/perfil" element={<Perfil />} />

        <Route path="/admin" element={<AdminPanel />} />

        {/* PARTIDUAREN ORRIA */}
        <Route path="/partida/:local/:visitante" element={<EstadisticasPartido />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
