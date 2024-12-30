import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceDetail3D from "../components/ServiceDetail3D";
import {
  Home,
  Building2,
  TreePine,
  Sparkles,
  Building,
  Droplets,
  WashingMachine,
  // Wrench,
  Settings,
  Shirt,
  //Shell,
} from "lucide-react";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Nettoyage Résidentiel",
      description:
        "Un service complet de nettoyage pour votre maison, assurant un environnement propre et sain pour votre famille",
      icon: <Home className="w-12 h-12 text-blue-600" />,
      features: [
        "Nettoyage complet des pièces à vivre",
        "Désinfection des salles de bains",
        "Entretien des sols et surfaces",
        "Dépoussiérage et aspiration",
        "Nettoyage des vitres intérieures",
        "Traitement anti-acariens",
      ],
    },
    {
      id: 2,
      title: "Nettoyage de Bureaux",
      description:
        "Solutions professionnelles pour maintenir vos espaces de travail propres et productifs",
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      features: [
        "Nettoyage quotidien des espaces de travail",
        "Entretien des zones communes",
        "Désinfection des points de contact",
        "Nettoyage des sanitaires",
        "Gestion des déchets",
        "Service sur mesure 7j/7",
      ],
    },
    {
      id: 3,
      title: "Entretien Extérieur",
      description:
        "Services complets pour l'entretien de vos espaces extérieurs et jardins",
      icon: <TreePine className="w-12 h-12 text-blue-600" />,
      features: [
        "Tonte de pelouse et débroussaillage",
        "Taille de haies et arbustes",
        "Nettoyage des terrasses",
        "Entretien des allées",
        "Ramassage des feuilles",
        "Traitement écologique",
      ],
    },
    {
      id: 4,
      title: "Nettoyage des Vitres",
      description:
        "Service professionnel de nettoyage des vitres pour une transparence parfaite",
      icon: <Droplets className="w-12 h-12 text-blue-600" />,
      features: [
        "Vitres intérieures et extérieures",
        "Nettoyage des encadrements",
        "Traitement anti-traces",
        "Accès nacelle disponible",
        "Nettoyage des vérandas",
        "Protection contre la pollution",
      ],
    },
    {
      id: 5,
      title: "Services Spécialisés",
      description: "Traitements spécifiques pour des besoins particuliers",
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      features: [
        "Désinfection COVID-19",
        "Traitement anti-punaises",
        "Nettoyage après sinistre",
        "Décontamination",
        "Traitement des moisissures",
        "Purification de l'air",
      ],
    },
    {
      id: 6,
      title: "Nettoyage Commercial",
      description: "Solutions adaptées aux commerces et grandes surfaces",
      icon: <Building className="w-12 h-12 text-blue-600" />,
      features: [
        "Nettoyage des surfaces de vente",
        "Entretien des vitrines",
        "Nettoyage des sols",
        "Maintenance quotidienne",
        "Service hors horaires",
        "Équipe dédiée",
      ],
    },
    {
      id: 7,
      title: "Laverie",
      description:
        "Service de laverie automatique professionnel avec équipements modernes",
      icon: <WashingMachine className="w-12 h-12 text-blue-600" />,
      features: [
        "Machines à laver grande capacité",
        "Séchage rapide et efficace",
        "Lessive professionnelle incluse",
        "Service express disponible",
        "Machines écologiques",
        "Paiement flexible",
      ],
    },
    {
      id: 8,
      title: "Blanchisserie",
      description:
        "Service de blanchisserie professionnel pour tous types de linges",
      icon: <Shirt className="w-12 h-12 text-blue-600" />,
      features: [
        "Traitement du linge délicat",
        "Service pour professionnels",
        "Blanchisserie hôtelière",
        "Livraison possible",
        "Traitement anti-taches",
        "Service personnalisé",
      ],
    },
    {
      id: 9,
      title: "Pressing",
      description:
        "Service de pressing haute qualité pour vos vêtements précieux",
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      features: [
        "Nettoyage à sec professionnel",
        "Repassage haute qualité",
        "Traitement des vêtements délicats",
        "Détachage expert",
        "Service urgence disponible",
        "Conseil en entretien textile",
      ],
    },
  ];

  console.log("Nombre total de services:", services.length);
  console.log(
    "Liste des services:",
    services.map((s) => s.title)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {!selectedService ? (
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Nos Services de Nettoyage Professionnels
            </h1>
            <p className="text-xl text-gray-600">
              Des solutions adaptées à tous vos besoins avec une touche
              d'innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {console.log("Début du mapping des services")}
            {services.map((service) => {
              console.log("Rendu du service:", service.title);
              return (
                <motion.div
                  key={service.id}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="transform-gpu hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {service.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        Voir les détails
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed top-4 left-4 z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(null)}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                ← Retour aux services
              </motion.button>
            </div>
            <ServiceDetail3D service={selectedService} />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Service;
