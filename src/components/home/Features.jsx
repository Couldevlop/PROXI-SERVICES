import React from "react";

const features = [
  {
    title: "Équipements Modernes",
    description:
      "Nous utilisons des équipements de pointe pour un nettoyage efficace.",
  },
  {
    title: "Équipe Qualifiée",
    description:
      "Nos professionnels sont formés pour répondre à tous vos besoins.",
  },
  {
    title: "Respect de l'Environnement",
    description:
      "Nous utilisons des produits écologiques et respectueux de l'environnement.",
  },
  {
    title: "Disponible 24/7",
    description:
      "Nos services sont disponibles à tout moment, où que vous soyez.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Pourquoi Nous Choisir ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 shadow-lg rounded-lg text-center transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
