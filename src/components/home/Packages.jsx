import React from "react";

const packages = [
  {
    name: "Basique",
    price: "49€",
    features: ["Nettoyage des surfaces", "Dépoussiérage basique"],
  },
  {
    name: "Avancé",
    price: "99€",
    features: ["Tout du Basique", "Nettoyage en profondeur", "Fenêtres"],
  },
  {
    name: "Premium",
    price: "149€",
    features: ["Tout de l'Avancé", "Tapis et moquettes", "Désinfection"],
  },
];

const Packages = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Forfaits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-center mb-4">
                {pkg.name}
              </h3>
              <p className="text-center text-gray-600 text-4xl font-bold mb-4">
                {pkg.price}
              </p>
              <ul className="text-gray-600 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-center mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Demander un Devis
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
