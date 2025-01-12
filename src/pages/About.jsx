import React from "react";
import "./About.css"; // Pour les styles CSS

export default function About() {
  const services = [
    {
      title: "Laverie",
      description: "Confiez-nous votre linge délicat ou volumineux.",
      image: "/laverie.jpeg",
    },
    {
      title: "Blanchisserie",
      description: "Un linge de maison impeccable à chaque fois.",
      image: "/blanchisserie.jpeg",
    },
    {
      title: "Pressing",
      description: "Vos vêtements comme neufs grâce à notre savoir-faire.",
      image: "pressing.jpeg",
    },
    {
      title: "Entretien/Néttoyage",
      description:
        "Nous nous occupons de vos la proprété de vos locaux(particulier ou entreprise).",
      image: "entretien.jpeg",
    },

    /* {
      title: "Néttoyage",
      description:
        "Nous nous occupons de vos la proprété de vos locaux(particulier ou entreprise).",
      image: "nettoyage.jpeg",
    }, */
  ];

  return (
    <div className="about mt-16">
      <h1>À propos de Proxi Services</h1>
      <p>
        Proxi Services est votre partenaire de confiance pour tous vos besoins
        en matière de lavage, de blanchisserie et de pressing. Nous proposons
        des services de qualité pour les particuliers et les professionnels.
      </p>
      <div className="services">
        {services.map((service) => (
          <div key={service.title} className="service">
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="advantages">
        <h2>Pourquoi choisir Proxi Services ?</h2>
        <ul>
          <li>Un service rapide et efficace</li>
          <li>Des produits de qualité pour un linge impeccable</li>
          <li>Un personnel qualifié et à votre écoute</li>
          <li>Des tarifs compétitifs</li>
        </ul>
      </div>
    </div>
  );
}
