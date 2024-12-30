import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dupont",
      role: "Responsable Marketing",
      company: "Entreprise XYZ",
      feedback:
        "Un service impeccable ! L'équipe a dépassé mes attentes en termes de qualité et d'attention aux détails. Je recommande vivement.",
      image: "../avatars/avatar-1.jpeg",
    },
    {
      id: 2,
      name: "Jean Martin",
      role: "Propriétaire",
      company: "Café du Coin",
      feedback:
        "Grâce à leur professionnalisme, nos locaux sont toujours parfaitement propres. Leur service est fiable et flexible.",
      image: "../avatars/avatar-2.jpeg",
    },
    {
      id: 3,
      name: "Claire Bernard",
      role: "Chef de Projet",
      company: "TechNova",
      feedback:
        "Leur équipe est formidable ! Ils ont transformé nos bureaux en un environnement propre et sain, parfait pour la productivité.",
      image: "../avatars/avatar-3.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez comment nous avons fait la différence pour nos clients.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500">{testimonial.role}</p>
                <p className="text-gray-500 italic">{testimonial.company}</p>
                <p className="text-lg text-gray-700 mt-4">
                  “{testimonial.feedback}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
