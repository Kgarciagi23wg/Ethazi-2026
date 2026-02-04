import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [idioma, setIdioma] = useState("eu");

  // Cargar idioma guardado
  useEffect(() => {
    const guardado = localStorage.getItem("idioma");
    if (guardado) setIdioma(guardado);
  }, []);

  // Guardar idioma
  useEffect(() => {
    localStorage.setItem("idioma", idioma);
  }, [idioma]);

  return (
    <LanguageContext.Provider value={{ idioma, setIdioma }}>
      {children}
    </LanguageContext.Provider>
  );
}
