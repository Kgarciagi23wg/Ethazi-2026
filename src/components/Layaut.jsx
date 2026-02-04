import React from "react";
import { useAuth } from "../context/AuthContext";
import NavbarSecondary from "./NavbarSecondary";
import NavbarAdmin from "./NavbarAdmin";

export default function Layout({ children }) {
  const { user } = useAuth();

  return (
    <>
      {user?.rol === "admin" ? <NavbarAdmin /> : <NavbarSecondary />}
      {children}
    </>
  );
}
