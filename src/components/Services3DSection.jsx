import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  TreePine,
  Car,
  Sparkles,
  Building,
  WashingMachine,
  Shirt,
  Wrench,
  X,
} from "lucide-react";

const Services3DSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
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
      id: 2,
      title: "Nettoyage de Bureaux",
      description: "Solutions professionnelles pour entreprises",
      icon: "building2",
      features: ["Espaces communs", "Postes de travail", "Sanitaires"],
      detailedDescription: `Nous proposons des services de nettoyage professionnel pour bureaux adaptés aux entreprises de toute taille. Notre approche comprend :

      • Nettoyage quotidien des espaces de travail
      • Désinfection régulière des points de contact
      • Entretien des sols et moquettes
      • Nettoyage des vitres et surfaces vitrées
      • Service sur mesure selon vos horaires d'activité`,
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

  const getIcon = (iconName) => {
    switch (iconName) {
      case "home":
        return <Home className="w-12 h-12 text-blue-600" />;
      case "building2":
        return <Building2 className="w-12 h-12 text-blue-600" />;
      case "treePine":
        return <TreePine className="w-12 h-12 text-blue-600" />;
      case "car":
        return <Car className="w-12 h-12 text-blue-600" />;
      case "sparkles":
        return <Sparkles className="w-12 h-12 text-blue-600" />;
      case "building":
        return <Building className="w-12 h-12 text-blue-600" />;
      case "washingMachine":
        return <WashingMachine className="w-12 h-12 text-blue-600" />;
      case "shirt":
        return <Shirt className="w-12 h-12 text-blue-600" />;
      case "wrench":
        return <Wrench className="w-12 h-12 text-blue-600" />;
      default:
        return null;
    }
  };

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600">
            Des solutions de nettoyage adaptées à tous vos besoins
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative perspective"
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg transform-gpu transition-all duration-300 h-full"
                animate={{
                  rotateX: hoveredService === service.id ? 10 : 0,
                  rotateY: hoveredService === service.id ? 10 : 0,
                  z: hoveredService === service.id ? 50 : 0,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="transform-gpu -translate-z-6">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mt-4">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    onClick={() => openModal(service)}
                  >
                    En savoir plus
                  </motion.button>
                </div>

                <AnimatePresence>
                  {hoveredService === service.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl pointer-events-none"
                      style={{
                        transform: "translateZ(20px)",
                      }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalOpen && selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
              onClick={() => setModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-center space-x-4 mb-6">
                  {getIcon(selectedService.icon)}
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selectedService.title}
                  </h3>
                </div>

                <div className="prose prose-blue max-w-none">
                  <p className="text-gray-600 whitespace-pre-line">
                    {selectedService.detailedDescription}
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Fermer
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services3DSection;
