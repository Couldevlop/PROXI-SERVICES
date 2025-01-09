import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { title: "Accueil", path: "/" },
    { title: "À Propos", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Vérification des pages où le menu doit être masqué
  const hideMenu =
    location.pathname === "/commande" ||
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/gerant");

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden lg:block bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6 w-4 h-4">
              {/* <a
                href="tel:+33123456789"
                className="flex items-center space-x-2 hover:text-blue-200"
              >
                <Phone className="w-4 h-4" />
                <span>+225 07 14 24 45 14</span>
              </a>
              <a
                href="mailto:info@proxiservice.com"
                className="flex items-center space-x-2 hover:text-blue-200"
              >
                <Mail className="w-4 h-4" />
                <span>info@proxiservices.com</span>
              </a> */}
            </div>
            <div className="flex items-center space-x-2">
              {/* <MapPin className="w-4 h-4" />
              <span>123 Rue du Nettoyage, BP 1078 Abidjan 01</span> */}
            </div>
          </div>
        </div>
      </div>
      {/* Logo Section */}
      <div
        className={`container mx-auto px-4 py-4 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="logo.svg"
              alt="Logo"
              className="h-8 w-auto"
              style={{
                maxWidth: "27%",
                maxHeight: "12%",
                height: "auto",
                marginTop: "-2%",
              }}
            />
          </Link>

          {/* Ne pas afficher le menu si on est sur les pages spécifiées */}
          {!hideMenu && (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setIsMenuOpen(item.title)}
                    onMouseLeave={() => setIsMenuOpen(null)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 
                          ${
                            location.pathname === item.path
                              ? "text-blue-600"
                              : ""
                          }`}
                    >
                      <span>{item.title}</span>
                      {item.subItems && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    {/* Dropdown Menu */}
                    {item.subItems && isMenuOpen === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 mt-2"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <Link to="/commande">
                  <button
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                          transition-colors duration-300"
                  >
                    Commander
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
      {!hideMenu && (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.title}>
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block text-gray-700 hover:text-blue-600 
                              ${
                                location.pathname === item.path
                                  ? "text-blue-600"
                                  : ""
                              }`}
                      >
                        {item.title}
                      </Link>
                      {item.subItems && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-gray-600 hover:text-blue-600"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
};

export default Header;
