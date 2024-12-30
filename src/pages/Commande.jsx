import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Commande = () => {
  const [activeMenu, setActiveMenu] = useState("Nettoyage");
  const [popupData, setPopupData] = useState(null);

  const menus = {
    Nettoyage: [
      "Intérieur",
      "Extérieur",
      "Automobile",
      "Spécialisé",
      "Commercial",
    ],
    Pressing: [],
  };

  const openPopup = (menuType) => {
    setPopupData(menuType);
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Partie gauche : Menu */}
      <div className="bg-blue-600 text-white w-full lg:w-1/4 p-6 mt-20">
        {/* <h2 className="text-2xl font-bold mb-4">Services</h2> */}
        <ul className="space-y-4">
          {Object.keys(menus).map((menu) => (
            <li
              key={menu}
              className={`cursor-pointer text-lg ${
                activeMenu === menu ? "font-bold text-yellow-400" : ""
              }`}
              onClick={() => setActiveMenu(menu)}
            >
              {menu}
            </li>
          ))}
        </ul>
      </div>

      {/* Partie droite : Contenu */}
      <div className="flex-1 p-6 bg-gray-100 mt-20">
        <h3 className="text-xl font-semibold mb-4">{activeMenu}</h3>
        <div className="flex flex-wrap gap-4">
          {menus[activeMenu].map((menuItem) => (
            <button
              key={menuItem}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => openPopup(menuItem)}
            >
              {menuItem}
            </button>
          ))}
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {popupData && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h4 className="text-xl font-semibold mb-4">
                Formulaire pour {popupData}
              </h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Ville
                    </label>
                    <select className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm">
                      <option value="">Choisir une ville</option>
                      <option>Abidjan</option>
                      <option>Yamoussoukro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Quartier
                    </label>
                    <select className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm">
                      <option value="">Choisir un quartier</option>
                      <option>Cocody</option>
                      <option>Marcory</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                    />
                  </div>
                </div>
                {(popupData === "Intérieur" || popupData === "Commercial") && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nombre de pièces
                      </label>
                      <select className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm">
                        <option value="">Sélectionner</option>
                        <option>1 pièce</option>
                        <option>2 pièces</option>
                        <option>3 pièces</option>
                        <option>4 pièces</option>
                        <option>5 pièces</option>
                      </select>
                    </div>
                    {popupData === "Commercial" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Superficie (m²)
                        </label>
                        <input
                          type="number"
                          className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                        />
                      </div>
                    )}
                  </>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Commentaire
                  </label>
                  <textarea
                    maxLength={1500}
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                    onClick={closePopup}
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Soumettre
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Commande;
