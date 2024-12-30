import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
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

  return (
    <>
      {/* Ce div permet de créer un espace pour que le contenu commence sous le header fixe */}
      <div className="h-16" />{" "}
      {/* Ajustez cette hauteur selon celle de votre header */}
      <div className="hero-section relative w-full h-[calc(100vh-4rem)]">
        <Swiper
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                  >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-8">
                      {slide.subtitle}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-blue-600 text-white rounded-lg 
                               hover:bg-blue-700 transition-colors duration-300
                               text-lg font-semibold"
                    >
                      Nos Services
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .my-custom-height {
          height: 50vh;
        }
        body {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }
        .hero-section {
          position: relative;
          margin-top: 2rem; /* Ajustez la valeur en fonction de la hauteur du header */
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          opacity: 1;
        }

        .hero-section .swiper-container {
          width: 100%;
          height: 100%;
        }

        .hero-section .swiper-slide {
          width: 100%;
          height: 100%;
        }

        /* Assure que la navigation du Swiper reste dans les limites du composant */
        .hero-section .swiper-button-prev,
        .hero-section .swiper-button-next {
          top: 50%;
          transform: translateY(-50%);
        }

        .hero-section .swiper-pagination {
          bottom: 2rem !important;
        }
      `}</style>
    </>
  );
};

export default Hero;
