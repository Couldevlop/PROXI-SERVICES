import React, { useState } from "react";

function Slides() {
  const [slides, setSlides] = useState([
    {
      title: "Services de Nettoyage Professionnels",
      subtitle: "Solutions complètes pour particuliers et entreprises",
      image: "/cleaning-1.jpeg",
    },
    // Ajoutez les autres slides ici
  ]);

  const handleAdd = () => {
    setSlides([...slides, { title: "", subtitle: "", image: "" }]);
  };

  const handleDelete = (index) => {
    setSlides(slides.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updatedSlides = slides.map((slide, i) =>
      i === index ? { ...slide, [field]: value } : slide
    );
    setSlides(updatedSlides);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Gestion des Slides</h2>
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded-md mb-4"
      >
        Ajouter un Slide
      </button>
      <div className="space-y-4">
        {slides.map((slide, index) => (
          <div key={index} className="border p-4 rounded-md bg-gray-50 shadow">
            <input
              type="text"
              value={slide.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              placeholder="Titre"
              className="block w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              value={slide.subtitle}
              onChange={(e) => handleChange(index, "subtitle", e.target.value)}
              placeholder="Sous-titre"
              className="block w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              value={slide.image}
              onChange={(e) => handleChange(index, "image", e.target.value)}
              placeholder="Image URL"
              className="block w-full p-2 border rounded mb-2"
            />
            <button
              onClick={() => handleDelete(index)}
              className="px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slides;
