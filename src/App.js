import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Commande from "./pages/Commande";
import AdminRoutes from "./pages/Admin/AdminRoutes"; // Import des routes Admin
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/global.css";
import GerantRoutes from "./pages/Gerant/GerantRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/commande" element={<Commande />} />
            </Routes>
            {/* Ajout des routes d'administration */}
            <AdminRoutes />
            <GerantRoutes />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
