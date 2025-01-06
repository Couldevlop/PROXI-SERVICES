// ServiceTable.jsx
import React, { useState } from "react";

// Custom Modal Component
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">{children}</div>
    </div>
  );
}

function ServiceTable() {
  const [isModifyOpen, setIsModifyOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Nettoyage Résidentiel",
      description: "Services complets pour votre maison",
      icon: "home",
      features: [
        "Ménage complet",
        "Nettoyage des vitres",
        "Entretien des sols",
      ],
      detailedDescription: `Notre service de nettoyage résidentiel offre une solution complète pour maintenir votre maison impeccable. Nos équipes professionnelles utilisent des produits de haute qualité et des techniques éprouvées pour :

      • Un nettoyage en profondeur de toutes les pièces
      • Une attention particulière aux zones sensibles comme la cuisine et les salles de bain
      • Un service personnalisé selon vos besoins spécifiques
      • Des interventions régulières ou ponctuelles selon vos préférences
      • Une équipe formée et respectueuse de votre espace de vie`,
    },
    {
      id: 3,
      title: "Entretien Extérieur",
      description: "Jardins et espaces verts",
      icon: "treePine",
      features: ["Tonte de pelouse", "Taille de haies", "Nettoyage terrasses"],
      detailedDescription: `Notre service d'entretien extérieur assure la beauté et la propreté de vos espaces verts. Nous prenons en charge :

      • L'entretien régulier des pelouses et jardins
      • La taille professionnelle des haies et arbustes
      • Le nettoyage haute pression des terrasses et allées
      • L'évacuation des déchets verts
      • L'entretien saisonnier adapté`,
    },
    {
      id: 4,
      title: "Nettoyage Automobile",
      description: "Service détaillé pour véhicules",
      icon: "car",
      features: ["Intérieur", "Extérieur", "Traitement céramique"],
      detailedDescription: `Notre service de nettoyage automobile offre un traitement complet pour votre véhicule :

      • Nettoyage extérieur avec produits professionnels
      • Nettoyage intérieur approfondi
      • Traitement céramique pour une protection durable
      • Détailing complet sur demande
      • Protection des surfaces et matériaux`,
    },
    {
      id: 5,
      title: "Services Spécialisés",
      description: "Traitements spécifiques",
      icon: "sparkles",
      features: ["Désinfection", "Traitement moisissures", "Détartrage"],
      detailedDescription: `Nos services spécialisés répondent aux besoins spécifiques de traitement :

      • Désinfection professionnelle des locaux
      • Traitement anti-moisissures et assainissement
      • Détartrage professionnel
      • Solutions sur mesure pour problèmes spécifiques
      • Utilisation de produits professionnels certifiés`,
    },
    {
      id: 6,
      title: "Nettoyage Commercial",
      description: "Pour commerces et industries",
      icon: "building",
      features: ["Grandes surfaces", "Vitrines", "Entrepôts"],
      detailedDescription: `Notre service de nettoyage commercial s'adapte aux besoins des commerces et industries :

      • Nettoyage des grandes surfaces commerciales
      • Entretien des vitrines et façades
      • Nettoyage industriel d'entrepôts
      • Services adaptés aux horaires commerciaux
      • Solutions pour tous types d'établissements`,
    },
    {
      id: 7,
      title: "Laverie",
      description: "Service de laverie professionnelle",
      icon: "washingMachine",
      features: [
        "Machines grandes capacités",
        "Séchage rapide",
        "Lessive incluse",
      ],
      detailedDescription: `Nos machines de laverie professionnelle sont parfaites pour un lavage rapide et efficace, adaptées à tous les besoins.`,
    },
    {
      id: 8,
      title: "Blanchisserie",
      description: "Service de blanchisserie pour tout type de linge",
      icon: "shirt",
      features: ["Traitement délicat", "Service hôtelier", "Anti-taches"],
      detailedDescription: `Notre blanchisserie propose un traitement personnalisé pour tous types de textiles, des vêtements délicats aux draps.`,
    },
    {
      id: 9,
      title: "Pressing",
      description: "Nettoyage à sec et entretien textile",
      icon: "iron",
      features: ["Nettoyage à sec", "Repassage", "Détachage expert"],
      detailedDescription: `Notre pressing offre un service de nettoyage à sec professionnel et de haute qualité pour vos vêtements précieux.`,
    },
  ];

  const handleModify = (service) => {
    setSelectedService(service);
    setIsModifyOpen(true);
  };

  const handleDelete = (service) => {
    setSelectedService(service);
    setIsDeleteOpen(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Gestion des Services</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Titre</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Icon</th>
              <th className="py-3 px-4 text-left">Features</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{service.title}</td>
                <td className="py-3 px-4">{service.description}</td>
                <td className="py-3 px-4">{service.icon}</td>
                <td className="py-3 px-4">
                  <ul className="list-disc list-inside">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleModify(service)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mr-2"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(service)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de modification */}
      <Modal isOpen={isModifyOpen} onClose={() => setIsModifyOpen(false)}>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-4">Modifier le service</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block mb-1">
                Titre
              </label>
              <input
                id="title"
                className="w-full border p-2 rounded"
                defaultValue={selectedService?.title}
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1">
                Description
              </label>
              <input
                id="description"
                className="w-full border p-2 rounded"
                defaultValue={selectedService?.description}
              />
            </div>
            <div>
              <label htmlFor="icon" className="block mb-1">
                Icon
              </label>
              <input
                id="icon"
                className="w-full border p-2 rounded"
                defaultValue={selectedService?.icon}
              />
            </div>
            <div>
              <label htmlFor="features" className="block mb-1">
                Features
              </label>
              <textarea
                id="features"
                className="w-full border p-2 rounded"
                defaultValue={selectedService?.features.join("\n")}
                rows={4}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => setIsModifyOpen(false)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Annuler
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Modifier
          </button>
        </div>
      </Modal>

      {/* Modal de suppression */}
      <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <div className="text-center">
          <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-12 h-12 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <p className="mb-6">
            Vous êtes sur le point de supprimer définitivement{" "}
            <span className="font-bold">{selectedService?.title}</span>.
            <br />
            Voulez-vous le supprimer ?
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setIsDeleteOpen(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Annuler
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Supprimer
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ServiceTable;
