import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Home } from "lucide-react";

// Ajout d'une prop par défaut pour éviter l'erreur undefined
const defaultService = {
  title: "Service",
  description: "Description du service",
  icon: <Home className="w-8 h-8 text-blue-600" />,
  features: ["Caractéristique 1", "Caractéristique 2", "Caractéristique 3"],
};

export default function ServiceDetail3D({ service = defaultService }) {
  // Vérification supplémentaire pour s'assurer que service existe
  if (!service) {
    return <div>Chargement...</div>;
  }

  return (
    <motion.div
      className="service-detail-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-blue-600">{service.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800">
                {service.title}
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">{service.description}</p>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="feature-list"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <h3 className="text-xl font-semibold mb-4">Caractéristiques</h3>
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 mb-3"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="pricing-section"
                initial={{ opacity: 0, rotateY: -30 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Tarifs</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Tarif horaire</span>
                      <span className="font-semibold">À partir de 35€/h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Forfait journée</span>
                      <span className="font-semibold">À partir de 250€</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Contrat mensuel</span>
                      <span className="font-semibold">Sur devis</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Demander un devis
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
