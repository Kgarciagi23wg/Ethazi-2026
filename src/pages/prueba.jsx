 "./pages/Berriak";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import NavbarSecondary from "./components/Navbar.jsx";

import { useAuth } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const { user } = useAuth();

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header />

        {/* Mostrar navbar solo si hay sesión */}
        {user && <NavbarSecondary />}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/kontaktua" element={<Kontaktua />} />
          <Route path="/laliga" element={<Laliga />} />
          <Route path="/premier" element={<Premier />} />
          <Route path="/bundesliga" element={<Bundesliga />} />
          <Route path="/serieA" element={<SerieA />} />
          <Route path="/ligue1" element={<Ligue1 />} />
          <Route path="/erregistroa" element={<Erregistroa />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/predikzioa" element={<Predikzioa />} />
          <Route path="/berriak" element={<Berriak />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;