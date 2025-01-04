import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Utilisez ceci pour détecter la route actuelle

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Vérifiez si la route active est "/commande"
  const isCommandePage = location.pathname === "/commande";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled && !isCommandePage ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`container mx-auto px-4 py-4 ${
          isScrolled && !isCommandePage ? "py-2" : "py-4"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center">
            <img
              src="logo.svg"
              alt="Logo"
              className="h-2 w-auto" // Augmentez la hauteur ici
              style={{
                maxWidth: "27%",
                maxHeight: "12%",
                height: "auto",
                marginLeft: "-70%",
                marginTop: "-2%",
              }}
            />
          </Link>

          {/* Si on n'est pas sur la page Commande, affichez le menu */}
          {!isCommandePage && (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600">
                  Accueil
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600">
                  À Propos
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Contact
                </Link>
                <Link to="/commande">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Nous Soliciter
                  </button>
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-gray-700"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && !isCommandePage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600"
                >
                  Accueil
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600"
                >
                  À Propos
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600"
                >
                  Contact
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Devis Gratuit
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
