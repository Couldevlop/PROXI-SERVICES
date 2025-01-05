import React, { useState } from "react";

function Services() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Nettoyage Résidentiel",
      description: "Services complets pour votre maison",
    },
    // Ajoutez les autres services ici
  ]);

  const handleAdd = () => {
    setServices([...services, { id: Date.now(), title: "", description: "" }]);
  };

  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const handleChange = (id, field, value) => {
    const updatedServices = services.map((service) =>
      service.id === id ? { ...service, [field]: value } : service
    );
    setServices(updatedServices);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Gestion des Services</h2>
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded-md mb-4"
      >
        Ajouter un Service
      </button>
      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="border p-4 rounded-md bg-gray-50 shadow"
          >
            <input
              type="text"
              value={service.title}
              onChange={(e) =>
                handleChange(service.id, "title", e.target.value)
              }
              placeholder="Titre"
              className="block w-full p-2 border rounded mb-2"
            />
            <textarea
              value={service.description}
              onChange={(e) =>
                handleChange(service.id, "description", e.target.value)
              }
              placeholder="Description"
              className="block w-full p-2 border rounded mb-2"
            />
            <button
              onClick={() => handleDelete(service.id)}
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

export default Services;
