// DataTable.jsx
import React, { useState } from "react";

// Composant Modal réutilisable
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">{children}</div>
    </div>
  );
}

// Composant principal du tableau
function DataTable({ type, data, title }) {
  const [isModifyOpen, setIsModifyOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleModify = (item) => {
    setSelectedItem(item);
    setIsModifyOpen(true);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const handleAdd = () => {
    setIsAddOpen(true);
  };

  // Rendu conditionnel des champs de formulaire selon le type
  const renderFormFields = () => {
    if (type === "services") {
      return (
        <>
          <div>
            <label htmlFor="title" className="block mb-1">
              Titre
            </label>
            <input
              id="title"
              className="w-full border p-2 rounded"
              defaultValue={selectedItem?.title}
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-1">
              Description
            </label>
            <input
              id="description"
              className="w-full border p-2 rounded"
              defaultValue={selectedItem?.description}
            />
          </div>
          <div>
            <label htmlFor="icon" className="block mb-1">
              Icon
            </label>
            <input
              id="icon"
              className="w-full border p-2 rounded"
              defaultValue={selectedItem?.icon}
            />
          </div>
          <div>
            <label htmlFor="features" className="block mb-1">
              Features
            </label>
            <textarea
              id="features"
              className="w-full border p-2 rounded"
              defaultValue={selectedItem?.features?.join("\n")}
              rows={4}
            />
          </div>
        </>
      );
    } else if (type === "slides") {
      return (
        <>
          <div>
            <label htmlFor="title" className="block mb-1">
              Titre
            </label>
            <input
              id="title"
              className="w-full border p-2 rounded"
              defaultValue={selectedItem?.title}
            />
          </div>
          <div>
            <label htmlFor="subtitle" className="block mb-1">
              Sous-titre
            </label>
            <input
              id="subtitle"
              className="w-full border p-2 rounded"
              defaultValue={selectedItem?.subtitle}
            />
          </div>
          <div>
            <label htmlFor="image" className="block mb-1">
              Image
            </label>
            <input
              id="image"
              type="file"
              className="w-full border p-2 rounded"
              accept="image/*"
            />
          </div>
        </>
      );
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestion des {title}</h2>
        <button
          onClick={handleAdd}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Ajouter {type === "services" ? "un Service" : "un Slide"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              {type === "services" ? (
                <>
                  <th className="py-3 px-4 text-left">Titre</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Icon</th>
                  <th className="py-3 px-4 text-left">Features</th>
                </>
              ) : (
                <>
                  <th className="py-3 px-4 text-left">Titre</th>
                  <th className="py-3 px-4 text-left">Sous-titre</th>
                  <th className="py-3 px-4 text-left">Image</th>
                </>
              )}
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                {type === "services" ? (
                  <>
                    <td className="py-3 px-4">{item.title}</td>
                    <td className="py-3 px-4">{item.description}</td>
                    <td className="py-3 px-4">{item.icon}</td>
                    <td className="py-3 px-4">
                      <ul className="list-disc list-inside">
                        {item.features?.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-3 px-4">{item.title}</td>
                    <td className="py-3 px-4">{item.subtitle}</td>
                    <td className="py-3 px-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                    </td>
                  </>
                )}
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleModify(item)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mr-2"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal d'ajout */}
      <Modal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)}>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-4">
            Ajouter {type === "services" ? "un service" : "un slide"}
          </h3>
          <div className="space-y-4">{renderFormFields()}</div>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => setIsAddOpen(false)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Annuler
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Ajouter
          </button>
        </div>
      </Modal>

      {/* Modal de modification */}
      <Modal isOpen={isModifyOpen} onClose={() => setIsModifyOpen(false)}>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-4">
            Modifier {type === "services" ? "le service" : "le slide"}
          </h3>
          <div className="space-y-4">{renderFormFields()}</div>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => setIsModifyOpen(false)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Annuler
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Modifier
          </button>
        </div>
      </Modal>

      {/* Modal de suppression */}
      <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <div className="text-center">
          <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-12 h-12 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <p className="mb-6">
            Vous êtes sur le point de supprimer définitivement{" "}
            <span className="font-bold">{selectedItem?.title}</span>.
            <br />
            Voulez-vous le supprimer ?
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setIsDeleteOpen(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Annuler
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Supprimer
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DataTable;
