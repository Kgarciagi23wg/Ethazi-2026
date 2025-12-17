import React from "react";
import Header from "./components/Header.jsx";
import NavbarSecondary from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <NavbarSecondary />

      <main className="flex-grow-1">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
