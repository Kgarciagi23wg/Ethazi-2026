import React, { createContext, useContext, useEffect, useState } from "react";

// 1️⃣ Crear el contexto
const AuthContext = createContext();

// 2️⃣ Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 3️⃣ Cargar usuario desde localStorage al iniciar la app
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 4️⃣ Login (guardar usuario)
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // 5️⃣ Logout (borrar usuario)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 6️⃣ Hook personalizado
export const useAuth = () => {
  return useContext(AuthContext);
};

	
