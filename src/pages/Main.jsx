import React from "react";

import NavbarSecondary from "../components/Navbar.jsx";
import Home from "../components/Home.jsx";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <NavbarSecondary />

      <main className="flex-grow-1">
        <Home />
      </main>

    </div>
  );
}

export default App;
