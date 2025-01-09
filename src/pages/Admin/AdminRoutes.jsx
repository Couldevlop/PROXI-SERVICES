// AdminRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import DataTable from "./DataTable";

const slides = [
  {
    title: "Services de Nettoyage Professionnels",
    subtitle: "Solutions complètes pour particuliers et entreprises",
    image: "/cleaning-1.jpeg",
  },
  {
    title: "Nettoyage écologique",
    subtitle: "Des produits respectueux de l'environnement",
    image: "/cleaning-2.jpeg",
  },
  {
    title: "Nettoyage extérieur",
    subtitle: "Des produits respectueux de l'environnement",
    image: "/cleaning-3.jpeg",
  },
  {
    title: "Nettoyage résidentiel",
    subtitle: "Des produits respectueux de l'environnement",
    image: "/cleaning-4.png",
  },
  {
    title: "Laverie",
    subtitle: "Service de laverie professionnelle",
    image: "/laverie.jpeg",
  },
  {
    title: "Blanchisserie",
    subtitle:
      "Service de laverie professionnelleService de blanchisserie pour tout type de linge",
    image: "/blanchisserie.jpeg",
  },
  {
    title: "Pressing",
    subtitle: "Nettoyage à sec et entretien textile",
    image: "/pressing.jpeg",
  },
];

const services = [
  {
    id: 1,
    title: "Nettoyage Résidentiel",
    description: "Services complets pour votre maison",
    icon: "home",
    features: ["Ménage complet", "Nettoyage des vitres", "Entretien des sols"],
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

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="reservation" element={<div>Réservations</div>} />
        <Route path="statistiques" element={<div>Statistiques</div>} />
        <Route path="administration">
          <Route
            path="slides"
            element={<DataTable type="slides" data={slides} title="Slides" />}
          />
          <Route
            path="services"
            element={
              <DataTable type="services" data={services} title="Services" />
            }
          />
          <Route path="contact" element={<div>Contact</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
