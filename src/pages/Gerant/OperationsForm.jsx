import React, { useState } from "react";

function OperationsForm({ onAddOperation }) {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    contact: "",
    clientType: "Particulier",
    comments: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddComment = () => {
    setFormData({
      ...formData,
      comments: [
        ...formData.comments,
        { type: "", quantity: "", color: "", prix: "", description: "" },
      ],
    });
  };

  const handleCommentChange = (index, field, value) => {
    const updatedComments = formData.comments.map((comment, i) =>
      i === index ? { ...comment, [field]: value } : comment
    );
    setFormData({ ...formData, comments: updatedComments });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddOperation(formData);
    setFormData({
      name: "",
      lastname: "",
      contact: "",
      clientType: "Particulier",
      comments: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Formulaire d'Opérations</h2>
      {/* Informations du client */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Prénom</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Contact</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Type de Client</label>
          <select
            name="clientType"
            value={formData.clientType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Particulier">Particulier</option>
            <option value="Entreprise">Entreprise</option>
          </select>
        </div>
      </div>

      {/* Commentaires */}
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Commentaires</h3>
        {formData.comments.map((comment, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 border p-4 rounded"
          >
            <div>
              <label className="block mb-2">Type d'Habit</label>
              <select
                value={comment.type}
                onChange={(e) =>
                  handleCommentChange(index, "type", e.target.value)
                }
                className="w-full p-2 border rounded"
              >
                <option value="">Sélectionner</option>
                <option value="Tee-shirt">Tee-shirt</option>
                <option value="Pantalon simple">Pantalon simple</option>
                <option value="Jean homme">Jean homme</option>
                <option value="Jean femme">Jean femme</option>
                <option value="Robe">Robe</option>
                <option value="Pagnes">Pagnes</option>
                <option value="Draps">Draps</option>
                <option value="Serviettes">Serviettes</option>
                <option value="Complet pagne">Complet pagne</option>
                <option value="Costume">Costume</option>
                <option value="Coyette">Coyette</option>
                <option value="Autres">Autres</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Quantité</label>
              <input
                type="number"
                value={comment.quantity}
                onChange={(e) =>
                  handleCommentChange(index, "quantity", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Couleur</label>
              <input
                type="text"
                value={comment.color}
                onChange={(e) =>
                  handleCommentChange(index, "color", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Prix</label>
              <input
                type="number"
                value={comment.prix}
                onChange={(e) =>
                  handleCommentChange(index, "prix", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Description</label>
              <textarea
                value={comment.description}
                onChange={(e) =>
                  handleCommentChange(index, "description", e.target.value)
                }
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddComment}
          className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Ajouter un commentaire
        </button>
      </div>

      {/* Bouton Ajouter */}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Ajouter Opération
      </button>
    </form>
  );
}

export default OperationsForm;
