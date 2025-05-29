import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Predicaciones from "../components/Predicaciones";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Credo from "@/components/Credo";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Barra de navegación fija en la parte superior */}
      <NavBar />

      {/* Secciones de la página */}
      <Hero />
      <Credo />
      <Predicaciones />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Index;
