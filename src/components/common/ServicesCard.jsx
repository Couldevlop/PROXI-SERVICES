// components/common/ServiceCard.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="service-card"
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        z: 50,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: "white",
        borderRadius: "15px",
        padding: "2rem",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
        perspective: "1000px",
      }}
    >
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="price">{price}</div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="quote-button"
      >
        Demander un devis
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
